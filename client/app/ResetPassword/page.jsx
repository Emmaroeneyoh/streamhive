"use client";
import { useState } from "react";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";
// import hexagon from "/assets/forgot.svg";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Reset Password Data:", formData);
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
                required
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
              />
              <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5' />
            </div>

            {/* New Password Field */}
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                name='newPassword'
                required
                placeholder='New Password'
                value={formData.newPassword}
                onChange={handleChange}
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

            {/* Confirm Password Field */}
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                name='confirmPassword'
                required
                placeholder='Confirm New Password'
                value={formData.confirmPassword}
                onChange={handleChange}
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

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-secondary text-white py-3 rounded-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
