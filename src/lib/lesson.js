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

// export const markCompleted=async(slug)=>{
    
//     const response=await axios.put(url+"lesson/"+slug)
//     return response.data;

// }