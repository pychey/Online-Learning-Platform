import FAQ from "@/app/help/_components/FAQ"
import faqs from "@/data/Frequently_asked_questions"

const Program_faq = () => {

  return (
    <section className="mt-10 mb-20 ">
        <div className="flex justify-center items-center py-10 text-4xl font-[500]">
            <h1>សំណួរដែរតែងតែសួរ</h1>
        </div>

        <div className=" lg:mx-auto mx-6 max-w-[1000px] ">
            <FAQ items={faqs}/>
        </div>
    </section>
  )
}

export default Program_faq