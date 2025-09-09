import axios from "axios";

const url="/api/"

export const getContentBySlug=async(slug)=>{

    const response=await axios.get(url+"course-content/"+slug)
    return response.data;

}

// export const markCompleted=async(slug)=>{
    
//     const response=await axios.put(url+"content/"+slug)
//     return response.data;

// }