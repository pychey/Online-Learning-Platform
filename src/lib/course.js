import axios from "axios";

const url="/api/"

export const getCourseBySlug = async (slug) => {

    const response=await axios.get(url+"course/"+slug)
    console.log(response.data)
    return response.data;

}

export const getCourseByUser = async () => {

    const response=await axios.get(url+"user/course")
    return response.data;
    
}

export const getCourseContent=async(slug)=>{
    const response=await axios.get(url+"course/"+slug+"/course-content")
    return response.data;
}

// export const getCourseContent = async (slug) => {
//     const response=await axios.get(url+"course/"+slug+"/content")
//     return response.data;
// }

export const createCourse = async (payload) => {
  const response = await axios.post("/api/course", payload);
  return response.data;
};

export const patchCourse = async (slug, updatedData) => {
  try {
		console.log(slug)
		console.log(updatedData);
		
    const response = await axios.patch(`/api/course/${slug}`, updatedData);
    return response.data;
  } catch (err) {
    console.error(`Failed to patch course ${slug}:`, err);
    throw err; 
  }
};