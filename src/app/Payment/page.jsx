"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PaymentPage() {
  const [expired, setExpired] = useState(false);
  const [paid, setPaid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); 

  useEffect(() => {
    if (timeLeft > 0 && !paid) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !paid) {
      setExpired(true);
    }
  }, [timeLeft, paid]);

  //25s
  useEffect(() => {
    if (!paid && !expired) {
      const check = setTimeout(() => setPaid(true), 25000); 
      return () => clearTimeout(check);
    }
  }, [paid, expired]);

  if (paid) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-green-600"> Thank You!</h2>
        <p className="mt-2 text-gray-600">Your payment was successful.</p>
      </div>
    );
  }

  if (expired) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-red-600">⚠️ QR Code Expired</h2>
        <p className="mt-2 text-gray-600">Please request a new QR code.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 mb-4 mt-30">
      <h2 className="text-lg font-semibold mb-4">សូមស្កេនសម្រាប់ទូទាត់សាច់ប្រាក់</h2>
      <Image
        src="/khqr_image.png"
        alt="QR Code"
        width={280}
        height={280}
        className="border rounded-lg shadow-md"
      />
      <p className="mt-4 text-gray-500">Expires in {timeLeft}s</p>
    </div>
  );
}
