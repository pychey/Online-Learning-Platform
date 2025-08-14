import { React, useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const RegisterLogin = () => {
  const [showPassword, setShowPassword] = useState({
    login: true,
    register: true,
  });
  const [showEye, setShowEye] = useState({
    login: false,
    register: false
  });

  return (
    <main className="flex justify-center  bg-white py-10 mt-20">
      <div className="grid grid-cols-1 tablet:grid-cols-2 w-full max-w-5xl border border-gray-200 max-tablet:mx-10 min-tablet:mx-10 ">
        
        {/* LOGIN */}
        <div className="px-10 py-8 tablet:border-r border-gray-200 relative max-tablet:border-b">
          <h3 className="text-center text-2xl font-bold text-[#0088cc] uppercase mb-8">
            ចូលគណនី
          </h3>
          <form className="space-y-6">
            
            {/* Email */}
            <div className="relative">
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                អាសយដ្ឋានអ៊ីមែល <span className="text-red-500">*</span>
              </label>
              <Mail className="absolute left-3 top-9 text-gray-400 w-5 h-5" />
              <input
                id="username"
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
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
              <Lock className="absolute left-3 top-9 text-gray-400 w-5 h-5" />
              <input
                id="password"
                type={showPassword.login ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
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
                {!showPassword.login ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              )} 
            </div>

            {/* Remember me */}
            <div className="flex items-center space-x-2">
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
              className="bg-[#0088cc] text-white font-semibold px-6 py-3 rounded-sm hover:bg-[#005d87] transition w-28 cursor-pointer"
            >
              ចូល
            </button>

            {/* Forgot Password */}
            <p className="text-sm text-[#0073aa] hover:underline cursor-pointer">
              ភ្លេចពាក្យសម្ងាត់របស់អ្នក?
            </p>
          </form>
        </div>

        {/* REGISTER */}
        <div className="px-10 py-8 relative">
          <h3 className="text-center text-2xl font-bold text-[#0088cc] uppercase mb-8">
            ចុះឈ្មោះ
          </h3>
          <form className="space-y-6">
            {/* Email */}
            <div className="relative">
              <label
                htmlFor="reg_email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                អាសយដ្ឋានអ៊ីមែល <span className="text-red-500">*</span>
              </label>
              <Mail className="absolute left-3 top-9 text-gray-400 w-5 h-5" />
              <input
                id="reg_email"
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                placeholder="អាសយដ្ឋានអ៊ីមែល"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label
                htmlFor="reg_password"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                ពាក្យសម្ងាត់ <span className="text-red-500">*</span>
              </label>
              <Lock className="absolute left-3 top-9 text-gray-400 w-5 h-5" />
              <input
                id="reg_password"
                type={showPassword.register ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                placeholder="ពាក្យសម្ងាត់"
                onMouseOver={() => setShowEye(prev => ({...prev , register: true}))}
                onMouseOut={() => setShowEye(prev => ({...prev , register: false}))}
              />
              {showEye.register && (
                <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, register: !prev.register }))
                }
                className="absolute right-5 top-9 text-gray-400 hover:text-sky-500 transition-colors"
                >
                {!showPassword.register ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}    
              </button>
              )} 
            </div>

            {/* Privacy Policy */}
            <p className="text-xs text-gray-600 leading-5">
              ដោយចុះឈ្មោះ អ្នកយល់ព្រមនឹង{" "}
              <a href="#" className="text-[#0073aa] hover:underline">
                លក្ខខណ្ឌប្រើប្រាស់
              </a>{" "}
              និង{" "}
              <a href="#" className="text-[#0073aa] hover:underline">
                គោលការណ៍ឯកជនភាព
              </a>{" "}
              របស់យើង។
            </p>

            {/* Register Button */}
            <button
              type="submit"
              className="bg-[#0088cc] text-white font-semibold px-6 py-3 rounded-sm hover:bg-[#005d87] transition w-32 cursor-pointer"
            >
              ចុះឈ្មោះ
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegisterLogin;
