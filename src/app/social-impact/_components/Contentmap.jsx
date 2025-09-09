import React from "react";

const Contentmap = () => {
  return (
    <section className="py-2 h-auto lg:h-[360px] flex justify-center items-center border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center  px-4 sm:px-10">
         <div>
          <p className="text-black mb-2 sm:mb-2 md:mb-6  text-base md:text-lg lg:text-lg leading-normal lg:leading-[31px] mt-0 lg:mt-10 ">
          យើងជឿជាក់ថា ពិភពលោកល្អប្រសើរជាងនេះអាចកើតមានបាន តាមរយៈការអប់រំប្រសើរជាងមុន។ ឱកាសក្នុងការសិក្សាអាចបើកទ្វារទៅកាន់ការងារ ធនធាន និងជំនាញដែលមនុស្សត្រូវការដើម្បីមិនត្រឹមតែរស់រានមានជីវិត ប៉ុន្តែឱ្យរីកចម្រើន។ ការអប់រំគឺជាវិធីសាស្រ្តដែលមានអំណាចខ្លាំងបំផុតសម្រាប់ការអភិវឌ្ឍន៍យ៉ាងច្នៃប្រឌិត – ដោយការប្រយុទ្ធប្រឆាំងនឹងភាពក្រីក្រ សមភាពមិនស្មើ និងភាពងាយរងគ្រោះនៅជុំវិញពិភពលោក។ ដូចនេះ អង្គការអេសេតគាំទ្រគម្រោងអប់រំនៅប្រទេសកាមេរូន អ៊ូហ្កង់ដា ហ្គាណា កេនយ៉ា លាវ និងហ្វីលីពីន។
          </p>
        </div>
        {/* Left Image */}
        <div className=" h-auto w-full mt-2 lg:mt-0">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2025/06/socialmap3.png"
            alt="Contentmap"
            className=" object-fit-contain h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Contentmap;
