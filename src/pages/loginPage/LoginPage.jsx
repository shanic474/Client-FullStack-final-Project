import Navbar from '../../components/Navbar';
import FormContainer from '../../components/shared/FormContainer';
import FormHeader from '../../components/shared/FormHeader';
import FormDivider from '../../components/shared/FormDivider';
import FormLink from '../../components/shared/FormLink';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
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

