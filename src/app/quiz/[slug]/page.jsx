"use client";

import { useState, useEffect } from "react";
import CourseLayout from "@/components/ui/CourseLayout";
import { useSession } from "next-auth/react";
import { getCourseContent } from "@/lib/course";
import { fetchQuiz,completeCourse,checkExam } from "@/lib/quiz";
import { useParams } from "next/navigation";
import RightArrow from "@/components/icons/RightArrow"
import Link from "next/link"

const Quiz = () => {
  const param=useParams();
  const {slug}=param;
  const { data: session, status } = useSession();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [quiz,setQuiz]=useState(null)
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [total,setTotal]=useState(0)

  const handleReExam = () => {
  setStarted(true);      
  setFinished(false);    
  setCurrentQ(0);        
  setSelected(null);     
  setScore(0);          
  };



  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      setError("You must be logged in to view your courses.");
      setLoading(false);
      return;
    }

    getQuiz();
  }, [status]);


  const getQuiz = async () => {
    try {
      const d =await checkExam(slug)
      if(d.complete){
        setScore(d.score)
        setFinished(true)
        setStarted(true)
        setTotal(d.total)
        const course_data = await getCourseContent(slug, session.user.id);
        setCourse(course_data);
      } else{
        const data=await fetchQuiz(slug)
        setQuiz(data)
        if(!data||data.length===0){
          setFinished(true)
          setStarted(true)
          setScore(100)
        }
        const course_data = await getCourseContent(slug, session.user.id);
        setCourse(course_data);
        setTotal(data.length)
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to load course");
    } finally {
      setLoading(false);
    }
  };


 const handleNext = async () => {
  
  const nextScore = selected?.isCorrect ? score + 1 : score;

  if (currentQ + 1 < quiz.length) {
    
    setScore(nextScore);
    setCurrentQ(currentQ + 1);
    setSelected(null);
  } else {
    
    setScore(nextScore);
    setFinished(true);

    if (nextScore / quiz.length >= 0.8) {
      await completeCourse(slug,nextScore,quiz.length);
    }

    console.log("Final Score:", nextScore);
  }
};

  if (loading) {
    return <h1 className="mt-20 text-center">Loading...</h1>;
  }

  if (error) {
    return(
      <h1 className="flex justify-center items-center relative mt-20 h-[50vh]">
      <Link href={`/course/${slug}`} className="flex justify-center items-center absolute left-12 top-12 text-lg"><RightArrow className={`rotate-180 h-12 aspect-square `}/>​ទៅទំព័រមេរៀន</Link>
       <p className="text-red-500 text-2xl">{error}</p>
      </h1>
    )
  }

  return (
    <div className="w-full flex flex-col">
      <CourseLayout course={course}>
        
         {/* QUIZ START SCREEN */}
        {!started && (
          <div className="w-full rounded-2xl p-8">
            <h2 className="text-2xl font-semibold -mb-6 text-center">
             មូលដ្ឋានគ្រឹះនៃការគ្រប់គ្រងគម្រោង - ការប្រឡង
            </h2>

            <div className="flex items-center justify-center w-full">
              <div className="w-60 h-60 flex items-center justify-center mr-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/16815/16815634.png"
                  alt="quiz"
                />
              </div>
             <p className="text-gray-700 text-md text-start leading-relaxed max-w-full">
                សូមស្វាគមន៍មកកាន់វគ្គសំនួរសាកល្បង! ឥឡូវនេះជាឱកាសសាកល្បងចំណេះដឹងរបស់អ្នក
                និងទទួលបានវិញ្ញាបនបត្រវគ្គសិក្សា។ អ្នកអាចទាញយកវិញ្ញាបនបត្ររបស់អ្នកបន្ទាប់ពីសម្រេចបានពិន្ទុអប្បបរមា
                <span className="font-semibold text-green-600"> 80%</span>។ <br />
                អ្នកអាចសាកល្បងវគ្គសំនួរនេះបានច្រើនដងតាមដែលចង់បាន ប្រសិនបើអ្នកមិនទាន់សម្រេចបានពិន្ទុនោះ។
                </p>
            </div>
            <button
              onClick={() => setStarted(true)}
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white shadow transition ml-4 -mt-24"
            >
              ចាប់ផ្តើម
            </button>
          </div>
        )}

          {/* QUIZ DURING QUESTIONS */}
        {started && !finished && (
          <div className="w-full rounded-2xl p-8">
            <h2 className="text-xl font-medium mb-4">
              សំណួ​រ ​{currentQ + 1} នៃ {quiz.length}
            </h2>
            <p className="mb-6 text-gray-800">{quiz[currentQ].question}</p>
            <div className="space-y-4">
              {quiz[currentQ].answers.map((opt, idx) => (
                <label
                  key={idx}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                    selected === idx
                      ? "border-primary bg-primary/10"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="option"
                    checked={selected?.id === opt.id}
                    onChange={() => setSelected(opt)}
                    className="mr-3"
                  />
                  {opt.text}
                </label>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="mt-6 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg shadow disabled:opacity-50 cursor-pointer"
            >
              {currentQ === quiz.length - 1 ? "បញ្ចប់" : "បន្ទាប់"}
            </button>
          </div>
        )}


           {/* QUIZ END / RESULT */}
        {finished && (
        <div className="w-full rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold -mb-6 text-center">
             មូលដ្ឋានគ្រឹះនៃការគ្រប់គ្រងគម្រោង - ការប្រឡង
            </h2>

            <div className="flex items-center justify-center w-full">
              <div className="w-60 h-60 flex items-center justify-center mr-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/16815/16815634.png"
                  alt="quiz"
                />
              </div>
              <p className="text-gray-700 text-md text-start leading-relaxed max-w-full">
                សូមស្វាគមន៍មកកាន់វគ្គសំនួរសាកល្បង! ឥឡូវនេះជាឱកាសសាកល្បងចំណេះដឹងរបស់អ្នក
                និងទទួលបានវិញ្ញាបនបត្រវគ្គសិក្សា។ អ្នកអាចទាញយកវិញ្ញាបនបត្ររបស់អ្នកបន្ទាប់ពីសម្រេចបានពិន្ទុអប្បបរមា
                <span className="font-semibold text-green-600"> 80%</span>។ <br />
                អ្នកអាចសាកល្បងវគ្គសំនួរនេះបានច្រើនដងតាមដែលចង់បាន ប្រសិនបើអ្នកមិនទាន់សម្រេចបានពិន្ទុនោះ។
                </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-800 font-medium mb-8">
            អ្នកទទួលបានពិន្ទុចំនួន {score} នៃ {total} ពិន្ទុសរុប (
            {Math.round((score / total) * 100)}%)
            </div>

            {score / total >= 0.8 && (
            <div className="h-16 mt-8 -mb-2">
              <Link href={`/course/${slug}/certificate?score=${score}&total=${total}`} className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg shadow mb-6 ">
               ទាញយកសញ្ញាបត្ររបស់អ្នក
              </Link>
            </div>
            )}

           {score / total >= 0.8 ? (
        <p className="text-gray-700">
            សូមអមអរសាទរ អ្នកបានបញ្ចប់វគ្គសិក្សានេះ ហើយទទួលបានរបស់អ្នក។
            វិញ្ញាបនបត្រវគ្គសិក្សា. អ្នកអាចទាញយកវិញ្ញាបនបត្ររបស់អ្នកឥឡូវនេះ។ វានឹងផងដែរ។
            លេចឡើងនៅក្នុងផ្នែក{" "}
            <a href="/my-certificates" className="text-primary ">
            “សញ្ញាបត្ររបស់អ្នក”
            </a>{" "}
            នៃគណនីរបស់អ្នក.
        </p>
        ) : (
        <div>
            <p className="text-red-600 font-medium">
            អ្នកប្រឡងមិនទាន់ជាប់ទេ​ សូមប្រឡងម្ដងទៀត!
            </p>
            <button
            onClick={handleReExam}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow mt-4"
            >
            ប្រឡងម្តងទៀត
            </button>
        </div>
        )}

        </div>
        )}

      </CourseLayout>
    </div>
  );
};

export default Quiz;
