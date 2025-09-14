'use client'

import AdminDescriptionInput from "@/app/admin/_components/AdminDescriptionInput"
import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { getCourseBySlug } from "@/lib/course"
import { buildQuizBreadCrumbs, getSlugFromQuizPathname } from "@/utils"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { QUIZ } from "./data"
import Choice from "@/app/admin/_components/Choice"
import axios from "axios"

const QuizPage = () => {
	const [course, setCourse] = useState(null)
	const { setBreadcrumbs } = useBreadcrumb()
	const pathname = usePathname()
	const slug = getSlugFromQuizPathname(pathname)
	const router = useRouter()
	const [ quiz, setQuiz ] = useState(null)
	const [ currentQuiz, setCurrentQuiz ] = useState() 
	const [ currentQuizIndex, setCurrentQuizIndex ] = useState()

	const fetchQuiz = async () => {
		const response = await axios.get(`/api/quiz/${slug}`)
		setQuiz(response.data)	
		setCurrentQuiz(response.data[0])
		setCurrentQuizIndex(0)	
	}

	useEffect(() => {
		const fetchCourse = async () => {
			const response = await getCourseBySlug(slug)
			const newBreadcrumbs = buildQuizBreadCrumbs(response.program, response)
			setCourse(response)
			setBreadcrumbs(newBreadcrumbs)
		}

		fetchCourse()
		fetchQuiz()
	}, [slug, setBreadcrumbs])

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

  const handleChangeAnswer = (index) => {
    setCurrentQuiz(prev => ({
      ...prev,
      answer: index
    }));
  };

	const handleChoiceChange = (e, optionKey) => {
    setCurrentQuiz(prev => ({
      ...prev,
      [optionKey]: e.target.value
    }))
  }
	
	const handleAddQuiz = async () => {
		await axios.post(`/api/quiz/`, { slug })
		
		const response = await axios.get(`/api/quiz/${slug}`)
		setQuiz(response.data)	
		setCurrentQuiz(response.data[response.data.length - 1])
		setCurrentQuizIndex(response.data.length - 1)	
	}

	const handleRemoveQuiz = async () => {
		if (quiz.length <= 1) return 
		await axios.delete(`/api/quiz/`, { data: { id: currentQuiz.id }})

		const response = await axios.get(`/api/quiz/${slug}`)
		setQuiz(response.data)

    const newIndex = currentQuizIndex > 0 ? currentQuizIndex - 1 : 0
    setCurrentQuizIndex(newIndex)
    setCurrentQuiz(response.data[newIndex])
  }
	// useEffect(() => {
	// 	if (quiz.length > 0) {
	// 		setCurrentQuiz(quiz[0])
	// 		setCurrentQuizIndex(0)
	// 	}
	// }, [])

	const handleSaveChanges = async () => {
		const response = await axios.patch(`/api/quiz`, { id: currentQuiz.id, data: currentQuiz })
		alert(response.data)
	}

	if (!quiz) return <h1>Loading...</h1>

	return (
 		<div className="flex gap-4 p-4">
      <div className="flex flex-col w-full">
        <h1 className="text-2xl font-bold mb-4">Quiz {currentQuizIndex + 1} / {quiz?.length}</h1>

        <div className="flex gap-4 w-full justify-between">
					<div className="flex items-start gap-2 mb-4 w-full">
						<label className="block font-medium mb-1">Question:</label>
						<AdminDescriptionInput
							value={currentQuiz?.question}
							onChange={(e) => setCurrentQuiz(prev => ({...prev, question: e.target.value}))}
							placeholder={"Enter your question here"}
						/>
					</div> 

					<button 
						className="w-36 h-12 bg-primary hover:bg-primary-hover text-white rounded-md cursor-pointer transition-colors duration-200"
						onClick={() => handleSaveChanges()}
					>
						Save Changes
					</button>
				</div>
				

        <div >
          <Choice 
            data={currentQuiz?.option1}
            answer={currentQuiz?.answer}
            index={1}
            onChangeAnswer={() => handleChangeAnswer(1)}
            onChange={(e) => handleChoiceChange(e, "option1")}
          />
          <Choice 
            data={currentQuiz?.option2} 
            answer={currentQuiz?.answer}
            index={2}
            onChangeAnswer={() => handleChangeAnswer(2)}
            onChange={(e) => handleChoiceChange(e, "option2")}
          />
          <Choice 
            data={currentQuiz?.option3} 
            answer={currentQuiz?.answer}  
            index={3}      
            onChangeAnswer={() => handleChangeAnswer(3)}
            onChange={(e) => handleChoiceChange(e, "option3")}
          />
          <Choice 
            data={currentQuiz?.option4} 
            answer={currentQuiz?.answer}
            index={4}
            onChangeAnswer={() => handleChangeAnswer(4)}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <path strokeWidth="2" d="M12 2a7.5 7.5 0 0 0-4.8 13.263C8.19 16.089 9 17.21 9 18.5h6c0-1.29.81-2.411 1.8-3.238A7.5 7.5 0 0 0 12 2Z" />
                <path strokeLinejoin="round" strokeWidth="2" d="M15 18.5H9v2a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z" />
                <path strokeLinecap="round" strokeWidth="2" d="M10 8c0-1.013.895-2 2-2s2 .82 2 1.833c0 .365-.116.705-.317.991C13.085 9.676 12 10.488 12 11.5" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.992 14h.009" />
              </g>
            </svg>
            <h3 className="font-medium">QUIZZES</h3>
          </div>
        </div>
				<div
					className="max-h-[320px] overflow-y-auto"
				>
					{quiz.map((data, index) => (
						<button 
							key={index}
							className={`flex px-4 py-5 w-full font-medium border border-t-0 border-[#D3D3D3]/55 cursor-pointer transition
													duration-150 ${index === quiz.length - 1 ? "rounded-b-md" : ""} hover:bg-[#D3D3D3]/20
													${index === currentQuizIndex && index !== 0 ? "bg-[#D3D3D3]/50" : ""}`}
							onClick={() => handleMoveToQuiz(index)}
						>
							<h3>Question {index + 1}</h3>
						</button>
					))}
				</div>
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