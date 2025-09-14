import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {userId, firstName, lastName } = await req.json()

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

        return NextResponse.json({ success: true });
    } catch (reason) {
        const message = reason instanceof Error ? reason.message : 'Unexpected error'
        console.log(message)
        return new Response(message, { status: 500 })
    }
}
