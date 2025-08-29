import { NextResponse } from "next/server";
import { otpStore } from "@/data/otpStore.js";

export async function POST(req) {
  try {
    const { user_id, otp } = await req.json();

    if (!user_id || !otp) {
      return NextResponse.json({ success: false, message: "User ID and OTP required" }, { status: 400 });
    }

    const record = otpStore[user_id];

    if (!record) {
      return NextResponse.json({ success: false, message: "Invalid or expired OTP" });
    }

    // Check expiration
    if (Date.now() > record.expires) {
      delete otpStore[user_id];
      return NextResponse.json({ success: false, message: "OTP expired" });
    }

    if (record.otp !== otp) {
      return NextResponse.json({ success: false, message: "Invalid OTP" });
    }

    // OTP verified ✅ remove from memory
    delete otpStore[user_id];

    return NextResponse.json({
      success: true,
      message: "OTP verified ✅",
      user: { firstName: record.firstName, lastName: record.lastName, email: record.email, passwordHash: record.passwordHash },
    });

  } catch (err) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
