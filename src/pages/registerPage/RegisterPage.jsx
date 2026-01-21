import Navbar from "../../components/NAV/Navbar.jsx";
import FormContainer from "../../components/shared/FormContainer";
import FormHeader from "../../components/shared/FormHeader";
import FormDivider from "../../components/shared/FormDivider";
import FormLink from "../../components/shared/FormLink";
import RegisterForm from "./components/RegisterForm";
import GoogleSignInButton from "../../components/googleSignIn/GoogleSignInButton.jsx";
import { useGoogleLoginHandler } from "../../components/googleSignIn/useGoogleLoginHandler.jsx";
import { useAuthStore } from "../../store/auth.store.jsx";

const RegisterPage = () => {
  const login = useGoogleLoginHandler();
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <FormContainer>
        <FormHeader title="Register" subtitle="Create Your Account" />
        <RegisterForm />
        {/* Google Sign In */}
        <GoogleSignInButton text="Continue with Google" login={login} />
        <FormDivider />
        <FormLink
          to="/login"
          text="Already have an account?"
          linkText="Sign In"
        />
      </FormContainer>
    </div>
  );
};

export default RegisterPage;
