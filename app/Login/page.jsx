"use client";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import Link from "next/link";

const Login = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // toast.error(error.response?.data?.message || "Couldn't Login");
    await login(formData);
    setIsLoading(false);

    console.log("Form submitted:", formData);
  };

  return (
    <div className='min-h-screen bg-white flex  justify-between items-center'>
      {/* Image Background - Only visible on desktop */}
      <div className='hidden md:block w-1/2 '>
        <img
          src='/assets/login.svg'
          alt='forget'
          className=' w-full h-full object-cover'
        />
      </div>

      {/* Form Section */}
      <div className='w-full md:w-1/2 flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          <Link href={"/"}>
            <img src='/assets/logo.png' width={150} alt='' className='mb-10' />
          </Link>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
                />
                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5' />
              </div>
            </div>

            <div>
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  id='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className='w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
                />
                <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5' />
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
              <div className='flex justify-end mt-2'>
                <a
                  href='/ForgotPassword'
                  className='text-sm text-gray-600 hover:text-secondary'
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type='submit'
              className='w-full bg-secondary text-white py-3 rounded-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'
            >
              {!isLoading ? "Sign In" : "Logging In..."}
            </button>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'>or</span>
              </div>
            </div>
          </form>

          <div className='mt-6 text-center text-sm'>
            <span className='text-gray-600'>Don&apos;t have an account? </span>
            <a href='/Signup' className='text-secondary hover:underline'>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
