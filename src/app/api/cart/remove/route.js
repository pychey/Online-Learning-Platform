import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { courseId } = await req.json();

  await prisma.cart.deleteMany({
    where: { 
        userId: session.user.id, 
        courseId 
    },
  });

  return NextResponse.json({ success: true });
}