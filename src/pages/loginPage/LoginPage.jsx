import Navbar from "../../components/NAV/Navbar";
import FormContainer from "../../components/shared/FormContainer";
import FormHeader from "../../components/shared/FormHeader";
import FormDivider from "../../components/shared/FormDivider";
import FormLink from "../../components/shared/FormLink";
import LoginForm from "./components/LoginForm";
import GoogleSignInButton from "../../components/googleSignIn/GoogleSignInButton.jsx";
import { useAuthStore } from "../../store/auth.store.jsx";
import { useEffect } from "react";
import { useGoogleLoginHandler } from "../../components/googleSignIn/useGoogleLoginHandler.jsx"; 

const LoginPage = () => {
  const login = useGoogleLoginHandler(); 

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <FormContainer>
        <FormHeader title="Login" subtitle="Welcome Back" />
        <LoginForm />

        {/* Google Sign In */}
        <GoogleSignInButton
          text="Continue with Google"
          login={login}
        />

        <FormDivider />

        <FormLink
          to="/register"
          text="Don't have an account?"
          linkText="Sign Up"
        />
      </FormContainer>
    </div>
  );
};

export default LoginPage;
