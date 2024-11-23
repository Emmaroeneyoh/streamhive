"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
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

      // Set the user data in context after signup
      setUser(
        response.data.data.userDetails || {
          username: data.username,
          email: data.email,
          companyname: data.companyname,
          phone: data.phone,
        }
      );
      console.log(user);

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
      const email = response.data.data.userDetails.email;

      localStorage.setItem("jsontokenWebToken", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("email", email);

      console.log(response.data);
      // Set the user data in context after signup
      setUser(
        response.data.data.userDetails || {
          username: data.username,
          email: data.email,
          companyname: data.companyname,
          phone: data.phone,
          status: data.status,
        }
      );
      console.log(response.data.data.userDetails.status);

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

  const updateSubscription = async (data) => {
    try {
      const token = localStorage.getItem("jsontokenWebToken"); // Retrieve the token from localStorage

      console.log(token);

      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      const response = await axios.post(
        `${api}/user/update/subscription`,
        {
          userid: data.userid,
          amount: data.amount,
          start_date: data.start_date,
          end_date: data.end_date,
          subscription_method: data.subscription_method,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response, e.g., update context or localStorage
      toast.success("Subscription updated successfully!");
      console.log("Subscription Response:", response.data);

      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update subscription."
      );
      console.error("Update Subscription Error:", error);
    }
  };

  const makePayment = async (data) => {
    try {
      const token = localStorage.getItem("jsontokenWebToken"); // Retrieve the token from localStorage

      console.log(token);

      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }
      const response = await axios.post(
        `${api}/user/make/payment`,
        {
          userid: data.userid,
          amount: data.amount,
          email: data.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // Handle the response, e.g., update context or localStorage
      toast.success("Payment inialized");
      console.log("Payment Response:", response.data);
      const paymentUrl = response.data.data;
      router.push(paymentUrl);
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to make payment.");
      console.error("Payment Error:", error);
    }
  };

  const retrieveUser = async (data) => {
    try {
      const token = localStorage.getItem("jsontokenWebToken"); // Retrieve the token from localStorage

      console.log(token);

      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      const response = await axios.post(
        `${api}/user/retrieve/profile`,
        {
          userid: data.userid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // toast.success("Payment inialized");
      console.log("User Retrived:", response.data);
      setUser(
        response.data.data.userDetails || {
          username: data.username,
          email: data.email,
          companyname: data.companyname,
          phone: data.phone,
          status: data.status,
          subscription_method: data.subscription_method,
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Couldn't get User.");
      console.error("User Error:", error);
    }
  };

  // useEffect(() => {
  //   const register = async () => {
  //     try {
  //       const response = await axios.get(`${api}/user`, {
  //         username: data.username,
  //         companyname: data.companyname,
  //         email: data.email,
  //         password: data.password,
  //         phone: data.phone,
  //       });

  //       // Set the user data in context after signup
  //       setUser(
  //         response.data.data.userDetails || {
  //           username: data.username,
  //           email: data.email,
  //           companyname: data.companyname,
  //           phone: data.phone,
  //         }
  //       );
  //       console.log(user);
  //       toast.success("Signup successful! Check your email for verification.");
  //       // router.push("/VerifyEmail");
  //     } catch (error) {
  //       toast.error(error.response?.data?.message || "Signup failed!");
  //     }
  //   };

  //   register(); // Call the signup function
  // }, []); // Empty dependency array to run once when the component mounts

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
        updateSubscription,
        makePayment,
        retrieveUser,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// const updateSubscription = async (data, token) => {
//   try {
//     const response = await api.post(
//       `${api}/user/update/subscription`,
//       {
//         userid: data.userid,
//         amount: data.amount,
//         end_date: data.end_date,
//         start_date: data.start_date,
//         subscription_method: data.subscription_method,
//       }
//       // {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //     "Content-Type": "application/json",
//       //   },
//       // }
//     );
//     // Save the response payload to localStorage
//     localStorage.setItem("subscriptionData", JSON.stringify(response.data));

//     console.log("Subscription updated successfully:", response.data);
//     toast.success("Subscription updated successfully!");
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error updating subscription:",
//       error.response?.data || error.message
//     );
//     toast.error(
//       error.response?.data?.message || "Failed to update subscription."
//     );
//     throw error;
//   }
// };
