"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const VerifyEmail = () => {
  const { verifyEmail } = useAuth();
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await verifyEmail({ code });
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto flex justify-center items-start h-screen flex-col bg-white p-6 shadow-md rounded-md'
    >
      <h2 className='text-2xl font-bold mb-4'>Verify Email</h2>
      <div className='mb-4'>
        <label htmlFor='code' className='block mb-2'>
          Verification Code
        </label>
        <input
          type='text'
          name='code'
          id='code'
          placeholder='XXXX'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          className='w-full p-2 border rounded'
        />
      </div>
      <button
        type='submit'
        className='w-full p-2 bg-secondary text-white rounded hover:bg-primary'
      >
        {!isLoading ? "Verify Email" : "Verifying..."}
      </button>
    </form>
  );
};

export default VerifyEmail;
