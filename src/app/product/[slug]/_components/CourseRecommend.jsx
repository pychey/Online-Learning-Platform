'use client'

import CheckCorrect from "@/components/icons/CheckCorrect";
import Clock from "@/components/icons/Clock";
import Laptop from "@/components/icons/Laptop";
import StarRating from "@/components/icons/StarRating";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const CourseRecommend = ({ slug, programId }) => {
    const [loading,setLoading] = useState(true)
	const [error,setError] = useState('')
    const [otherCourses, setOtherCourses] = useState([])

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await axios.get(`/api/course`)
                setOtherCourses(response.data.filter(course => course.programId == programId && course.slug !== slug))
            } catch (error) {
                console.log(error)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchCourses()
    }, [])

    if (loading) return <h1 className="mt-20">Loading...</h1>;
    if (error) return <h1 className="mt-20">{error}</h1>;

    return (
        <div className="mx-auto my-4 flex flex-col items-center gap-8 p-4 max-w-[1050px] w-full">
            <h1 className="font-medium text-2xl">សិស្សក៏បានទិញវគ្គ</h1>
            <div className={'grid gap-10 grid-cols-1 laptop:grid-cols-3 max-w-[500px] laptop:max-w-[1000px] w-full'}>
                {otherCourses.map((course) => (
                    <div key={course.id} className="relative flex flex-col border border-gray-300 text-base w-full">
                        <Link href={`/product/${course.slug}`}>
                        <img src={course.img_url ||
                            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                        } alt={course.slug} />
                        </Link>
                        <div className="flex flex-col gap-2 p-4">
                            <h2 className="text-xl font-semibold">{course.title}</h2>
                            <StarRating ratingNumber={false} rating={course.rating} className='flex text-lg select-none' />
                            <div className="flex gap-2">
                                <CheckCorrect size={18} className='mt-0.5 text-primary'/>
                                <h4>សញ្ញាបត្រ</h4>
                            </div>
                            <div className="flex gap-2">
                                <Clock size={18} className='mt-0.5 text-primary'/>
                                <h4>{course.duration}</h4>
                            </div>
                            <div className="flex gap-2">
                                <Laptop size={18} className='mt-0.5 text-primary'/>
                                <h4>{course.online_percent} អនឡាញ</h4>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 flex flex-col p-3">
                            <h4 className="line-through text-gray-400">{course.original_price}</h4>
                            <h2 className="font-medium text-lg">{course.discounted_price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseRecommend;