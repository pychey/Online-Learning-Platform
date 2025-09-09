import axios from "axios"

export const fetchPrograms = async () => {
  try {
    const response = await axios.get("/api/program");
    return response.data;
  } catch (err) {
    console.error("Failed to fetch programs:", err);
    return null; 
  }
};

export const fetchProgramBySlug = async (slug) => {
  try {
    const response = await axios.get(`/api/program/${slug}`);
    return response.data;
  } catch (err) {
    console.error(`Failed to fetch program by slug (${slug}):`, err);
    return null;
  }
};

export const createProgram = async (programData) => {
  const response = await axios.post("/api/program", programData);
  return response.data;
};

export const patchProgram = async (slug, updatedData) => {
  try {
		console.log(slug)
		console.log(updatedData);
		
    const response = await axios.patch(`/api/program/${slug}`, updatedData);
    return response.data;
  } catch (err) {
    console.error(`Failed to patch program ${slug}:`, err);
    throw err; 
  }
};