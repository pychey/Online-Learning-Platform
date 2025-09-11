import axios from "axios";

const url="/api/"

export const getContentBySlug = async (slug, admin = false) => {
    const response = await axios.get(url + "course-content/" + slug, {
        params: {
            ...(admin && { admin: true }) 
        }
    });
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
// export const markCompleted=async(slug)=>{
    
//     const response=await axios.put(url+"content/"+slug)
//     return response.data;

// }