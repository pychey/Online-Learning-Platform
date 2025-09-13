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

export async function POST(req) {
    try {
        const body = await req.json();
        const { program_title, slug } = body;

        if (!program_title || !slug) {
            return new Response("Missing 'program_title' or 'slug'", { status: 400 });
        }

        const createdProgram = await prisma.program.create({
            data: {
                program_title,
                slug,
                additional_price: "មិនមានចំណាយបន្ថែម",
                duration_each_course: "២ ម៉ោងក្នុងមួយវគ្គ",
                level: "វគ្គណែនាំ",
                how_to_get: "បើកដោយស្វ័យប្រវត្តិ បន្ទាប់ពីបញ្ចប់វគ្គសិក្សាតាមដែលត្រូវការ",
                
            }
        });

        return NextResponse.json(createdProgram, { status: 201 });
    } catch (error) {
        console.error("Failed to create program:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}