"use client";

import { englishToKhmerNumber } from "@/lib/englishToKhmerNumber.js";
import Cart from "@/components/icons/Cart.jsx";
import CheckCorrect from "@/components/icons/CheckCorrect.jsx";
import Clock from "@/components/icons/Clock.jsx";
import Laptop from "@/components/icons/Laptop.jsx";
import StarRating from "@/components/icons/StarRating";
import RightArrow from "@/components/icons/RightArrow.jsx"; 
import Link from "next/link.js";
import { useCart } from "@/app/context/CartContext"; 
import { useRouter } from "next/navigation";

const ProgramCourses = ({ courses }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (course) => {
    addToCart(course);
  };

  const handleBuyNow = (course) => {
    addToCart(course);
    router.push("/checkout");
  };

  return (
    <div className="grid gap-6 grid-cols-1 laptop:grid-cols-4 max-w-[1080px] w-full mx-auto p-4 mb-10">
      <h1 className="col-span-full mx-auto font-medium text-lg tablet:text-xl">
        កម្មវិធីសិក្សានេះមាន {englishToKhmerNumber(courses.length)} វគ្គ:
      </h1>2

      {courses.map((course) => {
        const isPaid =  false;

        return (
          <div
            key={course.id}
            className="relative flex flex-col border border-gray-300 text-sm w-full mb-10"
          >
            <Link href={`/product/${course.slug}`}>
              <img src={course.img_url} alt={course.slug} />
            </Link>
            <div className="flex flex-col gap-2 p-4">
              <h2 className="text-lg font-medium">{course.title}</h2>
              <StarRating
                ratingNumber={false}
                rating={course.rating}
                className="flex text-base select-none"
                outline={false}
              />
              <div className="flex items-center gap-2">
                <CheckCorrect size={16} />
                <h4>សញ្ញាបត្រវគ្គសិក្សា</h4>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <h4>{course.duration}</h4>
              </div>
              <div className="flex items-center gap-2">
                <Laptop size={16} />
                <h4>{course.online_percent} អនឡាញ</h4>
              </div>
            </div>
            {!isPaid && (
              <div className="absolute bottom-12 right-0 flex flex-col items-end p-3">
                <h4 className="line-through text-gray-400">
                  {course.original_price}
                </h4>
                <h2 className="font-medium text-xl laptop:text-lg">
                  {course.discounted_price}
                </h2>
              </div>
            )}
            <div className="absolute top-full left-0 flex w-full">
              {isPaid ? (
                <Link
                  href="/my-courses"
                  className="flex-1 h-10 flex justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-700 font-medium cursor-pointer transition-colors duration-300"
                >
                  វគ្គសិក្សាបានទិញរួច
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => handleAddToCart(course)}
                    className="flex-1 h-10 flex justify-center items-center gap-2 text-white bg-primary hover:bg-primary-hover font-medium cursor-pointer transition-colors duration-300"
                  >
                    បន្ថែមចូលកន្ត្រក <RightArrow size={12} />
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramCourses;
