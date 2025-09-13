'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { fetchAllCourses } from "@/lib/course"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Card from "../_components/Card"
import AdminNewCourseModal from "../_components/AdminNewCourseModal"
import AdminCourseCard from "../_components/AdminCourseCard"

const CoursesPage = () => {
	const [ activeModal, setActiveModal ] = useState(false)
	const [ courses, setCourses ] = useState([])
	const { setBreadcrumbs } = useBreadcrumb()
	const router = useRouter()
	const pathname = usePathname()

	const getCourses = async () => {
		const fetchedCourses = await fetchAllCourses()
		setCourses(fetchedCourses)
		console.log(fetchedCourses);
	}
	
	useEffect(() => {
		const newBreadcrumbs = [
			{label: "Admin", url: "/admin"},
			{label: "Course", url: "/admin/course"}
		]
		getCourses()
		setBreadcrumbs(newBreadcrumbs)	
	}, [setBreadcrumbs])

	return(
		<div className="p-4">
			<div className="flex justify-between items-center">
				<h1 className="font-semibold text-xl">Courses</h1>
			</div>

			<div className="grid grid-cols-4 gap-4 my-4">
				{courses.map((data, index) => (
					<AdminCourseCard
						key={index}
						data={data}
						url={"/admin/program/" + data?.program.slug + "/" + data.slug}
					/>
				))}
			</div>

		</div>
	)
}

export default CoursesPage