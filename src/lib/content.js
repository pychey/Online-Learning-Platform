import axios from "axios";

const url="/api/"

export const getContentBySlug=async(slug,userId)=>{

    let endpoint=url+"course-content/"+slug

    if(userId){
      endpoint += `?userId=${userId}`;
    }
    
    const response=await axios.get(endpoint)
    return response.data;

}

export const markCompleted=async(slug,userId)=>{

    
    const response=await axios.post(url+"course-content/"+slug+"/mark-complete",{userId})
    return response.data;

}