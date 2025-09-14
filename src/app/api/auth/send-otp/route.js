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
  from: `"Sastra Support Team" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "កូដ OTP សម្រាប់គណនី Sastra",
  text: `កូដបញ្ជាក់

សម្រាប់បញ្ជាក់គណនីរបស់អ្នក សូមបញ្ចូលកូដនេះក្នុង Sastra:

${otp}

កូដនេះមានសុពលភាព ៥ នាទី។ ប្រសិនបើអ្នកមិនបានស្នើសុំកូដនេះទេ សូមមិនអើពើនឹងអ៊ីមែលនេះ។

សារនេះត្រូវបានបង្កើតដោយស្វ័យប្រវត្តិ។
ក្រុមគាំទ្រ Sastra`,
  html: `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </head>
  <body style="font-family: Arial, Helvetica, sans-serif; background-color:#f6f7f8; margin:0; padding:24px;">
    <table role="presentation" width="100%" style="max-width:600px; margin:0 auto; background:#ffffff; border-collapse:collapse;">
      <tr>
        <td style="background:#f1f3f5; padding:18px 20px; border-bottom:1px solid #e0e0e0;">
          <h2 style="margin:0; font-size:18px; color:#222;">កូដបញ្ជាក់</h2>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <p style="margin:0 0 12px 0; color:#333; font-size:14px;">
            សម្រាប់បញ្ជាក់គណនីរបស់អ្នក សូមបញ្ចូលកូដ OTP ខាងក្រោម៖
          </p>

          <p style="margin:14px 0; font-weight:700; font-size:20px; letter-spacing:2px; color:#111;">
            ${otp}
          </p>

          <p style="margin:18px 0 0 0; color:#666; font-size:13px;">
            កូដនេះមានសុពលភាព <strong>៥ នាទី</strong> ប៉ុណ្ណោះ។ ប្រសិនបើអ្នកមិនបានស្នើសុំកូដនេះទេ សូមមិនអើពើនឹងអ៊ីមែលនេះ។
          </p>

          <hr style="border:none; border-top:1px solid #ececec; margin:20px 0;" />

          <p style="margin:0; color:#999; font-size:12px;">
            សារនេះត្រូវបានបង្កើតដោយស្វ័យប្រវត្តិ។<br/>
            ក្រុមគាំទ្រ Sastra
          </p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `
});


  return Response.json({ success: true, userId: user.id });
}
