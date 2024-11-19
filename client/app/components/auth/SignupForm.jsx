import { useState } from "react";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Here you would typically make an API call to your backend
        console.log("Form submitted:", {
          email: formData.email,
          password: formData.password,
        });

        // Reset form after successful submission
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Signup error:", error);
      }
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google OAuth logic here
    console.log("Google sign in clicked");
  };

  return (
    <div className='w-full max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <div className='relative'>
            <input
              type='email'
              name='email'
              required
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5' />
          </div>
          {errors.email && (
            <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
          )}
        </div>

        <div>
          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              required
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5' />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
            >
              {showPassword ? (
                <EyeOffIcon className='w-5 h-5' />
              ) : (
                <EyeIcon className='w-5 h-5' />
              )}
            </button>
          </div>
          {errors.password && (
            <p className='mt-1 text-sm text-red-500'>{errors.password}</p>
          )}
        </div>

        <div>
          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"}
              name='confirmPassword'
              required
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-green-600 w-5 h-5' />
          </div>
          {errors.confirmPassword && (
            <p className='mt-1 text-sm text-red-500'>
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2'
        >
          Sign Up
        </button>

        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-2 bg-white text-gray-500'>or</span>
          </div>
        </div>

        <button
          type='button'
          onClick={handleGoogleSignIn}
          className='w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors'
        >
          <svg width='18' height='18' viewBox='0 0 24 24'>
            <path
              d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              fill='#4285F4'
            />
            <path
              d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              fill='#34A853'
            />
            <path
              d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              fill='#FBBC05'
            />
            <path
              d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              fill='#EA4335'
            />
          </svg>
          Sign in with Google
        </button>
      </form>

      <div className='mt-6 text-center text-sm'>
        <span className='text-gray-600'>Already have an account? </span>
        <a href='#' className='text-green-600 hover:underline'>
          Sign In
        </a>
      </div>
    </div>
  );
};

export default SignupForm;
