'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Slide = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 548);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    async function fetchSlideData() {
      try {
        const response = await axios.get('/api/home/slideshow')
        setSlideData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchSlideData()
  }, [])

  if (!slideData.length) return ( <p> Loading... </p> )

  return (
    <>
      <div className="w-full relative text-white mt-20">
        {isMobile ? (
          <div className="relative w-full h-full">
            <img
              src={slideData[0].img_url}
              alt={slideData[0].title}
              className="w-screen h-[300px] object-cover brightness-55"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 mt-4">
              <h1 className="text-xl  font-bold text-white mb-4">
                {slideData[0].title}
              </h1>
              <p className="text-base text-white font-normal mb-6 ">
                {slideData[0].description}
              </p>
              <button className=" text-white  border-1 border-white  px-6 py-2 rounded-4xl hover:bg-white transition hover:text-gray-500 text-base cursor-pointer" onClick={() => router.push(slideData[0].route_link)}>
                {slideData[0].button_message}
              </button>
            </div>
          </div>
        ) : (
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="w-full h-full custom-slide-swiper"
        >
          {slideData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full">
                <img
                  src={item.img_url}
                  alt={item.title}
                  className="w-screen h-[350px] object-cover brightness-55"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 mt-4">
                  <h1 className="text-2xl laptop:text-4xl  font-bold text-white mb-4">
                    {item.title}
                  </h1>
                  <p className="text-lg md:text-lg lg:text-2xl text-white font-normal  mb-6 ">
                    {item.description}
                  </p>
                  <button className=" mt-4 text-white  border-2 border-white  px-6 py-2 rounded-4xl hover:bg-white transition hover:text-gray-500 text-lg md:text-lg cursor-pointer" onClick={() => router.push(item.route_link)}>
                    {item.button_message}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {!isMobile && (
        <style>{`
          .custom-slide-swiper .swiper-button-prev::after,
          .custom-slide-swiper .swiper-button-next::after {
            color:white;
            font-size:24px;
          }
          .custom-slide-swiper .swiper-button-prev {
            left: 3% !important;
          }
          .custom-slide-swiper .swiper-button-next {
            right: 3% !important;
          }
          .custom-slide-swiper .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
            border: 2px solid white;
            background: transparent;
            border-radius: 50%;
            margin: 0 4px !important;
            transition: all 0.3s ease;
            opacity: 0.5;
          }
          .custom-slide-swiper .swiper-pagination-bullet-active {
            background: white !important;
            opacity: 1;
          }
        `}</style>
      )}
    </div>
    </>
  );
};

export default Slide;