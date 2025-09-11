"use client"

import Link from "next/link"
import Tick from "@/components/icons/Tick"
import RightArrow from "@/components/icons/RightArrow"

const ContentDetail = ({content,markComplete,errorMark=""}) => {
  console.log(content)

  return (
          <div className="w-full">

        <h1 className="text-center mx-auto mb-12 text-3xl font-semibold">{content.order_number}. {content.title}</h1>

        <p className="my-10 text-lg indent-8">{content.introduction_text}</p>
        <p className="my-10 text-lg indent-8">{content.starting_paragraph}</p>
        <p className="my-10 text-lg indent-8">{content.body_paragraph}</p>
        <p className="my-10 text-lg indent-8">{content.ending_paragraph}</p>

        {content.lessons&& content.lessons.length > 0 &&(
          <>
            <p className="text-2xl font-semibold">ចំណុច</p>
            {content.lessons.map((lesson,index)=>(
            <Link key={index} href={`/lesson/${lesson.slug}`}>
              <div className="flex justify-start items-center gap-4 my-6 border border-gray-200 py-6 px-8">
                <div className={`relative border-4 border-gray-200 rounded-2xl h-6 w-6`}><Tick className={` h-6 w-6 ${lesson.isCompleted?"block":"hidden"} absolute -left-1 -top-1 text-white bg-green-300 rounded-2xl`}/></div>
                <div className="text-lg">{lesson.title}</div>
              </div>
            </Link>
          ))}
          </>
        )}

        <div className="flex justify-between items-center flex-row-reverse my-10 w-full">

          <div
            onClick={markComplete}
            className={`flex items-center justify-start relative px-12 py-2 bg-green-800
             text-white text-lg cursor-pointer`}
          >
            បញ្ចប់មេរៀន <Tick /> 
              {errorMark&&<span className="absolute -top-7 left-0 text-red-600">
                * {errorMark}
              </span>}
          </div>
            <Link href={content.prevSlug?`/content/${content.prevSlug}`:`/course/${content.courseSlug}`} className={`flex items-center justify-start px-12 py-2 bg-primary text-white text-lg cursor-pointer`}><RightArrow className={`rotate-180 h-6 w-6`}/>{content.prevSlug?"មេរៀនមុន":"ទៅមេរៀន"}</Link>
          </div>
      </div>
  )
}

export default ContentDetail