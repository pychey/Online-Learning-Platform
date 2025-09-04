import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        const courses = await prisma.course.findMany()
        return NextResponse.json(courses)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}