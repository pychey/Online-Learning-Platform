'use client'
import { useState, useEffect } from "react"
import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import Card from "../_components/Card"
import AdminNewProgramModal from "../_components/AdminNewProgramModal"
import { fetchPrograms } from "@/lib/program"

const AdminProgramPage = () => {
	const [ activeModal, setActiveModal ] = useState(false)
	const [ programs, setPrograms ] = useState([null])
	const { setBreadcrumbs } = useBreadcrumb()
	
	const getPrograms = async () => {
		const fetchedPrograms = await fetchPrograms()
		setPrograms(fetchedPrograms)
	}

	useEffect(() => {
		const newBreadcrumbs = [
			{label: "Admin", url: "/admin"},
			{label: "Program", url: "/admin/program"}
		]
		getPrograms()
		setBreadcrumbs(newBreadcrumbs)

	}, [setBreadcrumbs])

	const handleCreateProgram = (input) => {
		setActiveModal(false)
		setPrograms(prev => [...prev, {title: input, slug: "LOL"}])
	}

	if (programs === null) return(<h1>Loading</h1>)
	return(
		<div className="p-4">
			<div className="flex justify-between items-center">
				<h1 className="font-semibold text-xl">Programs</h1>
				<button 
					onClick={() => setActiveModal(true)}
					className="px-4 py-1.5 h-10 bg-primary hover:bg-primary-hover rounded-sm font-medium 
									text-white cursor-pointer transition-colors duration-300"
				>
					+ Create Program
				</button>
			</div>

			<div className="grid grid-cols-4 gap-y-4 my-4">
				{programs.map((data, index) => (
					<Card	
						key={index}
						title={data?.program_title}
						url={"/admin/program/" + data?.slug}
					/>
				))}
			</div>
			
			<AdminNewProgramModal
				isOpen={activeModal}
				onCancel={() => setActiveModal(false)}
				onSave={(input) => handleCreateProgram(input)}
			/>
		</div>
	)
}

export default AdminProgramPage