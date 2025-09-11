import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET (req, { params }) {
    const { slug } = await params;
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId")
    try {
        let currentCourseContent = await prisma.courseContent.findFirst({
            where: {
                slug: slug
            },
            include: {
                lessons: true
            }
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