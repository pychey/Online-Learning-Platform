import PlayIcon from "./icons/PlayIcon";

const benefits = [
  {
    title: "កសាងសម្ថភាពជំនាញការវិភាគទិន្នន័យ​​​ និងការស្រាវជ្រាវ",
    description:
      "វគ្គបណ្តុះបណ្តាលរបស់យេីង​ ត្រូវបានរៀបចំឡេីង ដោយគ្រូជំនាញជាច្រេីនរូបដូច្នេះ ជំនាញដែលទទួលបាន​ នឹងជាតម្រូវការខ្ពស់របស់ស្ថាប័នការងារផ្សេងៗ។",
  },
  {
    title: "ទទួលបានចំណេះជំនាញលឿន ទាន់ចិត្ត",
    description:
      "មាតិកាបង្រៀន មានលក្ខណះប្រមូលផ្តុំចំណុចសំខាន់ៗ ដែលអាចឲ្យអ្នកសិក្សាទទួលបាននូវចំណេះជំនាញឆាប់រហ័ស និងមានប្រសិទ្ធភាព។",
  },
  {
    title: "កាលវិភាគសិក្សា ស្ថិតលើដៃរបស់លោកអ្នក",
    description:
      "លោកអ្នកនឹងទទួលបាននូវសិទ្ធិក្នុងការចូលរៀនក្នុងគេហទំព័រយើង អស់មួយជីវិត ដូច្នេះ អ្នកអាចកំណត់ពេលវេលា និងទីកន្លែងសិក្សា ដោយខ្លួនឯងបាន។",
  },
];

const CourseBenefits = () => {
  return (
    <section className="mt-40 px-2 py-10 w-full bg-[#F2F2F2]">
      <div className="flex flex-col tablet:flex-row gap-8 mx-auto px-4 max-w-[1320px]">
        <div className="flex justify-center items-center flex-1">
          <div className="flex justify-center items-center aspect-[960/584] w-full max-w-[495px] bg-slate-500">
            <button
              className="flex items-center justify-center aspect-[75/75] min-h-[75px] border-2 
                      border-white rounded-full bg-transparent hover:border-transparent 
                      hover:bg-primary transition-colors duration-300 cursor-pointer"
            >
              <PlayIcon size={50} color={"#FFFFFF"} />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 flex-1">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div
                className="min-w-[84px] h-[84px] border-2 border-primary rounded-full 
                          hover:bg-primary transition-colors duration-300"
              />
              <div>
                <h2 className="text-xl font-bold">{benefit.title}</h2>
                <p className="mt-0.5">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseBenefits;
