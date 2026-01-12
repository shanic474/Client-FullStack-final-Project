import FormInput from '../../../components/shared/FormInput';
import FormButton from '../../../components/shared/FormButton';

const LoginForm = () => {
  return (
    <form className="space-y-6">
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
        placeholder="Enter your password"
      />

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 bg-[#1a1a1a] border-amber-500/20 text-amber-500 focus:ring-amber-500/50"
          />
          <span className="text-gray-400 uppercase text-xs tracking-wide">Remember Me</span>
        </label>
        <a href="#" className="text-amber-400/70 hover:text-amber-400 uppercase text-xs tracking-wide transition-colors">
          Forgot Password?
        </a>
      </div>

      <FormButton>Sign In</FormButton>
    </form>
  );
};

export default LoginForm;

