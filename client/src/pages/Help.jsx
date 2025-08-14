import {useState} from 'react'
import ComputerIcon from '../components/icons/ComputerIcon'
import FAQ from '../components/FAQ'

const Help = () => {

    const getting_start=[
        {
            title:"តើខ្ញុំចាប់ផ្តើមវគ្គសិក្សាដោយរបៀបណា?",
            describition: "ការចាប់ផ្តើមគឺងាយស្រួល! គ្រាន់តែរកមើលវគ្គសិក្សារបស់យើង ហើយជ្រើសរើសអ្វីដែលអ្នកចូលចិត្តពីបញ្ជីវគ្គសិក្សារបស់យើង។ ក្នុងអំឡុងពេលដំណើរការទូទាត់ អ្នកនឹងត្រូវបានជម្រុញឱ្យបង្កើតគណនីសិស្សផ្ទាល់ខ្លួនរបស់អ្នក។ ប្រសិនបើអ្នកមានគណនីរួចហើយ គ្រាន់តែចូល ហើយជ្រើសរើសវគ្គសិក្សាពីបញ្ជី។"
        },
        {
            title: "តើវគ្គសិក្សារបស់ខ្ញុំនឹងចាប់ផ្តើមនៅពេលណា?",
            describition: "អ្នកអាចចាប់ផ្តើមវគ្គសិក្សារបស់អ្នកភ្លាមៗ បន្ទាប់ពីអ្នកបានធ្វើការទូទាត់ដោយជោគជ័យ។ អ្នកក៏នឹងទទួលបានសិទ្ធិចូលរៀនពេញមួយជីវិតផងដែរ។ នោះមានន័យថាអ្នកអាចចាប់ផ្តើមវគ្គសិក្សានៅពេលក្រោយ សម្រាកឱ្យបានច្រើនតាមដែលអ្នកចូលចិត្ត ហើយថែមទាំងអាចចូលរៀនវគ្គទាំងមូលវិញនៅពេលអនាគត។"
        },
        {
            title: "តើវគ្គសិក្សាមើលទៅដូចអ្វី ហើយរយៈពេលប៉ុន្មាន?",
            describition: "យើងបានបញ្ចូលខ្លឹមសារទាំងអស់ទៅក្នុងវគ្គសិក្សាខ្លីដ៏មានអានុភាព។ វគ្គសិក្សានីមួយៗត្រូវចំណាយពេល 2-3 ម៉ោងដើម្បីបញ្ចប់។ វគ្គសិក្សាទាំងអស់របស់យើងគឺ 100% តាមអ៊ីនធឺណិត និងដំណើរការដោយខ្លួនឯង។ អ្នកអាចអានតាមរយៈខ្លឹមសារ ឬស្តាប់សំឡេង។ មិនចាំបាច់មានសម្ភារៈអានបន្ថែមទេ។ អ្នកអាចស្វែងរករយៈពេលក្នុងមួយវគ្គនៅទីនេះ។ វគ្គសិក្សាអាចត្រូវបានមើលនៅលើកុំព្យូទ័រ ថេប្លេត ឬស្មាតហ្វូន។ នេះជាអ្វីដែលចំណុចប្រទាក់មើលទៅដូច:",
            img:{
                src:"SN_Laptop_Front_1000.jpg",
                alt:"Course duration"
            }
        },
        {
            title: "តើតម្រូវការចាប់ផ្តើមមានអ្វីខ្លះ?",
            describition:"វគ្គសិក្សាទាំងអស់របស់យើងត្រូវបានរចនាឡើងសម្រាប់ទាំងសិស្ស និងមិនមែននិស្សិត។ ដូច្នេះ អ្នក​មិន​ត្រូវ​ការ​ចំណេះ​ដឹង​ពី​មុន​អំពី​គោល​គំនិត​គ្រប់​គ្រង ឬ​កម្មវិធី​ផ្លូវការ​ណា​មួយ​ដើម្បី​ចាប់​ផ្ដើម។ អ្វី​ដែល​អ្នក​ត្រូវ​ការ​គឺ​ជា​កម្មវិធី​រុករក​បណ្ដាញ​និង​ការ​លើក​ទឹក​ចិត្ត​មួយ​ចំនួន​!"
        }
    ]

    const problem_with_order_or_account=[

    ]

  return (
    <section className='my-20'>

        <div className="flex justify-center items-center py-10 text-4xl font-[500]">
            <h1>មជ្ឈមណ្ឌលជំនួយ</h1>
        </div>

        <div className="grid grid-cols-[1fr] laptop:grid-cols-[1fr_1fr] gap-8 px-4 w-full max-w-[1200px] mx-auto">

            <div >
                <h1 className='flex justify-start items-center gap-4 text-3xl'>
                    <ComputerIcon className="inline-block" size={32}/>
                    ការចាប់ផ្តើម
                </h1>
                <FAQ items={getting_start}/>
            </div>

            <div >
                <h1 className=' text-3xl flex justify-start items-center gap-4'>
                    <ComputerIcon className="inline-block"/>
                    បញ្ហាជាមួយការបញ្ជាទិញ ឬគណនី
                </h1>
                <FAQ items={getting_start}/>
            </div>

            <div >
                <h1 className=' text-3xl flex justify-start items-center gap-4'>
                    <ComputerIcon className="inline-block"/>
                    បញ្ហាជាមួយការបញ្ជាទិញ ឬគណនី
                </h1>
                <FAQ items={getting_start}/>
            </div>

            <div >
                <h1 className=' text-3xl flex justify-start items-center gap-4'>
                    <ComputerIcon className="inline-block"/>
                    បញ្ហាជាមួយការបញ្ជាទិញ ឬគណនី
                </h1>
                <FAQ items={getting_start}/>
            </div>

        </div>
    </section>
  )
}

export default Help