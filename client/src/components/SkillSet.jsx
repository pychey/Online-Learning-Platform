const SkillSet = () => {
  return (
    <div className="">
        
        <section className="flex flex-col items-center justify-center gap-10 py-10  px-5 tablet:px-10 xl:px-32 laptop:flex-row  h-auto border-1 border-gray-200 bg-white rounded-lg  ">
            {/* Text Section */}
            <div className="flex flex-col gap-5 max-w-xl text-center laptop:text-left">
                <h2 className="text-xl tablet:text-2xl font-semibold">
                ទទួលបានជំនាញអាជីវកម្មដ៏សំខាន់បំផុត
                </h2>
                <p className="text-gray-700 leading-relaxed">
                កម្មវិធី ACET ACADEMY នេះ នឹងផ្តល់ឲ្យអ្នកនូវជំនាញអាជីវកម្មស្នូលចម្បង 
                ឧបករណ៍សំខាន់ៗ និងការយល់ដឹងជាមូលដ្ឋាន ៣៦០ដឺក្រេ 
                អំពីគោលការណ៍គ្រប់គ្រង។
                </p>
                <p className="text-gray-700 leading-relaxed">
                មាតិកា និងកម្មវិធីសិក្សានៃ ACET ACADEMY ត្រូវបានបង្កើតឡើងដោយអ្នកជំនាញខាងគ្រប់គ្រង 
                ដែលដឹងច្បាស់ថា ជំនាញណាដែលពិតជាចាំបាច់ 
                ដើម្បីឲ្យទទួលបានជោគជ័យក្នុងពិភពអាជីវកម្មស្មុគស្មាញសព្វថ្ងៃ។
                </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
                <img
                src="/skill.png"
                alt="រូបភាពជំនាញអាជីវកម្ម"
                className="h-80 tablet:h-96 w-auto object-contain"
                />
            </div>
        </section>

        <div className=" py-15 border-1 border-gray-200 bg-white rounded-lg ">
            <h3 className="flex items-center justify-center font-semibold text-2xl">
                របៀបទទួលបានវិញ្ញាបនបត្រ ACET ACADEMY របស់អ្នក
            </h3>
            <div className="flex justify-center items-center xl:mx-50 max-laptop:mx-10 laptop:mx-10 gap-14">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="250"
                height="250"
                viewBox="0 0 24 24"
                >
                <g
                    fill="#652d91"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="0.5"
                >
                    <path d="M12 17c-1.674 0-3.13 1.265-3.882 3.131c-.36.892.156 1.869.84 1.869h6.083c.685 0 1.2-.977.841-1.869C15.13 18.265 13.674 17 12 17Z"/>
                    <path
                    strokeLinejoin="round"
                    d="M18.5 5h1.202c1.201 0 1.801 0 2.115.377c.313.378.183.944-.078 2.077l-.39 1.7C20.76 11.708 18.61 13.608 16 14M5.5 5H4.298c-1.201 0-1.802 0-2.115.377c-.313.378-.183.944.078 2.077l.39 1.7C3.24 11.708 5.39 13.608 8 14"
                    />
                    <path d="M12 17c3.02 0 5.565-4.662 6.33-11.01c.211-1.754.317-2.632-.243-3.311S16.622 2 14.813 2H9.187c-1.81 0-2.714 0-3.274.679S5.46 4.236 5.67 5.991C6.435 12.338 8.98 17 12 17Z"/>
                </g>
                </svg>
                <p className="leading-relaxed text-gray-700">
                អ្នកគ្រាន់តែចុះឈ្មោះចូលរៀនវគ្គនីមួយៗដែលជាផ្នែកនៃកម្មវិធីនេះ។ 
                នៅពេលដែលអ្នកបញ្ចប់វគ្គទាំងអស់ដែលត្រូវការ អ្នកនឹងអាចទាញយក 
                វិញ្ញាបនបត្រ ACET ACADEMY បានដោយគ្មានការចំណាយបន្ថែមឬថ្លៃសេវាផ្សេងៗទៀត។ 
                វគ្គសិក្សាអាចរៀនបានដោយឯករាជ្យ ហើយមិនចាំបាច់តាមលំដាប់ជាក់លាក់ឡើយ។
                </p>
            </div>
        </div>

    </div>
    
  );
};

export default SkillSet;
