import React from "react";

const founders = [
  {
    img: "data:image/jpeg;base64,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",
    quote:
      "ការអប់រំ គឺជាឧបករណ៍សំខាន់បំផុតសម្រាប់ជំរុញការផ្លាស់ប្តូរ និងការច្នៃប្រឌិត",
    name: "សុងលាង",
    role: "អ្នកដឹកនាំ",
    linkedin: "https://www.facebook.com/CADT.Academy",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT-OvI2ALDoy6FYmBNoWpKaUxUYVeu50PJuw&s",
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
