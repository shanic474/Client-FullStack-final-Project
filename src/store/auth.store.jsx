import { create } from "zustand";
import { loginAuthUser, verifyCookieToken } from "../pages/loginPage/hooks/auth.login.jsx";
import { toast } from "react-toastify";

export const useAuthStore = create((set) => ({
  
  user: null,
  isAuthUser: null,

  verifyCookie: async () => {
    console.log("verifyCookie called");

    set({ user: null });

    try {
      const user = await verifyCookieToken();

      if (!user) throw new Error("No valid cookie found");

      set({
        user: user,
        isAuthUser: true,
      });

      console.log("the verified user by cookie is", user);
    } catch (error) {
      set({
        user: null,
        isAuthUser: false,
      });
    }
  },

  handleLogin: async (formData) => {
    console.log("handleLogin called with:", formData);

    try {
      const user = await loginAuthUser(formData);
      console.log("loginAuthUser response:", user);

      if (!user) {
        set({ user: null, isAuthUser: false });
        toast.error("You do not have access to the admin / manager dashboard.");
        return null;
      }

      set({
        user: user,
        isAuthUser: true,
      });

      console.log("the user is", user);
      return user;
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Login failed");
    }
  },

  logout: () => {
    set({
      user: null,
      isAuthUser: false,
    });
  }
}));
