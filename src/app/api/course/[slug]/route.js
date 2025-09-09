import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  try {
    const { slug } = await context.params;

    const course = await prisma.course.findFirst({
      where: { slug },
      include: { program: true },
    });

    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(course, { status: 200 });
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
