import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import programs from "../../../../../prisma/model.data/program";

export async function GET (req, { params }) {
    const { slug } = await params;
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId")

    try {

        const include = {
            lessons: true
        }

        if (searchParams.get('admin')) {
            include.course = {
                select: {
                    title: true,
                    slug: true,
                    program: {
                        select: {
                            program_title: true,
                            slug: true
                        }
                    }
                }
            };
        }

        const currentCourseContent = await prisma.courseContent.findFirst({
            where: {
                slug: slug
            },
            include
        })

        if (!currentCourseContent) return NextResponse.json(
            { error: "Course Content Not Found" },
            { status: 404 }
        );

        const totalCourseContent = await prisma.courseContent.count({
            where: {
                courseId: currentCourseContent.courseId,
            },
        });

        let prev = null;
        let next = null;
        let course = null;

        // if (currentCourseContent.order_number === 1 || currentCourseContent.order_number === totalCourseContent) {
        //     course = await prisma.course.findFirst({
        //         where: {
        //             id: currentCourseContent.courseId
        //         },
        //         select: {
        //             slug: true
        //         }
        //     })
        // }

        course = await prisma.course.findFirst({
                where: {
                    id: currentCourseContent.courseId
                },
                select: {
                    slug: true
                }
        })

        if (currentCourseContent.order_number > 1) {
            prev = await prisma.courseContent.findFirst({
                where: {
                    courseId: currentCourseContent.courseId,
                    order_number: currentCourseContent.order_number - 1
                },
                select: {
                    slug: true
                }
            })
        }

        if (currentCourseContent.order_number < totalCourseContent) {
            next = await prisma.courseContent.findFirst({
                where: {
                    courseId: currentCourseContent.courseId,
                    order_number: currentCourseContent.order_number + 1
                },
                select: {
                    slug: true
                }
            })
        }

        for (const lesson of currentCourseContent.lessons) {
            const exist = await prisma.lessonProgress.findFirst({
                where: { userId: Number(userId), lessonSlug: lesson.slug }
            });
            if (exist) {
                lesson.isCompleted = true;
            } else {
                lesson.isCompleted = false;
            }
        }
        
        return NextResponse.json({ ...currentCourseContent, prevSlug: prev?.slug , nextSlug: next?.slug, courseSlug: course?.slug, totalCourseContent })
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        return new Response(message, { status: 500 })
        
    }
}

export async function PATCH (req, {params}) {
    const slug = await params.slug 
    const body = await req.json()
    console.log("Slug: " + slug)
    console.log("Body: " + body);
    
    
    try {
        const updatedCourseContent = await prisma.courseContent.update({
            where: { slug },
            data: {
                title: body.title,
                // order_number: body.order_number,
                // icon_url: body.icon_url,
                introduction_text: body.introduction_text,
                starting_paragraph: body.starting_paragraph,
                body_paragraph: body.body_paragraph,
                ending_paragraph: body.ending_paragraph,
                // isCompleted: body.isCompleted,
                // courseId: body.courseId,
                slug: body.slug,
            },
            // include: {
            //     program: true
            // },
        })

        return NextResponse.json(updatedCourseContent);
    } catch (error) {
        console.log(error)
        return new Response("Failed to update course " + error, { status: 500 });
    }
}