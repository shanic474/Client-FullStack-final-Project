import FormInput from "../../../components/shared/FormInput";
import FormButton from "../../../components/shared/FormButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/auth.store.jsx";
import { toast } from "react-toastify";

const initialFormData = {
  user_email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const { handleLogin } = useAuthStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newState = { ...prev, [name]: value };
      console.log(newState); // see updated state
      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await handleLogin(formData);
      if (!user) throw new Error("Login failed");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.message || "Login failed");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <FormInput
        id="email"
        name="user_email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        value={formData.user_email}
        onChange={handleChange}
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleChange}
      />

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 bg-[#1a1a1a] border-amber-500/20 text-amber-500 focus:ring-amber-500/50"
          />
          <span className="text-gray-400 uppercase text-xs tracking-wide">
            Remember Me
          </span>
        </label>
        <a
          href="#"
          className="text-amber-400/70 hover:text-amber-400 uppercase text-xs tracking-wide transition-colors"
        >
          Forgot Password?
        </a>
      </div>

      <FormButton type="submit">Sign In</FormButton>
    </form>
  );
};

export default LoginForm;
