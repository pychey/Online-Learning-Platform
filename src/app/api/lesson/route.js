import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        const lessons = await prisma.lesson.findMany()
        return NextResponse.json(lessons)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        const { courseContentId, title, slug, order_number } = body

        if (!courseContentId || !title || !slug || !order_number) {
            return new Response("Missing data", { status: 400 });
        }

        console.log("courseContentId: " + courseContentId);
        console.log("title: " + title);
        console.log("slug: " + slug);
        console.log("order number: " + order_number);
        
        const createdLesson = await prisma.lesson.create({
            data: {
                courseContentId,
                title,
                slug,
                order_number
            }
        });

        return NextResponse.json(createdLesson, { status: 201 });
    } catch (error) {
        console.error("Failed to create content:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}