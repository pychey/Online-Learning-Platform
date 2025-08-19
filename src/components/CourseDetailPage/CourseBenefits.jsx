import DesktopIcon from "../icons/DesktopIcon"
import ClockIcon from "../icons/ClockIcon"
import StarIcon from "../icons/StarIcon"
import CertificateIcon from "../icons/CertificateIcon"

const COURSE_BENEFITS = {
  top: [
    {
      title: "១០០% តាមអនឡាញ", 
      description: "មាតិកាបង្រៀនដែលគួរឱ្យចាប់អារម្មណ៍ និងមានគុណភាពខ្ពស់។", 
      icon: DesktopIcon,
    },
    {
      title: "១០០% សិក្សាតាមចិត្តអ្នក",
      description: "ចាប់ផ្តើមភ្លាមៗ៖ សិក្សាពេលណា កន្លែងណា និងល្បឿនបែបណាក៏បាន។",
      icon: ClockIcon,
    },
  ],
  topImage: "/Merged-Scheme-laptop-course-view.png",
      
  bottom: [
    {
      title: "រៀនជំនាញថ្មី",
      description: "ជាមួយវគ្គសិក្សាខ្លីៗ អ្នកនឹងរៀនជំនាញថ្មីបានយ៉ាងលឿនរហ័ស។",
      icon: StarIcon,
    },
    {
      title: "ទទួលវិញ្ញាបនបត្រ",
      description: "ទាញយកវិញ្ញាបនបត្រផ្ទាល់ខ្លួនរបស់អ្នកបន្ទាប់ពីបញ្ចប់វគ្គសិក្សា។",
      icon: CertificateIcon,
    }
  ],
  bottomImage: "/SN_Laptop_Front_1000.jpg"
}

const CourseBenefits = () => {

  return(
    <section className="my-48 mx-auto px-4 max-w-[1112px] w-full">
			<div className="tablet:grid tablet:grid-cols-3 laptop:gap-2 gap-[14px] w-full h-full">
				<div className="col-span-1 flex flex-col justify-center gap-6 px-4 py-10">
          {COURSE_BENEFITS.top.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center gap-6 py-1 w-full">
              <benefit.icon size={64} />
              <div className="flex flex-col items-center gap-2">						
                <h1 className="text-center font-semibold text-2xl">{benefit.title}</h1>
                <span className="text-center font-normal text-base">{benefit.description}</span>
              </div>
            </div>
          ))}
				</div>
				
  			<div className="col-span-2 p-4">
					<img 
						className="aspect-[1.37] max-w-[690px] w-full"
						src={COURSE_BENEFITS.topImage} 
						alt="" 
					/>
				</div>
			</div>

      <div className="tablet:grid tablet:grid-cols-3 mt-4 w-full h-full">
				<div className="col-span-1 laptop:order-2 flex flex-col justify-center gap-6 px-4 py-10">
					{COURSE_BENEFITS.bottom.map((benefit,index) => (
            <div key={index} className="flex flex-col items-center gap-6 py-1 w-full">
              <benefit.icon size={64} />
              <div className="flex flex-col items-center gap-2">						
                <h1 className="text-center font-semibold text-2xl">{benefit.title}</h1>
						    <span className="text-center font-normal text-base">{benefit.description}</span>
              </div>
            </div>
          ))}
				</div>
				
  			<div className="col-span-2 p-4">
					<img 
						className="aspect-[1.37] max-w-[690px] w-full"
						src={COURSE_BENEFITS.bottomImage} 
						alt="" 
					/>
				</div>
			</div>
    </section>
  )
}

export default CourseBenefits