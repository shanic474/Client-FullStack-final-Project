import FormInput from '../../../components/shared/FormInput';
import FormButton from '../../../components/shared/FormButton';

const RegisterForm = () => {
  return (
    <form className="space-y-6">
      <FormInput
        id="fullName"
        name="fullName"
        type="text"
        label="Full Name"
        placeholder="Enter your full name"
      />

      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
      />

      <FormInput
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Create a password"
      />

      <FormInput
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Confirm your password"
      />

      {/* Terms & Conditions */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          className="mt-1 mr-2 w-4 h-4 bg-[#1a1a1a] border-amber-500/20 text-amber-500 focus:ring-amber-500/50"
        />
        <label htmlFor="terms" className="text-xs text-gray-400 uppercase tracking-wide">
          I agree to the{' '}
          <a href="#" className="text-amber-400/70 hover:text-amber-400 transition-colors">
            Terms & Conditions
          </a>
        </label>
      </div>

      <FormButton>Create Account</FormButton>
    </form>
  );
};

export default RegisterForm;

