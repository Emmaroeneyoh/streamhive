"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const VerifyEmail = () => {
  const { verifyEmail } = useAuth();
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await verifyEmail({ code });
    router.push("/Login");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto bg-white p-6 shadow-md rounded-md'
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
        Verify Email
      </button>
    </form>
  );
};

export default VerifyEmail;
