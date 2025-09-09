import prisma from "@/lib/prisma";

export async function POST(req) {
  const { userId, otp } = await req.json();

  const otpRecord = await prisma.otpToken.findFirst({
    where: { userId: Number(userId), token: otp, expiresAt: { gt: new Date() } }
  });

  if (!otpRecord) {
    return Response.json({ success: false, message: "Invalid or expired OTP" }, { status: 400 });
  }

  await prisma.user.update({
    where:{ id: Number(userId)} ,
    data: { emailVerified: true }
  });

  await prisma.otpToken.delete({ where: { id: otpRecord.id } });

  return Response.json({ success: true, message: "Registration complete! You can now log in." });
}