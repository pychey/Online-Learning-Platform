'use client'
import { useState } from "react";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
	
	const [showPassword, setShowPassword] = useState({
    login: true,
    register: true,
  });
  const [showEye, setShowEye] = useState({
    login: false,
    register: false
  });
  
	return (
    <div className="flex flex-col justify-center items-center min-h-screen py-1 mt-10 max-tablet:mx-10">

      {/* Logo */}
      <div className="mb-6">
        {/* Replace with your actual logo */}
        <a href="/" className="block">
          <img
            src="/Logo-AA-Horizontal.png"
            alt="logo"
            className="h-16 object-contain"
          />
        </a>
      </div>

      {/* Form */}
      <div className="px-10 py-8 border-gray-200 relative rounded border ">
          <form className="space-y-6">
            
            {/* Email */}
            <div className="relative">
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                អាសយដ្ឋានអ៊ីមែល <span className="text-red-500">*</span>
              </label>
              {/* <Mail className="absolute left-3 top-9 text-gray-400 w-5 h-5" /> */}
              <input
                id="username"
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg  outline-0 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                placeholder="អាសយដ្ឋានអ៊ីមែល"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                ពាក្យសម្ងាត់ <span className="text-red-500">*</span>
              </label>
              {/* <Lock className="absolute left-3 top-9 text-gray-400 w-5 h-5" /> */}
              <input
                id="password"
                type={showPassword.login ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                placeholder="ពាក្យសម្ងាត់"
                onMouseOver={() => setShowEye(prev => ({...prev , login: true}))}
                onMouseOut={() => setShowEye(prev => ({...prev , login: false}))}
              />
              {showEye.login && (
                <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, login: !prev.login }))
                }
                className="absolute right-5 top-9 text-gray-400 hover:text-sky-500 transition-colors "
              >
                {/* {!showPassword.login ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />} */}
              </button>
              )} 
            </div>

            {/* Remember me */}
            <div className="flex items-center space-x-48 ">
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
                
                {/* Login Button */}
                <button
                type="submit"
                className="bg-primary text-white font-semibold px-6 py-3 rounded-sm hover:bg-primary-hover transition w-28 cursor-pointer"
                >
                ចូល
                </button>
            </div>
          </form>
        </div>

      {/* Links */}
      <div className="mt-6 text-sm text-gray-600 space-x-2">
        <a href="/login" className="text-sky-700 hover:underline">
          ចូលគណនី
        </a>
        <span>|</span>
        <a href="/register" className="text-sky-700 hover:underline">
          ចុះឈ្មោះ
        </a>
      </div>

      <a
        href="/"
        className="mt-2 text-sm text-gray-600 hover:underline"
      >
        ← ត្រលប់ទៅទំព័រដើម
      </a>

      {/* Footer */}
      <a
        href="/privacy"
        className="mt-6 text-sm text-sky-700 hover:underline"
      >
        គោលការណ៍ឯកជនភាព
      </a>
    </div>
	)
}

export default LoginPage
