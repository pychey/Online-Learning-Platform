'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { fetchProgramBySlug, patchProgram } from "@/lib/program"
import {
  getSlugFromPathname,
  buildProgramBreadcrumbs
} from "@/utils"
import Card from "@/app/admin/_components/Card"
import AdminNewCourseModal from "../../_components/AdminNewCourseModal"
import ProgramOverview from "@/app/program/[slug]/_components/ProgramOverview"
import AdminTitleInput from "../../_components/AdminTitleInput"
import AdminDescriptionInput from "../../_components/AdminDescriptionInput"
import AdminPointInput from "../../_components/AdminPointInput"
import LogoDropdown from "@/app/program/[slug]/_components/LogoDropdown"
import { LOGOS } from "./_logo"
import { createCourse } from "@/lib/course"
import InlineTitleInput from "@/components/ui/InlineTitleInput"

const ProgramCoursePage = () => {
	const [ loading, setLoading ] = useState(true)
	const [ activeModal, setActiveModal ] = useState(false)
	const [ program, setProgram ] = useState(null)
	const [ courses, setCourses ] = useState([])
	const { setBreadcrumbs } = useBreadcrumb()
	const router = useRouter()
	const pathname = usePathname()
	const slug = getSlugFromPathname(pathname)

	const getProgramDetail = async (slug) => {
		const response = await fetchProgramBySlug(slug)
		console.log(response)
		const logo = response.logo_url || LOGOS[0].value
  	const updatedProgram = { ...response, logo_url: logo }
		setProgram(updatedProgram)
		setBreadcrumbs(buildProgramBreadcrumbs(response))
		setLoading(false)

		setCourses(response.courses)
	}

	useEffect(() => {
		
		getProgramDetail(slug)
		
	}, [slug, setBreadcrumbs])

	if (loading) return <h1 className="mt-20">Loading...</h1>;
	
	const handleCreateCourse = async (input) => {
		const payload = {...input, programId: program.id}
		setActiveModal(false)
		await createCourse(payload)
		router.push(pathname + "/" + payload.slug)
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

	const handleSaveChanges = async () => {
    try {
      const updated = await patchProgram(slug, program);
      setProgram(updated); 
      alert("Changes saved successfully!");
    } catch (error) {
      alert("Failed to save changes. Please try again.");
      console.error(error);
    }
  };

	return(
		<div className="flex flex-col gap-4 p-4 px-6">

			<div className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<h1 className="font-semibold text-2xl">Program Title: </h1>
					<InlineTitleInput
						value={program.program_title}
						onChange={(e) => handleProgramChange(e, "program_title")}
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

			<div className="flex gap-4 -mt-2 border-t border-gray-300">
				<div className="flex flex-col gap-4">
					{/* <section className="flex flex-col gap-2.5">
						<h2 className="font-medium text-lg">Program Title</h2>
						<AdminTitleInput 
							value={program?.program_title}
							onChange={(e) => handleProgramChange(e, "program_title")}
							placeholder=""
						/>
					</section> */}

					<section className="flex flex-col gap-2.5 mt-3">
						<h2 className="font-medium text-lg">Program Logo</h2>
						<LogoDropdown
							value={program?.logo_url || ''}
							onChange={(val) => setProgram((prev) => ({ ...prev, logo_url: val }))}
							options={LOGOS}
						/>
					</section>

					<section className="flex flex-col gap-2.5">
						<h2 className="font-medium text-lg">Certificate Name</h2>
						<AdminTitleInput 
							value={program?.certificate_name || ""}
							onChange={(e) => handleProgramChange(e, "certificate_name")}
							placeholder="Program Certificate Name"
						/>
					</section>

					<section className="flex flex-col gap-2.5">
						<h2 className="font-medium text-lg">Program Description</h2>
						<AdminDescriptionInput 
							value={program?.about_text || ""} 
							onChange={(e) => handleProgramChange(e, "about_text")}
							placeholder="Description about this program"
						/>
					</section>
				</div>

				<div className="w-[2px] bg-gray-300 rounded-2xl"/>

				<div className="flex flex-col gap-4 mt-3 w-full">
					<section className="flex flex-col gap-2.5">
						<h2 className="font-medium text-lg">Desiged For</h2>
						<div className="flex flex-col gap-2">
							<AdminPointInput
								value={program?.firstDesignedFor_text || ""}
								onChange={(e) => handleProgramChange(e, "firstDesignedFor_text")}
								placeholder="Program Designed For 1"
							/>

							<AdminPointInput
								value={program?.secondDesignedFor_text || ""}
								onChange={(e) => handleProgramChange(e, "secondDesignedFor_text")}
								placeholder="Program Designed For 2"

							/>

							<AdminPointInput
								value={program?.thirdDesignedFor_text || ""}
								onChange={(e) => handleProgramChange(e, "thirdDesignedFor_text")}
								placeholder="Program Designed For 3"
							/>
						</div>
					</section>
				</div>
			</div>

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
				<div className="grid grid-cols-4 gap-4">
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