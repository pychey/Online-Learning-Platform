'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { 
	buildLessonBreadcrumbs, 
	findChapterById, 
	findCourseById, 
	findLessonBySlug, 
	findProgramById, 
	getSlugFromPathname 
} from "@/utils"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import AdminTitleInput from "@/app/admin/_components/AdminTitleInput"
import AdminDescriptionInput from "@/app/admin/_components/AdminDescriptionInput"

const LessonPage = () => {
	const [ course, setCourse ] = useState({})
	const [ chapter, setChapter ] = useState({})
	const [ lesson, setLesson ] = useState({})
	const pathname = usePathname()
	const slug = getSlugFromPathname(pathname)
	const { setBreadcrumbs } = useBreadcrumb()

	useEffect(() => {
		const currLesson = findLessonBySlug(slug)
		const currChapter = findChapterById(currLesson.chapter_id)
		const currCourse = findCourseById(currChapter.course_id)
		const currProgram = findProgramById(currCourse.program_id)
		const newBreadcrumbs = buildLessonBreadcrumbs(currProgram, currCourse, currChapter, currLesson)

		setLesson(currLesson)
		setChapter(currChapter)
		setCourse(currCourse)
		setBreadcrumbs(newBreadcrumbs)
	}, [slug, setBreadcrumbs])

	return(
		<div className="flex flex-col gap-6 p-5 h-full">
			<section className="flex flex-col gap-3 font-medium">
				<h2 className="">Chapter</h2>
				<div className="px-4 py-3 w-[720px] bg-white border border-admin-border rounded-md">{chapter.title}</div>
			</section>

			<section className="flex flex-col gap-3 font-medium">
				<h2 className="">Lesson Title</h2>
				<AdminTitleInput
					value={lesson.title}
					onChange={(e) => setLesson(prev => ({ ...prev, title: e.target.value }))}
					placeholder={"Chapter Title"}
				/>
			</section>

			<section className="flex flex-col gap-3 font-medium">
				<h2 className="">Lesson Content</h2>
				<AdminDescriptionInput
					value={lesson.content}
					onChange={(e) => setLesson(prev => ({ ...prev, content: e.target.value }))}
					placeholder={"Chapter Title"}
				/>
			</section>

		</div>
	)
}

export default LessonPage