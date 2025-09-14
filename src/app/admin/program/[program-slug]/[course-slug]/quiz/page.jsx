'use client'

import AdminDescriptionInput from "@/app/admin/_components/AdminDescriptionInput"
import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { getCourseBySlug } from "@/lib/course"
import { buildQuizBreadCrumbs, getSlugFromQuizPathname } from "@/utils"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { QUIZ } from "./data"
import Choice from "@/app/admin/_components/Choice"

const QuizPage = () => {
	const [course, setCourse] = useState(null)
	const { setBreadcrumbs } = useBreadcrumb()
	const pathname = usePathname()
	const slug = getSlugFromQuizPathname(pathname)
	const [ quiz, setQuiz ] = useState(QUIZ)
	const [ currentQuiz, setCurrentQuiz ] = useState() 
	const [ currentQuizIndex, setCurrentQuizIndex ] = useState()

	useEffect(() => {
		const fetchCourse = async () => {
			const response = await getCourseBySlug(slug)
			const newBreadcrumbs = buildQuizBreadCrumbs(response.program, response)
			setCourse(response)
			setBreadcrumbs(newBreadcrumbs)
		}

		fetchCourse()
	}, [slug, setBreadcrumbs])

	useEffect(() => {
		if (quiz.length > 0) {
			setCurrentQuiz(quiz[0])
			setCurrentQuizIndex(0)
		}
	}, [])

	useEffect(() => {
		if (currentQuiz && quiz.length > 0) {
			setQuiz(prev => {
				const updated = [...prev]
				updated[currentQuizIndex] = currentQuiz
				return updated
			})
		}
	}, [currentQuiz])

	// const handleChoiceChange = (index, value) => {
	// 	const updatedChoices = [...choices]
	// 	updatedChoices[index] = value
	// 	setChoices(updatedChoices)
	// }

	const handleChoiceChange = (e, optionKey) => {
		setCurrentQuiz(prev => ({
			...prev,
			[optionKey]: e.target.value
		}))
	}

	const handleNextQuiz = () => {
		if (currentQuizIndex < quiz.length - 1) {
			const nextIndex = currentQuizIndex + 1
			setCurrentQuizIndex(nextIndex)
			setCurrentQuiz(quiz[nextIndex])
		}
	}

	const handleLastQuiz = () => {
		if (currentQuizIndex != 0) {
			const lastIndex = currentQuizIndex - 1
			setCurrentQuizIndex(lastIndex)
			setCurrentQuiz(quiz[lastIndex])
		}	
	}

	const handleMoveToQuiz = (index) => {
		setCurrentQuizIndex(index)
		setCurrentQuiz(quiz[index])
	}

	const handleAddQuiz = () => {
		const newQuiz = {
			question: '',
			option1: 'Option 1',
			option2: 'Option 2',
			option3: 'Option 3',
			option4: 'Option 4',
			answer: 1,
		}
		
		const updatedQuizList = [...quiz, newQuiz]
		setQuiz(updatedQuizList)
		setCurrentQuiz(newQuiz)
		setCurrentQuizIndex(updatedQuizList.length - 1)	
	}

	

	const handleRemoveQuiz = () => {
		if (quiz.length <= 1) return 

		const updatedQuizList = quiz.filter((_, i) => i !== currentQuizIndex)
		setQuiz(updatedQuizList)

		const newIndex = currentQuizIndex > 0 ? currentQuizIndex - 1 : 0
		setCurrentQuizIndex(newIndex)
		setCurrentQuiz(updatedQuizList[newIndex])
	}

	const handleChangeAnswer = (index) => {
		setQuiz(prev => {
			const updated = [...prev]
			updated[currentQuizIndex] = {
				...updated[currentQuizIndex],
				answer: index
			}
			setCurrentQuiz(updated[currentQuizIndex]) 
			return updated
		})
	}

	if (!quiz) return <h1>Loading...</h1>

	return (
		<div className="flex gap-4 p-4">
			<div className="flex flex-col w-full">
				<h1 className="text-2xl font-bold mb-4">Quiz {currentQuizIndex + 1} / {quiz?.length}</h1>

				<div className="flex items-start gap-2 mb-4">
					<label className="block font-medium mb-1">Question:</label>
					<AdminDescriptionInput
						value={currentQuiz?.question}
						onChange={(e) => setCurrentQuiz(prev => ({...prev, question: e.target.value}))}
						placeholder={"Enter your question here"}
					/>
				</div>

				<div >
					<Choice 
						data={currentQuiz?.option1}
						answer={currentQuiz?.answer}
						index={1}
						onChangeAnswer={(e) => handleChangeAnswer(1)}
						onChange={(e) => handleChoiceChange(e, "option1")}
					/>
					<Choice 
						data={currentQuiz?.option2} 
						answer={currentQuiz?.answer}
						index={2}
						onChangeAnswer={(e) => handleChangeAnswer(2)}
						onChange={(e) => handleChoiceChange(e, "option2")}
					/>
					<Choice 
						data={currentQuiz?.option3} 
						answer={currentQuiz?.answer}	
						index={3}			
						onChangeAnswer={(e) => handleChangeAnswer(3)}
						onChange={(e) => handleChoiceChange(e, "option3")}
					/>
					<Choice 
						data={currentQuiz?.option4} 
						answer={currentQuiz?.answer}
						index={4}
						onChangeAnswer={(e) => handleChangeAnswer(4)}
						onChange={(e) => handleChoiceChange(e, "option4")}
					/>
				</div>
				
				<div className="flex justify-between w-full">
					<button 
						className={`mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover 
												transition duration-200 cursor-pointer ${currentQuizIndex === 0 ? "hidden" : ""}`}
						onClick={() => handleLastQuiz()}
					>
						Back
					</button>
					
					<div className={`${currentQuizIndex === 0 || currentQuiz === quiz.length - 1 ? "" : "hidden"}`}></div>
					
					<button 
						className={`mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover 
											transition duration-200 cursor-pointer ${currentQuizIndex === quiz.length - 1 ? "hidden" : ""}`}
						onClick={() => handleNextQuiz()}
					>
						Next
					</button>
				</div>
					
			</div>

			<div className="mt-12 px-4 w-[720px]">
				<div className={`flex justify-between items-center px-4 py-5 w-full bg-[#D3D3D3] 
					${quiz.length === 0 ? "rounded-md" : "rounded-t-md"}`}
				>
					<div className="flex items-center gap-2">
							{/* <Paper size={20}/> */}
						<h3 className="font-medium">QUIZZES</h3>
					</div>
				</div>
				{quiz.map((data, index) => (
					<button 
						key={index}
						className={`flex px-4 py-5  w-full font-medium border border-t-0 border-[#D3D3D3]/55 cursor-pointer transition
											duration-150 ${index === quiz.length - 1 ? "rounded-b-md" : ""} hover:bg-[#D3D3D3]/40`}
						onClick={() => handleMoveToQuiz(index)}
					>
						<h3>Question {index + 1}</h3>
					</button>
				))}
				<div className="flex justify-between mt-4 w-full">
					<button 
						className="px-4 py-2 bg-[#D3D3D3] text-black rounded hover:bg-primary-hover 
											transition duration-200 cursor-pointer"
						onClick={() => handleRemoveQuiz()}
					>
						Remove Quiz
					</button>
					<button 
						className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-hover 
											transition duration-200 cursor-pointer"
						onClick={() => handleAddQuiz()}
					>
						Add Quiz
					</button>
				</div>
			</div>
		</div>
	)
}

export default QuizPage
