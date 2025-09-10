"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import QRCode from "qrcode";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const trxId = searchParams.get("trxId");
  const total = searchParams.get("total");
  const qr = searchParams.get("qr");
  const merchant = searchParams.get("merchant") || "Merchant Name";

  const [expired, setExpired] = useState(false);
  const [paid, setPaid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [checking, setChecking] = useState(false);
  const [qrImage, setQrImage] = useState(null);

  // Generate QR image from KHQR string
  useEffect(() => {
    if (qr) {
      QRCode.toDataURL(qr, { width: 280, margin: 1 })
        .then(setQrImage)
        .catch((err) => console.error("QR generation error:", err));
    }
  }, [qr]);

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0 && !paid) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !paid) {
      setExpired(true);
    }
  }, [timeLeft, paid]);

  // Auto check payment status
  useEffect(() => {
    if (!paid && !expired && qr) {
      const interval = setInterval(async () => {
        setChecking(true);
        try {
          const res = await fetch(
            `/api/checkstatus?qrString=${encodeURIComponent(qr)}`
          );
          const data = await res.json();
          if (data.paid) setPaid(true);
        } catch (err) {
          console.error("Error checking payment status:", err);
        } finally {
          setChecking(false);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [qr, paid, expired]);

  // Paid state
  if (paid) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-green-600">សូមអរគុណ!</h2>
        <p className="mt-2 text-gray-600">
          ការទូទាត់ចំនួន{" "}
          <span className="font-semibold">
            {Number(total).toLocaleString()} ៛
          </span>{" "}
          ជោគជ័យ <br />
          Transaction ID: <span className="text-primary">{trxId}</span>
        </p>
      </div>
    );
  }

  // Expired state
  if (expired) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-red-600">
          QR Code របស់អ្នកអស់សុពលភាពហើយ
        </h2>
        <p className="mt-2 text-gray-600">
          សូមធ្វើការរីហ្វ្រេសផេកដើម្បីទទួលបាន QR Code ថ្មី
        </p>
      </div>
    );
  }

  // Default KHQR style display
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[320px] bg-white shadow-lg rounded-lg overflow-hidden border">
        {/* Header */}
        <div className="bg-red-600 text-white text-center py-2 text-xl font-bold">
          KHQR
        </div>

        {/* Merchant & Amount */}
        <div className="text-center py-4">
          <h2 className="text-gray-800 font-semibold">{merchant}</h2>
          <p className="text-2xl font-bold mt-1 text-gray-900">
            {Number(total).toLocaleString()} ៛
          </p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center py-4">
          {qrImage ? (
            <img
              src={qrImage}
              alt="KHQR"
              width={280}
              height={280}
              className="border rounded-lg shadow-md"
            />
          ) : (
            <p className="text-red-500">Failed to generate QR</p>
          )}
        </div>

        {/* Timer */}
        <div className="text-center text-gray-500 pb-4">
          Expires in {timeLeft}s {checking && !paid ? "(Checking...)" : ""}
        </div>
      </div>
    </div>
  );
}
