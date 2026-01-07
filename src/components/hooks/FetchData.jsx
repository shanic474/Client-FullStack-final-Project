import axios from "axios";

export function FetchData(extension) {
  console.log("fetchData extension",   `${import.meta.env.VITE_SERVER_URL}/${extension}/`);
  
  async function getAllData() {
    try {
      console.log("getData called");
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/${extension}/`,
        { withCredentials: true }
      );
      
      return response.data[extension];
    } catch (error) {
      console.error(
        "getAllData error:",
        error.response?.status,
        error.response?.data,
        error.message
      );
      return null;
    }
  }
  return { getAllData };
}
