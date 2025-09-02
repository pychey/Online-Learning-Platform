"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

export default function CartPage() {
  const router = useRouter(); 

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Essential Management Skills",
      price: 14.99,
      originalPrice: 50.0,
      img: "/course.png",
    },
    {
      id: 2,
      title: "Marketing and Communications",
      price: 14.99,
      originalPrice: 50.0,
      img: "/course.png",
    },
    {
      id: 3,
      title: "Marketing and Communications",
      price: 14.99,
      originalPrice: 50.0,
      img: "/course.png",
    },
  ]);

  const total = courses.reduce((sum, c) => sum + c.price, 0);

  const removeCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 h-auto">
        <div className="flex-1 border-r border-gray-200 pr-6">
          <h2 className="text-lg font-semibold mb-4">វគ្គសិក្សា</h2>
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center gap-3 ">
                <button
                  onClick={() => removeCourse(course.id)}
                  className="w-6 h-6 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-100"
                >
                  ×
                </button>
                <Image
                  src={course.img}
                  alt={course.title}
                  width={80}
                  height={100}
                  className=" object-cover h-15"
                />
                <span className="text-gray-800">{course.title}</span>
              </div>
              <div className="text-right">
                <span className="line-through text-gray-400 mr-2">
                  ${course.originalPrice.toFixed(2)}
                </span>
                <span className="font-semibold text-gray-900">
                  ${course.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}

          <button   onClick={() => router.push("/courselist")} className="mt-20 px-12 py-3 border-2 border-primary text-primary  hover:bg-primary-hover hover:text-white transition rounded
             ">
            &lt; បញ្ចូលវគ្គសិក្សា
          </button>
        </div>
        <div className="w-full md:w-80 flex flex-col">
          <h2 className="text-lg font-semibold mb-8">ការទិញសរុប</h2>
          <div className="flex  justify-between  text-lg font-medium">
            <span>សរុប</span>
            <span className="text-amber-400">${total.toFixed(2)}</span>
          </div>
          <div className="flex-1/2 border-t  border-gray-200 pr-6 mt-2"></div>
  
          <button
            onClick={() => router.push("/checkoutdetail")} 
            className="w-60 py-4  bg-primary text-white font-medium  hover:bg-purple-800 transition rounded "
          >
            ទៅកន្លែងបង់ប្រាក់​  &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
