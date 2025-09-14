// 'use client'

// import axios from "axios";
// import { useState } from "react";
// import CertificateDownloader from "./_components/CertificateDownloader";

// const Certificate = () => {
//   const [data, setData] = useState(null);
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [form, setForm] = useState({
//       firstName: 'Test',
//       lastName: 'Test',
//       courseTitle: 'Test'
//     }
//   );

//   const handleChange = ( field ) => (e) => {
//     setForm({
//       ...form,
//       [field]: e.target.value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmit(true);
//     try {
//       const response = await axios.post('/api/certificate', form);
//       console.log(response.data);
//       setData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
 
//   return (
//     <>
//     { !isSubmit ?
//       <form className="mt-20 py-12 flex flex-col max-w-[1080px] w-full mx-auto items-center gap-8" onSubmit={handleSubmit}>
//         <label>First Name : <input className="outline-none border px-4 py-2 rounded ml-2" type="text" value={form.firstName} onChange={handleChange('firstName')}/></label>
//         <label>Last Name : <input className="outline-none border px-4 py-2 rounded ml-2" type="text" value={form.lastName} onChange={handleChange('lastName')}/></label>
//         <label>Course Title : <input className="outline-none border px-4 py-2 rounded ml-2" type="text" value={form.courseTitle} onChange={handleChange('courseTitle')}/></label>
//         <button type="submit" className="px-4 py-2 bg-primary text-white font-medium rounded-sm cursor-pointer">Generate Certificate</button>
//       </form>
//       :
//       <div className="mt-20 py-12 flex flex-col max-w-[1080px] items-center w-full mx-auto gap-8">
//         { data ? <CertificateDownloader code = {data.code} name = {`${data.firstName} ${data.lastName}`} courseTitle={data.courseTitle} />
//                : <p>Generating ...</p> }
//       </div>
//     }
//     </>
//   );
// };

// export default Certificate;

'use client'

import axios from "axios";
import { useState } from "react";
import CertificateDownloader from "./_components/CertificateDownloader";

const Certificate = () => {
 
  return (
    <div className="mt-20 py-12 flex flex-col max-w-[1080px] items-center w-full mx-auto gap-8">
      <CertificateDownloader code = {'###-##-###'} name = {`Your Name`} courseTitle={'Course Title'} />
    </div>
  );
};

export default Certificate;