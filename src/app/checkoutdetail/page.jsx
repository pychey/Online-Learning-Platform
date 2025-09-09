"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { khmerToEnglishNumber } from "@/lib/khmerToEnglishNumber";
import { englishToKhmerNumber } from "@/lib/englishToKhmerNumber";
import Cartheader from "../cart/Cartheader";

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  const clean = khmerToEnglishNumber(priceStr.toString().replace("$", "").trim());
  return parseFloat(clean) || 0;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();

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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const total = cart.reduce((sum, c) => sum + parsePrice(c.discounted_price || c.price), 0);

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
        clearCart();
        router.push(
          `/Payment?trxId=${data.trxId}&total=${data.amount}&qr=${encodeURIComponent(data.qrString)}`
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
      <Cartheader />
      <div className="min-h-screen bg-white py-8 -mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded shadow-md py-12 bg-white">
          {/* Billing Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" onChange={handleChange} required placeholder="First Name" className="p-3 border rounded w-full" />
              <input name="lastName" onChange={handleChange} required placeholder="Last Name" className="p-3 border rounded w-full" />
            </div>
            <input name="email" type="email" onChange={handleChange} required placeholder="Email Address" className="p-3 border rounded w-full" />
            <input name="street" onChange={handleChange} required placeholder="Street and House Number" className="p-3 border rounded w-full" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="city" onChange={handleChange} required placeholder="Town / City" className="p-3 border rounded w-full" />
              <input name="zip" onChange={handleChange} required placeholder="Postcode / ZIP" className="p-3 border rounded w-full" />
            </div>
            <input name="country" onChange={handleChange} required placeholder="Country" className="p-3 border rounded w-full" />
            <button type="submit" disabled={loading} className="bg-primary text-white py-3 px-6 rounded hover:bg-purple-800 mt-4 w-full disabled:opacity-50">
              {loading ? "Processing..." : "Place Order"}
            </button>
          </form>

          {/* Order Summary */}
          <div className="border rounded p-6">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            <div className="space-y-2">
              {cart.length > 0 ? (
                cart.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{item.title}</span>
                    <span className="text-primary font-semibold">
                      ${englishToKhmerNumber(parsePrice(item.discounted_price || item.price).toFixed(2))}
                    </span>
                  </div>
                ))
              ) : <p className="text-gray-500">No items in your cart</p>}
              <hr className="my-4" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-amber-400">${englishToKhmerNumber(total.toFixed(2))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
