import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (req, {params}) {
    const { slug } = await params;
    try {
        const courseWithContents = await prisma.course.findFirst({
            where: {
                slug: slug
            },
            include: {
                courseContents: true
            }
        })
        return NextResponse.json(courseWithContents)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}