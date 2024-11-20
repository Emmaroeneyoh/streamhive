"use client";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    },
  });

  const signup = async (data) => {
    try {
      const response = await api.post("/user/signup", {
        username: data.username,
        companyname: data.companyname,
        email: data.email,
        password: data.password,
        phone: data.phone,
      });
      toast.success("Signup successful! Check your email for verification.");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed!");
    }
  };

  const verifyEmail = async (data) => {
    try {
      const response = await api.post("/user/confirmcode", {
        code: data.code,
      });
      toast.success("Email verified successfully!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification failed!");
    }
  };

  const login = async (data) => {
    try {
      const response = await api.post("/user/login", {
        email: data.email,
        password: data.password,
      });
      setUser(response.data.user);
      toast.success("Login successful!");
      setIsAuthenticated(true);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await api.post("/user/login", {
        email,
        password: "", // Sending an empty password to indicate a forgot password request
      });
      toast.success("Password reset instructions sent to your email.");
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send reset instructions."
      );
    }
  };

  const confirmForgotPasswordCode = async (data) => {
    try {
      const response = await api.post("/user/confirm/forgotpassword/code", {
        code: data.code,
        email: data.email,
      });
      toast.success("Code confirmed successfully!");
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Code confirmation failed!");
    }
  };
  const resetPassword = async (data) => {
    try {
      const response = await api.post("/user/reset/password", {
        email: data.email,
        password: data.password,
      });
      toast.success("Password reset successful!");
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
