import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (req, { params }) {
    try {
        const { id } = await params
        const idNumber = Number(id)

        const user = await prisma.user.findUnique({
            where: { 
                id: idNumber 
            },
            include: {
                enrollments: {
                    include: { course: true },
                    orderBy: { createdAt: 'asc'},
                },
            },
        })

        if (!user) return new Response("User Not Found", { status: 404 })

        const courses = user.enrollments.map((e) => e.course)

        return NextResponse.json(courses)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        console.log(message)
        return new Response(message, { status: 500 })
    }
}