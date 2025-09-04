import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { code } = await req.json();

    const certificate = await prisma.certificate.findFirst({ 
        where: { code },
        include: { user : true }
    });

    if (!certificate) return NextResponse.json({ message: 'Incorrect Code' });

    return NextResponse.json({ ...certificate, message: 'Code Correct' });
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : 'Unexpected error';
    return new Response(message, { status: 500 });
  }
}