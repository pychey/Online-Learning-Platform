'use client'

import AdminDescriptionInput from "./AdminDescriptionInput"
import { useSortable } from "@dnd-kit/sortable"
import { useState } from "react"
import { CSS } from "@dnd-kit/utilities"
import VideoPreview from "@/components/ui/VideoPreview"

const SortableItem = ({ id, content, onChange, onUpdateType, onDelete, isOverlay }) => {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id })
	const [showImagePreview, setShowImagePreview] = useState(false)
	const [ showVideoPreview, setShowVideoPreview ] = useState(false)

	const style = {
		transform: CSS.Transform?.toString(transform),
		transition,
		zIndex: isDragging ? 9999 : undefined,
		backgroundColor: isDragging ? "#f0f0f0" : undefined,
		opacity: isDragging && !isOverlay ? 0 : 1,
		cursor: "grab",
	}

	const toggleImagePreview = () => setShowImagePreview(prev => !prev)
	const toggleVideoPreview = () => setShowVideoPreview(prev => !prev)

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

			{content.content_type === "image" && (
				<div className="w-full">
					{/* <label className="text-sm text-gray-500 mb-2 block">Image URL</label> */}
					<input
						className="px-4 py-3 w-full h-12 bg-gray-50 border border-gray-300 rounded-md text-gray-700 
											focus:outline-none transition-all duration-300"
						value={content.content || ""}
						onChange={onChange}
						placeholder="Enter image URL"
					/>

					<div className="mt-2">
						<button 
							className="text-sm text-primary hover:text-primary-hover cursor-pointer"
							onClick={toggleImagePreview}
						>
							{showImagePreview ? 'Hide Preview' : 'Show Preview'}
						</button>
					</div>

					{showImagePreview && content.content && (
						<img
							src={content.content}
							alt="Image preview"
							className="mt-2 max-w-full h-auto border border-gray-200 rounded-md"
						/>
					)}
				</div>
			)}

			{content.content_type === "video" && (
				<div className="w-full">
					<label className="text-sm text-gray-500 mb-2 block">Video Thumbnail URL</label>
					<input
						className="px-4 py-3 w-full h-12 text-gray-700 border rounded-md border-gray-300 focus:outline-none transition-all duration-300"
						value={content.thumbnail || ''}
						onChange={(e) => onChange(e, "thumbnail")}
						placeholder="Enter thumbnail URL"
					/>
					
					<label className="text-sm text-gray-500 mb-2 mt-4 block">Video URL</label>
					<input
						className="px-4 py-3 w-full h-12 text-gray-700 border rounded-md border-gray-300 focus:outline-none transition-all duration-300"
						value={content.video || ''}
						onChange={(e) => onChange(e, "video")}
						placeholder="Enter video URL"
					/>

					<div className="mt-2">
						<button 
							className="text-sm text-primary hover:text-primary-hover cursor-pointer"
							onClick={toggleVideoPreview}
						>
							{showVideoPreview ? 'Hide Preview' : 'Show Preview'}
						</button>
					</div>
					{/* <p>{content.content}</p> */}
							
					{showVideoPreview && content.thumbnail && (
						<VideoPreview 
							thumbnail={content.thumbnail}
							youtubeLink={content.video}
							className="mt-4"
						/>
					)}
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
					<option value="image">Image</option>
					<option value="video">Video</option>
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