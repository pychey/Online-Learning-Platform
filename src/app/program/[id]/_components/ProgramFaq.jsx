import FAQ from "@/components/ui/FAQ"
import faqs from "@/data/Frequently_asked_questions"

const ProgramFaq = () => {

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

export default ProgramFaq;