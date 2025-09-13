"use client";

import { useState, useEffect } from "react";
import CourseLayout from "@/components/ui/CourseLayout";
import { useSession } from "next-auth/react";
import { getCourseContent } from "@/lib/course";

const Quiz = () => {
  const { data: session, status } = useSession();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleReExam = () => {
  setStarted(true);      
  setFinished(false);    
  setCurrentQ(0);        
  setSelected(null);     
  setScore(0);          
  };

 const questions=[ {
    id: 1,
    question: "សេចក្តីណា មិនពិត សម្រាប់និយមន័យគម្រោង?",
    options: [
      "គម្រោងមានលក្ខណៈឯកត្តា។",
      "គម្រោងមានពេលវេលាកំណត់ច្បាស់លាស់។",
      "គម្រោងជាការប្រតិបត្តិចម្លងតែម្ដងៗ។",
      "គម្រោងមានធនធានកំណត់។",
    ],
    answer: 2,
  },
  {
    id: 2,
    question: "ដំណាក់កាលដំបូងនៃវដ្តជីវិតគម្រោងគឺអ្វី?",
    options: ["ការអនុវត្ត", "ការបិទ", "ការចាប់ផ្តើម", "ការត្រួតពិនិត្យ"],
    answer: 2,
  },
  {
    id: 3,
    question: "ឧបករណ៍ណា ត្រូវបានប្រើជាញឹកញាប់សម្រាប់កាលវិភាគគម្រោង?",
    options: ["ក្រុមប្រឹក្សា Kanban", "តារាង Gantt", "វិភាគ SWOT", "ការរួមគំនិត"],
    answer: 1,
  },
  {
    id: 4,
    question: "អ្នកណាជាអ្នកទទួលខុសត្រូវចម្បងលើការសម្រេចបាននៃគម្រោង?",
    options: [
      "អ្នកឧបត្ថម្ភគម្រោង",
      "អ្នកគ្រប់គ្រងគម្រោង",
      "សមាជិកក្រុមគម្រោង",
      "អតិថិជន",
    ],
    answer: 1,
  },
  {
    id: 5,
    question: "កាលវិភាគគម្រោងត្រូវបានប្រើសម្រាប់អ្វី?",
    options: [
      "បែងចែកថវិកា",
      "កំណត់កាលបរិច្ឆេទនិងការងារ",
      "វាយតម្លៃគុណភាព",
      "កំណត់ទំហំគម្រោង",
    ],
    answer: 1,
  },
  {
    id: 6,
    question: "ក្នុងការគ្រប់គ្រងគម្រោង, 'Triple Constraint' រួមមានអ្វីខ្លះ?",
    options: [
      "ពេលវេលា, ថវិកា, ជំនាញ",
      "គុណភាព, កម្លាំងពលកម្ម, ពេលវេលា",
      "ពេលវេលា, ថវិកា, វិសាលភាព",
      "សុវត្ថិភាព, អតិថិជន, ការទំនាក់ទំនង",
    ],
    answer: 2,
  },
  {
    id: 7,
    question: "ការវាយតម្លៃហានិភ័យគម្រោងធ្វើឡើងក្នុងដំណាក់កាលណា?",
    options: [
      "ដំណាក់កាលចាប់ផ្តើម",
      "ដំណាក់កាលគម្រោង",
      "ដំណាក់កាលអនុវត្ត",
      "ដំណាក់កាលបិទ",
    ],
    answer: 1,
  },
  {
    id: 8,
    question: "ឯកសារណា បង្ហាញអំពីគោលដៅ និងសេចក្តីសង្ខេបគម្រោង?",
    options: [
      "Project Proposal",
      "Project Charter",
      "Project Plan",
      "Risk Register",
    ],
    answer: 1,
  },
  {
    id: 9,
    question: "ការត្រួតពិនិត្យ និងវាយតម្លៃដំណើរការគម្រោង ជាផ្នែកមួយនៃដំណាក់កាលណា?",
    options: ["ការចាប់ផ្តើម", "ការអនុវត្ត", "ការត្រួតពិនិត្យ", "ការបិទ"],
    answer: 2,
  },
  {
    id: 10,
    question: "អ្វីជាគោលបំណងចម្បងនៃការបិទគម្រោង?",
    options: [
      "ដាក់ក្រុមចូលធ្វើការងារថ្មី",
      "សន្និដ្ឋាននិងរាយការណ៍លទ្ធផល",
      "កំណត់ថវិកាថ្មី",
      "បង្កើតគម្រោងថ្មីភ្លាមៗ",
    ],
    answer: 1,
  },
];



  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      setError("You must be logged in to view your courses.");
      setLoading(false);
      return;
    }

    getContentOfCourse();
  }, [status]);

  const getContentOfCourse = async () => {
    try {
      const slug = "statistic-description";
      const data = await getCourseContent(slug, session.user.id);
      setCourse(data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to load course");
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setFinished(true); 
    }
  };

  if (loading) {
    return <h1 className="mt-20 text-center">Loading...</h1>;
  }

  if (error) {
    return <h1 className="mt-20 text-center text-red-600">{error}</h1>;
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
              សំណួ​រ ​{currentQ + 1} នៃ {questions.length}
            </h2>
            <p className="mb-6 text-gray-800">{questions[currentQ].question}</p>
            <div className="space-y-4">
              {questions[currentQ].options.map((opt, idx) => (
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
                    checked={selected === idx}
                    onChange={() => setSelected(idx)}
                    className="mr-3"
                  />
                  {opt}
                </label>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="mt-6 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg shadow disabled:opacity-50"
            >
              {currentQ === questions.length - 1 ? "Finish" : "Next"}
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
            អ្នកទទួលបានពិន្ទុចំនួន {score} នៃ {questions.length} ពិន្ទុសរុប (
            {Math.round((score / questions.length) * 100)}%)
            </div>

            {score / questions.length >= 0.8 && (
            <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg shadow mb-6">
               ទាញយកសញ្ញាបត្ររបស់អ្នក
            </button>
            )}

           {score / questions.length >= 0.8 ? (
        <p className="text-gray-700">
            សូមអមអរសាទរ អ្នកបានបញ្ចប់វគ្គសិក្សានេះ ហើយទទួលបានរបស់អ្នក។
            វិញ្ញាបនបត្រវគ្គសិក្សា. អ្នកអាចទាញយកវិញ្ញាបនបត្ររបស់អ្នកឥឡូវនេះ។ វានឹងផងដែរ។
            លេចឡើងនៅក្នុងផ្នែក{" "}
            <a href="/my-certificates" className="text-blue-600 underline">
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
            Re-Exam
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
