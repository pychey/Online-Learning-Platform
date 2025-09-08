import Clock from "@/components/icons/Clock"
import Growth from "@/components/icons/Growth"
import SaveTime from "@/components/icons/SaveTime"
import UserValue from "@/components/icons/UserValue"

const BENEFITS = [
  {
    benefit: "អភិវឌ្ឍជំនាញអាជីវកម្មដែលកំពុងត្រូវការខ្លាំង",
    icon: Growth
  },
  {
    benefit: "សន្សំប្រាក់ និងពេលវេលា",
    icon: SaveTime
  },
  {
    benefit: "បង្កើនតម្លៃប្រវត្តិការងាររបស់អ្នក",
    icon: UserValue
  },
]

const KeyBenefits = () => {

  return(
    <section 
      className="pt-9 laptop:py-9 px-8 w-full border-y border-[#cccccc] bg-cover bg-center"
      style={{ backgroundImage: "url('/background-cover-white.jpg')" }}
    >
      <div className="flex flex-col items-center mx-auto max-w-[1080px]">
        <h1 className="font-medium text-xl tablet:text-3xl">អត្ថប្រយោជន៍សំខាន់ៗនៃកម្មវិធី Mini-MBA</h1>
        <div className="grid grid-cols-1 laptop:grid-cols-3 mt-12 w-full">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col text-center items-center gap-4 laptop:mb-0 mb-9 px-4 w-full"
            >
              <benefit.icon  
                size={70} 
                className="text-primary" 
              />
              <p className="w-full text-lg font-[450]">{benefit.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyBenefits