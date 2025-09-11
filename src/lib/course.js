import axios from "axios";

const url="/api/"

export const getCourseBySlug = async (slug) => {
  const response = await axios.get(url + "course/" + slug)
  console.log(response.data)
  return response.data;
}

export const getCourseWithContent = async (slug) => {
  const response = await axios.get(url + "course/" + slug, {
    params: {
      include: "chapters",
      chapter_fields: "id"
    }
  })
  console.log(response.data);
  
  return response.data
}

export const getCourseByUser = async () => {

    const response = await axios.get(url + "user/course")
    return response.data;
    
}

export const getCourseContent=async(slug,userId=0)=>{
    let endpoint=url+"course/"+slug+"/course-content"

    if(userId){
      endpoint += `?userId=${userId}`;
    }
    
    const response=await axios.get(endpoint)
    return response.data;
}

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