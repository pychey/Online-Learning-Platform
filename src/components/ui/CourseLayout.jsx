"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Tick from "../icons/Tick"
import Certificate from "../icons/Certificate"
import RightArrow from "../icons/RightArrow"

const CourseLayout = ({children,course}) => {

    const pathname = usePathname();
    const isCertificatePath = pathname === `/course/${course.slug}/certificate`

    if (isCertificatePath && parseInt(course.completedPercentage) !== 100) {
        return(
            <h1 className="flex justify-center items-center relative mt-20 h-[50vh]">
                <Link href={`/course/${course.slug}`} className="flex justify-center items-center absolute left-12 top-12 text-lg"><RightArrow className={`rotate-180 h-12 aspect-square `}/>​ទៅទំព័រវគ្គសិក្សា</Link>
                <p className="text-red-500 text-2xl">សូមបញ្ចប់វគ្គសិក្សាមុនទទួលសញ្ញាបត្រ</p>
            </h1>
        )
    }

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
                <Link href={`/course/${course.slug}`} >ទំព័រវគ្គសិក្សា</Link>
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

            
            <Link href={`/quiz/${course.slug}`}>
                <div className="flex items-center justify-start border-b border-gray-200  gap-4 py-4  my-1">
                    <div className={` rounded-2xl h-4 aspect-square ${pathname===`/quiz/${course.slug}`||(isCertificatePath)?`text-primary-green font-bold`:``}`}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 6h12V4H8z"/></svg></div>
                    <div className={`${(pathname===`/quiz/${course.slug}`)||(isCertificatePath)?`text-primary-green font-bold`:``} `}> ធ្វើការប្រឡង</div>
                </div>
            </Link>

        </aside>
    </div>
  )
}

export default CourseLayout