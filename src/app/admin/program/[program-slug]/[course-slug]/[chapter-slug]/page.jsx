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
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { getCourseContent } from "@/lib/course"
import { getContentBySlug, patchChapter } from "@/lib/content"
import ContentDetail from "@/app/content/[slug]/component/ContentDetail"
import InlineTitleInput from "@/components/ui/InlineTitleInput"

const ChapterPage = () => {
	const [ lessons, setLessons ] = useState([])
	const [ chapter, setChapter ] = useState({})
	const [ course, setCourse ] = useState({})
	const pathname = usePathname()
	const router = useRouter()
	const slug = getSlugFromPathname(pathname)
	const { setBreadcrumbs } = useBreadcrumb()

	const getChapter = async () => {
		const response = await getContentBySlug(slug, true)
		console.log(response);
		
		setChapter(response)
		const newBreadcrumbs = buildChapterBreadcrumbs(
			response.course.program, 
			response.course, 
			{
				title: response.title,
				slug: response.slug
			}
		)		

		setBreadcrumbs(newBreadcrumbs)
	}

	useEffect(() => {
		getChapter()

	}, [slug, setBreadcrumbs])

	const handleChapterChange = (e, field, index = null) => {
		if (index === null) setChapter(prev => ({...prev, [field]: e.target.value}))
		else {
			setChapter(prev => ({
        ...prev,
        [field]: prev[field].map((item, i) =>
          i === index ? e.target.value : item
        )
      }))
		}
	}

	const handleSaveChanges = async () => {
		try {
			await patchChapter(slug, chapter);
			alert("Successfully Updated Changes")
			router.refresh()
		} catch (error) {
			alert("Failed to save changes. Please try again.");
			console.error(error);
		}
	};

	return(
		<div className="flex flex-col p-5 w-full h-full">

			<div className="flex justify-between">
				<div className="flex items-center gap-2">
					<h1 className="font-semibold text-2xl">Chapter Title: </h1>
					<InlineTitleInput
						value={chapter.title || ""}
						onChange={(e) => handleChapterChange(e, "title")}
						className="font-semibold text-2xl"
					/>
				</div>

				<section className="flex mb-0.5">
					<button
						onClick={handleSaveChanges}
						className="px-4 h-10 bg-primary hover:bg-primary-hover font-medium text-white 
											rounded-sm transition duration-200 cursor-pointer"
					>
						Save Changes
					</button>
				</section>
			</div>

			<div className="flex w-full justify-between">
				<div className="flex flex-col gap-6 py-2 h-full">
					{/* <section className="flex flex-col gap-3 font-medium">
						<h2 className="">Course</h2>
						<div className="px-4 py-3 w-full bg-white border border-admin-border rounded-md">{chapter?.course?.title}</div>
					</section> */}

					<section className="flex flex-col gap-3 font-medium">
						<h2 className="">Chapter Content</h2>
						<AdminDescriptionInput
							value={chapter.introduction_text || ""}
							onChange={(e) => handleChapterChange(e, "introduction_text")}
							placeholder={"Introduction Text"}
						/>
						
						<AdminDescriptionInput
							value={chapter.starting_paragraph || ""}
							onChange={(e) => handleChapterChange(e, "starting_paragraph")}
							placeholder={"Starting Paragraph"}
						/>

						<AdminDescriptionInput
							value={chapter.body_paragraph || ""}
							onChange={(e) => handleChapterChange(e, "body_paragraph")}
							placeholder={"Body Paragraph"}
						/>

						<AdminDescriptionInput
							value={chapter.ending_paragraph || ""}
							onChange={(e) => handleChapterChange(e, "ending_paragraph")}
							placeholder={"Ending Paragraph"}
						/>
					</section>

				</div>

				<div className="py-12 ">
					<div className={`flex justify-between items-center px-4 py-5 w-[460px] bg-[#D3D3D3] 
													${chapter.lessons?.length === 0 ? "rounded-md" : "rounded-t-md"}`}
					>
						<div className="flex items-center gap-2">
							<Paper size={20}/>
							<h3 className="font-medium">Lesson Content</h3>
						</div>

						<button>
							<Plus />
						</button>
					</div>
					{chapter.lessons && chapter.lessons.map((lesson, index) => (
						<Link 
							key={index}
							href={pathname + "/" + lesson.slug}
							className={`flex px-4 py-5 font-medium border border-t-0 border-[#D3D3D3]/55 cursor-pointer transition
												duration-150 ${index === chapter.lessons?.length - 1 ? "rounded-b-md" : ""} hover:bg-[#D3D3D3]/40`}>
							<h3>{lesson.title}</h3>
						</Link>
					))}
				</div>
			</div>

      <section className="flex flex-col gap-2.5 pt-2">
        <h2 className="font-medium text-2xl">Preview</h2>
        <div className="bg-white rounded-md border border-admin-border">
					<ContentDetail content={chapter} admin={true}/>
        </div>
      </section>

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