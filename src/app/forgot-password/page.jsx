
const ForgotPasswordPage = () => {

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

      {/* Message */}
      <div className="bg-white border border-gray-200 p-4 w-full max-w-md mb-6 rounded">
        <p className="text-sm text-gray-700 border-l-4 border-primary pl-3">
          សូមបញ្ចូលឈ្មោះអ្នកប្រើ ឬអាសយដ្ឋានអ៊ីមែលរបស់អ្នក។ 
          អ្នកនឹងទទួលបានសារអ៊ីមែលមួយដែលមានការណែនាំអំពីរបៀបកំណត់ពាក្យសម្ងាត់ឡើងវិញ។
        </p>
      </div>

      {/* Form */}
      <div className="bg-white border border-gray-200 p-6 w-full max-w-md rounded flex flex-col ">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          ឈ្មោះអ្នកប្រើ ឬ អាសយដ្ឋានអ៊ីមែល
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-hover mb-4"
        />
        <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded text-sm cursor-pointer ml-66 ">
          ទទួលពាក្យសម្ងាត់ថ្មី
        </button>
      </div>

      {/* Links */}
      <div className="mt-6 text-sm text-gray-600 space-x-2">
        <a href="/login" className="text-primary hover:underline">
          ចូលគណនី
        </a>
        <span>|</span>
        <a href="/register" className="text-primary hover:underline">
          ចុះឈ្មោះ
        </a>
      </div>

      {/* Footer */}
      <a
        href="/"
        className="mt-6 text-sm text-primary hover:underline"
      >
        ត្រលប់ទៅទំព័រដើម
      </a>
    </div>
  );
}

export default ForgotPasswordPage
