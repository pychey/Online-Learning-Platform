import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import slideData from '../data/slideshowcontent';

const Slide = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 548);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mobileBackgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zgt6APVNjNw3eMGwz7cIyUmgGefsi9ZclQ&s"; 

  return (
   <div className="w-full relative text-white  ">
        {isMobile ? (
          <div
            className="w-full h-[390px] xs:h-[410px] sm:h-[340px] md:[390px]   bg-center bg-cover relative flex flex-col justify-center items-center text-center px-4 "
            style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
          >
          <div/>
          <div>
             <h1 className="text-xl font-semibold text-white mb-4  ">
            {slideData[0]?.title}
          </h1>
          <p className="text-md text-white mb-6 max-w-md">
            {slideData[0]?.description}
          </p>
          <button className="text-white  border-3 border-white  px-6 py-2 rounded-4xl hover:bg-white transition hover:text-gray-500 text-md">
            {slideData[0]?.buttonText}
          </button>
          </div>
        </div>
        
      ) : (
        // Desktop & Tablet 
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="w-full h-full "
        >
          {slideData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-screen h-[350px] object-fill brightness-55"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 mt-4">
                  <h1 className="text-2xl lg:text-4xl md:text-2xl  font-bold text-white mb-4">
                    {item.title}
                  </h1>
                  <p className="text-lg md:text-lg lg:text-2xl text-white font-normal  mb-6 ">
                    {item.description}
                  </p>
                  <button className=" text-white  border-3 border-white  px-6 py-2 rounded-4xl hover:bg-white transition hover:text-gray-500 text-lg md:text-lg ">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {!isMobile && (
        <style>{`
          .swiper-button-prev1,
          .swiper-button-next1 {
            width: 24px !important;
            height: 24px !important;
            color: white !important;
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            color:white;
            font-size:24px;
          }
          .swiper-button-prev {
            left: 3% !important;
          }
          .swiper-button-next {
            right: 3% !important;
          }
          .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
            border: 3px solid white;
            background: transparent;
            border-radius: 50%;
            opacity: 0.6;
            margin: 0 4px !important;
            transition: all 0.3s ease;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background: white !important;
            opacity: 1;
          }
        `}</style>
      )}
    </div>
  );
};

export default Slide;