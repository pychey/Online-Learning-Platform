const InstituteOverview = () => {
  return (
    <section className='mt-20 w-full flex items-center justify-center flex-col laptop:flex-row py-10 px-5 sm:px-10 xl:px-60 gap-10'>
        <div className="h-[50%] w-full laptop:h-[50%] laptop:w-[50%] shrink-0"><img src="InstituteImage.png" alt="Institue Image" className='h-full w-full object-cover'/></div>
        <div className=" flex flex-col  gap-10">
            <h1 className='font-semibold text-xl lg:text-3xl'>វិទ្យាស្ថានដែលគួរឱ្យទុកចិត្តនៃការអប់រំបន្ត</h1>
            <p className=' lg:text-lg'>របៀប​រស់​នៅ​បាន​ផ្លាស់​ប្តូរ ហើយ​ក៏​គួរ​តែ​មាន​ការ​អប់រំ​ដែរ។ នៅក្នុងពេលវេលានៃការកើនឡើងនៃចលនា ភាពបត់បែន និងព័ត៌មានដែលហៀរចេញ យើងប្តេជ្ញាបង្កើតបទពិសោធន៍សិក្សាថ្មីដែលបំពេញតម្រូវការរបស់អ្នក និងស្តង់ដារអាជីវកម្មនាពេលបច្ចុប្បន្ននេះ។</p>
            <p className='lg:text-xl'>ចក្ខុវិស័យរបស់យើងគឺជាពិភពលោកមួយដែលអ្នកណាម្នាក់នៅគ្រប់ទីកន្លែងអាចរៀនអាជីវកម្មថ្មី ការគ្រប់គ្រង និងជំនាញសេដ្ឋកិច្ចបានលឿនជាងពេលណាទាំងអស់។ ជាមួយនឹងជំនាញរបស់យើងក្នុងការអប់រំតាមអ៊ីនធឺណិត និងបន្ត យើងស្វែងរកការជំរុញអាជីពរបស់អ្នក និងផ្តល់ជូនអ្នកនូវបទពិសោធន៍សិក្សាប្រកបដោយគុណភាពខ្ពស់។</p>
        </div>
    </section>
  )
}

export default InstituteOverview