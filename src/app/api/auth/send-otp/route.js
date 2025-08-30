import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import { otpStore } from '@/data/otpStore.js';

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userId = Date.now().toString();
    const otp = generateOTP();

    otpStore[userId] = { otp, firstName, lastName, email, passwordHash };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"MyApp Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Verify Your Email - OTP Code',
      text: `Hello ${firstName} ${lastName}, your OTP code is ${otp}. It expires in 10 minutes.`,
      html: `<h2>សូមបញ្ជាក់អ៊ីមែលរបស់អ្នក</h2>
         <p>Hello <strong>${firstName} ${lastName}</strong>,</p>
         <p>Your OTP code is: <strong>${otp}</strong></p>
         <p>It expires in 10 minutes.</p>`,
    });

    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully',
      user_id: userId,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: 'Server error: ' + err.message },
      { status: 500 }
    );
  }
}
