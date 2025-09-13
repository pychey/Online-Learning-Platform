'use client'

import AdminDescriptionInput from "./AdminDescriptionInput"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

const SortableItem = ({ id, content, onChange, onUpdateType, onDelete, isOverlay }) => {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })

	const style = {
		transform: CSS.Transform?.toString(transform),
		transition,
		zIndex: isDragging ? 9999 : undefined,
		backgroundColor: isDragging ? "#f0f0f0" : undefined,
		opacity: isDragging && !isOverlay ? 0 : 1,
		cursor: "grab",
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className="flex justify-between gap-4 w-full border border-gray-200 rounded-md p-4 bg-white"
		>
			{content.content_type === "heading" && (
				<input
					className="px-4 py-3 w-full bg-gray-50 border rounded-md border-gray-300 font-semibold 
									text-gray-700 focus:text-black focus:shadow-sm focus:outline-none 
										transition-all duration-300"					
					value={content.content || ""}
					onChange={onChange}
					onMouseDown={(e) => e.stopPropagation()} 
					placeholder="Enter heading"
				/>
			)}

			{content.content_type === "text" && (
				<div className="w-full">
					<AdminDescriptionInput
						value={content.content || ""}
						onChange={onChange}
						placeholder="Enter text"
					/>
				</div>
			)}

			{content.content_type === "space" && (
				<div className="w-full">
					<label className="text-sm text-gray-500 mb-2 block">Line Break</label>
					<p className="text-gray-400 italic text-sm">This will render a line break.</p>
				</div>
			)}

			{content.content_type === "list" && (
				<div className="w-full">
					<div className="flex px-4 bg-gray-50 border rounded-md border-gray-300 font-semibold">
						<p className="my-auto mr-2">•</p>
						<input
							className="w-full h-12 text-gray-700 focus:text-black focus:outline-none transition-all duration-300"							value={content.content || ""}
							onChange={onChange}
							placeholder="Enter list item"
						/>
					</div>
				</div>
			)}

			<div className="content-end mb-4 h-9">
				<select
					className="border border-gray-300 rounded-md text-sm h-full p-2 cursor-pointer"
					value={content.content_type || "heading"}
					onChange={onUpdateType}
				>
					<option value="heading">Heading</option>
					<option value="text">Text</option>
					<option value="list">List</option>
					<option value="space">Line Break</option>
				</select>
			</div>

			<button
				className="mb-auto text-red-500 hover:text-red-700 text-sm"
				onClick={onDelete}
			>
				Delete
			</button>
		</div>
	)
}

export default SortableItem