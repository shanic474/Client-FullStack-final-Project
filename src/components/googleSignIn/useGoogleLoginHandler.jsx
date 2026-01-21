import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginAuth } from "../../components/hooks/GoogleLoginAuth.jsx";
import { useAuthStore } from "../../store/auth.store.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * Custom hook to handle Google login.
 * Returns a `login` function to attach to a button.
 */
export const useGoogleLoginHandler = () => {
  const { verifyCookie } = useAuthStore();
  const { loginWithGoogle } = GoogleLoginAuth();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    flow: "auth-code",

    onSuccess: async (codeResponse) => {
      try {
        // 1️⃣ Send code to backend
        await loginWithGoogle(codeResponse);

        // 2️⃣ Refresh Zustand user from cookie
        await verifyCookie();

        toast.success("Logged in with Google");
        navigate("/");
      } catch (err) {
        console.error(err);
        toast.error("Google login failed");
      }
    },

    onError: () => {
      toast.error("Google login failed");
    },
  });

  return login;
};
