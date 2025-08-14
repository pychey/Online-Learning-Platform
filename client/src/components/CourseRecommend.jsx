import COURSES_RECOMMEND from "../data/course_recommend.js";
import CheckCorrect from "./icons/CheckCorrect.jsx";
import Clock from "./icons/Clock.jsx";
import Laptop from "./icons/Laptop.jsx";
import StarRating from "./icons/StarRating.jsx";

const CourseRecommend = () => {

    return (
        <div className="mx-auto mt-25 flex flex-col items-center gap-8 p-4 max-w-[1050px] w-full">
            <h1 className="font-medium text-2xl">សិស្សក៏បានទិញវគ្គ</h1>
            <div className={'grid gap-10 grid-cols-1 laptop:grid-cols-3 max-w-[500px] laptop:max-w-[1000px] w-full'}>
                {COURSES_RECOMMEND.map((course, index) => (
                    <div key={index} className="relative flex flex-col border border-gray-300 text-base w-full">
                        <a href='/product/sample'><img src={course.thumbnail} alt={course.title} /></a>
                        <div className="flex flex-col gap-2 p-4">
                            <h2 className="text-xl font-semibold">{index} {course.title}</h2>
                            <StarRating ratingNumber={false} rating={course.rating} className='flex text-lg select-none' />
                            <div className="flex gap-2">
                                <CheckCorrect size={18} className='mt-0.5'/>
                                <h4>សញ្ញាបត្រ</h4>
                            </div>
                            <div className="flex gap-2">
                                <Clock size={18} className='mt-0.5'/>
                                <h4>{course.duration} ម៉ោង</h4>
                            </div>
                            <div className="flex gap-2">
                                <Laptop size={18} className='mt-0.5'/>
                                <h4>១០០% អនឡាញ</h4>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 flex flex-col p-3">
                            <h4 className="line-through text-gray-400">{course.originalPrice}</h4>
                            <h2 className="font-medium text-lg">{course.discountedPrice}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CourseRecommend;