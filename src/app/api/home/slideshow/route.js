import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        const slideShows = await prisma.slideShows.findMany()
        return NextResponse.json(slideShows)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}