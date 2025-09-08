'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const Partners = () => {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    async function fetchPartners() {
      try {
        const response = await axios.get('/api/home/partner')
        setPartners(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPartners()
  }, [])

  return (
    <div className="mb-10 w-full px-4">
      <h1 className="text-2xl tablet:text-4xl mt-10 font-medium text-center">ដៃគូរសហការ</h1>

      <div className="max-w-[1080px] w-full mx-auto grid grid-cols-1 tablet:grid-cols-3 lg:grid-cols-5 gap-10 mt-10">
        {partners ? (
          partners.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center w-full"
            >
              <img src={item.logo_img} className="w-30 h-30 object-contain" />
              <p className="mt-2">{item.name}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No partners available.</p>
        )}
      </div>
    </div>
  );
};

export default Partners;
