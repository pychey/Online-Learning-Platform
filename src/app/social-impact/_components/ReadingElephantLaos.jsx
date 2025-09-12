import React from "react";

const ReadingElephantLaos = () => {
  return (
    <section className="py-2 h-auto lg:h-[460px] flex justify-center items-center  bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10">
        <div>
        <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 md:mb-4 lg:mb-8 ">
          ការសិក្សាអប់រំនៅតាមជនបទ
        </h2>
        <p className="text-black mb-2 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px]">
          មជ្ឈមណ្ឌលអប់រំ "សៀវភៅនិងក្តីសង្ឃឹម" នៅភូមិខាងជនបទកម្ពុជា ត្រូវបានបង្កើតឡើង ដើម្បីផ្តល់ឱកាសឲ្យកុមារក្រីក្រ និងកុមារវ័យក្មេងក្នុងតំបន់ឆ្ងាយអាចចូលរួមការអប់រំមានគុណភាព និងទទួលបានសៀវភៅសម្រាប់សិក្សា។
        </p>
        <p className="text-black mb-4 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px]">
          អង្គការសហគ្រាស LUTSS e.V. ពីទីក្រុងប៊ែរលីន ជួយគ្រប់គ្រងយុទ្ធនាការ និងផ្តល់ហិរញ្ញប្បទានសៀវភៅសម្រាប់កុមារ។ <a href="#" className="text-primary underline">អ្នកអាចស្វែងយល់ព័ត៌មានបន្ថែម និងគាំទ្រគម្រោងអប់រំនេះ នៅទីនេះ។</a>
        </p>
      </div>

        {/* Left Image */}
        <div className=" h-auto w-full mt-2 lg:mt-0">
          <img decoding="async" width="100" height="655"
            src="https://borgenproject.org/wp-content/uploads/Improving-education-in-Cambodia.jpg"
            alt="Community"
            className="shadow-md object-fit-contain h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadingElephantLaos;
