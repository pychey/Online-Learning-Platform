import axios from "axios";

const url="/api/"

export const getContentBySlug = async(slug, userId, admin = false) => {
    let endpoint = url + "course-content/" + slug

    if(userId){
      endpoint += `?userId=${userId}`;
    }    
    
    const response = await axios.get(endpoint, {
        params: {
            ...(admin && { admin: true }) 
        }
    });

    return response.data;
};

export const createContent = async (payload) => {
  const response = await axios.post("/api/course-content", payload);
  return response.data;
};

export const patchChapter = async (slug, payload) => {
    try {
		// console.log(slug)
		// console.log(payload);
        const response = await axios.patch(`/api/course-content/${slug}`, payload);
        return response.data;
    } catch (err) {
        console.error(`Failed to patch course ${slug}:`, err);
        throw err; 
    }
}

export const deleteContent = async (slug) => {
  try {
    const response = await axios.delete(`/api/course-content/${slug}`);
    return response.data;
  } catch (err) {
    console.error(`Failed to delete course content ${slug}:`, err);
    throw err;
  }
};

export const markCompleted=async(slug,userId)=>{

    
    const response=await axios.post(url+"course-content/"+slug+"/mark-complete",{userId})
    return response.data;

}