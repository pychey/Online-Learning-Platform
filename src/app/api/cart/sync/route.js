import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/utils/authOptions";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { newCourses } = await req.json();

  for (const course of newCourses) {
    await prisma.cart.create({
        data: {
            userId: session.user.id,
            courseId: course.id,
        }
    })
  }

  return NextResponse.json({ success: true });
}
