'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
  getSlugFromPathname,
  findCourseBySlug,
  findProgramById,
  findChaptersByCourseId,
  buildCourseBreadcrumbs,
  findLessonsByChapterId
} from "@/utils"
import AdminTitleInput from "@/app/admin/_components/AdminTitleInput"
import AdminDescriptionInput from "@/app/admin/_components/AdminDescriptionInput"
import Link from "next/link"
import CourseDescription from "@/app/product/[slug]/_components/CourseDescription"
import AdminLinkInput from "@/app/admin/_components/AdminLinkInput"
import AdminPointInput from "@/app/admin/_components/AdminPointInput"
import { getCourseBySlug, getCourseContent, getCourseWithContent, patchCourse } from "@/lib/course"
import InlineTitleInput from "@/components/ui/InlineTitleInput"

const CoursePage = () => {
  const [ loading, setLoading ] = useState(true)
  const [ course, setCourse ] = useState(null)
  const [ chapters, setChapters ] = useState([])
  const [ openedChapters, setOpenedChapters ] = useState({})
  const { setBreadcrumbs } = useBreadcrumb()
  const pathname = usePathname()
  const slug = getSlugFromPathname(pathname)

  const getCourse = async () => {
    const response = await getCourseWithContent(slug)
    const newBreadcrumbs = buildCourseBreadcrumbs(response.program, response)

    setCourse(response)
    setChapters(response.courseContents)
    setBreadcrumbs(newBreadcrumbs)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getCourse()
    // const currCourse = findCourseBySlug(slug)
    // const currProgram = findProgramById(currCourse.program_id)
    // const courseChapters = findChaptersByCourseId(currCourse.id)
    // const newBreadcrumbs = buildCourseBreadcrumbs(currProgram, currCourse)
    
    // // setCourse(currCourse)
    // setChapters(courseChapters)
    // setBreadcrumbs(newBreadcrumbs)
  }, [slug, setBreadcrumbs])
  // }, [])

  const handleToggleChapter = (chapterId) => {
    setOpenedChapters((prevState) => ({
      ...prevState,
      [chapterId]: !prevState[chapterId]
    }))
  }

  const handleCourseChange = (e, field, index = null, subfield = null) => {
    if (index === null && !subfield) {
      setCourse(prev => ({ ...prev, [field]: e.target.value }))
    } 
    
    else if (index !== null) {
      setCourse(prev => ({
        ...prev,
        [field]: prev[field].map((item, i) =>
          i === index ? e.target.value : item
        )
      }))
    } 
    else if (subfield) {
      setCourse(prev => ({
        ...prev,
        [field]: {
          ...prev[field],
          [subfield]: e.target.value
        }
      }))
    }
  }

  const handleSaveChanges = async () => {
    try {
      const updated = await patchCourse(slug, course);
      setCourse(updated); 
      alert("Changes saved successfully!");
    } catch (error) {
      alert("Failed to save changes. Please try again.");
      console.error(error);
    }
  }

  if (loading) return (<h1>Loading...</h1>)

  return (
		<div className="flex flex-col gap-4 p-5">

      <div className="flex justify-between items-center">
				<div className="flex items-center gap-2">
					<h1 className="font-semibold text-2xl">Course Title: </h1>
					<InlineTitleInput
						value={course.title}
						onChange={(e) => handleCourseChange(e, "title")}
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

      <div className="flex gap-6 -mt-2 border-t border-gray-300">
        <div className="flex flex-col gap-4 mt-3">
          <section className="flex flex-col gap-2.5">
            <h2 className="font-medium text-lg">Course Description</h2>
            <AdminDescriptionInput 
              value={course?.introduction_text || ""} 
              onChange={(e) => handleCourseChange(e, "introduction_text")}
            />
          </section>

          <section className="flex flex-col gap-2.5">
            <h2 className="font-medium text-lg">Course Skills</h2>
            <div className="flex flex-col gap-2">
              {/* {course.skills.map((skill, index) => (
                <AdminPointInput
                  key={index}
                  value={skill}
                  onChange={(e) => handleCourseChange(e, "skills", index)}
                />
              ))} */}
              <AdminPointInput
                value={course.first_skill || ""}
                onChange={(e) => handleCourseChange(e, "first_skill")}
              />

              <AdminPointInput
                value={course.second_skill || ""}
                onChange={(e) => handleCourseChange(e, "second_skill")}
              />

              <AdminPointInput
                value={course.third_skill || ""}
                onChange={(e) => handleCourseChange(e, "third_skill")}
              />
            </div>
          </section>

          <section className="flex flex-col gap-2.5">
            <h2 className="font-medium text-lg">About Course</h2>
            <div className="space-y-2">
              <AdminDescriptionInput 
                value={course.main_text || ""}
                onChange={(e) => handleCourseChange(e, "main_text")}
              />

              <AdminDescriptionInput 
                value={course.detail_text || ""}
                onChange={(e) => handleCourseChange(e, "detail_text")}
              />

              <AdminDescriptionInput 
                value={course.conclusion_text || ""}
                onChange={(e) => handleCourseChange(e, "conclusion_text")}
              />
              
            </div>         
          </section>
        </div>

        <div className="w-[2px] bg-gray-300 rounded-2xl"/>

        <div className="flex flex-col gap-4 w-full mt-3">
          <section className="flex flex-col gap-2.5">
            <h2 className="font-medium text-lg">Video Link</h2>
            <AdminLinkInput
              value={course.youtube_url || ""} // Link youtube
              placeholder={"https://example.com"}
              onChange={(e) => handleCourseChange(e, "youtube_url")}
            />
          </section>

          <section className="flex gap-4">
            <div className="space-y-2.5">
              <h2 className="font-medium text-lg">Course Price</h2>
              <input
                type="text"
                value={course.discounted_price || ""}
                onChange={(e) => handleCourseChange(e, "discounted_price")}
                placeholder={"10$"}
                className="px-4 py-3 w-full bg-white border rounded-md border-admin-border font-medium 
                          text-[#707070] focus:text-black focus:shadow-sm focus:outline-none transition-all duration-300"
              />
            </div>
              
            <div className="space-y-2.5">
              <h2 className="font-medium text-lg">Original Price</h2>
              <input
                type="text"
                value={course.original_price || ""}
                onChange={(e) => handleCourseChange(e, "original_price")}
                placeholder={"10$"}
                className="px-4 py-3 w-full bg-white border rounded-md border-admin-border font-medium 
                          text-[#707070] focus:text-black focus:shadow-sm focus:outline-none transition-all duration-300"
              />
            </div>

            <div className="space-y-2.5">
              <h2 className="font-medium text-lg">Duration</h2>
              <input
                type="text"
                value={course.duration || ""}
                onChange={(e) => handleCourseChange(e, "duration")}
                placeholder={"៣ ម៉ោង"}
                className="px-4 py-3 w-full bg-white border rounded-md border-admin-border font-medium 
                          text-[#707070] focus:text-black focus:shadow-sm focus:outline-none transition-all duration-300"
              />
            </div>
            
          </section>

          <section className="space-y-2.5">
            <h2 className="font-medium text-lg">Course Thumbnail Image (URL)</h2>
            <AdminLinkInput
              value={course.img_url || ""}
              onChange={(e) => handleCourseChange(e, "img_url")}
              placeholder="https://example.com/image.jpg"
            />
            {course.img_url && (
              <div className="mt-2 w-full">
                <img
                  src={course.img_url}
                  alt="Course thumbnail preview"
                  className="w-full h-[260px] aspect-video object-cover rounded-md border border-gray-300 shadow-sm"
                />
              </div>
            )}
          </section>
        </div>

      </div>

      <section className="flex flex-col gap-2.5 pt-2">
        <h2 className="font-medium text-2xl">Preview</h2>
        <div className="bg-white rounded-md border border-admin-border">
          <CourseDescription course={course} admin={true}/>
        </div>
      </section>

      <section className="flex flex-col gap-2 p-6 w-full bg-white rounded-md border border-admin-border">
        <h2 className="font-medium text-xl">Content</h2>

        <div className="flex gap-3 text-xs"> 
          <h3>{chapters.length} Chapters</h3>
          {/* <h3>24 Lessons</h3> */}
        </div>

        <div className="flex flex-col gap-2 py-4 w-full">
          {chapters.map((chapter, index) => (
            <div 
              key={chapter.id}
            >
              <div 
                className={`flex items-center gap-1 p-4 w-full rounded-lg border border-admin-border 
                            ${openedChapters[chapter.id] ? "border-b-0 rounded-b-none" : ""}`}
              >
                <button onClick={() => handleToggleChapter(chapter.id)} >
                  <Triangle 
                    className={`${openedChapters[chapter.id] ? 'rotate-0' : 'rotate-[-90deg]'} transform 
                              duration-300 hover:cursor-pointer`}
                  />
                </button>
                <Link 
                  href={pathname + "/" + chapter.slug}
                  className="flex justify-between items-center flex-1 text-lg hover:underline hover:cursor-pointer"
                >
                  <h2>{index + 1}. {chapter.title}</h2>
                  <p className="text-sm text-primary font-medium">{chapter.lessons.length === 0 ? "No Lesson" : chapter.lessons.length + " Lessons"}</p>
                </Link>
              </div>
              {openedChapters[chapter.id] && chapter.lessons && chapter.lessons.map((lesson, lindex) => (
                <Link 
                  key={lesson.id}
                  href={pathname + "/" + chapter.slug + "/" + lesson.slug}
                  className={`flex items-center gap-3 w-full p-4 pl-12 border border-b-0 border-admin-border transform duration-300`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <h3>{lesson.title}</h3>
                </Link>
              ))}
              {openedChapters[chapter.id] && (
                <button className={`flex justify-start px-5 py-4 w-full font-medium border border-admin-border rounded-b-lg`}>
                  <p className="text-primary">+ Add Lesson</p>
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

		</div>
	)
}

const Triangle = ({ size = 24, className, color = "currentColor" }) => {
  return(
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24"
      className={className}
    >
      <path 
        fill={color}
        d="M11.646 15.146L5.854 9.354a.5.5 0 0 1 .353-.854h11.586a.5.5 0 0 1 .353.854l-5.793 5.792a.5.5 0 0 1-.707 0" 
      />
    </svg>
  )
}

export default CoursePage
