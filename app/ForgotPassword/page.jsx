"use client";
import { useState } from "react";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await forgotPassword(email);
    setIsLoading(false);
  };

  return (
    <div className='min-h-screen bg-white flex justify-between items-center'>
      {/* Image Background - Only visible on desktop */}
      <div className='hidden md:block w-1/2 '>
        <img
          src='/assets/forgot.svg'
          alt='forget'
          className=' w-full h-full object-cover'
        />
      </div>

      {/* Form Section */}
      <div className='w-full md:w-1/2 flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          <h2 className='text-2xl font-bold mb-6 text-center'>
            Reset Your Password
          </h2>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Email Field */}
            <div className='relative'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
              />
              <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5' />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-secondary text-white py-3 rounded-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'
            >
              {!isLoading ? "Send Reset Instructions" : "Authenticating..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
