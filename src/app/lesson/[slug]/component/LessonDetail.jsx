"use client"

import Link from "next/link";
import RightArrow from "@/components/icons/RightArrow"
import Tick from "@/components/icons/Tick"

const LessonDetail = ({lesson , markComplete, admin = false}) => {
  return (
      <div className={`w-full ${admin ? "p-8" : ""}`}>

        <h1 className="text-center mx-auto text-3xl font-semibold">{lesson.order_number}. {lesson.title}</h1>
        <p className="my-10 text-xl font-semibold">{lesson.key_takeaway_text}</p>

        {lesson.lessonContents?.map((content, index) => {
          if (content.content_type === "image") {
            return (
              <div key={index} className="w-full">
                <img className="w-full h-full object-contain" src={content.content} alt="lesson picture" />
              </div>
            );
          } else {
            return (
              <p key={index} className="my-2 text-lg flex items-center gap-2">
                {content.content_type === "list" && <span className="text-4xl flex-shrink-0">•</span>}
                <span>{content.content}</span>
              </p>
            );
          }
        })}

        {!admin && (
          <div className="flex justify-between items-center flex-row-reverse my-10 w-full">
            <div
              onClick={markComplete}
              className={`flex items-center justify-start px-12 py-2 bg-green-800
              text-white text-lg cursor-pointer`}
            >
              បញ្ចប់មេរៀន <Tick />
            </div>
            <Link href={`${lesson.prevSlug?`/lesson/${lesson.prevSlug}`:`/content/${lesson.courseContentSlug}`}`} className={`flex items-center justify-start px-12 py-2 bg-primary text-white text-lg cursor-pointer`}><RightArrow className={`rotate-180 h-6 w-6`}/>{lesson.prevSlug?"ចំណុចមុន":"ទៅមេរៀន"}</Link>
          </div>
        )}
      </div>
  )
}

export default LessonDetail