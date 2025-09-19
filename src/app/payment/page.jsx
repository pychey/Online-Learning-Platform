"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import QRCode from "qrcode";
import { useCart } from "../context/CartContext";
import { useSession } from "next-auth/react";
import axios from "axios";

function PaymentContent() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const { data: session, status, update } = useSession();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [courseIds, setCourseIds] = useState([]);
  const searchParams = useSearchParams();
  const trxId = searchParams.get("trxId");
  const total = searchParams.get("total");
  const qr = searchParams.get("qr");
  const merchant = searchParams.get("merchant") || "Sastra Academy";
  const [error, setError] = useState(null);

  const [expired, setExpired] = useState(false);
  const [paid, setPaid] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5000);
  const [checking, setChecking] = useState(false);
  const [qrImage, setQrImage] = useState(null);

  // generate QR image
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
    if (status === "loading") return;
    if (status === "unauthenticated") router.push("/login?fromPayment=1");

    const firstNameParams = searchParams.get("firstName");
    const lastNameParams = searchParams.get("lastName");

    if (firstNameParams) setFirstName(firstNameParams);
    if (lastNameParams) setLastName(lastNameParams);

    if (session) setUserId(session.user.id);

    if (cart) setCourseIds(cart.map((c) => c.id));
  }, [searchParams, status]);

  
  useEffect(() => {
    if (!paid && !expired && qr) {
      const interval = setInterval(async () => {
        setChecking(true);
        try {
          const { data } = await axios.post('api/checkstatus', {
            qrString: qr
          })
          if (data.paid) {
            await handlePayment();
            clearCart();
            setPaid(true);
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
    const currentUserId = session?.user?.id;
    const currentCourseIds = cart?.map((c) => c.id) || [];
    const currentFirstName = searchParams.get("firstName") || firstName;
    const currentLastName = searchParams.get("lastName") || lastName;

    try {
      const { data } = await axios.post("/api/enrollment", {
        userId: currentUserId,
        courseIds: currentCourseIds,
        firstName: currentFirstName,
        lastName: currentLastName,
      });
      if (data.success) {
        await update({ firstName: currentFirstName, lastName: currentLastName });
      }
    } catch (error) {
      console.log(error);
      setError("មានបញ្ហាក្នុងការទិញវគ្គសិក្សា សូមព្យាយាមម្ដងទៀត។");
    }
  };

  if (status === "loading") return <p>Loading...</p>;

  if (paid) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-green-600">សូមអរគុណ!</h2>
        <p className="mt-2 text-gray-600">
          ការទូទាត់របស់អ្នក <span className="font-semibold">{total} $</span>{" "}
          ជោគជ័យ <br />
          Transaction ID: <span className="text-primary">{trxId}</span>
        </p>
        <button className="mt-4 border-2 bg-primary text-white font-medium border-primary-hover px-4 py-2 rounded cursor-pointer"
          onClick={() => router.push('my-courses')}
        >យល់ព្រម</button>
      </div>
    );
  }


  if (expired) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-2xl font-bold text-red-600">
          QR Code អស់សុពលភាព
        </h2>
        <p className="mt-2 text-gray-600">
          សូមធ្វើការរីហ្វ្រេសដើម្បីទទួលបាន QR Code ថ្មី
        </p>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-[320px] h-118 bg-white shadow-2xl rounded-3xl overflow-hidden ">
        <div className="bg-red-600 text-white text-center py-6 text-xl font-bold relative flex justify-center items-center ">
          <img
            src="https://checkout.payway.com.kh/images/khqr-icon.svg"
            alt="KHQR"
            className="w-20"
          />
        </div>
       <div className="flex justify-end">
       <div className="w-0 h-0 border-l-[30px] border-l-transparent border-t-[25px] border-red-600"></div>
       </div>
        <div className="text-center py-4 -mt-4 flex justify-start flex-col items-start">
          <h2 className="text-gray-800 font-semibold text-md ml-6 ">{merchant}</h2>
          <p className="text-2xl font-bold mt-1  text-gray-900 ml-6">
            {Number(total).toLocaleString()} $
          </p>
        </div>

       <div
        className="mx-1 h-[1px] mt-1" 
        style={{
          backgroundImage: "repeating-linear-gradient(to right, gray 0px, gray 10px, transparent 10px, transparent 20px)",
        }}
      ></div>


        <div className="flex justify-center py-8 relative">
          {qrImage ? (
            <>
              <img
                src={qrImage}
                alt="KHQR"
                width={230}
                height={250}
              />
              <img
                src="https://checkout.payway.com.kh/images/usd-khqr-logo.svg"
                alt="USD Logo"
                className="absolute top-0 left-0 right-0 bottom-0 m-auto w-14 h-14"
              />
            </>
          ) : (
            <p className="text-red-500">កំពុងបង្កើត QR...</p>
          )}
        </div>
      </div>
        {/* <div className="text-center text-gray-500 py-4">
          អស់សុពលភាពក្នុង {timeLeft}s{" "}
          {checking && !paid ? "" : ""}
        </div> */}
    </div>
  );
}

function PaymentLoading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<PaymentLoading />}>
      <PaymentContent />
    </Suspense>
  );
}
