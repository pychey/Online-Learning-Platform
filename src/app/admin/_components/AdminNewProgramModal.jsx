'use client'

import Modal from "@/components/ui/Modal"
import { useState } from "react"

const AdminNewProgramModal = ({ isOpen, onCancel, onSave }) => {
	const [ titleInput, setTitleInput ] = useState('');
	const [ slugInput, setSlugInput ] = useState('');

	return(
		<Modal 
			isOpen={isOpen}
			onCancel={() => {
				setTitleInput('')
				onCancel()
			}}
			onSave={() => {
				onSave({
					program_title: titleInput,
					slug: slugInput,
				})
				setTitleInput('')
				setSlugInput('')
			}}
		>
			<h1 className="font-semibold text-2xl text-secondary">Create New Program</h1>

			<div className="mt-2 mb-3">
				<h3 className="font-medium mb-2">Program Title</h3>
				<input
					type="text"
					value={titleInput}
					onChange={(e) => setTitleInput(e.target.value)}
					placeholder={"Title"}
					className="px-4 py-3 w-full bg-white border rounded-md border-admin-border font-medium text-xl 
										text-[#707070] focus:text-black focus:shadow-xs focus:outline-none transition-all duration-300"
				/>	
			</div>

			<div className="mb-6">
				<h3 className="font-medium mb-2">Program Slug</h3>
				<input
					type="text"
					value={slugInput}
					onChange={(e) => setSlugInput(e.target.value)}
					placeholder={"Slug"}
					className="px-4 py-3 w-full bg-white border rounded-md border-admin-border font-medium text-xl 
										text-[#707070] focus:text-black focus:shadow-xs focus:outline-none transition-all duration-300"
				/>	
			</div>					
		</Modal>
	)
}

export default AdminNewProgramModal 