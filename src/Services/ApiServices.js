import axios from "axios";

console.log(process.env.CLIENT_BASE_URL, "process.env.CLIENT_BASE_URL");
export const ApiServices = {
	// Function to make a GET request
	get: async (url) => {
		try {
			const response = await axios.get(url);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	},

	// Function to make a POST request 
	post: async (url, data) => {
		try {
			const response = await axios.post(url, data);
			return response.data;
		} catch (error) {
			
			// throw new Error(error.message);
			return error.response;
		}
	},

	// Function to make a PUT request
	put: async (url, data) => {
		try {
			const response = await axios.put(url, data);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	},

	// Function to make a DELETE request
	delete: async (url) => {
		try {
			const response = await axios.delete(url);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	},
};
