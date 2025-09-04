import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (req, {params}) {
    const { slug } = params;
    try {
        const program = await prisma.program.findFirst({
            where: {
                slug: slug
            },
            include: {
                courses: true
            }
        })
        return NextResponse.json(program)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}