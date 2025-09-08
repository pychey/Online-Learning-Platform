// 'use client'
// import { useState } from "react";
// // import { Mail, Lock, Eye, EyeOff } from "lucide-react";

// const LoginPage = () => {
	
// 	const [showPassword, setShowPassword] = useState({
//     login: true,
//     register: true,
//   });
//   const [showEye, setShowEye] = useState({
//     login: false,
//     register: false
//   });
  
// 	return (
//     <div className="flex flex-col justify-center items-center min-h-screen py-1 mt-10 max-tablet:mx-10">

//       {/* Logo */}
//       <div className="mb-6">
//         {/* Replace with your actual logo */}
//         <a href="/" className="block">
//           <img
//             src="/Logo-AA-Horizontal.png"
//             alt="logo"
//             className="h-16 object-contain"
//           />
//         </a>
//       </div>

//       {/* Form */}
//       <div className="px-10 py-8 border-gray-200 relative rounded border ">
//           <form className="space-y-6">
            
//             {/* Email */}
//             <div className="relative">
//               <label
//                 htmlFor="username"
//                 className="block text-sm font-semibold text-gray-700 mb-1"
//               >
//                 អាសយដ្ឋានអ៊ីមែល <span className="text-red-500">*</span>
//               </label>
//               {/* <Mail className="absolute left-3 top-9 text-gray-400 w-5 h-5" /> */}
//               <input
//                 id="username"
//                 type="email"
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg  outline-0 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
//                 placeholder="អាសយដ្ឋានអ៊ីមែល"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-semibold text-gray-700 mb-1"
//               >
//                 ពាក្យសម្ងាត់ <span className="text-red-500">*</span>
//               </label>
//               {/* <Lock className="absolute left-3 top-9 text-gray-400 w-5 h-5" /> */}
//               <input
//                 id="password"
//                 type={showPassword.login ? "text" : "password"}
//                 className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
//                 placeholder="ពាក្យសម្ងាត់"
//                 onMouseOver={() => setShowEye(prev => ({...prev , login: true}))}
//                 onMouseOut={() => setShowEye(prev => ({...prev , login: false}))}
//               />
//               {showEye.login && (
//                 <button
//                 type="button"
//                 onClick={() =>
//                   setShowPassword((prev) => ({ ...prev, login: !prev.login }))
//                 }
//                 className="absolute right-5 top-9 text-gray-400 hover:text-sky-500 transition-colors "
//               >
//                 {/* {!showPassword.login ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />} */}
//               </button>
//               )} 
//             </div>

//             {/* Remember me */}
//             <div className="flex items-center space-x-48 ">
//                 <div className="space-x-2">
//                     <input
//                     id="rememberme"
//                     type="checkbox"
//                     className="border-gray-300"
//                     />
//                     <label htmlFor="rememberme" className="text-sm text-gray-700">
//                         ចងចាំខ្ញុំ
//                     </label>
//                 </div>
                
//                 {/* Login Button */}
//                 <button
//                 type="submit"
//                 className="bg-primary text-white font-semibold px-6 py-3 rounded-sm hover:bg-primary-hover transition w-28 cursor-pointer"
//                 >
//                 ចូល
//                 </button>
//             </div>
//           </form>
//         </div>

//       {/* Links */}
//       <div className="mt-6 text-sm text-gray-600 space-x-2">
//         <a href="/login" className="text-sky-700 hover:underline">
//           ចូលគណនី
//         </a>
//         <span>|</span>
//         <a href="/register" className="text-sky-700 hover:underline">
//           ចុះឈ្មោះ
//         </a>
//       </div>

//       <a
//         href="/"
//         className="mt-2 text-sm text-gray-600 hover:underline"
//       >
//         ← ត្រលប់ទៅទំព័រដើម
//       </a>

//       {/* Footer */}
//       <a
//         href="/privacy"
//         className="mt-6 text-sm text-sky-700 hover:underline"
//       >
//         គោលការណ៍ឯកជនភាព
//       </a>
//     </div>
// 	)
// }

// export default LoginPage



