import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/authOptions";

export async function GET(req) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const coursesCart = await prisma.cart?.findMany({
    where: { userId: session.user.id },
    include: { course: true },
    orderBy: { createdAt: 'asc' }
  });

  const courses = coursesCart?.map(cart => cart.course)

  return NextResponse.json(courses);
}
