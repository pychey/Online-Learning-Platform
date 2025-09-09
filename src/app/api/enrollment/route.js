import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { userId, courseId, firstName, lastName } = await req.json()

        const user = await prisma.user.findUnique({ where: { id: userId } })

        if(!user) return new Response('User Not Found', { status: 404 })

        if (user.firstName !== firstName || user.lastName !== lastName) {
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    firstName: firstName,
                    lastName: lastName,
                },
            });
        }

        const existingEnrollment = await prisma.enrollment.findFirst({
            where: {
                userId, 
                courseId: Number(courseId), 
            },
        });

        if (existingEnrollment) return NextResponse.json('User Already Bought the Course', { status: 400 });

        const enrollment = await prisma.enrollment.create({
            data: {
                userId,
                courseId: Number(courseId),
            },
        });

        return NextResponse.json(enrollment);
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        console.log(message)
        return new Response(message, { status: 500 })
    }
}
