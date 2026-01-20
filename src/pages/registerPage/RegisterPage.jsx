import Navbar from '../../components/NAV/Navbar.jsx';
import FormContainer from '../../components/shared/FormContainer';
import FormHeader from '../../components/shared/FormHeader';
import FormDivider from '../../components/shared/FormDivider';
import FormLink from '../../components/shared/FormLink';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <FormContainer>
        <FormHeader title="Register" subtitle="Create Your Account" />
        <RegisterForm />
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

