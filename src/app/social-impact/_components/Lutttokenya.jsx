import React from "react";

const Lutttokenya = () => {
  return (
    <section className="py-2 h-auto lg:h-[460px] flex justify-center items-center  bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10">
         <div>
          <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 md:mb-4 lg:mb-8 ">
           LUTSS e.V.  <a className="text-[#808080]">/ កេនយ៉ា
            </a> 
           
          </h2>
          <p className="text-black mb-2 sm:mb-2 md:mb-6  text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px]">
           មជ្ឈមណ្ឌលអប់រំ Joy Education Center នៅទីក្រុងណៃរ៉ូប៊ី ប្រទេសកេនយ៉ា ត្រូវបានបង្កើតឡើងដោយអ្នកស្រី Joyce Muhonja និងស្ត្រីឧទ្ទេសពីតំបន់របស់នាង។ ស្ត្រីចង់ផ្តល់ឱកាសឲ្យកុមារដែលមានភាពក្រីក្រ នៅណៃរ៉ូប៊ី អាចចូលរួមការអប់រំមានគុណភាពបានយ៉ាងងាយស្រួល។
          </p>
          <p className="text-black mb-4 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg  leading-normal lg:leading-[31px]">
           អង្គការ LUTSS e.V. ពីទីក្រុងប៊ែរលីន ជួយ Joyce និងយុទ្ធនាការក្នុងតំបន់របស់នាង ដើម្បីជួយហិរញ្ញប្បទានសាលា។ អ្នកអាចស្វែងយល់ព័ត៌មានបន្ថែម និងគាំទ្រគម្រោងនេះ នៅទីនេះ។{' '}
            <a href="#" className="text-primary underline">
              អ្នកអាចស្វែងយល់ និងគាំទ្រគម្រោងនេះ នៅទីនេះ។
            </a>
          
          </p>
        </div>
        {/* Left Image */}
        <div className=" h-auto w-full mt-2 lg:mt-0">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2021/05/Joy.jpg"
            alt="Community"
            className="shadow-md object-fit-contain h-full w-full"
          />
        </div>

        {/* Right Content */}
      </div>
    </section>
  );
};

export default Lutttokenya;
