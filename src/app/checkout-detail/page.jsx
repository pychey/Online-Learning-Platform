"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { khmerToEnglishNumber } from "@/lib/khmerToEnglishNumber";
import { englishToKhmerNumber } from "@/lib/englishToKhmerNumber";
import { useSession } from "next-auth/react";
import CheckoutHeader from "./_components/CheckoutHeader";

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const clean = khmerToEnglishNumber(
    priceStr.toString().replace("$", "").trim()
  );
  return parseFloat(clean) || 0;
}

export default function CheckoutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { cart } = useCart();
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zip: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      if (status === 'loading') return;
      if (status === 'unauthenticated') router.push('/login?fromPayment=1')

      if (session?.user.firstName && session?.user.lastName) {
          setFormData({...formData, firstName: session.user.firstName});
          setLastName({...formData, firstName: session.user.lastName});
          setMessage("អ្នកមានឈ្មោះរួចហើយ អ្នកអាចប្តូរឈ្មោះនេះបានឫអត់ក៏បាន ដែលឈ្មោះនេះនឹងត្រូវបានប្រើនៅលើសញ្ញាប័ត្ររបស់អ្នក។");
      } else {
        setMessage("សូមបំពេញឈ្មោះរបស់អ្នក ដែលឈ្មោះនេះនឹងត្រូវបានប្រើនៅលើសញ្ញាប័ត្ររបស់អ្នក។");
      }
    }, [status]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const total = cart.reduce(
    (sum, c) => sum + parsePrice(c.discounted_price),
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cart.length) return alert("Cart is empty");
    setLoading(true);

    try {
      const res = await fetch("/api/createkhqr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, formData }),
      });

      const data = await res.json();

      if (data.success && data.qrString) {
        router.push(
          `/payment?firstName=${formData.firstName}&lastName=${formData.lastName}&trxId=${data.trxId}&total=${
            data.amount
          }&qr=${encodeURIComponent(data.qrString)}`
        );
      } else {
        alert("Failed to generate QR. Try again.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CheckoutHeader />
      <div className="min-h-screen bg-white py-8 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 py-12 bg-white">
          <form id="myForm" className="space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-xl font-medium mb-6 text-center">
              ព័ត៌មានលម្អិតអំពីវិក័យប័ត្រ
            </h2>
            <p className="text-center text-sm text-primary">{message}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                onChange={handleChange}
                required
                placeholder="First Name"
                className="p-3 border w-full border-gray-300 focus:outline-none focus:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-sm text-gray-700"
              />
              <input
                name="lastName"
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="p-3 border w-full border-gray-300 focus:outline-none focus:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-sm text-gray-700"
              />
            </div>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="p-3 border w-full border-gray-300 focus:outline-none focus:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-sm text-gray-700"
            />
            <input
              name="street"
              onChange={handleChange}
              required
              placeholder="Street and House Number"
              className="p-3 border w-full border-gray-300 focus:outline-none focus:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-sm text-gray-700"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="city"
                onChange={handleChange}
                required
                placeholder="Town / City"
                className="p-3 border w-full border-gray-300 focus:outline-none focus:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-sm text-gray-700"
              />
              <input
                name="zip"
                onChange={handleChange}
                required
                placeholder="Postcode / ZIP"
                className="p-3 border w-full border-gray-300 focus:outline-none focus:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-sm text-gray-700"
              />
            </div>
            <input
              name="country"
              onChange={handleChange}
              required
              placeholder="Country"
              className="p-3 border w-full border-gray-300 focus:outline-none focus:shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-sm text-gray-700"
            />
          </form>

          <div className="border-primary border-2 shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded p-6">
            <h2 className="text-xl font-medium mb-6 text-center">ការកម្មង់ទិញរបស់អ្នក</h2>
            <h2 className="text-lg font-medium mb-4">វគ្គសិក្សា</h2>
            <hr className="hidden laptop:block h-[3px] w-full bg-gray-200 border-none"></hr>
            <div className="space-y-2 py-4">
              {cart.length > 0 ? (
                cart.map((item, i) => {
                  const original = parsePrice(item.original_price);
                  const discounted = parsePrice(item.discounted_price);

                  return (
                    <div key={i} className="flex justify-between">
                      <span>{item.title}</span>
                      <div className="text-right">
                        {item.original_price && (
                          <span className="line-through text-gray-400 mr-2">
                            ${englishToKhmerNumber(original.toFixed(2))}
                          </span>
                        )}
                        <span className="ml-2 font-medium text-gray-900">
                          ${englishToKhmerNumber(discounted.toFixed(2))}
                        </span>
                      </div>
                    </div>
                  )
                })
              ) : (
                <p className="text-base text-gray-500">មិនមានទំនិញនៅក្នងកន្ត្រកទេ</p>
              )}
              <hr className="hidden laptop:block h-[3px] w-full bg-gray-200 border-none"></hr>
              <div className="py-2 flex justify-between font-medium text-base">
                <span>សរុប</span>
                <span className="text-primary">
                  ${englishToKhmerNumber(total.toFixed(2))}
                </span>
              </div>
              <hr className="hidden laptop:block h-[3px] w-full bg-gray-200 border-none"></hr>
              <div className="w-full h-auto mt-8 flex justify-end">
                <img
                  src="https://devithuotkeo.com/static/image/portfolio/khqr/khqr-5.png"
                  alt=""
                  className="h-auto w-20"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                form="myForm"
                className="bg-primary font-medium text-white py-3 px-6 rounded hover:bg-primary-hover mt-4 w-full disabled:opacity-50 cursor-pointer"
              >
                {loading ? "កំពុងដំណើរការ..." : "ដាក់បញ្ជាទិញ"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
