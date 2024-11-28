"use client";
import { useState } from "react";
import {
  EyeIcon,
  EyeOffIcon,
  Mail,
  Lock,
  Building,
  UserCircleIcon,
  Building2Icon,
  PhoneCallIcon,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

const Signup = () => {
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    companyname: "",
    email: "",
    password: "",
    phone: "",
  });

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
    setError(""); // Clear error when user edits input
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
    await signup(formData);
    setIsLoading(false);

    // console.log("Form submitted:", formData);
  };

  return (
    <div className='min-h-screen bg-white flex justify-between items-center'>
      {/* Image Background - Only visible on desktop */}
      <div className='hidden md:block w-1/2 '>
        <img
          src='/assets/signup.svg'
          alt='forget'
          className=' w-full h-full object-cover'
        />
      </div>
      {/* Form Section */}
      <div className='w-full md:w-1/2 flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          <Link href={"/"}>
            <img src='/assets/logo.png' width={150} alt='' />
          </Link>

          <h2 className='text-xl mb-8'>School Portal</h2>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <div className='relative'>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='username'
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className='w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
                />
                <UserCircleIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5' />
              </div>
            </div>
            <div>
              <div className='relative'>
                <input
                  type='text'
                  name='companyname'
                  id='companyname'
                  placeholder='companyname'
                  value={formData.companyname}
                  onChange={handleChange}
                  required
                  className='w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
                />
                <Building2Icon className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5' />
              </div>
            </div>
            <div>
              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  placeholder='email'
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
            <div>
              <div className='relative'>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className='w-full p-3 border rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary'
                />
                <PhoneCallIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5' />
              </div>
            </div>

            <button
              type='submit'
              className='w-full bg-secondary text-white py-3 rounded-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2'
            >
              {!isLoading ? "Sign In" : "Authenticating..."}
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
            <span className='text-gray-600'>Already have an account? </span>
            <a href='/Login' className='text-secondary hover:underline'>
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
