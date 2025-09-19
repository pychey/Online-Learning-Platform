import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { requireAuth } from "@/utils/auth";

export async function DELETE(req) {
  const session = await requireAuth()(req);

  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  await prisma.cart.deleteMany({
    where: { userId: session.user.id },
  });

  return NextResponse.json({ success: true });
}