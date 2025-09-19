import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log('reached stage 1')
    const { qrString } = await req.json()
    console.log('reached stage 2')

    if (!qrString) {
      return new Response(
        JSON.stringify({ success: false, message: "qrString parameter is required" }),
        { status: 400 }
      );
    }
    console.log('reached stage 3')

    const md5 = crypto.createHash("md5").update(qrString).digest("hex");
    const apiUrl = "https://api-bakong.nbc.gov.kh/v1/check_transaction_by_md5";
    console.log('reached stage 4')

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.BAKONG_JWT_TOKEN}`,
      },
      body: JSON.stringify({ md5 }),
    });
    console.log('reached stage 5')

    console.log(response)

    const data = await response.json();

    let paid = false;
    let transaction = null;

    if (data?.responseCode === 0 && data?.data) {
      paid = true;
      transaction = data.data;
    }
    console.log('reached stage 6')

    return new NextResponse(
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
