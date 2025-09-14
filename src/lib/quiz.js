import axios from "axios"

export const fetchQuiz = async (params) => {
    const response = await axios.get(`/api/quizzes/${params}`);
    return response.data;
};

export const completeCourse=async(params,score,total)=>{
    const response=await axios.post(`/api/quizzes/${params}/complete`,{score,total})
    return response.data;
}

export const checkExam=async(params)=>{
    const response=await axios.get(`/api/quizzes/${params}/complete`)
    return response.data;
}