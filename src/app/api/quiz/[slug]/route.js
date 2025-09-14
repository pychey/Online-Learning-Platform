import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import answers from "../../../../../prisma/model.data/answer";

export async function GET (req, {params}) {
	
	const { slug } = await params;
	
	try {
		const fetchedQuiz = await prisma.quiz.findMany({
			where: {
				courseSlug: slug
			},
			include: {
				answers: true
			}
		})

		const response = fetchedQuiz.map((quiz) => {
			const updatedQuiz = {
				id: quiz.id,
				question: quiz.question,
				option1: quiz.answers[0].text,
				option2: quiz.answers[1].text,
				option3: quiz.answers[2].text,
				option4: quiz.answers[3].text,
				answer: quiz.answers.find(ans => ans.isCorrect).order
			}

			return updatedQuiz
		})
						
		return NextResponse.json(response);
		
	} catch (reason) {
		console.log(reason);
		
	  const message = reason instanceof Error ? reason.message : 'Unexpected error';
    return new Response(message, { status: 500 });
	}
}