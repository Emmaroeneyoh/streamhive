"use client";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Initialize router

  const api = "https://turnserver-vqwh.onrender.com";
  //   const api = axios.create({
  //     baseURL: process.env.NEXT_PUBLIC_API_URL,
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
  //     },
  //   });

  const signup = async (data) => {
    try {
      const response = await axios.post(`${api}/user/signup`, {
        username: data.username,
        companyname: data.companyname,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });
      toast.success("Signup successful! Check your email for verification.");
      router.push("/VerifyEmail");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed!");
    }
  };

  const verifyEmail = async (data) => {
    try {
      const response = await api.post(`${api}/user/confirmcode`, {
        code: data.code,
      });
      toast.success("Email verified successfully!");
      router.push("/Login");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification failed!");
    }
  };

  const login = async (data) => {
    try {
      const response = await axios.post(`${api}/user/login`, {
        email: data.email,
        password: data.password,
      });
      setUser(response.data.user);
      toast.success("Login successful!");
      router.push("/Dashboard");
      setIsAuthenticated(true);
      const token = response.data.data.token;
      const userId = response.data.data.userDetails._id;

      localStorage.setItem("jsontokenWebToken", token);
      localStorage.setItem("userId", userId);

      console.log(response.data);
      console.log(response.data.data.userDetails._id);

      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await axios.post(`${api}/user/forgot/password`, {
        email,
      });
      toast.success("Password reset instructions sent to your email.");
      router.push("/ConfirmForgotPassword");
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send reset instructions."
      );
    }
  };

  const confirmForgotPasswordCode = async (data) => {
    try {
      const response = await axios.post(
        `${api}/user/confirm/forgotpassword/code`,
        {
          code: data.code,
          email: data.email,
        }
      );
      toast.success("Code confirmed successfully!");
      router.push("/ResetPassword");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Code confirmation failed!");
    }
  };

  const resetPassword = async (data) => {
    try {
      const response = await axios.post(`${api}/user/reset/password`, {
        email: data.email,
        password: data.password,
      });
      toast.success("Password reset successful!");
      router.push("/Login");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Password reset failed!");
    }
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Update this based on auth logic

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        verifyEmail,
        login,
        forgotPassword,
        confirmForgotPasswordCode,
        resetPassword,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
