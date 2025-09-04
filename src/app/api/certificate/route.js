import { NextResponse } from "next/server";
import CertificatePage from "@/app/certificate/_components/CertificatePage";
import { v2 as cloudinary } from "cloudinary";
import { pdf } from '@react-pdf/renderer';
import prisma from "@/lib/prisma";

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
    const { firstName, lastName, courseTitle } = await req.json();
    const code = generateCertificateCode();
    const name = `${firstName} ${lastName}`;

    let user = await prisma.user.findFirst({ where: { firstName, lastName }});
    if (!user) user = await prisma.user.create({ data: { firstName, lastName }});

    const url = await handleUpload(name, courseTitle, code);

    const certificate = await prisma.certificate.create({
      data: {
        courseTitle: courseTitle,
        code: code,
        userId: user.id,
        url: url
      }
    });

    return NextResponse.json({ ...certificate, firstName: user.firstName, lastName: user.lastName });
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : 'Unexpected error';
    return new Response(message, { status: 500 });
  }
}