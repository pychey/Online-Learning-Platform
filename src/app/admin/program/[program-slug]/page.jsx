'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Card from "@/app/admin/_components/Card"
import {
  getSlugFromPathname,
  findProgramBySlug,
  findCoursesByProgramId,
  buildProgramBreadcrumbs
} from "@/utils"
import AdminNewCourseModal from "../../_components/AdminNewCourseModal"

const ProgramCoursePage = () => {
	const [ activeModal, setActiveModal ] = useState(false)
	const [ program, setProgram ] = useState(null)
	const [ courses, setCourses ] = useState([])
	const { setBreadcrumbs } = useBreadcrumb()
	const pathname = usePathname()
	const slug = getSlugFromPathname(pathname)

	useEffect(() => {
		const currProgram = findProgramBySlug(slug)
		const programCourses = findCoursesByProgramId(currProgram.id)

		setCourses(programCourses)
		setProgram(currProgram)
		setBreadcrumbs(buildProgramBreadcrumbs(currProgram))
	}, [slug, setBreadcrumbs])
	
	const handleCreateCourse = (input) => {
		alert(input)
	}

	return(
		<div className="flex flex-col gap-2 p-4 px-6">
			<h1 className="text-[#1A1A1A] font-medium text-4xl">{program?.title}</h1>
			
			<section className="w-1/2 pb-2">
				<p className="text-sm font-[450]">{program?.description}</p>
			</section>

			<section className="flex flex-col gap-2 py-2">
				<div className="flex justify-between items-center">
					<h1 className="font-medium text-[#1A1A1A] text-lg">All courses in the program</h1>
					<button 
						onClick={() => setActiveModal(true)}
						className="font-semibold text-gray-900/60 hover:text-primary cursor-pointer transition-colors duration-300"
					>
						+ New Course
					</button>
				</div>
				<div className="flex justify-between">
					{courses?.map((course) => (
						<Card 
							key={course.id}
							title={course.title}
							url={pathname + "/" + course.slug}
						/>
					))}
				</div>
			</section>

			<AdminNewCourseModal
				isOpen={activeModal}
				onCancel={() => setActiveModal(false)}
				onSave={(input) => handleCreateCourse(input)}
			/>
		</div>
	)
}

export default ProgramCoursePage