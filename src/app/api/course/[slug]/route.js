import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (req, {params}) {
    const { slug } = await params;
    try {
        const course = await prisma.course.findFirst({
            where: {
                slug: slug
            },
            include: {
                program: true
            }
        })
        return NextResponse.json(course)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}