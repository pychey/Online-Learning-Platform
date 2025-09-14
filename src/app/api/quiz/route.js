import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {		
		const body = await req.json()
		const { slug } = body


		const quiz = await prisma.quiz.create({
			data: {
				question: "",
				courseSlug: slug
			}
		})

		for (let i = 0; i < 4; i++) 
			await prisma.answer.create({
				data: {
		    	text: "Option " + parseInt(i + 1),
			    isCorrect: i === 0 ? true : false,
			    order: parseInt(i + 1),
			    quizId: quiz.id
				}
		  })

		return NextResponse.json({ success: true });
  } catch (reason) {
		console.log(reason);
		
		const message = reason instanceof Error ? reason.message : 'Unexpected error'
		return new Response(message, { status: 500 })
  }
}

export async function DELETE(req, { params }) {
	try {		
		const body = await req.json()
		const { id } = body
		
		await prisma.answer.deleteMany({
			where: { quizId: id }
		})

		const response = await prisma.quiz.delete({
			where: {
				id
			}
		})

		return NextResponse.json({
      message: "Quiz deleted successfully.",
      response
    });
  } catch (error) {
    console.error("Delete error:", error);
    return new Response("Failed to delete lesson: " + error, { status: 500 });
  }	
}

export async function PATCH(req) {
  const body = await req.json();
  const { id, data } = body;

  try {
    await prisma.quiz.update({
      where: { id },
      data: {
        question: data.question,
      },
    });

    const answerUpdates = [1, 2, 3, 4].map((order) =>
      prisma.answer.updateMany({
        where: { quizId: id, order },
        data: {
          text: data[`option${order}`],
          isCorrect: data.answer === order,
        },
      })
    );

    await Promise.all(answerUpdates);

    return NextResponse.json('Quiz Updated Successfully');
  } catch (error) {
    console.error(error);
    return new Response('Failed to update quiz: ' + error.message, { status: 500 });
  }
}
