import { englishToKhmerNumber } from "../utils/englishToKhmerNumber.js";
import Cart from "./icons/Cart.jsx";
import CheckCorrect from "./icons/CheckCorrect.jsx";
import Clock from "./icons/Clock.jsx";
import Laptop from "./icons/Laptop.jsx";
import StarRating from "./icons/StarRating.jsx";

const ProgramCourses = ({ courses }) => {

    return (
        <div className={'grid gap-6 grid-cols-1 laptop:grid-cols-4 max-w-[1080px] w-full mx-auto p-4'}>
            <h1 className="col-span-full mx-auto font-medium text-lg tablet:text-xl">កម្មវិធីសិក្សានេះមាន {englishToKhmerNumber(courses.length)} វគ្គ:</h1>
            {courses.map((course, index) => (
                <div key={index} className="relative flex flex-col border border-gray-300 text-sm w-full mb-10">
                    <a href="/product/sample"><img src={course.thumbnail} alt={course.title} /></a>
                    <div className="flex flex-col gap-2 p-4">
                        <h2 className="text-lg font-medium">{course.title}</h2>
                        <StarRating ratingNumber={false} rating={course.rating} className='flex text-base select-none' outline={false}/>
                        <div className="flex items-center gap-2">
                            <CheckCorrect size={16}/>
                            <h4>សញ្ញាបត្រវគ្គសិក្សា</h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16}/>
                            <h4>{course.duration} ម៉ោង</h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <Laptop size={16}/>
                            <h4>១០០% អនឡាញ</h4>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 flex flex-col items-end p-3">
                        <h4 className="line-through text-gray-400">{course.originalPrice}</h4>
                        <h2 className="font-medium text-xl laptop:text-lg">{course.discountedPrice}</h2>
                    </div>
                    <button className="absolute top-full h-10 flex justify-center items-center gap-2 text-white bg-primary hover:bg-primary-hover w-full font-medium cursor-pointer transition-colors duration-300">
                        បន្ថែមចូលកន្រ្តក <Cart size={18} />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProgramCourses;