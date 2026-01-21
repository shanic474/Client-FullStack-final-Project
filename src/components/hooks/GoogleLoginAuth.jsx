import axios from "axios";

export function GoogleLoginAuth() {
  async function loginWithGoogle(codeResponse) {
    const { data } = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/google-login`,
      { code: codeResponse.code },
      { withCredentials: true }
    );

    return data; 
  }

  return { loginWithGoogle };
}