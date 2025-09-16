import React from "react";

const founders = [
  {
    img: "https://b2b-cambodia.com/storage/uploads/articles/large/iQd1RK691GrwCDgOlT7nm85490xZzEkGmSwqGPFi.jpg",
    quote:
      "ការអប់រំ គឺជាឧបករណ៍សំខាន់បំផុតសម្រាប់ជំរុញការផ្លាស់ប្តូរ",
    name: "សុង",
    role: "អ្នកដឹកនាំ",
    linkedin: "https://www.facebook.com/CADT.Academy",
  },
  {
    img: "https://cambodia.mom-gmr.org/uploads/tx_lfrogmom/owner/110-400_owner_import.jpg",
    quote: "សម្រេចការងារធំបាន គឺចាប់ផ្តើមពីជំហានតូចៗ",
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
