import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (req, {params}) {
    const { slug } = await params;

    const { searchParams } = new URL(req.url);
    const includeChapters = searchParams.get("include")?.split(",").includes("chapters");

    try {
        const include = {
            program: true,
        };

        if (includeChapters) {
            include.courseContents = {
                orderBy: {
                    order_number: 'asc',
                },
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    order_number: true,
                    lessons: {
                        orderBy: {
                            order_number: 'asc'
                        },
                        select: {
                            id: true,
                            title: true,
                            slug: true,
                        }
                    }
                },
            };
            include.quiz = {
                select: {
                    id: true
                }
            }
        }

        const course = await prisma.course.findFirst({
            where: { slug },
            include,
        });

        return NextResponse.json(course);
    } catch (reason) {
        
        const message = reason instanceof Error ? reason.message : 'Unexpected error';
        return new Response(message, { status: 500 });
    }
}

export async function PATCH (req, {params}) {
    const slug = await params.slug 
    const body = await req.json()

    
    try {
        const updatedCourse = await prisma.course.update({
            where: { slug },
            data: {
                title: body.title,
                img_url: body.img_url,
                certificate_type: body.certificate_type,
                duration: body.duration,
                online_percent: body.online_percent,
                slug: body.slug,
                rating: body.rating,
                original_price: body.original_price,
                discounted_price: body.discounted_price,
                discount_percent: body.discount_percent,
                study_type: body.study_type,
                language: body.language,
                level: body.level,
                access: body.access,
                introduction_text: body.introduction_text,
                first_skill: body.first_skill,
                second_skill: body.second_skill,
                thrid_skill: body.thrid_skill,
                main_text: body.main_text,
                detail_text: body.detail_text,
                conclusion_text: body.conclusion_text
            },
            include: {
                program: true
            },
        })

        return NextResponse.json(updatedCourse);
    } catch (error) {
        console.log(error)
        return new Response("Failed to update course " + error, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    const slug = params.slug;

    try {
        const deletedCourse = await prisma.course.delete({
            where: { slug }
        });

        return NextResponse.json({
            message: "Course deleted successfully.",
            deletedCourse
        });
    } catch (error) {
        console.error("Delete error:", error);
        return new Response("Failed to delete course: " + error, { status: 500 });
    }
}