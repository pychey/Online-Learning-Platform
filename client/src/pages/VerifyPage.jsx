import { useState } from "react";
import Certificate_Template from "/Certificate_Template.jpg";
const verificationInstructions = [
  {
    description:
      "ទំព័រនេះអនុញ្ញាតឱ្យអ្នកផ្ទៀងផ្ទាត់ថា សញ្ញាប័ត្រដែលអ្នកបានទទួលពីសិស្សរបស់យើង មានភាពត្រឹមត្រូវ ឬមិនត្រឹមត្រូវ។ សញ្ញាប័ត្រនីមួយៗនឹងមានលេខសម្គាល់ផ្ទៀងផ្ទាត់ឯកត្តជានិច្ច នៅចំផ្នែកខាងក្រោមស្តាំនៃទំព័រ។",
  },
  {
    description:
      "សម្រាប់សញ្ញាប័ត្រអេឡិចត្រូនិចនីមួយៗដែលត្រូវបានបង្កើត ប្រវត្តិរបស់វានឹងត្រូវបានបង្កើត និងរក្សាទុកក្នុងមូលដ្ឋានទិន្នន័យរបស់យើង។ បន្ទាប់ពីអ្នកបញ្ចូលលេខសម្គាល់ មូលដ្ឋានទិន្នន័យនឹងផ្ទៀងផ្ទាត់ថា តើមានប្រវត្តិនោះទេ។ ប្រសិនបើមាន អ្នកនឹងទទួលបានការបញ្ជាក់អំពីព័ត៌មានដូចខាងក្រោម៖ នាមខ្លួនសិស្ស, នាមត្រកូលសិស្ស, ឈ្មោះវគ្គសិក្សា។",
  },
  {
    description:
      "សូមចងចាំបញ្ចូលសញ្ញា (-) ជាមួយលេខសញ្ញាប័ត្រ ពេលបញ្ចូលលេខសម្គាល់ ដើម្បីឱ្យការផ្ទៀងផ្ទាត់ត្រឹមត្រូវ។",
  },
  {
    description: (
      <>
        បើអ្នកមានសំណួរអំពីសញ្ញាប័ត្រណាមួយ ឬរកឃើញអ្វីដែលខុសគ្នា សូមកុំស្ទាក់ស្ទើរក្នុងការទំនាក់ទំនងមកយើងបានគ្រប់ពេល៖{" "}
        <a href="/help-center" className="text-primary underline">
          ចូលទៅកាន់មជ្ឈមណ្ឌលជំនួយ
        </a>
      </>
    ),
  },
];

const VerifyPage = () => {
	const [ search, setSearch ] = useState('')
	const [ validSearch, setValidSearch ] = useState(true)
	const [ invalidMessage, setInvalidMessage ] = useState('')

	const handleSearch = () => {
		if (search === '') {
			setValidSearch(false)
			setInvalidMessage('Please enter Certificate ID or Email')
		} 
		else if (search !== '097-6001-889') {
			setValidSearch(false)
			setInvalidMessage('Invalid Details Given')
		}
	}

  return (
    <main>
      <div className="flex flex-col items-center justify-center text-center py-[52px] mt-20 w-full bg-[#F7F7F7] text-[26px]">
        <h1 className="w-full font-semibold">ការផ្ទៀងផ្ទាត់សញ្ញាប័ត្រ</h1>
        <h1 className="w-full font-normal">រហ័ស សុវត្ថិភាព គួរឱ្យទុកចិត្ត។</h1>
      </div>

      <section className="flex laptop:flex-row flex-col gap-4 mx-auto pt-2.5 pb-5 max-w-[1080px]">
        <div className="flex flex-col flex-1 pt-9 px-[15px]">
          <p className="text-center text-[19px] text-primary">ឧទាហរណ៍</p>
          <span className="text-center font-semibold text-[22px]">ទីតាំងលេខសម្គាល់សញ្ញាប័ត្រ</span>
          <img
            className="my-9 aspect-[863/647] w-full"
            src={Certificate_Template}
          />
        </div>

        <div className="flex flex-col flex-1 pt-9 px-[15px]">
          <p className="text-center text-[19px] text-primary">ស្វែងរក</p>
          <span className="text-center font-semibold text-[22px]">ពិនិត្យលេខសម្គាល់សញ្ញាប័ត្រ</span>
          <div className="flex flex-col items-center my-9 p-12 w-full border border-[#CCCCCC]
													[box-shadow:rgba(0,0,0,0.5)_0px_6px_36px_0px]"
					>
            <h2 className="mt-2 text-xl">ស្វែងរកតាមលេខសម្គាល់សញ្ញាប័ត្រ ឬ អ៊ីមែល: *</h2>
            <div className="my-2.5 pt-2.5 w-full">
              <input
                className="p-3 w-full h-[50px] bg-[#FAFAFA] focus:bg-white border rounded-md border-[#CCCCCC] 
													text-[19px] text-[#666666] focus:text-[#333333] focus:[box-shadow:rgb(204,204,204)_0px_0px_5px_0px] 
													focus:outline-none transition-all duration-300"
                type="text"
								value={search}
								onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="items-center mb-[30px] w-full">
              <button
                className="flex items-center text-center justify-center mx-auto mt-4 px-10 h-[50px] 
												bg-primary rounded-sm text-[18px] font-medium text-white cursor-pointer"
								onClick={handleSearch}
							>
                ស្វែងរក
              </button>
							{!validSearch && (
								<input 
									className="text-center mt-[26px] border w-full h-[50px] p-3 bg-[#FAFAFA] rounded-md 
													border-[#CCCCCC] font-medium text-[19px] text-red-500"
									value={invalidMessage}
									disabled
								/>
							)}
            </div>
          </div>
        </div>
      </section>

			<section className="py-4 w-full bg-[#F7F7F7]">
				<div className="flex flex-col gap-5 px-4 py-9 mx-auto max-w-[1080px] text-xl leading-[1.6] ">
					{verificationInstructions.map((instruction, index) => (
						<p key={index}>{instruction.description}</p>
					))}
				</div>
			</section>
    </main>
  );
};

export default VerifyPage;
