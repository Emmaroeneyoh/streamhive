"use client";
import { useState } from "react";
import { EyeIcon, EyeOffIcon, Mail, Lock } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
// import hexagon from "/assets/forgot.svg";

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError(""); // Clear error when user edits input
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (formData.password !== confirmPassword) {
      setError("Passwords do not match!");
      toast.error(error.response?.data?.message || "Passwords do not match!");
      setIsLoading(false);
      return;
    }
    await resetPassword(formData);
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
            Reset Password
          </h2>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Email Field */}
            <div className='relative'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
              />
              <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5' />
            </div>

            <div>
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  id='password'
                  placeholder='password'
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
            </div>
            <div>
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='confirmPassword'
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
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
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-secondary text-white py-3 rounded-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'
            >
              {!isLoading ? "Reset Password" : "Authenticating..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
