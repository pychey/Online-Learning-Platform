import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
    try {
        const {courseIds, firstName, lastName } = await req.json()

        const session = await getServerSession(authOptions)
        
        if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

        const user = await prisma.user.findUnique({ where: { id:session.user.id } })

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

        for (const courseId of courseIds) {
            await prisma.enrollment.create({
                data: {
                    userId,
                    courseId: Number(courseId),
                },
            });
        }

        return NextResponse.json({ success: true });
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        console.log(message)
        return new Response(message, { status: 500 })
    }
}
