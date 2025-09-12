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
import { getLessonBySlug } from "@/lib/lesson"
import LessonDetail from "@/app/lesson/[slug]/component/LessonDetail"
import lessonContents from "../../../../../../../../prisma/model.data/lessonContent"
import InlineTitleInput from "@/components/ui/InlineTitleInput"
import Menu from "@/app/admin/_components/Menu"

const LessonPage = () => {
	const [ course, setCourse ] = useState({})
	const [ chapter, setChapter ] = useState({})
	const [ lesson, setLesson ] = useState({})
	const pathname = usePathname()
	const slug = getSlugFromPathname(pathname)
	const { setBreadcrumbs } = useBreadcrumb()

	const getLesson = async () => {
		const response = await getLessonBySlug(slug, true)
		setLesson(response)
		console.log(response);		
		const newBreadcrumbs = buildLessonBreadcrumbs(
			response.courseContent.course.program, 
			response.courseContent.course, 
			response.courseContent, 
			{
				title: response.title,
				slug: response.slug
			}
		)

		setBreadcrumbs(newBreadcrumbs)

	}

	useEffect(() => {
		getLesson()

	}, [slug, setBreadcrumbs])

	const handleLessonContentChanges = (e, index) => {
		setLesson(prev => {
			const updatedContents = [...prev.lessonContents];
			updatedContents[index] = {
				...updatedContents[index],
				content: e.target.value
			};
			return { ...prev, lessonContents: updatedContents };
		})
	}

	const updateContentType = (index, newType) => {
		setLesson(prev => {
			const updatedContents = [...prev.lessonContents];
			const current = updatedContents[index];

			let transformedContent = current.content;

			if (newType === 'list') {
				if (typeof current.content === 'string') {
					transformedContent = [current.content];
				} else if (!Array.isArray(current.content)) {
					transformedContent = [''];
				}
			} else if (newType === 'text' || newType === 'heading') {
				if (Array.isArray(current.content)) {
					transformedContent = current.content.join(', ');
				}
			} else if (newType === 'space') {
				transformedContent = '';
			}

			updatedContents[index] = {
				...current,
				content_type: newType,
				content: transformedContent,
			};

			return { ...prev, lessonContents: updatedContents };
		});
	};

	const handleAddContent = () => {
		setLesson(prev => ({
			...prev,
			lessonContents: [
				...(prev.lessonContents || []),
				{
					content_type: "heading", 
					content: ""
				}
			]
		}))
	}

	const handleRemoveContent = (indexToRemove) => {
		setLesson(prev => ({
			...prev,
			lessonContents: prev.lessonContents.filter((_, idx) => idx !== indexToRemove)
		}))
	}

	return(
		<div className="flex flex-col gap-4 p-5 h-full">
			<div className="flex justify-between w-full">
				<section className="flex gap-3 font-medium">
					<h2 className="font-semibold text-2xl">Lesson Title</h2>
					<InlineTitleInput
						value={lesson.title || ""}
						onChange={(e) => setLesson(prev => ({ ...prev, title: e.target.value }))}
						placeholder={"Chapter Title"}
						className="font-semibold text-2xl"
					/>
				</section>

				<section>
					<Menu model={"Lesson"} data={lesson}/>
				</section>
			</div>

			<section className="flex flex-col gap-3 font-medium">
				<h2 className="">Lesson Content</h2>
				<div className="flex gap-4 w-full">
					<div className="flex-1 flex flex-col gap-4">
						{lesson.lessonContents && lesson.lessonContents.map((content, index) => (
							<div 
								key={index} 
								className="flex justify-between gap-4 w-full border border-gray-200 rounded-md p-4 bg-white"
							>
								{content.content_type === "heading" && (
									<div className="w-full">
										<input
											className="px-4 py-3 w-full bg-gray-50 border rounded-md border-gray-300 font-semibold 
																text-gray-700 focus:text-black focus:shadow-sm focus:outline-none 
																transition-all duration-300"
											value={content.content || ""}
											onChange={(e) => {
												handleLessonContentChanges(e, index)
											}}
											placeholder={"Enter heading"}
										/>
									</div>
								)}

								{content.content_type === "text" && (
									<div className="w-full">
										<AdminDescriptionInput
											value={content.content || ""}
											onChange={(e) => {
												handleLessonContentChanges(e, index)
											}}
											placeholder={"Enter text"}
										/>
									</div>
								)}

								{content.content_type === "space" && (
									<div className="w-full">
										<label className="text-sm text-gray-500 mb-2 block">Line Break</label>
										<p className="text-gray-400 italic text-sm">This will render a line break in the content.</p>
									</div>
								)}

								{content.content_type === "list" && (
									<div className="w-full">
										<div className="flex px-4 w-full bg-gray-50 border rounded-md border-gray-300 font-semibold focus-within:shadow-sm transition-shadow duration-300">
											<p className="my-auto mr-2 h-full">•</p>
											<input
												className="w-full h-12 text-gray-700 focus:text-black focus:outline-none transition-all duration-300"
												value={content.content || ""}
												onChange={(e) => {
													handleLessonContentChanges(e, index)
												}}
												placeholder="Enter heading"
											/>
										</div>

									</div>
								)}

								<div className="content-end mb-4 h-9">
									<select
										className="border border-gray-300 rounded-md text-sm h-full p-2 cursor-pointer"
										value={content.content_type || "heading"}
										onChange={(e) => updateContentType(index, e.target.value)}
									>
										<option value="heading">Heading</option>
										<option value="text">Text</option>
										<option value="list">List</option>
										<option value="space">Line Break</option>
									</select>
								</div>

								<button
									className="mb-auto text-red-500 hover:text-red-700 text-sm cursor-pointer"
									onClick={() => handleRemoveContent(index)}
								>
									Delete
								</button>
							</div>
						))}
					</div>	

					<div 
						className="flex justify-center items-center w-12 h-12 sticky top-4 box-content  bg-white border 
										hover:border-slate-300 border-gray-200 rounded-md transition-all duration-150"
					>
						<button 
							onClick={() => handleAddContent()}
							className="cursor-pointer w-12 h-12 hover:bg-neutral-50 rounded-md transition-all duration-100"
						>
							+
						</button>
					</div>
				</div>
			</section>

			<section className="flex flex-col gap-2.5 pt-2">
        <h2 className="font-medium text-2xl">Preview</h2>
        <div className="bg-white rounded-md border border-admin-border">
					<LessonDetail lesson={lesson} admin={true}/>
        </div>
      </section>

		</div>
	)
}

export default LessonPage