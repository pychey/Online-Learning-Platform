"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Tick from "../icons/Tick"

const CourseLayout = ({children,course}) => {

    const pathname = usePathname();

  return (
    <div className="flex items-start justify-center gap-10 mt-32 mb-10 mx-auto max-w-[1100px] w-full ">
        <div className="flex-3 border-r border-gray-200 pr-10">
            {children}
        </div>
        <aside className="flex-1 pt-6 mb-10">

            <h1 className="text-xl mb-2">ដំណាក់កាល</h1>

            <div className="relative w-full bg-gray-200 h-1 rounded-2xl">
                <div className={`absolute left-0 top-0 bg-primary-green h-1 rounded-2xl`} style={{width:`${course.completedPercentage}%`}}></div>
            </div>

            <h1 className="mt-1 font-semibold text-primary-green">{course.completedPercentage}% បានជោគជ័យ</h1>

            <h2 className="my-4 text-lg">មាតិកា</h2>

            <div className="underline mb-4">
                <Link href={`/course/${course.slug}`} >ទំព័រមេរៀន</Link>
            </div>

            {course.courseContents.map((content)=>{

                const isActive = pathname === `/content/${content.slug}` || content.lessons?.some((lesson) => pathname === `/lesson/${lesson.slug}`);


                return(
                <div key={content.id} className="w-full">
                    <div className="flex items-center justify-start  gap-4 py-4 border-b border-gray-200">

                        <div className={`relative border-2 ${isActive?"border-blue-700":"border-gray-200"} rounded-2xl h-4 w-4 aspect-square`}><Tick className={` h-[18px] w-[18px] ${content.isCompleted?"block":"hidden"} absolute -left-0.5 -top-1 text-white bg-primary-green rounded-2xl`}/></div>
                        <Link href={`/content/${content.slug}`} className={`${isActive ? "text-blue-700 font-semibold" : ""}`}>{content.order_number}. {content.title}</Link>

                    </div>
                    {content.lessons&&isActive&&(
                        <div className="bg-gray-100 w-[90%] ml-auto px-2 rounded-lg">
                            {content.lessons.map((l,index)=>{
                            const isActiveLesson=pathname===`/lesson/${l.slug}`
                            return(
                
                                <div key={index} className="flex items-center justify-start  gap-4 py-4  my-1">
                                    <div className={`relative border-2 border-gray-400  rounded-2xl h-4 aspect-square`}><Tick className={` h-[17px] w-[17px] ${l.isCompleted?"block":"hidden"} absolute -left-[2.3px] -top-0.5 text-white bg-primary-green rounded-2xl`}/></div>
                                    <Link href={`/lesson/${l.slug}`} className={`${isActiveLesson?`font-semibold`:`font-light`} `}> {l.title}</Link>
                                </div>
                            )})}
                        </div>
                    )}
                </div>
            )})}

        </aside>
    </div>
  )
}

export default CourseLayout