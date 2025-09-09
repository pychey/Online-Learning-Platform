import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        const courses = await prisma.course.findMany({
            include: {
                program: true
            }
        })
        return NextResponse.json(courses)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        const { programId, title, slug } = body
        
        console.log(programId)
        console.log(title)
        console.log(slug)
        if (!programId || !title || !slug) {
            return new Response("Missing data", { status: 400 });
        }

        const createdCourse = await prisma.course.create({
            data: {
                programId,
                title,
                slug,
                rating: 4
            }
        });

        return NextResponse.json(createdCourse, { status: 201 });
    } catch (error) {
        console.error("Failed to create course:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}