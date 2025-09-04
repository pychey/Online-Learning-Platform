'use client'

import { englishToKhmerNumber } from "@/lib/englishToKhmerNumber.js";
import CheckCorrect from "@/components/icons/CheckCorrect.jsx";
import Clock from "@/components/icons/Clock.jsx";
import RightArrow from "@/components/icons/RightArrow.jsx";
import StarRating from "@/components/icons/StarRating.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const CourseManagement = ({ COURSE_MANAGEMENT_CONTENT }) => {
    const [programs, setPrograms] = useState([])

    useEffect(() => {
        async function fetchPrograms() {
            try {
                const response = await axios.get('/api/program')
                setPrograms(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchPrograms()
    }, [])

    if (!programs.length) return ( <p>Loading...</p> )

    return (
        <div className="flex flex-col items-center mb-4 p-4">
            {programs.map((program) => (
                <div id={program.slug} key={program.id} className="scroll-mt-20 mt-8 laptop:mt-4 grid grid-rows-[40px__1px_90px_auto] laptop:grid-rows-[70px_1px_50px_auto] mx-auto w-full max-w-[1050px]">
                    <div className="row-span-1 flex flex-col laptop:flex-row justify-between items-center">
                        <h2 className="font-semibold text-xl">ផ្នែក{program.certificate_name}</h2>
                        <h4 className="hidden laptop:block font-light text-lg">{englishToKhmerNumber(program.courses.length)} វគ្គបណ្តុះបណ្តាល</h4>
                    </div>
                    <hr className="h-[1px] bg-gray-300 border-none"></hr>
                    <div className="row-span-1 flex flex-col gap-2 laptop:flex-row items-center justify-center laptop:justify-start">
                        <RightArrow size={16} className='text-primary hover:text-purple-950 cursor-pointer hidden laptop:block'/>
                        <p>បញ្ចប់គ្រប់វគ្កបណ្ដុះបណ្តាលចំនួន {englishToKhmerNumber(program.courses.length)} ដើម្បីទទួលបាន</p>
                        <a href={`/program/${program.slug}`} className="text-primary underline">សញ្ញាបត្រផ្នែក{program.certificate_name}</a>
                    </div>
                    <div className={'row-span-1 grid gap-6 grid-cols-2 tablet:grid-cols-4'}>
                        {program.courses.map((course) => (
                            <div key={course.id} className="relative flex flex-col border border-gray-300 text-xs laptop:text-[13px] w-full">
                                <Link href={`/product/${course.slug}`}><img src={course.img_url} alt={course.slug} className="w-full h-[150px] object-cover" /></Link>
                                <div className="flex flex-col gap-2 p-2 laptop:p-4">
                                    <h2 className="text-base tablet:text-lg laptop:text-xl font-semibold">{course.title}</h2>
                                    <StarRating rating={course.rating} className='flex text-sm laptop:text-base select-none' />
                                    <div className="flex gap-2">
                                        <CheckCorrect size={16}/>
                                        <h4>សញ្ញាបត្រ</h4>
                                    </div>
                                    <div className="flex gap-2">
                                        <Clock size={16}/>
                                        <h4>{course.duration}</h4>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 flex flex-col p-1 items-end laptop:p-3">
                                    <h4 className="line-through text-gray-400">{course.original_price}</h4>
                                    <h2 className="font-medium text-lg">{course.discounted_price}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CourseManagement;