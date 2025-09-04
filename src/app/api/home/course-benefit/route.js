import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        const benefits = await prisma.siteContents.findMany({
            where: {
                page: 'home',
                section: 'course_benefits'
            }
        })
        return NextResponse.json(benefits)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}