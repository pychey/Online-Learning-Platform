import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto"

export async function POST(req) {
  const { email, password } = await req.json();

  const existing = await prisma.user.findFirst({ where: { email, emailVerified: true } });
  if (existing) return Response.json({ success: false, message: "អ៊ីមែលបានចុះឈ្មោះរួចហើយ សូមព្យាយាមម្តងទៀត" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { 
      email: email, 
      password: hashed 
    }
  });

  const otp = crypto.randomInt(100000, 1000000).toString();
  const expires = new Date(Date.now() + 5 * 60 * 1000);

  const hashedOtp = await bcrypt.hash(otp, 10);

  await prisma.otpToken.create({
    data: { 
      token: hashedOtp, 
      expiresAt: expires, 
      userId: user.id 
    }
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is: ${otp}`
  });

  return Response.json({ success: true, userId: user.id });
}
