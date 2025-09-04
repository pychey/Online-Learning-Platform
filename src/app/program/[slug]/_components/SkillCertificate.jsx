import Champion from "@/components/icons/Champion";

const SkillCertificate = () => {
  return (
    <div className="">
        
        <section className="flex flex-col laptop:flex-row items-center justify-center gap-6 py-10  px-5 text-base max-w-[1080px] w-full mx-auto">
            {/* Text Section */}
            <div className="flex flex-col gap-4 leading-relaxed flex-1">
                <h2 className="text-xl tablet:text-3xl font-medium">
                ទទួលបានជំនាញអាជីវកម្មដ៏សំខាន់បំផុត
                </h2>
                <p>
                កម្មវិធីគ្រប់គ្រងនេះ នឹងផ្តល់ឲ្យអ្នកនូវជំនាញអាជីវកម្មស្នូលចម្បង 
                ឧបករណ៍សំខាន់ៗ និងការយល់ដឹងជាមូលដ្ឋាន ៣៦០ដឺក្រេ 
                អំពីគោលការណ៍គ្រប់គ្រង។
                </p>
                <p>
                មាតិកា និងកម្មវិធីសិក្សានៃគ្រប់គ្រងត្រូវបានបង្កើតឡើងដោយអ្នកជំនាញខាងគ្រប់គ្រង 
                ដែលដឹងច្បាស់ថា ជំនាញណាដែលពិតជាចាំបាច់ 
                ដើម្បីឲ្យទទួលបានជោគជ័យក្នុងពិភពអាជីវកម្មស្មុគស្មាញសព្វថ្ងៃ។
                </p>
            </div>

            {/* Image Section */}
            <div className="flex justify-center flex-1">
                <img
                src="/skill.png"
                alt="រូបភាពជំនាញអាជីវកម្ម"
                className="h-80 tablet:h-96 w-auto laptop:h-auto laptop:max-w-[510px] laptop:w-full object-contain"
                />
            </div>
        </section>

        <hr className="border-gray-200 w-full h-[1px] border-b"></hr>

        <div className="flex flex-col items-center gap-4 py-10 max-w-[1080px] w-full mx-auto">
            <h3 className="text-center font-medium text-xl tablet:text-3xl">
                របៀបទទួលបានវិញ្ញាបនបត្រផ្នែកគ្រប់គ្រងរបស់អ្នក
            </h3>
            <div className="flex flex-col laptop:flex-row items-center mx-auto gap-6 px-5">
                <Champion size={76} className='mt-6 text-primary flex-1 mb-6'/>
                <p className="leading-relaxed flex-4">
                    អ្នកគ្រាន់តែចុះឈ្មោះចូលរៀនវគ្គនីមួយៗដែលជាផ្នែកនៃកម្មវិធីនេះ។ 
                    នៅពេលដែលអ្នកបញ្ចប់វគ្គទាំងអស់ដែលត្រូវការ អ្នកនឹងអាចទាញយក 
                    វិញ្ញាបនបត្រគ្រប់គ្រងបានដោយគ្មានការចំណាយបន្ថែមឬថ្លៃសេវាផ្សេងៗទៀត។ 
                    វគ្គសិក្សាអាចរៀនបានដោយឯករាជ្យ ហើយមិនចាំបាច់តាមលំដាប់ជាក់លាក់ឡើយ។
                </p>
            </div>
        </div>

        <hr className="border-gray-200 w-full h-[1px] border-b"></hr>
    </div>
    
  );
};

export default SkillCertificate;
