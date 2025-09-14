import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export async function POST(req) {
  const { email, password } = await req.json();

  const existing = await prisma.user.findFirst({
    where: { email, emailVerified: true },
  });
  if (existing)
    return Response.json({
      success: false,
      message: 'អ៊ីមែលបានចុះឈ្មោះរួចហើយ សូមព្យាយាមម្តងទៀត',
    });

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashed,
    },
  });

  const otp = crypto.randomInt(100000, 1000000).toString();
  const expires = new Date(Date.now() + 5 * 60 * 1000);

  const hashedOtp = await bcrypt.hash(otp, 10);

  await prisma.otpToken.create({
    data: {
      token: hashedOtp,
      expiresAt: expires,
      userId: user.id,
    },
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

await transporter.sendMail({
  from: `"Sastra Authentication"`,
  to: email,
  subject: "លេខសម្ងាត់ OTP សម្រាប់គណនី Sastra",
  html: `
    <p style="color: #333">សួស្តី, លេខសម្ងាត់ OTP របស់អ្នកគឺ :</p>

    <div style="
      max-width: 150px;
      font-weight: bold;
      font-size: 20px;
      margin: 10px 0;
      padding: 10px 20px;
      border: 2px solid #4CAF50;
      background-color: #E8F5E9;
      border-radius: 5px;
      text-align: center;
      letter-spacing: 1.625px ;
    ">
      ${otp}
    </div>

    <p style="color: #333">សូមកុំចែករំលែកកូដនេះជាមួយអ្នកណា។</p>

  `
});

  return Response.json({ success: true, userId: user.id });
}
