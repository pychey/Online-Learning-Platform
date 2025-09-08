import axios from "axios";

const url="/api/"

export const getCourseBySlug=async(slug)=>{

    const response=await axios.get(url+"course/"+slug)
    return response.data;

}

export const getCourseByUser=async()=>{

    const response=await axios.get(url+"user/course")
    return response.data;
    
}

export const getCourseContent=async(slug)=>{
    const response=await axios.get(url+"course/"+slug+"/course-content")
    return response.data;
}