import React from "react";

const ArtmeetsEducation = () => {
  return (
    <section className="py-2 h-auto lg:h-[460px] flex justify-center items-center  ">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10 mt-5">
        
        {/* Left Image */}
        <div className=" h-auto w-full mt-2 lg:mt-0">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2021/03/social_e.jpg"
            alt="Community"
            className="shadow-md object-fit-contain h-full w-full"
          />
        </div>

        {/* Right Content */}
       <div>
        <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 md:mb-4 lg:mb-8 leading-normal lg:leading-[31px]">
          ចំណេះដឹងថ្មី
        </h2>
        <p className="text-gray-950 mb-2 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px]">
          ការចូលប្រើបច្ចេកវិទ្យា និងឌីជីថលនៅកម្ពុជា នៅតែមានភាពខុសគ្នា – រវាងទីក្រុងនិងភូមិ បុរសនិងស្ត្រី និងកុមារវ័យក្មេង និងអ្នកធំ។ គម្រោងនេះផ្តោតលើការផ្តល់ឱកាសឲ្យកុមារនិងយុវវ័យទទួលបានចំណេះដឹងថ្មី និងចូលប្រើបច្ចេកវិទ្យាឌីជីថលបានយ៉ាងងាយស្រួល។
        </p>
        <p className="text-gray-950 mb-4 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px]">
          ដោយសហការជាមួយអង្គការដៃគូក្នុងតំបន់ កម្មវិធីនេះចូលរួមក្នុងការបង្កើតឱកាសសិក្សា និងការអប់រំក្នុងភូមិ និងទីក្រុងខ្លះៗនៅកម្ពុជា។{" "}
          <a href="#" className="text-primary underline">
            អ្នកអាចស្វែងយល់ព័ត៌មានបន្ថែម និងគាំទ្រគម្រោងនេះ នៅទីនេះ
          </a>
        </p>
      </div>

      </div>
    </section>
  );
};

export default ArtmeetsEducation;
