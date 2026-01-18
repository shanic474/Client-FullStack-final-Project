import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "../../../store/auth.store.jsx";
import { registerUser } from "../hooks/auth.register.jsx";
import { loginAuthUser } from "../../loginPage/hooks/auth.login.jsx";
import FormInput from "../../../components/shared/FormInput";
import FormButton from "../../../components/shared/FormButton";
import { useEffect } from "react";

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  user_name: Yup.string().required("Full name is required"),
  user_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phone_number: Yup.string().required("Phone number is required"),
});

const initialValues = {
  user_name: "",
  user_email: "",
  password: "",
  phone_number: "",
  user_role: "user",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuthStore();
  const verifyCookie = useAuthStore((state) => state.verifyCookie);
  const user = useAuthStore((s) => s.user);


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      
      // send form values directly
      const response = await registerUser(values);
      
      if (response.status === 400) {
        toast.error(response.message || "Registration failed");
        navigate("/login");
        return;
      }
      
      // log in user automatically
      
      await verifyCookie();
      toast.success("Registration successful! You are now logged in.");
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error(error.message || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          <Field
            name="user_name"
            as={FormInput}
            type="text"
            label="Full Name"
            placeholder="Enter your full name"
          />
          <ErrorMessage
            name="user_name"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            name="user_email"
            as={FormInput}
            type="email"
            label="Email Address"
            placeholder="Enter your email"
          />
          <ErrorMessage
            name="user_email"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            name="password"
            as={FormInput}
            type="password"
            label="Password"
            placeholder="Create a password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />

          <Field
            name="phone_number"
            as={FormInput}
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <ErrorMessage
            name="phone_number"
            component="div"
            className="text-red-500 text-sm"
          />

          <FormButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </FormButton>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
