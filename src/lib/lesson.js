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

export const createLesson = async (payload) => {
  const response = await axios.post("/api/lesson", payload);
  return response.data;
};

export const deleteLesson = async (slug) => {
  try {
    const response = await axios.delete(`/api/lesson/${slug}`);
    return response.data;
  } catch (err) {
    console.error(`Failed to delete lesson ${slug}:`, err);
    throw err;
  }
};

export const markCompleted=async(slug,userId)=>{

    
    const response=await axios.post(url+"lesson/"+slug+"/mark-complete",{userId})
    return response.data;

}