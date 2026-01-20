import Navbar from '../../components/NAV/Navbar';
import FormContainer from '../../components/shared/FormContainer';
import FormHeader from '../../components/shared/FormHeader';
import FormDivider from '../../components/shared/FormDivider';
import FormLink from '../../components/shared/FormLink';
import LoginForm from './components/LoginForm';
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store.jsx";
import { useEffect } from 'react';

const LoginPage = () => {
   const navigate = useNavigate();
  const { isAuthUser, user } = useAuthStore();



  useEffect(() => {
    if (user)  navigate("/");
  }, [isAuthUser, user]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <FormContainer>
        <FormHeader title="Login" subtitle="Welcome Back" />
        <LoginForm />
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

