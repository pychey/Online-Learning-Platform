"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import { useCart } from "@/app/context/CartContext";
import { khmerToEnglishNumber } from "@/lib/khmerToEnglishNumber";
import { englishToKhmerNumber } from "@/lib/englishToKhmerNumber";
import { useEffect, useState } from "react";

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const clean = khmerToEnglishNumber(
    priceStr.toString().replace("$", "").trim()
  );
  return parseFloat(clean) || 0;
}

export default function CartPage(course ,isPaid=false) {
  const router = useRouter(); 
  const { cart, removeFromCart } = useCart();

  // Calculate total properly
  const total = cart.reduce((acc, course) => {
    const discounted = parsePrice(course.discounted_price || course.price);
    return acc + discounted;
  }, 0);

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 h-auto">
        
        {/* Cart Items */}
        <div className="flex-1 border-r border-gray-200 pr-6">
          <h2 className="text-lg font-semibold mb-4">វគ្គសិក្សា</h2>
          
          {cart.length === 0 ? (
            <p className="text-gray-600">🛒 កន្ត្រកទទេ</p>
          ) : (
            cart.map((course) => {
              const original = parsePrice(course.original_price);
              const discounted = parsePrice(course.discounted_price || course.price);
              return (
                <div
                  key={course.id}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                >
                  <div className="flex items-center gap-3 ">
                    <button
                      onClick={() => removeFromCart(course.id)}
                      className="w-6 h-6 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-100"
                    >
                      ×
                    </button>
                    <Image
                      src={course.img_url || course.img || "/course.png"}
                      alt={course.title}
                      width={80}
                      height={100}
                      className="object-cover h-15"
                    />
                    <span className="text-gray-800">{course.title}</span>
                  </div>
                  <div className="text-right">
                    {course.original_price && (
                      <span className="line-through text-gray-400 mr-2">
                        ${englishToKhmerNumber(original.toFixed(2))}
                      </span>
                    )}
                    <span className="font-semibold text-gray-900">
                      ${englishToKhmerNumber(discounted.toFixed(2))}
                    </span>
                  </div>
                </div>
              );
            })
          )}

          <button
            onClick={() => router.push("/courselist")}
            className="mt-20 px-12 py-3 border-2 border-primary text-primary hover:bg-primary-hover hover:text-white transition rounded"
          >
            &lt; បញ្ចូលវគ្គសិក្សា
          </button>
        </div>
        
        {/* Summary */}
        <div className="w-full md:w-80 flex flex-col">
          <h2 className="text-lg font-semibold mb-8">ការទិញសរុប</h2>
          <div className="flex justify-between text-lg font-medium">
            <span>សរុប</span>
            <span className="text-amber-400">
              ${englishToKhmerNumber(total.toFixed(2))}
            </span>
          </div>
          <div className="flex-1/2 border-t border-gray-200 pr-6 mt-2"></div>
          <button
            disabled={cart.length === 0 || isPaid}
            onClick={() => router.push("/checkoutdetail")} 
            className="w-60 py-4 bg-primary text-white font-medium hover:bg-purple-800 transition rounded mt-6"
          >
            ទៅកន្លែងបង់ប្រាក់  &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
