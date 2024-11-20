"use client";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter(); // Initialize router

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    router.push("/Dashboard");
    console.log("Form submitted:", formData);
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
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
          <div className='flex items-center gap-2 mb-6'>
            <div className='flex items-center gap-2 mb-8'>
              <div className=' bg-primary text-white font-bold py-2 px-3 '>
                Gleeful.
              </div>
            </div>
          </div>

          <h2 className='text-xl mb-8'>School Portal</h2>

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
                  href='/ResetPassword'
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
              Sign In
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
