import axios from "axios";

const url="/api/"

export const getLessonBySlug = async (slug, admin = false) => {

    const response = await axios.get(url + "lesson/" + slug, {
        params: {
            ...(admin && { admin: true }) 
        }
    })
    return response.data;

}


export const markCompleted=async(slug,userId)=>{

    
    const response=await axios.post(url+"lesson/"+slug+"/mark-complete",{userId})
    return response.data;

}