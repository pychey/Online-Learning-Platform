import React from "react";

const founders = [
  {
    img: "https://res.cloudinary.com/dogwsyf81/image/upload/v1757270604/Screenshot_2025-09-08_at_1.42.59_AM_eojhs9.png",
    quote:
      "ការអប់រំ គឺជាឧបករណ៍សំខាន់បំផុតសម្រាប់ជំរុញការផ្លាស់ប្តូរ និងការច្នៃប្រឌិត",
    name: "សុងលាង",
    role: "អ្នកដឹកនាំ",
    linkedin: "https://www.facebook.com/CADT.Academy",
  },
  {
    img: "https://res.cloudinary.com/dogwsyf81/image/upload/v1757271014/2025-09-08_01.50.00_qenpgm.jpg",
    quote: "ដល់ផ្ទះបានធ្វើ",
    name: "សីហា",
    role: "អ្នកដឹកនាំ",
    linkedin: "https://www.facebook.com/CADT.Academy",
  },
];

export default function MeetFounders() {
  return (
    <section className="bg-[#f2f2f2] min-h-[358px] w-full">
      <div className="max-w-[1080px] w-full mx-auto flex flex-col items-center py-8">
        <h2 className="text-3xl font-semibold">
          ជួបជាមួយ ស្ថាបនិកស្ថាប័ន
        </h2>

        <div className="flex flex-col tablet:flex-row items-center gap-10 mt-12 px-6 w-full mx-auto">
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="flex bg-white w-full h-[168px] shadow-sm"
            >
              <div className="flex-shrink-0">
                <img
                  src={f.img}
                  alt={f.name}
                  className=" w-[150px] h-[168px] tablet:w-[168px] tablet:h-[168px] object-cover"
                />
              </div>

              <div className="flex flex-col gap-4 justify-center text-left px-2 tablet:px-6">
                <p className="text-base">&quot;{f.quote}&quot;</p>
                <p className="text-base">
                  {f.name}, {f.role} <span className="hidden tablet:inline">|{" "}
                  <a href={f.linkedin} className="text-primary hover:underline">
                    LinkedIn
                  </a></span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
