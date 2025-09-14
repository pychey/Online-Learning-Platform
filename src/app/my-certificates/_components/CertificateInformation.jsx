import Link from "next/link";

const certificates = [
  {
    img: "https://res.cloudinary.com/dhbuy0um9/image/upload/v1757864722/Your_certificate_akbhnm.pdf", 
    title: "វិញ្ញាបនបត្រពាក់ព័ន្ធនឹងវគ្គសិក្សា",
    description:
      "អ្នកនឹងអាចទាញយកវិញ្ញាបនបត្រវគ្គសិក្សាផ្ទាល់ខ្លួនរបស់អ្នកសម្រាប់រាល់វគ្គសិក្សាដែលអ្នកបានបញ្ចប់។",
    button: "វគ្គសិក្សាអាជីវកម្ម >",
    link: "/courselist",
  },
  {
    img: "https://res.cloudinary.com/dhbuy0um9/image/upload/v1757864722/Your_certificate_akbhnm.pdf", 
    title: "វិញ្ញាបនបត្រពាក់ព័ន្ធនឹងកម្មវិធីសិក្សា",
    description:
      "អ្នកនឹងទទួលបានវិញ្ញាបនបត្រឥតគិតថ្លៃ ប្រសិនបើអ្នកបញ្ចប់វគ្គសិក្សាទាំងអស់ក្នុងជំនាញជាក់លាក់មួយ។",
    button: "រកមើលកម្មវិធីសិក្សា >",
    link: "/courselist",
  },
  {
   img: "https://res.cloudinary.com/dhbuy0um9/image/upload/v1757864722/Your_certificate_akbhnm.pdf", 
    title: "វិញ្ញាបនបត្រភាសា",
    description:
      "អ្នកនឹងទទួលបានវិញ្ញាបនបត្រផ្ទាល់ខ្លួនបន្ទាប់ពីចូលរួមប្រឡងភាសារបស់យើង ដែលមានរយៈពេល ៤៥ នាទី។",
    button: "ការធ្វើតេស្តភាសា >",
    link: "/courselist",
  },
];

const CertificateInformation = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 ">
      <div className="max-w-5xl mx-auto grid grid-cols-1 tablet:grid-cols-3 gap-8 lg:h-[460px] h-full ">
        {certificates.map((item, idx) => (
          <div
            key={idx}
            className="bg-white  shadow-md  flex flex-col items-center text-center hover:shadow-lg transition duration-300 border-1 border-gray-400 px-4 pb-7"
          >
            <img
              src={item.img}
              alt={item.title}
              className="border-r-[0.5px] border-b-[0.5px] w-full h-auto object-fit-contain mt-4 mb-4 "
            />
            <h3 className="text-lg font-semibold mb-6">{item.title}</h3>
            <p className="text-gray-600 mb-6 text-base">{item.description}</p>
            <Link
              href={item.link}
              className="px-6 py-2 border-2 border-primary text-primary font-medium hover:bg-primary-hover transition hover:text-white "
            >
              {item.button}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateInformation;
