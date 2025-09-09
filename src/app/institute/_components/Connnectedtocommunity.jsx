'use client'

import { useRouter } from "next/navigation";

const Connnectedtocommunity = () => {
  const router = useRouter();

  return (
    <section className="py-6 h-auto lg:h-[460px] flex justify-center items-center ">
      <div className="max-w-6xl mx-auto grid [@media(min-width:548px)]:grid-cols-2 gap-6 sm:gap-8 items-start lg:item-center px-4 sm:px-10">
        
        {/* Left Image */}
        <div className=" h-auto w-full">
          <img decoding="async" width="100" height="655"
            src="https://www.ibm-institute.com/wp-content/uploads/2022/05/team.jpg"
            alt="Community"
            className="shadow-md object-fit-contain h-full w-full"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 md:mb-4 lg:mb-6">
            ទំនាក់ទំនងភ្ជាប់ជាមួយសហគមន៍របស់យើង
          </h2>
          <p className="text-gray-950 mb-2 sm:mb-2 md:mb-6  text-base leading-relaxed">
            ប្រសិនបើអ្នកចង់ទំនាក់ទំនងភ្ជាប់ជាមួយ អេសេត តាមបណ្តាញសង្គម និងនៅតែទាន់សម័យ
            អំពីព័ត៌មានថ្មីៗរបស់យើង ការផ្សព្វផ្សាយពិសេស។
            យើងសូមអញ្ជើញអ្នកឱ្យតាមដាន{" "}
            <a href="https://www.facebook.com/CADT.Academy" className="text-primary underline">
              ទំព័រ Facebook
            </a>{" "}
            និង{" "}
            <a href="https://www.facebook.com/CADT.Academy" className="text-primary underline">
              ទំព័រ LinkedIn{" "}
            </a>
            របស់យើង។
          </p>
          <p className="text-gray-950 mb-4 sm:mb-2 md:mb-6 text-base leading-relaxed">
            តើអ្នកមានសំណួរបន្ថែមអំពីវគ្គសិក្សាអនឡាញ ឬវិទ្យាស្ថានរបស់យើងទេ? សូមកុំស្ទាក់ស្ទើរ{" "}
            <a href="/help" className="text-primary underline">
              ចូលទស្សនាមជ្ឈមណ្ឌលជំនួយរបស់យើង{" "}
            </a>
            ដែលអ្នកអាចរកឃើញផ្នែកសំណួរញឹកញាប់និងព័ត៌មានទំនាក់ទំនងរបស់យើង។
          </p>

          <button
            className="cursor-pointer inline-block bg-primary hover:bg-primary-hover text-white font-medium rounded transition-colors duration-200 w-[187px] h-[38px]"
            onClick={() => router.push('/help')}
          >
            ចូលមើលមជ្ឈមណ្ឌលជំនួយ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connnectedtocommunity;
