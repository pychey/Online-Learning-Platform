'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    zip: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/Payment'); 
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded shadow-md py-12">
        {/* Billing Details Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="firstName" onChange={handleChange} required placeholder="First Name" className="p-3 border rounded w-full" />
            <input name="lastName" onChange={handleChange} required placeholder="Last Name" className="p-3 border rounded w-full" />
          </div>
          <input name="email" type="email" onChange={handleChange} required placeholder="Email Address" className="p-3 border rounded w-full" />
          <input name="street" onChange={handleChange} required placeholder="Street and House Number" className="p-3 border rounded w-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="city" onChange={handleChange} required placeholder="Town / City" className="p-3 border rounded w-full" />
            <input name="zip" onChange={handleChange} required placeholder="Postcode / ZIP" className="p-3 border rounded w-full" />
          </div>
          <input name="country" onChange={handleChange} required placeholder="Country" className="p-3 border rounded w-full" />
          <button
            type="submit"
            className="bg-primary text-white py-3 px-6 rounded hover:bg-purple-800 mt-4 w-full"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="border rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Your Order</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Essential Management Skills</span>
              <span className="text-primary font-semibold"><span className="line-through text-gray-400 mr-2">$50.00</span> $14.99 </span>
            </div>
            <div className="flex justify-between">
              <span>Marketing and Communications</span>
               <span className="text-primary font-semibold"><span className="line-through text-gray-400 mr-2">$50.00</span> $14.99 </span>
            </div>
            <div className="flex justify-between">
              <span>Economics and International Business</span>
            <span className="text-primary font-semibold"><span className="line-through text-gray-400 mr-2">$50.00</span> $14.99 </span>

            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span className="text-amber-400">$44.97</span>
            </div>
          </div>
         <div className='w-full h-auto mt-6'>
           <img src="https://devithuotkeo.com/static/image/portfolio/khqr/khqr-5.png" alt="" className='h-50 w-full' />
         </div>




          {/* Payment method (static) */}
          {/* <div className="mt-6">
            <label className="flex items-center space-x-2">
              <input type="radio" checked readOnly className="form-radio text-blue-600" />
              <span className="font-semibold">Credit & Debit Cards</span>
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
}
