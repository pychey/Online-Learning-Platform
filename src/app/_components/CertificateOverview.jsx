const benefits = [
  {
    title: "ទទួលបានវិញ្ញាបនបត្របញ្ជាក់ការសិក្សា",
    description:
      "លោកអ្នកនឹងទទួលបាន វិញ្ញាបនបត្រឌីជីថល ដែលមានគុណភាពខ្ពស់ជាមួយនឹង លេខសម្គាល់ខ្លួន នៅបញ្ជាប់ការសិក្សា។",
  },
  {
    title: "ទទួលបានព្រឹតិ្តបត្រពិន្ទុ ក្រោយពេលរៀបចប់",
    description:
      "លោកអ្នកនឹងទទួលបាន ព្រឹតិ្តបត្រពិន្ទុឌីជីថល ដែលមានបញ្ជាក់អំពីមាតិកា និងពេលវេលារៀនត្រឹមត្រូវច្បាស់លាស់។",
  },
  {
    title: 'បងើ្កតគុណភាព "ប្រវតិ្តរូបសង្ខេប" របស់លោកអ្នក',
    description:
      'លោកអ្នកអាចអាចពន្លេច វិញ្ញាបនបត្រ និងព្រឹត្តិបត្រពិន្ទុ ដែលទទួលបាននៅក្នុង​ "ប្រវតិ្តរូបសង្ខេប ឬ CV" ដើម្បីធ្វើការដាក់សុំចូលបម្រើការងារផ្សេងៗបាន។',
  },
];

const CertificateOverview = () => {
  return (
    <section className="px-2 py-10 mb-40 w-full bg-[#F2F2F2]">
      <div className=" flex tablet:flex-row flex-col gap-8 mx-auto px-4 max-w-[1320px]">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="/Certificate_Template.jpg"
            className="aspect-[957/624] w-full max-w-[495px] bg-slate-500"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex items-center justify-center h-[84px] min-w-[84px] border-2 
                          border-primary rounded-full transition-colors duration-300 hover:bg-primary"
              >
                {index}
              </div>
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

export default CertificateOverview;
