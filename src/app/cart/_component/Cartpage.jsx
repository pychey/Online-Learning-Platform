"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { khmerToEnglishNumber } from "@/lib/khmerToEnglishNumber";
import { englishToKhmerNumber } from "@/lib/englishToKhmerNumber";
import { useEffect, useState } from "react";
import RightArrow from "@/components/icons/RightArrow";
import Remove from "@/components/icons/Remove";

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const clean = khmerToEnglishNumber(
    priceStr.toString().replace("$", "").trim()
  );
  return parseFloat(clean) || 0;
}

export default function CartPage(isPaid = false) {
  const router = useRouter();
  const { cart, removeFromCart } = useCart();
  const searchParams = useSearchParams()
  const [isExist, setIsExist] = useState(false)
  const [courseTitle, setCourseTitle] = useState('')

  useEffect(() => {
    const isExistParams = searchParams.get('isExist')
    const courseTitleParams = searchParams.get('courseTitle')
    if (isExistParams && courseTitleParams) {
      setIsExist(Number(isExistParams))
      setCourseTitle(courseTitleParams)
    }
  }, [searchParams])

  const total = cart.reduce((acc, course) => {
    const discounted = parsePrice(course.discounted_price);
    return acc + discounted;
  }, 0);

  return (
    <div className="max-w-[1080px] flex flex-col gap-8 w-full mx-auto pt-4 pb-10 px-4">
      {cart.length === 0 ? (
        <span className="block w-full text-center p-8">កន្ត្រករបស់អ្នកឥឡូវនេះគឺទទេ</span>
      ) : (
        <div className="flex flex-col px-0 tablet:px-4">
          {isExist === 1 && <p className="text-center pb-12">វគ្គសិក្សា <span className='text-primary'>{courseTitle}</span> បានបញ្ចូលកន្ត្រករួចហើយ</p>}
          <div className="flex flex-col laptop:flex-row w-full justify-between">
            <div className="flex-grow-[1] w-full flex flex-col px-4 aptop:border-r border-gray-200">
              <h2 className="text-lg font-semibold mb-4">វគ្គសិក្សា</h2>
              <hr className="hidden laptop:block h-[3px] w-full bg-gray-200 border-none"></hr>
                {cart.map((course) => {
                  const original = parsePrice(course.original_price);
                  const discounted = parsePrice(course.discounted_price);
                  return (
                    <div
                      key={course.id}
                      className="flex gap-4 tablet:gap-0 items-center justify-between border-b border-gray-200 pr-0 tablet:pr-8 py-4"
                    >
                      <div className="relative flex items-center gap-3">
                        <button
                          onClick={() => removeFromCart(course.id)}
                          className="absolute -top-1 -left-3 tablet:relative mr-4 flex items-center justify-center text-gray-600 cursor-pointer"
                        >
                          <Remove size={30}/>
                        </button>
                        <img
                          src={course.img_url || 
                            "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                          }
                          alt={course.title}
                          width={80}
                          height={100}
                          className="object-cover"
                        />
                        <span className="text-gray-800">{course.title}</span>
                      </div>
                      <div className="flex flex-col tablet:flex-row text-right self-end">
                        {course.original_price && (
                          <span className="text-sm tablet:text-base line-through text-gray-400 mr-0 tablet:mr-2">
                            ${englishToKhmerNumber(original.toFixed(2))}
                          </span>
                        )}
                        <span className="font-semibold text-gray-900">
                          ${englishToKhmerNumber(discounted.toFixed(2))}
                        </span>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div className="flex-grow-[1] w-full laptop:w-[70%] pl-6 pr-4">
              <h2 className="text-lg font-semibold mb-4 mt-4 laptop:mt-0">ទំនិញសរុប</h2>
              <hr className="hidden laptop:block h-[3px] w-full bg-gray-200 border-none"></hr>
              <div className="flex justify-between text-base font-medium items-center border-b border-gray-200 py-4">
                <span>សរុប</span>
                <span className="text-primary">
                  ${englishToKhmerNumber(total.toFixed(2))} <span className="text-xs text-gray-300">( រួមបញ្ចូលពន្ធ $០.០០ )</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1080px] mx-auto mt-10 auto h-14 w-full flex justify-between gap-8">
        <button
          onClick={() => router.push("/courselist")}
          className="w-60 py-4 cursor-pointer text-sm tablet:text-base flex items-center justify-center gap-2 border-2 border-primary text-primary font-medium hover:bg-primary-hover hover:text-white transition duration-300 rounded"
        >
          <RightArrow className='rotate-180' size={20}/> បញ្ចូលវគ្គសិក្សា
        </button>
        <button
          onClick={() => {
            if (cart.length === 0) alert('សូមបញ្ចូលវគ្គសិក្សាដើម្បីទៅកាន់កន្លែងបង់ប្រាក់')
            else router.push("/checkout-detail")
          }}
          className="w-60 py-4 cursor-pointer text-sm tablet:text-base flex items-center justify-center gap-2 bg-primary text-white font-medium hover:bg-primary-hover transition duration-300 rounded"
        >
          ទៅកន្លែងបង់ប្រាក់ <RightArrow size={20}/>
        </button>
      </div>
    </div>
  );
}
