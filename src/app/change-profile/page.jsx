'use client'

import RightArrow from "@/components/icons/RightArrow";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentPage = () => {
  const { data: session, status, update } = useSession();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userId, setUserId] = useState('');
  const [buttonMessage, setButtonMessage] = useState('រក្សាទុកឈ្មោះ')
  const [message, setMessage] = useState('')
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (status === 'unauthenticated') router.push('/login')
    
    if (session) setUserId(session.user.id);
    console.log(session)

    if (session?.user.firstName && session?.user.lastName) {
        setFirstName(session.user.firstName);
        setLastName(session.user.lastName);
        setMessage("អ្នកមានឈ្មោះរួចហើយ អ្នកអាចប្តូរឈ្មោះនេះបានឫអត់ក៏បាន ដែលឈ្មោះនេះនឹងត្រូវបានប្រើនៅលើសញ្ញាប័ត្ររបស់អ្នក។");
    } else {
      setMessage("សូមបំពេញឈ្មោះរបស់អ្នក ដែលឈ្មោះនេះនឹងត្រូវបានប្រើនៅលើសញ្ញាប័ត្ររបស់អ្នក។");
    }
  }, [status]);
  
  const handleChangeName = async (e) => {
    e.preventDefault();
    setButtonMessage("កំពុងធ្វើរក្សាទុក...");
    try {
      const { data } = await axios.post('/api/save-name', {
        userId,
        firstName,
        lastName,
      })
      if (data) {
        await update({ firstName, lastName });
        router.push('/my-courses')
      }
    } catch (error) {
      console.log(error)
      setMessage("មានបញ្ហាក្នុងការរក្សាឈ្មោះ សូមព្យាយាមម្ដងទៀត។");
      setButtonMessage("រក្សាទុកឈ្មោះ");
    }
  };

  if (status === 'loading') return <p className="mt-20">Loading...</p>

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
          កែប្រូហ្វាល់សម្រាប់គេហទំព័រនេះ
        </p>
      </div>
      <div className="px-10 py-8 border-gray-200 relative rounded border w-full max-w-md">
        <form className="space-y-6 " onSubmit={handleChangeName}>
          <div className="relative">
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              នាមផ្ទាល់ខ្លួនជាអក្សរឡាតាំង
            </label>
            <input
              id="firstName"
              type="text"
              className="mt-2 w-full px-6 py-3 border text-gray-700 border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
              placeholder="Your First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              នាមត្រកូលជាអក្សរឡាតាំង
            </label>
            <input
              id="lastName"
              type="text"
              className="mt-2 w-full px-6 py-3 border text-gray-700 border-gray-300 rounded-lg outline-0 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
              placeholder="Your Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>
          <p className="text-sm text-primary">{message}</p>
          <div className="flex items-center justify-between">
              <button
                onClick={() => router.push('/my-courses')}
                className="flex gap-2 items-center justify-center bg-gray-500 text-white font-semibold px-6 py-3 rounded-sm hover:bg-gray-600 transition duration-300 min-w-28 cursor-pointer"
              >
                <RightArrow className='rotate-180' size={16}/>
                ទៅគណនី
              </button>
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

export default PaymentPage