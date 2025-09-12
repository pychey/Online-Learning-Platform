import React from "react";

const United24toUkraine = () => {
  return (
    <section className="py-2 h-auto lg:h-[460px] flex justify-center items-center ">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10">
        
        {/* Left Image */}
        <div className=" h-auto w-full mt-2 lg:mt-5">
          <img decoding="async" width="100" height="655"
            src="https://ckd.ais.edu.kh/storage/photos/news/2025/February/photo_2025-02-11_16-38-12.jpg"
            alt="Community"
            className="shadow-md object-fit-contain h-full w-full"
          />
        </div>

        {/* Right Content */}
       <div>
        <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 md:mb-4 lg:mb-8 leading-normal lg:leading-[31px] mt-4">
          ការរួមចំណែកក្នុងសហគមន៍
        </h2>
        <p className="text-gray-950 mb-2 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px]">
          ការរួមចំណែកក្នុងសហគមន៍គឺជាបញ្ហាសំខាន់សម្រាប់កម្ពុជាថ្មី – ផ្តោតលើការជួយអ្នកក្រីក្រ ការកសាងឱកាសសម្រាប់កុមារ និងយុវវ័យ និងការកែលម្អសេវាកម្មសង្គមក្នុងភូមិ និងទីក្រុង។ គម្រោងនេះចង់បំផុសការរួមគ្នា និងភាពទំនាក់ទំនងក្នុងសហគមន៍។
        </p>
        <p className="text-gray-950 mb-4 sm:mb-2 md:mb-6 text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px]">
          អង្គការនិងសហគ្រិនក្នុងតំបន់កម្ពុជាចូលរួមក្នុងការគាំទ្រ និងអភិវឌ្ឍសហគមន៍ ដើម្បីផ្តល់ឱកាសថ្មីៗ និងជួយកែសម្រួលជីវិតប្រជាជន។{' '}
          <a href="#" className="text-primary underline">
            អ្នកអាចស្វែងយល់ព័ត៌មានបន្ថែម និងគាំទ្រគម្រោងនេះ នៅទីនេះ
          </a>
        </p>
      </div>

      </div>
    </section>
  );
};

export default United24toUkraine;
