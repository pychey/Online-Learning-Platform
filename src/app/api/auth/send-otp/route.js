import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, password } = await req.json();

  // Check if user exists
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return Response.json({ success: false, message: "Email already registered" }, { status: 400 });
  }

  // Hash password
  const hashed = await bcrypt.hash(password, 10);

  // Create user (not verified yet)
  const user = await prisma.user.create({
    data: { email, password: hashed }
  });

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expires = new Date(Date.now() + 5 * 60 * 1000);

  await prisma.otpToken.create({
    data: { token: otp, expiresAt: expires, userId: user.id }
  });

  // Send OTP email
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
