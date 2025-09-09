import crypto from "crypto";
import fetch from "node-fetch"; 

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const qrString = searchParams.get("qrString"); 

    if (!qrString) {
      return new Response(
        JSON.stringify({ success: false, message: "qrString parameter is required" }),
        { status: 400 }
      );
    }

    const md5 = crypto.createHash("md5").update(qrString).digest("hex");
    const apiUrl = "https://api-bakong.nbc.gov.kh/v1/check_transaction_by_md5";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.BAKONG_JWT_TOKEN}`,
      },
      body: JSON.stringify({ md5 }),
    });

    const data = await response.json();

    let paid = false;
    let transaction = null;

    if (data?.responseCode === 0 && data?.data) {
      paid = true;
      transaction = data.data;
    }

    return new Response(
      JSON.stringify({
        success: true,
        qrString,
        md5,
        paid,
        transaction,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Check KHQR status error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
