import axios from "axios"

export const fetchPrograms = async () => {
	try {
		const response = await axios.get("/api/program")
		return response.data
	} catch (err) {

	}
}

export const fetchProgramBySlug = async (slug) => {
	try {
		const response = await axios.get(`/api/program/${slug}`)
		return response.data
	} catch (error) {

		} finally {
	}
}