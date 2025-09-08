import React from "react";

const LeabfrogToAfrica = () => {
  return (
    <section className="py-2 h-auto lg:h-[460px] flex justify-center items-center  ">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10">
        
        {/* Left Image */}
        <div className=" h-auto w-full mt-2 lg:mt-4">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2021/05/Leapfrog2.jpg"
            alt="Community"
            className="shadow-md object-fit-contain h-full w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 md:mb-4 lg:mb-8  leading-normal lg:leading-[31px] mt-3">
           Leapfrog e.V.  <a className="text-[#808080]">/ អាហ្វ្រិក
            </a> 
           
          </h2>
          <p className="text-gray-950 mb-2 sm:mb-2 md:mb-6  text-base md:text-lg lg:text-lg  leading-normal lg:leading-[31px]">
           ការបែកបាក់ឌីជីថលគឺជាបញ្ហាសង្គម – សំដៅទៅលើភាពខុសគ្នានៅក្នុងការចូលប្រើបច្ចេកវិទ្យាសារព័ត៌មាន និងការទំនាក់ទំនង រវាងប្រទេសខាងជើងនិងខាងត្បូង បុរសនិងស្ត្រី ភូមិ និងទីក្រុង និងមនុស្សវ័យក្មេងនិងចាស់។
          </p>
          <p className="text-gray-950 mb-4 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg  leading-normal lg:leading-[31px]">
           ក្នុងការសហការយ៉ាងជិតស្និទ្ធជាមួយអង្គការដៃគូក្នុងតំបន់នៅអាហ្វ្រិក ចូលរួមក្នុងការបិទចន្លោះឌីជីថលនៅប្រទេសកេនយ៉ា កាមេរូន អ៊ូហ្កង់ដា និងហ្គាណា។{" "}
            <a href="#" className="text-primary underline">
              អ្នកអាចស្វែងយល់ព័ត៌មានបន្ថែម និងគាំទ្រគម្រោងនេះ នៅទីនេះ
            </a>
          
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeabfrogToAfrica;
