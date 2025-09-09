import { BakongKHQR, MerchantInfo, khqrData } from "bakong-khqr";
import crypto from "crypto";
import { khmerToEnglishNumber } from "@/lib/khmerToEnglishNumber";

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  let clean = priceStr.toString().replace("$", "").trim();
  clean = khmerToEnglishNumber(clean); 
  return parseFloat(clean) || 0;
}

export async function POST(req) {
  try {
    const { cart, formData, orderId } = await req.json();

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      throw new Error("Cart is empty");
    }


    const amount = cart.reduce((sum, c) => {
      return sum + parsePrice(c.discounted_price || c.price);
    }, 0);

    if (!amount || amount <= 0) {
      throw new Error("Invalid amount calculated");
    }

    const bankAccount = process.env.BAKONG_MERCHANT_ALIAS;
    const merchantId = process.env.BAKONG_MERCHANT_ID;
    const acquiringBank = process.env.BAKONG_BANK_BIC;

    const trxId = orderId || `TRX${Date.now()}`;

    const optionalData = {
      currency: khqrData.currency.usd,
      amount: amount.toFixed(2),       
      billNumber: trxId,
      storeLabel: "Thy Shop",
      terminalLabel: "WebQR",
      mobileNumber: "855716571558",
      merchantCategoryCode: "5999",
      expirationTimestamp: Date.now() + 5 * 60 * 1000,
    };

    const merchantInfo = new MerchantInfo(
      bankAccount,
      "Online Course",
      "Phnom Penh",
      merchantId,
      acquiringBank,
      optionalData
    );

    const khqr = new BakongKHQR();
    const result = khqr.generateMerchant(merchantInfo);

    const qrString = result?.data?.qr || null;
    if (!qrString) throw new Error("Failed to generate QR string");

    const md5 = crypto.createHash("md5").update(qrString).digest("hex");

    return new Response(
      JSON.stringify({
        success: true,
        trxId,
        amount: amount.toFixed(2), 
        qrString,
        md5,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Create KHQR error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
