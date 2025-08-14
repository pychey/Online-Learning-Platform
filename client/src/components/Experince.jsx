import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Star from "./Star";
import profilesData from '../data/expsharingcontents';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function App() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full min-h-[490px] px-6 flex flex-col items-center justify-center mt-8 ">
      <h1 className='font-semibold text-lg md:text-xl lg:text-4xl leading-[2rem] text-center'>
        បទពិសេាធន៍ដែលបានរៀនជាមួយ <span className='text-purple-600'>អាសេត អាខាដាមី</span>
      </h1>

      <Swiper
        onBeforeInit={(swiper) => {
          swiper.params.navigation = {
            ...swiper.params.navigation,
            prevEl: '.custom-swiper .swiper-button-prev',
            nextEl: '.custom-swiper .swiper-button-next',
          };
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.slideToLoop(0);
          if (swiper.navigation && swiper.navigation.init) {
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          548: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="w-full max-w-[1200px] xl:max-w-[1450px] mt-[-2px] custom-swiper"
      >
        {profilesData.map((slideProfiles, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="h-[420px] w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 xl:gap-40 text-white text-lg ">
              {slideProfiles.map((profile, idx) => (
                <div key={idx} className="flex flex-col justify-center items-center">
                  <div className="w-[190px] h-[190px] rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={profile.img}
                      alt={`Profile of ${profile.name}`}
                      className="w-[190px] h-[190px] lg:w-[190px] lg:h-[190px] md:w-[175px] md:h-[175px] object-cover rounded-full"
                    />
                  </div>
                  <Star />
                  <div className="w-60 text-center text-black text-lg mt-2">
                    <p>{profile.name}</p>
                    <p>{profile.batch}</p>
                    <p>{profile.field}</p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* custom style for navigation and pagination */}
      <style>{`
        .custom-swiper { position: relative; }
        .custom-swiper .swiper-pagination {
          position: absolute;
          bottom: 0px;
        }
        .custom-swiper .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          border: 3px solid #606060;
          background: transparent;
          border-radius: 50%;
          opacity: 0.6;
          margin: -5px 4px !important;
          transition: all 0.3s ease;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          background: purple !important;
          border: 3px solid purple;
          opacity: 1;
        }

        .custom-swiper .swiper-button-prev,
        .custom-swiper .swiper-button-next {
          width: 40px !important;
          height: 40px !important;
          border: 2px solid black;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
          z-index: 20;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
        }
        .custom-swiper .swiper-button-prev { left: 8px; }
        .custom-swiper .swiper-button-next { right: 8px; }

        .custom-swiper .swiper-button-prev:hover,
        .custom-swiper .swiper-button-next:hover {
          background-color: purple;
          border: 1px solid purple;
        }
        .custom-swiper .swiper-button-prev::after,
        .custom-swiper .swiper-button-next::after {
          font-size: 20px !important;
          font-weight: bold;
          color: black;
          transition: color 0.3s ease;
        }
        .custom-swiper .swiper-button-prev:hover::after,
        .custom-swiper .swiper-button-next:hover::after {
          color: white;
        }
        @media (max-width: 547px) {
          .custom-swiper .swiper-button-prev,
          .custom-swiper .swiper-button-next {
            display: none !important;
          }
          .custom-swiper .swiper-slide > div {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            height: auto;
            min-height: 330px;
          }
          .custom-swiper {
            padding-bottom: 3.5rem;
          }
        }
      `}</style>
    </div>
  );
}
