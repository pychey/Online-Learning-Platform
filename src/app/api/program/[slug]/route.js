import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (req, {params}) {
    const { slug } = await params;
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

export async function PATCH (req, {params}) {
    const slug = await params.slug 
    const body = await req.json()

    console.log(body);
    
    try {
        const updatedProgram = await prisma.program.update({
            where: { slug },
            data: {
                program_title: body.program_title,
                certificate_name: body.certificate_name,
                logo_url: body.logo_url,
                about_text: body.about_text,
                firstDesignedFor_text: body.firstDesignedFor_text,
                secondDesignedFor_text: body.secondDesignedFor_text,
                thirdDesignedFor_text: body.thirdDesignedFor_text,
            },
            include: {
                courses: true,
            }
        })

        return NextResponse.json(updatedProgram);
    } catch (error) {
        console.log(error)
        return new Response("Failed to update program " + error, { status: 500 });
    }
}