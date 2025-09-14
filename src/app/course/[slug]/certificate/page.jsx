"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getCourseContent } from "@/lib/course";
import CourseLayout from "@/components/ui/CourseLayout";
import { useSession } from "next-auth/react";
import CertificateDownloader from "@/app/certificate/_components/CertificateDownloader";
import axios from "axios";
import RightArrow from "@/components/icons/RightArrow";

const Course = () => {
  const { data: session, status } = useSession();
  const { slug } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const router = useRouter()
  const searchParams = useSearchParams()
  const score = searchParams.get('score')
  const total = searchParams.get('total')

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") router.push('/login')

    const fetchCourse = async () => {
      try {
        const courseData = await getCourseContent(slug, session.user.id);
        setCourse(courseData);
      } catch (err) {
        console.error(err);
        setError(err?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [status, slug]);

  useEffect(() => {
    if (!course || !session?.user) return;
    if (data) return;

    const generateCertificate = async () => {
      try {
        const response = await axios.post("/api/certificate", {
          userId: session?.user.id,
          courseId: course.id,
        });
        setData(response.data);
      } catch (err) {
        console.error("Certificate error:", err);
      }
    };

    generateCertificate();
  }, [course, session?.user]); 

  if (loading) {
    return <h1 className="mt-20">Loading...</h1>;
  }

  if (error) {
    return <h1 className="mt-20">{error}</h1>;
  }

  return (
    <CourseLayout course={course}>
      <div className="w-full">
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

            

        </div>
        
        {/* Celebration Header */}
        <div className="flex justify-center items-center text-left">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-6 flex flex-col">
            <h2 className="text-4xl font-bold text-blue-900 mb-2 text-left">អបអរសាទរ!</h2>
            <p className="text-blue-700 text-lg">អ្នកបានបញ្ចប់វគ្គសិក្សានេះដោយជោគជ័យ</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="py-8 flex flex-col max-w-[1080px] items-center w-full mx-auto gap-8 px-4">
          
          {/* Certificate Section */}
          {data ? (
            <div className="w-full py-4">
              <img src={data.url} className="w-full h-full"/>
              <CertificateDownloader
                code={data.code}
                name={`${data.firstName} ${data.lastName}`}
                courseTitle={data.courseTitle}
                additionalClassName="mt-4 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                bgColor="bg-blue-600"
              />
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-blue-600">កំពុងបង្កើត...</p>
            </div>
          )}

          {/* Additional Info */}
          <div className="bg-white rounded-xl border border-blue-200 p-6 w-full max-w-2xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">បង្ហាញជំនាញថ្មីរបស់អ្នក</h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  អ្នកអាចបន្ថែមសញ្ញាបត្រនេះទៅក្នុង CV និងគណនី LinkedIn របស់អ្នក។ 
                  សិក្សាពីរបៀបបន្ថែមសញ្ញាបត្រទៅ LinkedIn profile។
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-xl border border-blue-200 p-6 w-full max-w-2xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">បង្ហាញជំនាញថ្មីរបស់អ្នក</h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  អ្នកអាចបន្ថែមសញ្ញាបត្រនេះទៅក្នុង CV និងគណនី LinkedIn របស់អ្នក។ 
                  សិក្សាពីរបៀបបន្ថែមសញ្ញាបត្រទៅ LinkedIn profile។
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-xl border border-blue-200 p-6 w-full max-w-2xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">បង្ហាញជំនាញថ្មីរបស់អ្នក</h4>
                <p className="text-blue-700 text-sm leading-relaxed">
                  អ្នកអាចបន្ថែមសញ្ញាបត្រនេះទៅក្នុង CV និងគណនី LinkedIn របស់អ្នក។ 
                  សិក្សាពីរបៀបបន្ថែមសញ្ញាបត្រទៅ LinkedIn profile។
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-between max-w-2xl">
            <button
              onClick={() => router.push(`/course/${course.slug}`)}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <RightArrow className="h-6 w-6 rotate-180" />
              ទៅទំព័រវគ្គសិក្សា
            </button>
            <button
              onClick={() => router.push('/')}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              ចង់ទៅផ្ទះ
            </button>
            <button
              onClick={() => router.push('/my-certificates')}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              បញ្ចប់វគ្គសិក្សា 
              <RightArrow className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>
    </CourseLayout>
  );
};

export default Course;