'use client'
import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginPage = () => {
  const [step, setStep] = useState("login"); // "login" | "register" | "otp"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState({ login: false, register: false });
  const [showEye, setShowEye] = useState({ login: false, register: false });

  // Login handler
const handleLogin = async (e) => {
  e.preventDefault();
  setMsg("កំពុងចូល...");
  const res = await signIn("credentials", {
    redirect: false,
    email,
    password
  });

  // NextAuth returns { ok: false, error: null, status: 200 } on success!
  if (res && res.status === 200 && !res.error) {
    setMsg("Login success!");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } else {
    // Show NextAuth error if available
    setMsg(res?.error || "Login failed");
  }
};
  // Register handler
  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg("កំពុងចុះឈ្មោះ...");
    const res = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.success) {
      setUserId(data.userId);
      setStep("otp");
      setMsg("OTP បានផ្ញើទៅអ៊ីមែលរបស់អ្នក។ សូមបញ្ចូល OTP ដើម្បីបញ្ជាក់។");
    } else {
      setMsg(data.message || "Registration failed");
    }
  };

  // OTP verify handler
  // const handleVerifyOtp = async (e) => {
  //   e.preventDefault();
  //   setMsg("កំពុងបញ្ជាក់...");
  //   const res = await fetch("/api/auth/verify-otp", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ userId, otp })
  //   });
  //   const data = await res.json();
  //   if (data.success) {
  //     setMsg("បញ្ជាក់ OTP ជោគជ័យ! អ្នកអាចចូលបានឥឡូវនេះ។");
  //     setStep("login");
  //   } else {
  //     setMsg(data.message || "OTP verification failed");
  //   }
  // };
  const handleVerifyOtp = async (e) => {
  e.preventDefault();
  setMsg("កំពុងបញ្ជាក់...");
  const res = await fetch("/api/auth/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, otp })
  });
  const data = await res.json();
  if (data.success) {
    setMsg("បញ្ជាក់ OTP ជោគជ័យ! អ្នកអាចចូលបានឥឡូវនេះ។");
    setStep("login");
    // Redirect after a short delay (optional)
    setTimeout(() => {
      window.location.href = "/my-account-settings";
    }, 1000); // 1 second delay for user to see the message
  } else {
    setMsg(data.message || "OTP verification failed");
  }
};


  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-1 mt-10 max-tablet:mx-10">
      {/* Logo */}
      <div className="mb-6">
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
        {step === "login" && (
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email */}
            <div className="relative">
              <label htmlFor="login-email" className="block text-sm font-semibold text-gray-700 mb-1">
                អាសយដ្ឋានអ៊ីមែល <span className="text-red-500">*</span>
              </label>
              <input
                id="login-email"
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                placeholder="អាសយដ្ឋានអ៊ីមែល"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Password */}
            <div className="relative">
              <label htmlFor="login-password" className="block text-sm font-semibold text-gray-700 mb-1">
                ពាក្យសម្ងាត់ <span className="text-red-500">*</span>
              </label>
              <input
                id="login-password"
                type={showPassword.login ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                placeholder="ពាក្យសម្ងាត់"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                onMouseOver={() => setShowEye(prev => ({ ...prev, login: true }))}
                onMouseOut={() => setShowEye(prev => ({ ...prev, login: false }))}
              />
              {showEye.login && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => ({ ...prev, login: !prev.login }))}
                  className="absolute right-5 top-9 text-gray-400 hover:text-sky-500 transition-colors "
                >
                  {/* Eye icon here */}
                </button>
              )}
            </div>
            {/* Remember me and Login Button */}
            <div className="flex items-center space-x-48 ">
              <div className="space-x-2">
                <input id="rememberme" type="checkbox" className="border-gray-300" />
                <label htmlFor="rememberme" className="text-sm text-gray-700">
                  ចងចាំខ្ញុំ
                </label>
              </div>
              <button
                type="submit"
                className="bg-primary text-white font-semibold px-6 py-3 rounded-sm hover:bg-primary-hover transition w-28 cursor-pointer"
              >
                ចូល
              </button>
            </div>
            {msg && <div className="text-center text-red-500">{msg}</div>}
          </form>
        )}

        {step === "register" && (
          <form className="space-y-6" onSubmit={handleRegister}>
            {/* Email */}
            <div className="relative">
              <label htmlFor="register-email" className="block text-sm font-semibold text-gray-700 mb-1">
                អាសយដ្ឋានអ៊ីមែល <span className="text-red-500">*</span>
              </label>
              <input
                id="register-email"
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                placeholder="អាសយដ្ឋានអ៊ីមែល"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Password */}
            <div className="relative">
              <label htmlFor="register-password" className="block text-sm font-semibold text-gray-700 mb-1">
                ពាក្យសម្ងាត់ <span className="text-red-500">*</span>
              </label>
              <input
                id="register-password"
                type={showPassword.register ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                placeholder="ពាក្យសម្ងាត់"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                onMouseOver={() => setShowEye(prev => ({ ...prev, register: true }))}
                onMouseOut={() => setShowEye(prev => ({ ...prev, register: false }))}
              />
              {showEye.register && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => ({ ...prev, register: !prev.register }))}
                  className="absolute right-5 top-9 text-gray-400 hover:text-sky-500 transition-colors "
                >
                  {/* Eye icon here */}
                </button>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-sm hover:bg-primary-hover transition w-28 cursor-pointer"
            >
              ចុះឈ្មោះ
            </button>
            {msg && <div className="text-center text-red-500">{msg}</div>}
          </form>
        )}

        {step === "otp" && (
          <form className="space-y-6" onSubmit={handleVerifyOtp}>
            <div className="relative">
              <label htmlFor="otp" className="block text-sm font-semibold text-gray-700 mb-1">
                បញ្ចូល OTP <span className="text-red-500">*</span>
              </label>
              <input
                id="otp"
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                placeholder="OTP"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded-sm hover:bg-primary-hover transition w-28 cursor-pointer"
            >
              បញ្ជាក់ OTP
            </button>
            {msg && <div className="text-center text-red-500">{msg}</div>}
          </form>
        )}

        {/* Switch links */}
        <div className="mt-4 text-sm text-gray-600 space-x-2 text-center">
          {step !== "login" && (
            <button className="text-sky-700 hover:underline" onClick={() => { setStep("login"); setMsg(""); }}>
              ចូលគណនី
            </button>
          )}
          {step !== "register" && (
            <>
              <span>|</span>
              <button className="text-sky-700 hover:underline" onClick={() => { setStep("register"); setMsg(""); }}>
                ចុះឈ្មោះ
              </button>
            </>
          )}
        </div>
      </div>

      {/* Footer links */}
      <a href="/" className="mt-2 text-sm text-gray-600 hover:underline">
        ← ត្រលប់ទៅទំព័រដើម
      </a>
      <a href="/privacy" className="mt-6 text-sm text-sky-700 hover:underline">
        គោលការណ៍ឯកជនភាព
      </a>
    </div>
  );
};



export default LoginPage;