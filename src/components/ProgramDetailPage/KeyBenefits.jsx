import MenuIcon from "../icons/MenuIcon"

const BENEFITS = [
  {
    benefit: "អភិវឌ្ឍជំនាញអាជីវកម្មដែលកំពុងត្រូវការខ្លាំង",
    icon: MenuIcon
  },
  {
    benefit: "សន្សំប្រាក់ និងពេលវេលា",
    icon: MenuIcon
  },
  {
    benefit: "បង្កើនតម្លៃប្រវត្តិការងាររបស់អ្នក",
    icon: MenuIcon
  },
]

const KeyBenefits = () => {

  return(
    <section className="pt-9 laptop:py-9 px-8 w-full border-y border-[#cccccc] bg-[#F7F7F7]">
      <div className="flex flex-col items-center mx-auto max-w-[1080px]">
        <h1 className="text-[23px] font-medium">អត្ថប្រយោជន៍សំខាន់ៗនៃកម្មវិធី Mini-MBA</h1>
        <div className="grid grid-cols-1 laptop:grid-cols-3 mt-9 w-full">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col text-center items-center gap-2.5 laptop:mb-0 mb-9 px-4 w-full"
            >
              <benefit.icon  
                size={70} 
                className="text-primary" 
              />
              <p className="w-full text-lg ">{benefit.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyBenefits