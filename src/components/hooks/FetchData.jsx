import axios from "axios";

export function FetchData(extension) { 
  async function getAllData(params = {}) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/${extension}/`,
        { params, withCredentials: true }
      );
      
      return response.data;
    } catch (error) {
      console.error(
        "getAllData error:",
        error.response?.status,
        error.response?.data,
        error.message
      );
      return { [extension]: [], total: 0, page: 1, limit: 4 };
    }
  }
  return { getAllData };
}
