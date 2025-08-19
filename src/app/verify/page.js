'use client'

import { useState } from "react";
import VerifyHeader from "@/components/VerifyPage/VerifyHeader";
import VerifyInstruction from "@/components/VerifyPage/VerifyInstruction";

const CERTIFICATE = {
  code: "097-6001-889",
  first_name: "សុគន់",
  last_name: "ដេនី",
  course_name: "រៀនសុីភ្លឹសៗ",
  name: "សញ្ញាប័ត្រវគ្គសិក្សា"
}

const VerifyPage = () => {

  const [ search, setSearch ] = useState("");
  const [ validSearch, setValidSearch ] = useState(null);
  const [ invalidMessage, setInvalidMessage ] = useState("");
  const [ searchResult, setSearchResult ] = useState(null);

  const handleSearch = () => {
    const trimmedSearch = search.trim();

    if (trimmedSearch === "") {
      setValidSearch(false);
      setInvalidMessage("សូមបញ្ចូលលេខសម្គាល់សញ្ញាប័ត្រ ឬអ៊ីមែល");
    } else if (trimmedSearch === "097-6001-889") {
      setValidSearch(true);
      setInvalidMessage("");
      setSearchResult(CERTIFICATE)
    } else {
      setValidSearch(false);
      setInvalidMessage("ព័ត៌មានមិនត្រឹមត្រូវ");
    }
  };

  return(
    <main className="mt-20">

      <VerifyHeader />

      <section className="flex laptop:flex-row flex-col gap-4 mx-auto pt-2.5 pb-5 max-w-[1080px]">
        <div className="flex flex-col flex-1 pt-9 px-[15px]">
          <p className="text-center text-[19px] text-primary">ឧទាហរណ៍</p>
          <span className="text-center font-semibold text-[22px]">ទីតាំងលេខសម្គាល់សញ្ញាប័ត្រ</span>
          <img
            className="my-9 aspect-[863/647] w-full"
            src="/Certificate_Template.jpg"
            alt="Certificate Example"
          />
        </div>

        <div className="flex flex-col flex-1 pt-9 px-[15px]">
          <p className="text-center text-[19px] text-primary">ស្វែងរក</p>
          <span className="text-center font-semibold text-[22px]">ពិនិត្យលេខសម្គាល់សញ្ញាប័ត្រ</span>
          <div className="flex flex-col items-center my-9 p-12 w-full border border-[#CCCCCC] shadow-lg bg-white">
            <h2 className="mt-2 text-xl text-center">
              ស្វែងរកតាមលេខសម្គាល់សញ្ញាប័ត្រ ឬ អ៊ីមែល: *
            </h2>
            <div className="my-2.5 pt-2.5 w-full">
              <input
                className="p-3 w-full h-[50px] bg-[#FAFAFA] focus:bg-white border rounded-md border-[#CCCCCC] 
                  text-[19px] text-[#666666] focus:text-[#333333] focus:shadow-md 
                  focus:outline-none transition-all duration-300"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ឧ. 097-6001-889 ឬ student@example.com"
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

              {!validSearch && invalidMessage && (
                <input 
									className="text-center mt-6 border w-full h-[50px] p-3 bg-[#FAFAFA] rounded-md 
													border-[#CCCCCC] font-medium text-[19px] text-red-500"
									value={invalidMessage}
									disabled
								/>
              )}

              {validSearch === true && (
                <div className="grid grid-rows-5 gap-2.5 text-left mt-6 p-6 bg-[#FAFAFA] border border-[#CCCCCC] rounded-md font-medium text-[18px]">
                  <div>
                    <h1 className="text-[22px]">លេខសម្គាល់សញ្ញាប័ត្រ:</h1>
                    <p className="text-xl text-[#52B18B]">{searchResult.code}</p>
                  </div>
                  <div>
                    <h1 className="text-[22px]">នាមត្រកូល:</h1>
                    <p className="text-xl text-[#52B18B]">{searchResult.first_name}</p>
                  </div>
                  <div>
                    <h1 className="text-[22px]">នាមឈ្មោះ:</h1>
                    <p className="text-xl text-[#52B18B]">{searchResult.last_name}</p>
                  </div>
                  <div>
                    <h1 className="text-[22px]">ឈ្មោះវគ្គសិក្សា:</h1>
                    <p className="text-xl text-[#52B18B]">{searchResult.course_name}</p>
                  </div>
                  <div>
                    <h1 className="text-[22px]">ឈ្មោះសញ្ញាប័ត្រ:</h1>
                    <p className="text-xl text-[#52B18B]">{searchResult.name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <VerifyInstruction />
    </main>
  )
}

export default VerifyPage