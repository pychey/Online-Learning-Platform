'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchProgramBySlug } from "@/lib/program"
import Card from "@/app/admin/_components/Card"
import {
  getSlugFromPathname,
  findProgramBySlug,
  findCoursesByProgramId,
  buildProgramBreadcrumbs
} from "@/utils"

import AdminNewCourseModal from "../../_components/AdminNewCourseModal"
import ProgramOverview from "@/app/program/[slug]/_components/ProgramOverview"
import AdminTitleInput from "../../_components/AdminTitleInput"
import AdminDescriptionInput from "../../_components/AdminDescriptionInput"
import AdminPointInput from "../../_components/AdminPointInput"

const ProgramCoursePage = () => {
	const [ loading, setLoading ] = useState(true)
	const [ activeModal, setActiveModal ] = useState(false)
	const [ program, setProgram ] = useState(null)
	const [ courses, setCourses ] = useState([])
	const { setBreadcrumbs } = useBreadcrumb()
	const pathname = usePathname()
	const slug = getSlugFromPathname(pathname)

	const getProgramDetail = async (slug) => {
		const response = await fetchProgramBySlug(slug)
		console.log(response)
		setProgram(response)
		setBreadcrumbs(buildProgramBreadcrumbs(response))
		setLoading(false)

		setCourses(response.courses)
	}

	useEffect(() => {
		
		getProgramDetail(slug)

	}, [slug, setBreadcrumbs])

	if (loading) return <h1 className="mt-20">Loading...</h1>;
	
	const handleCreateCourse = (input) => {
		alert(input)
	}

	const handleProgramChange = (e, field, index = null) => {
		if (index === null) setProgram(prev => ({...prev, [field]: e.target.value}))
		else {
			setProgram(prev => ({
        ...prev,
        [field]: prev[field].map((item, i) =>
          i === index ? e.target.value : item
        )
      }))
		}
	}

	return(
		<div className="flex flex-col gap-4 p-4 px-6">

			<section className="flex flex-col gap-2.5">
        <h2 className="font-medium text-lg">Program Title</h2>
        <AdminTitleInput 
          value={program?.program_title}
          onChange={(e) => handleProgramChange(e, "program_title")}
          placeholder=""
        />
      </section>

			<section className="flex flex-col gap-2.5">
        <h2 className="font-medium text-lg">Certificate Name</h2>
        <AdminTitleInput 
          value={program?.certificate_name}
          onChange={(e) => handleProgramChange(e, "certificate_name")}
          placeholder=""
        />
      </section>

      <section className="flex flex-col gap-2.5">
      	<h2 className="font-medium text-lg">Program Description</h2>
        <AdminDescriptionInput 
          value={program?.about_text} 
          onChange={(e) => handleProgramChange(e, "about_text")}
        />
      </section>
			
			<section className="flex flex-col gap-2.5">
        <h2 className="font-medium text-lg">Desiged For</h2>
        <div className="flex flex-col gap-2">
          <AdminPointInput
            value={program.firstDesignedFor_text}
            onChange={(e) => handleProgramChange(e, "firstDesignedFor_text")}
          />

					<AdminPointInput
            value={program.secondDesignedFor_text}
            onChange={(e) => handleProgramChange(e, "secondDesignedFor_text")}
          />

					<AdminPointInput
            value={program.thirdDesignedFor_text}
            onChange={(e) => handleProgramChange(e, "thirdDesignedFor_text")}
          />
        </div>
      </section>

			<section className="flex flex-col gap-2.5 pt-2">
        <h2 className="font-medium text-2xl">Preview</h2>
        <div className="bg-white rounded-md border border-admin-border">
					<ProgramOverview 
						program={program}
						admin={true}
					/>
        </div>
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