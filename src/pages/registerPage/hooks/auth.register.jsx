import axios from "axios";


async function registerUser(formData) {
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/auth/signup`,
    formData,
    { withCredentials: true }
  );
  return { user: response.data.user, status: response.status};
}

export { registerUser };
