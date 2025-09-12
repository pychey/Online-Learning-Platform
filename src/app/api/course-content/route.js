import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET () {
    try {
        const courseContents = await prisma.courseContent.findMany()
        return NextResponse.json(courseContents)
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        const { courseId, title, slug, order_number } = body

        if (!courseId || !title || !slug) {
            return new Response("Missing data", { status: 400 });
        }

        // console.log("courseId: " + courseId);
        // console.log("title: " + title);
        // console.log("slug: " + slug);
        // console.log("order number: " + order_number);
        
        const createdContent = await prisma.courseContent.create({
            data: {
                courseId,
                title,
                slug,
                order_number
            }
        });

        return NextResponse.json(createdContent, { status: 201 });
    } catch (error) {
        console.error("Failed to create content:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}