'use client'

import EyeOff from "@/components/icons/EyeOff";
import EyeOn from "@/components/icons/EyeOn";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// strong paswd cond
const checkPasswordStrength = (pwd) => {
  const minLength = /.{8,}/;
  const upperCase = /[A-Z]/;
  const number = /[0-9]/;
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

  if (!minLength.test(pwd)) return "ពាក្យសម្ងាត់ត្រូវមានយ៉ាងហោចណាស់ 8 តួអក្សរ";
  if (!upperCase.test(pwd)) return "ត្រូវមានអក្សរធំយ៉ាងហោចណាស់ 1";
  if (!number.test(pwd)) return "ត្រូវមានលេខយ៉ាងហោចណាស់ 1";
  if (!specialChar.test(pwd)) return "ត្រូវមានតួពិសេសយ៉ាងហោចណាស់ 1";

  return "ពាក្យសម្ងាត់មានសុវត្ថិភាព";
};

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [buttonMessage, setButtonMessage] = useState('ចុះឈ្មោះ')
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFromPayment, setIsFromPayment] = useState();
  const [passwordStrength, setPasswordStrength] = useState("");

  useEffect(() => {
    const fromPayment = searchParams.get('fromPayment')
    if (fromPayment) {
      setMessage('សូមចូលគណនី ឫចុះឈ្មោះមុនការទិញវគ្គសិក្សា')
      setIsFromPayment(Number(fromPayment))
    } else {
      setIsFromPayment(0)
    }
  }, [searchParams])

  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordStrength !== "ពាក្យសម្ងាត់មានសុវត្ថិភាព") {
      setMessage("សូមបញ្ចូលពាក្យសម្ងាត់ដែលមានសុវត្ថិភាព។");
      return;
    }

    setButtonMessage("កំពុងចុះឈ្មោះ...");
    try {
      const { data } = await axios.post('/api/auth/send-otp', { email, password });
      if (data.success) {
        sessionStorage.setItem('tempPassword', password);
        router.push(`/verify-otp?userId=${data.userId}&email=${encodeURIComponent(email)}&fromPayment=${isFromPayment}`);
      } else {
        setMessage(data.message);
        setButtonMessage("ចុះឈ្មោះ");
      }
    } catch (error) {
      setMessage("មានបញ្ហាក្នុងការចុះឈ្មោះ, សូមព្យាយាមម្ដងទៀត។");
      setButtonMessage("ចុះឈ្មោះ");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-1 mt-10 px-6 tablet:px-10">
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
          ចុះឈ្មោះសម្រាប់គេហទំព័រនេះ
        </p>
      </div>
      <div className="px-6 tablet:px-10 py-8 border-gray-200 relative rounded border w-full max-w-md">
        <form className="space-y-6 " onSubmit={handleRegister}>
          <div className="relative">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              អាសយដ្ឋានអ៊ីមែល
            </label>
            <input
              id="username"
              type="email"
              className="mt-1 w-full px-6 pr-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
              placeholder="អាសយដ្ឋានអ៊ីមែល"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              ពាក្យសម្ងាត់
            </label>
            <div className="relative flex items-center">
              <input
                id="password"
                type={`${showPassword ? 'text' : 'password'}`}
                className="mt-1 w-full px-6 pr-10 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                placeholder="ពាក្យសម្ងាត់"
                value={password}
                onCopy={(e) => { if (!showPassword) e.preventDefault() }}
                onCut={(e) => { if (!showPassword) e.preventDefault() }}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordStrength(checkPasswordStrength(e.target.value));
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute mt-1 right-5 text-gray-400 hover:text-primary transition-colors"
              >
                {showPassword ? <EyeOn size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
           
          </div>
           {passwordStrength !== "ពាក្យសម្ងាត់មានសុវត្ថិភាព" && (
            <p className="text-sm text-red-500 mt-1">
              {passwordStrength}
            </p>
          )}
          <p className="text-sm text-primary">{message}</p>

          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <input
                id="rememberme"
                type="checkbox"
                className="border-gray-300"
              />
              <label htmlFor="rememberme" className="text-sm text-gray-700">
                ចងចាំខ្ញុំ
              </label>
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-sm hover:bg-primary-hover transition duration-300 min-w-28 cursor-pointer"
            >
              {buttonMessage}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 text-sm text-gray-600 space-x-2">
        <Link href={`${isFromPayment ? '/login?fromPayment=1' : '/login'}`} className="text-primary hover:underline">
          ចូលគណនី
        </Link>
        <span>|</span>
        <Link href="/forgot-password" className="text-primary hover:underline">
          ភ្លេចពាក្យសម្ងាត់របស់អ្នក?
        </Link>
      </div>

      <Link href="/" className="mt-6 text-sm text-primary hover:underline">
        ត្រលប់ទៅទំព័រដើម
      </Link>
    </div>
  )
}

export default RegisterPage
