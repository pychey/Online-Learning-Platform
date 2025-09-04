import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        const programs = await prisma.program.findMany({
            include: {
                courses: true
            }
        })
        return NextResponse.json(programs)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}