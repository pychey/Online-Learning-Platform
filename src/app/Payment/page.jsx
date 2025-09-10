"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import QRCode from "qrcode";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const trxId = searchParams.get("trxId");
  const total = searchParams.get("total");
  const qr = searchParams.get("qr");

  const [expired, setExpired] = useState(false);
  const [paid, setPaid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [checking, setChecking] = useState(false);
  const [qrImage, setQrImage] = useState(null);

  // generate QR image from KHQR string
  useEffect(() => {
    if (qr) {
      QRCode.toDataURL(qr, { width: 280, margin: 2 })
        .then(setQrImage)
        .catch((err) => console.error("QR generation error:", err));
    }
  }, [qr]);

  // countdown timer
  useEffect(() => {
    if (timeLeft > 0 && !paid) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !paid) {
      setExpired(true);
    }
  }, [timeLeft, paid]);

  // poll backend for status
  useEffect(() => {
    if (!paid && !expired && qr) {
      const interval = setInterval(async () => {
        setChecking(true);
        try {
          const res = await fetch(`/api/checkstatus?qrString=${encodeURIComponent(qr)}`);
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

  // success screen
  if (paid) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-green-600">✅ Thank You!</h2>
        <p className="mt-2 text-gray-600">
          Your payment for <span className="font-semibold">${total}</span> was successful. <br />
          Transaction ID: <span className="text-primary">{trxId}</span>
        </p>
      </div>
    );
  }

  // expired screen
  if (expired) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-red-600">⚠️ QR Code Expired</h2>
        <p className="mt-2 text-gray-600">Please request a new QR code.</p>
      </div>
    );
  }

  // main QR page
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 mb-4 mt-30">
      <h2 className="text-lg font-semibold mb-4">សូមស្កេនសម្រាប់ទូទាត់សាច់ប្រាក់</h2>
      {qrImage ? (
        <img
          src={qrImage}
          alt="KHQR"
          width={280}
          height={280}
          className="border rounded-lg shadow-md"
        />
      ) : (
        <p className="text-red-500">Failed to generate QR. Try again.</p>
      )}
      <p className="mt-4 text-gray-500">
        Expires in {timeLeft}s {checking && !paid ? "(Checking...)" : ""}
      </p>
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Transaction ID: {trxId}</p>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
}
