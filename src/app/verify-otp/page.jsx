'use client'

import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('')
  const [buttonMessage, setButtonMessage] = useState('បញ្ជាក់លេខសម្ងាត់')
  const [message, setMessage] = useState('លេខសម្ងាត់ ៦ខ្ទង់ បានផ្ញើទៅអ៊ីមែលរបស់អ្នក។ សូមបញ្ចូលដើម្បីបញ្ជាក់។')
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const userIdParam = searchParams.get('userId');
    const emailParam = searchParams.get('email');
    
    if (userIdParam) setUserId(userIdParam);
    if (emailParam) setEmail(decodeURIComponent(emailParam));

  }, [searchParams]);
  
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) setMessage("លេខសម្ងាត់ត្រូវតែមាន ៦ ខ្ទង់");
    setButtonMessage("កំពុងបញ្ជាក់...");
    try {
      const { data } = await axios.post('/api/auth/verify-otp', {
        userId: userId,
        otp: otp
      })
      if (data.success) {
        const tempPassword = sessionStorage.getItem('tempPassword');
        const response = await signIn("credentials", {
          redirect: false,
          email: email,
          password: tempPassword,
        });
        sessionStorage.removeItem('tempPassword');
        if (response && !response.error) router.push('/my-courses')
        else {
          console.log(response?.error)
          setMessage('បញ្ជាក់លេខសម្ងាត់ជោគជ័យ ប៉ុន្តែការចូលគណនីមានបញ្ហា សូមព្យាយាមចូលគណនីដោយខ្លួនឯង។')
          setButtonMessage("បញ្ជាក់លេខសម្ងាត់");
        }
      } else {
        setMessage(data.message)
        setButtonMessage("បញ្ជាក់លេខសម្ងាត់")
      }
    } catch (error) {
      setMessage("មានបញ្ហាក្នុងការបញ្ជាក់លេខសម្ងាត់ សូមព្យាយាមម្ដងទៀត។");
      setButtonMessage("បញ្ជាក់លេខសម្ងាត់");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-1 mt-10 max-tablet:mx-10">
      <div className="mb-6">
        <Link href="/" className="block">
          <img
            src="/Logo-AA-Horizontal.png"
            alt="logo"
            className="h-16 object-contain"
          />
        </Link>
      </div>
      <div className="bg-white border border-gray-200 p-4 w-full max-w-md mb-6 rounded">
        <p className="text-sm text-gray-700 border-l-4 border-primary pl-3">
          បញ្ជាក់លេខសម្ងាត់ OTP
        </p>
      </div>
      <div className="bg-white border border-gray-200 p-4 w-full max-w-md mb-6 rounded">
        {email && (
          <p className="text-sm text-gray-700 border-l-4 border-primary pl-3">
            លេខសម្ងាត់ បានផ្ញើទៅ: <span className="font-medium">{email}</span>
          </p>
        )}
      </div>
      <div className="px-10 py-8 border-gray-200 relative rounded border w-full max-w-md">
        <form className="space-y-6 " onSubmit={handleVerifyOtp}>
          <div className="relative">
            <label
              htmlFor="otp"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              បញ្ចូលលេខសម្ងាត់
            </label>
            <input
              id="otp"
              type="text"
              className="mt-2 w-full px-6 py-3 border text-gray-700 border-gray-300 rounded-lg outline-0 text-center tracking-widest focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
              placeholder="000000"
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
              maxLength="6"
              pattern="[0-9]{6}"
              required
            />
          </div>
          <p className="text-sm text-primary">{message}</p>
          <div className="flex items-center justify-center">
              <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-sm hover:bg-primary-hover transition duration-300 min-w-28 cursor-pointer"
              >
                {buttonMessage}
              </button>
          </div>
        </form>
      </div>
    </div>
	)
}

export default VerifyOtpPage