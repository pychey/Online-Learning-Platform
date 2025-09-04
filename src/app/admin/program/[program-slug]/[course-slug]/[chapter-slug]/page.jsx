'use client'

import AdminDescriptionInput from "@/app/admin/_components/AdminDescriptionInput"
import AdminTitleInput from "@/app/admin/_components/AdminTitleInput"
import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { 
	buildChapterBreadcrumbs, 
	findChapterBySlug, 
	findCourseById, 
	findLessonsByChapterId, 
	findProgramById, 
	getSlugFromPathname 
} from "@/utils"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

const ChapterPage = () => {
	const [ lessons, setLessons ] = useState([])
	const [ chapter, setChapter ] = useState({})
	const [ course, setCourse ] = useState({})
	const pathname = usePathname()
	const slug = getSlugFromPathname(pathname)
	const { setBreadcrumbs } = useBreadcrumb()

	useEffect(() => {
		const currChapter = findChapterBySlug(slug)
		const currCourse = findCourseById(currChapter.course_id)
		const currProgram = findProgramById(currCourse.program_id)
		const currLessons = findLessonsByChapterId(currChapter.id)
		const newBreadcrumbs = buildChapterBreadcrumbs(currProgram, currCourse, currChapter)		

		setLessons(currLessons)
		setChapter(currChapter)
		setCourse(currCourse)
		setBreadcrumbs(newBreadcrumbs)
	}, [slug, setBreadcrumbs])

	return(
		<div className="flex w-full h-full">
			<div className="flex flex-col gap-6 p-5 h-full">

				<section className="flex flex-col gap-3 font-medium">
					<h2 className="">Course</h2>
					<div className="px-4 py-3 w-full bg-white border border-admin-border rounded-md">{course.title}</div>
				</section>

				<section className="flex flex-col gap-3 font-medium">
					<h2 className="">Chapter Title</h2>
					<AdminTitleInput
						value={chapter.title}
						onChange={(e) => setChapter(prev => ({ ...prev, title: e.target.value }))}
						placeholder={"Chapter Title"}
					/>
				</section>

				<section className="flex flex-col gap-3 font-medium">
					<h2 className="">Chapter Description</h2>
					<AdminDescriptionInput
						value={chapter.content}
						onChange={(e) => setChapter(prev => ({ ...prev, content: e.target.value }))}
						placeholder={"Chapter Title"}
					/>
				</section>

			</div>

			<div className="mx-auto py-14 ">
				<div className={`flex justify-between items-center px-4 py-5 w-[460px] bg-[#D3D3D3] 
												${lessons.length === 0 ? "rounded-md" : "rounded-t-md"}`}
				>
					<div className="flex items-center gap-2">
						<Paper size={20}/>
						<h3 className="font-medium">Lesson Content</h3>
					</div>

					<button>
						<Plus />
					</button>
				</div>
				{lessons && lessons.map((lesson, index) => (
					<Link 
						key={index}
						href={pathname + "/" + lesson.slug}
						className={`flex px-4 py-5 font-medium border border-t-0 border-[#D3D3D3]/55 cursor-pointer transition
											duration-150 ${index === lessons.length - 1 ? "rounded-b-md" : ""} hover:bg-[#D3D3D3]/40`}>
						<h3>{lesson.title}</h3>
					</Link>
				))}
			</div>
		</div>
	)
}

const Paper = ({ size = 24, className, color = "currentColor" }) => {
  return(
    <svg 
			xmlns="http://www.w3.org/2000/svg"
			width={size} 
			height={size} 
			viewBox="0 0 32 32"
			className={className}
		>
			<g 
				fill="none" 
				stroke={color}
				strokeWidth="1"
			>
				<path 
					strokeLinecap="round" 
					strokeLinejoin="round" 
					strokeWidth="2" 
					d="M10 9h4m-4 7h12m-12 4h12m-12 4h4m-6 5h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2" 
				/>
				<circle cx="22" cy="9" r=".5" fill="currentColor" />
			</g>
		</svg>
  )
}

const Plus = ({ size = 24, className, color = "currentColor" }) => {
  return(
   	<svg 
			xmlns="http://www.w3.org/2000/svg" 
			width={size} 
			height={size} 
			viewBox="0 0 24 24"
			className={className}
		>
			<path 
				fill="none" 
				stroke={color} 
				strokeLinecap="round" 
				strokeLinejoin="round" 
				strokeWidth="2" 
				d="M5 12h7m7 0h-7m0 0V5m0 7v7" 
			/>
		</svg>
  )
}

export default ChapterPage