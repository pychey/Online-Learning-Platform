import axios from "axios";

const url="/api/"

export const getLessonBySlug=async(slug)=>{

    const response=await axios.get(url+"lesson/"+slug)
    return response.data;

}

// export const markCompleted=async(slug)=>{
    
//     const response=await axios.put(url+"lesson/"+slug)
//     return response.data;

// }