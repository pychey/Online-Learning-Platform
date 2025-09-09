import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs'

export async function POST(req) {
  const { userId, otp } = await req.json();

  const otpRecord = await prisma.otpToken.findFirst({
    where: { 
      userId: Number(userId), 
      expiresAt: { gt: new Date() } 
    },
    orderBy: { expiresAt: 'desc' }
  });

  if (!otpRecord) return Response.json({ success: false, message: "លេខសម្ងាត់បានផុតកំណត់" });

  const isMatch = await bcrypt.compare(otp, otpRecord.token)

  if (!isMatch) return Response.json({ success: false, message: "លេខសម្ងាត់មិនត្រឹមត្រូវ សូមព្យាយាមម្តងទៀត" });

  await prisma.user.update({
    where:{ id: Number(userId)} ,
    data: { emailVerified: true }
  });

  await prisma.otpToken.delete({ where: { id: otpRecord.id } });

  return Response.json({ success: true, message: "ការចុះឈ្មោះជោគជ័យ" });
}