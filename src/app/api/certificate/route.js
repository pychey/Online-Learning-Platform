import { NextResponse } from "next/server";
import CertificatePage from "@/app/certificate/_components/CertificatePage";
import { v2 as cloudinary } from "cloudinary";
import { pdf } from '@react-pdf/renderer';
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const generateCertificateCode = () => {
  const randomDigit = (n) => Math.floor(Math.random() * 10 ** n).toString().padStart(n, '0');
  return `${randomDigit(3)}-${randomDigit(2)}-${randomDigit(3)}`;
}

async function blobToBase64(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  return Buffer.from(arrayBuffer).toString("base64");
}

const handleUpload= async (name, courseTitle, code) => {
  const blob = await pdf(<CertificatePage code = {code} name = {name} courseTitle = {courseTitle} />).toBlob();

  const base64 = await blobToBase64(blob);

  const response = await cloudinary.uploader.upload(`data:application/pdf;base64,${base64}`, {
    folder: 'cloudinary-pdf-upload-certificate',
    use_filename: true,
    unique_filename: false
  })

  console.log('Response:', response);
  return response.secure_url;
};

export async function POST(req) {
  try {
    const { userId, courseId } = await req.json();
    const code = generateCertificateCode();

    const user = await prisma.user.findFirst({ where: { id: userId }});
    const course = await prisma.course.findFirst({ where: { id: courseId }})
    
    let certificate = await prisma.certificate.findFirst({
      where: {
        courseTitle: course.english_title,
        userId: user.id
      }
    })

    let url = certificate?.url

    if (!certificate) {
      const name = `${user.firstName} ${user.lastName}`;
      url = await handleUpload(name, course.english_title, code);

      certificate = await prisma.certificate.create({
        data: {
          courseSlug: course.slug,
          courseTitle: course.english_title,
          courseKhmerTitle: course.title,
          code: code,
          userId: user.id,
          url: url
        }
      });
    }

    return NextResponse.json({ ...certificate, firstName: user.firstName, lastName: user.lastName, url: url });
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : 'Unexpected error';
    return new Response(message, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const user = await prisma.user.findFirst({
      where: { id: session.user.id },
      include: { certificates: true },
    });

    return NextResponse.json(user.certificates);
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : 'Unexpected error';
    console.log(message)
    return new Response(message, { status: 500 });
  }
}