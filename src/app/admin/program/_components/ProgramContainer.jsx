'use client'
import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import Card from "../../_components/Card"
import { useEffect } from "react"
import { PROGRAM_DATA } from "@/data/admin"

const ProgramContainer = () => {
	const { setBreadcrumbs } = useBreadcrumb()

	useEffect(() => {
		const newBreadcrumbs = [
			{label: "Admin", url: "/admin"},
			{label: "Program", url: "/admin/program"}
		]

		setBreadcrumbs(newBreadcrumbs)
	}, [setBreadcrumbs])
	 
	return(
		<div className="flex justify-between my-4">
			{PROGRAM_DATA.map((data, index) => (
				<Card	
					key={index}
					title={data.title}
					url={"/admin/program/" + data.slug}
				/>
			))}
		</div>
	)
}

export default ProgramContainer