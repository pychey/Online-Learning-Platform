"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import QRCode from "qrcode";
import { useCart } from "../context/CartContext";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function PaymentPage() {
  const { cart, clearCart } = useCart()
  const { data: session, status, update } = useSession();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userId, setUserId] = useState('');
  const [courseIds, setCourseIds] = useState([])
  const searchParams = useSearchParams();
  const trxId = searchParams.get("trxId");
  const total = searchParams.get("total");
  const qr = searchParams.get("qr");
  const merchant = searchParams.get("merchant") || "Online Course";
  const [error, setError] = useState(null)

  const [expired, setExpired] = useState(false);
  const [paid, setPaid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [checking, setChecking] = useState(false);
  const [qrImage, setQrImage] = useState(null);

  // generate QR image from KHQR string
  useEffect(() => {
    if (qr) {
      QRCode.toDataURL(qr, { width: 280, margin: 1 })
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

  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') router.push('/login?fromPayment=1')

    const firstNameParams = searchParams.get('firstName');
    const lastNameParams = searchParams.get('lastName');

    if(firstNameParams) setFirstName(firstNameParams)
    if(lastNameParams) setLastName(lastNameParams)
    
    if (session) setUserId(session.user.id);
    console.log(session)

    if (cart) setCourseIds(cart.map(c => c.id))
  }, [searchParams, status]);

  // check payment status
  useEffect(() => {
    if (!paid && !expired && qr) {
      const interval = setInterval(async () => {
        setChecking(true);
        try {
          const res = await fetch(`/api/checkstatus?qrString=${encodeURIComponent(qr)}`);
          const data = await res.json();
          if (data.paid) {
            handlePayment();
            clearCart();
            setPaid(true)
            router.push('/my-courses')
          }
        } catch (err) {
          setError("មានបញ្ហាក្នុងការទិញវគ្គសិក្សា សូមព្យាយាមម្ដងទៀត។");
          console.error("Error checking payment status:", err);
        } finally {
          setChecking(false);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [qr, paid, expired]);

  const handlePayment = async () => {
    try {
      const { data } = await axios.post('/api/enrollment', {
        userId,
        courseIds,
        firstName,
        lastName,
      })
      if (data) {
        await update({ firstName, lastName });
      }
    } catch (error) {
      console.log(error)
      setError("មានបញ្ហាក្នុងការទិញវគ្គសិក្សា សូមព្យាយាមម្ដងទៀត។");
    }
  };

  if (status === 'loading') return <p>Loading...</p>

  if (paid) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-green-600">សូមអរគុណ!</h2>
        <p className="mt-2 text-gray-600">
          ការទូទាត់របស់អ្នក <span className="font-semibold">{total} ៛</span> ជោគជ័យ <br />
          Transaction ID: <span className="text-primary">{trxId}</span>
        </p>
      </div>
    );
  }

  if (expired) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-red-600">QR Code អស់សុពលភាព</h2>
        <p className="mt-2 text-gray-600">សូមធ្វើការរីហ្វ្រេសដើម្បីទទួលបាន QR Code ថ្មី</p>
      </div>
    );
  }

  if(error) return <p>{error}</p>

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
            {Number(total).toLocaleString()} $
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
