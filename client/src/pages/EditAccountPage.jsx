import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const EditAccountPage = () => {
  const [showPassword, setShowPassword] = useState({
    current: true,
    new: true,
    confirm: true,
  });

  const togglePassword = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <main className="flex justify-center items-start min-h-screen py-10 px-10 tablet:px-10 laptop:px-15 bg-gray-50 mt-20">
      <div className="w-full max-w-7xl bg-white border border-gray-200 rounded-lg shadow-md p-6 md:p-10">
        <form className="w-full">
          {/* Section Title */}
          <h2 className="text-primary font-medium text-xl md:text-2xl mb-2">
            ព័ត៌មានអ្នកប្រើ
          </h2>

          {/* Names Grid */}
          <div className="grid grid-cols-1 min-tablet:grid-cols-2 gap-5 mb-5">
            {/* Firstname */}
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                នាមខ្លួន <span className="text-red-500">*</span>
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="នាមខ្លួន"
                className="w-full h-11 border border-gray-300 rounded-md px-3 text-base outline-none focus:border-sky-500"
              />
            </div>

            {/* Lastname */}
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                នាមត្រកូល <span className="text-red-500">*</span>
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="នាមត្រកូល"
                className="w-full h-11 border border-gray-300 rounded-md px-3 text-base outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              អាសយដ្ឋានអ៊ីមែល <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="អាសយដ្ឋានអ៊ីមែល"
              className="w-full h-11 border border-gray-300 rounded-md px-3 text-base outline-none focus:border-sky-500"
            />
          </div>

          {/* Password Section */}
          <h2 className="text-primary font-medium text-xl md:text-2xl mb-2">
            ផ្លាស់ប្តូរពាក្យសម្ងាត់
          </h2>

          <div className="flex flex-col gap-5">
            {/* Current Password */}
            <div className="relative">
              <label
                htmlFor="current-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ពាក្យសម្ងាត់បច្ចុប្បន្ន (ទុកឲ្យទទេ ប្រសិនបើមិនចង់ផ្លាស់ប្តូរ)
              </label>
              <input
                id="current-password"
                type={!showPassword.current ? "text" : "password"}
                placeholder="ពាក្យសម្ងាត់បច្ចុប្បន្ន"
                className="w-full h-11 border border-gray-300 rounded-md px-3 pr-10 text-base outline-none focus:border-sky-500"
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-400"
                onClick={() => togglePassword("current")}
              >
                {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {/* New Password */}
            <div className="relative">
              <label
                htmlFor="new-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                ពាក្យសម្ងាត់ថ្មី (ទុកឲ្យទទេ ប្រសិនបើមិនចង់ផ្លាស់ប្តូរ)
              </label>
              <input
                id="new-password"
                type={!showPassword.new ? "text" : "password"}
                placeholder="ពាក្យសម្ងាត់ថ្មី"
                className="w-full h-11 border border-gray-300 rounded-md px-3 pr-10 text-base outline-none focus:border-sky-500"
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-400"
                onClick={() => togglePassword("new")}
              >
                {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                បញ្ជាក់ពាក្យសម្ងាត់ថ្មី (ទុកឲ្យទទេ ប្រសិនបើមិនចង់ផ្លាស់ប្តូរ)
              </label>
              <input
                id="confirm-password"
                type={!showPassword.confirm ? "text" : "password"}
                placeholder="បញ្ជាក់ពាក្យសម្ងាត់ថ្មី"
                className="w-full h-11 border border-gray-300 rounded-md px-3 pr-10 text-base outline-none focus:border-sky-500"
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-400"
                onClick={() => togglePassword("confirm")}
              >
                {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-hover transition cursor-pointer"
            >
              រក្សាប្រែប្រួល
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default EditAccountPage;
