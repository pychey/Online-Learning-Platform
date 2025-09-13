'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { buildLessonBreadcrumbs, getSlugFromPathname } from "@/utils"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import AdminDescriptionInput from "@/app/admin/_components/AdminDescriptionInput"
import InlineTitleInput from "@/components/ui/InlineTitleInput"
import Menu from "@/app/admin/_components/Menu"
import SortableItem from "@/app/admin/_components/SortableItem"
import LessonDetail from "@/app/lesson/[slug]/component/LessonDetail"
import { getLessonBySlug, saveLesson } from "@/lib/lesson"

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

const LessonPage = () => {
  const [originalLesson, setOriginalLesson] = useState(null)
  const [lesson, setLesson] = useState({ lessonContents: [] })
  const [activeId, setActiveId] = useState(null)
  const pathname = usePathname()
  const slug = getSlugFromPathname(pathname)
  const { setBreadcrumbs } = useBreadcrumb()

  const getLesson = async () => {
    const response = await getLessonBySlug(slug, true)
    setLesson(response)
    setOriginalLesson(response)

    const newBreadcrumbs = buildLessonBreadcrumbs(
      response.courseContent.course.program,
      response.courseContent.course,
      response.courseContent,
      { title: response.title, slug: response.slug }
    )
    setBreadcrumbs(newBreadcrumbs)
  }

  useEffect(() => {
    if (slug) getLesson()
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
      const updated = [...prev.lessonContents]
      const current = updated[index]
      let transformedContent = current.content

      if (newType === "list") {
        transformedContent = Array.isArray(current.content) ? current.content : [current.content || ""]
      } else if (newType === "text" || newType === "heading") {
        transformedContent = Array.isArray(current.content) ? current.content.join(", ") : current.content
      } else if (newType === "space") {
        transformedContent = ""
      }

      updated[index] = { ...current, content_type: newType, content: transformedContent }
      return { ...prev, lessonContents: updated }
    })
  }

  const handleAddContent = () => {

    setLesson(prev => {
      const updated = [...(prev.lessonContents || [])]
      updated.push({
        id: crypto.randomUUID(),
        content_type: "heading",
        content: "",
        order_number: updated.length + 1,
      })
      return { ...prev, lessonContents: updated }
    })
  }

  const handleRemoveContent = (index) => {
    setLesson(prev => {
      const updated = prev.lessonContents
        .filter((_, idx) => idx !== index)
        .map((item, idx) => ({
          ...item,
          order_number: idx + 1, 
        }))
        
      return { ...prev, lessonContents: updated }
    })
  }
  
  const handleSaveChanges = async () => {
    if (!originalLesson) return

    const current = lesson.lessonContents
    const original = originalLesson.lessonContents

    const toCreate = current.filter(item => !original.some(o => o.id === item.id))
    const toDelete = original.filter(item => !current.some(c => c.id === item.id))
    const toUpdate = current.filter(item => {
      const originalItem = original.find(o => o.id === item.id)
      if (!originalItem) return false

      return (
        item.content !== originalItem.content ||
        item.content_type !== originalItem.content_type ||
        item.order_number !== originalItem.order_number
      )
    })

    // console.log(toCreate);
    // console.log(toDelete);
    // console.log(toUpdate);
    const payload = {
      toCreate,
      toDelete,
      toUpdate,
      lessonId: lesson.id,
      lesson
    }

    await saveLesson(payload)
  }


  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 2,
      },
    })
  )

  const handleDragStart = (event) => {
    setActiveId(event.active.id)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over || active.id === over.id) {
      setActiveId(null)
      return
    }

    setLesson(prev => {
      const oldIndex = prev.lessonContents.findIndex(item => item.id === active.id)
      const newIndex = prev.lessonContents.findIndex(item => item.id === over.id)
      const reordered = arrayMove(prev.lessonContents, oldIndex, newIndex).map((item, idx) => ({
        ...item,
        order_number: idx + 1,
      }))
      return { ...prev, lessonContents: reordered }
    })

    setActiveId(null)
  }

  const sortedContents = [...lesson.lessonContents].sort((a, b) => a.order_number - b.order_number)

  return (
    <div className="flex flex-col gap-4 p-5 h-full">
      <div className="flex justify-between w-full">
        <section className="flex items-center gap-3 font-medium">
          <h2 className="font-semibold text-2xl">Lesson Title</h2>
          <InlineTitleInput
            value={lesson.title || ""}
            onChange={(e) => setLesson(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Chapter Title"
            className="font-semibold text-2xl"
          />
        </section>

        <section className="flex gap-2">
          <button
						onClick={handleSaveChanges}
						className="px-4 h-10 bg-primary hover:bg-primary-hover font-medium text-white 
											rounded-sm transition duration-200 cursor-pointer"
					>
						Save Changes
					</button>
          <Menu model="Lesson" data={lesson} />
        </section>
      </div>

      <section className="flex flex-col gap-3 font-medium">
        <h2>Lesson Content</h2>
        <div className="flex gap-4 justify-between w-full">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={sortedContents.map(item => item.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex flex-col gap-4 w-full">
                {sortedContents.map((content, index) => (
                  <SortableItem
                    key={content.id}
                    id={content.id}
                    content={content}
                    onChange={(e) => handleLessonContentChanges(e, index)}
                    onUpdateType={(e) => updateContentType(index, e.target.value)}
                    onDelete={() => handleRemoveContent(index)}
                  />
                ))}
              </div>
            </SortableContext>

            <DragOverlay>
              {activeId ? (
                <SortableItem
                  id={activeId}
                  content={lesson.lessonContents.find(item => item.id === activeId)}
                  isOverlay
                  onChange={() => {}}
                  onUpdateType={() => {}}
                  onDelete={() => {}}
                />
              ) : null}
            </DragOverlay>
          </DndContext>

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
          <LessonDetail lesson={lesson} admin />
        </div>
      </section>
    </div>
  )
}

export default LessonPage
