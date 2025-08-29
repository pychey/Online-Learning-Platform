import axios from "axios";

const url="/api/course/"

export const getCourseBySlug=async(slug)=>{
    const response=await axios.get(url+slug)

    return response.data;
}