import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (req, { params }) {
    const { slug } = await params;

    const { searchParams } = new URL(req.url);
    
    try {
        const include = {
            lessonContents: {
                orderBy:{
                order_number:"asc"
                }
            }
        }

        if (searchParams.get("admin")) {
            include.courseContent = {
                select: {
                    id: true,
                    title: true,
                    slug: true,
                    course: {
                        select: {
                            id: true,
                            title: true,
                            slug: true,
                            program: {
                                select: {
                                    id: true,
                                    program_title: true,
                                    slug: true
                                }
                            }
                        }
                    }
                }
            }
        }

        const currentLesson = await prisma.lesson.findFirst({
            where: {
                slug: slug
            },
            include
        })

        if (!currentLesson) return NextResponse.json(
            { error: "Lesson Not Found" }, 
            { status: 404 }
        );

        const totalLesson = await prisma.lesson.count({
            where: {
                courseContentId: currentLesson.courseContentId,
            },
        });

        let prev = null;
        let next = null;
        let courseContent = null;
        let nextCourseContent = null;

        // if (currentLesson.order_number === 1) {
        //     courseContent = await prisma.courseContent.findFirst({
        //         where: {
        //             id: currentLesson.courseContentId
        //         },
        //         select: {
        //             slug: true
        //         }
        //     })
        // }

        courseContent = await prisma.courseContent.findFirst({
            where: {
                id: currentLesson.courseContentId
            },
            select: {
                slug: true,
                course: {  // join the related course
                    select: {
                        slug: true
                    }
                }
            }
        });


        if (currentLesson.order_number === totalLesson) {
            const currentCourseContent = await prisma.courseContent.findFirst({
                where: {
                    id: currentLesson.courseContentId
                },
                select: {
                    order_number: true
                }
            })
            
            nextCourseContent = await prisma.courseContent.findFirst({
                where: {
                    id: currentCourseContent.id,
                    order_number: currentCourseContent.order_number + 1
                },
                select: {
                    slug: true
                }
            })
        }

        if (currentLesson.order_number > 1) {
            prev = await prisma.lesson.findFirst({
                where: {
                    courseContentId: currentLesson.courseContentId,
                    order_number: currentLesson.order_number - 1
                },
                select: {
                    slug: true
                }
            })
        }

        if (currentLesson.order_number < totalLesson) {
            next = await prisma.lesson.findFirst({
                where: {
                    courseContentId: currentLesson.courseContentId,
                    order_number: currentLesson.order_number + 1
                },
                select: {
                    slug: true
                }
            })
        }
        
        return NextResponse.json({ 
            ...currentLesson, 
            prevSlug: prev?.slug, 
            nextSlug: next?.slug,
            courseContentSlug: courseContent?.slug,
            courseSlug: courseContent.course.slug,
            nextCourseContentSlug: nextCourseContent?.slug,
            totalLesson
        })
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
    }
}