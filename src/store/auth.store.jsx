import { create } from "zustand";
import {  loginAuthUser, verifyCookieToken,} from "../pages/loginPage/hooks/auth.login.jsx";
import { toast } from "react-toastify";
import { useCartStore } from "./cart.store.jsx";

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
    const clearCart = useCartStore((s) => s.clearCart);
    console.log("handleLogin called with:", formData);

    try {
      const user = await loginAuthUser(formData);
      console.log("loginAuthUser response:", user);

      if (!user) {
        set({ user: null, isAuthUser: false });
        toast.error("Invalid email or password");
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
    useCartStore.getState().clearCart();
  },
}));
