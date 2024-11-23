"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
// import { useLocalStorage } from "../hooks/useLocalStorage";

const Success = () => {
  const { updateSubscription } = useAuth();
  let subscriptionPlan = 0;

  function getMonthlySubscriptionDates() {
    const startDate = new Date(); // Current date as the start date
    const endDate = new Date(startDate); // Clone the start date
    endDate.setDate(startDate.getDate() + 31); // Add 30 days to the start date

    // Format the dates as "DD/MM/YYYY"
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    return {
      start_date: formatDate(startDate),
      end_date: formatDate(endDate),
    };
  }
  function getYearlySubscriptionDates() {
    const startDate = new Date(); // Current date as the start date
    const endDate = new Date(startDate); // Clone the start date
    endDate.setDate(startDate.getDate() + 366); // Add 30 days to the start date

    // Format the dates as "DD/MM/YYYY"
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    return {
      start_date: formatDate(startDate),
      end_date: formatDate(endDate),
    };
  }

  // Example usage
  const monthlySubscriptionDates = getMonthlySubscriptionDates();
  const yearlySubscriptionDates = getYearlySubscriptionDates();

  const handleMonthlyUpdate = () => {
    localStorage.setItem("amount", 1000);

    const subscriptionData = {
      userid: localStorage.getItem("userId"),
      amount: localStorage.getItem("amount"),
      start_date: monthlySubscriptionDates.start_date,
      end_date: monthlySubscriptionDates.end_date,
      subscription_method: { monthly: true, yearly: false },
    };

    updateSubscription(subscriptionData);
  };
  const handleYearlyUpdate = () => {
    const subscriptionData = {
      userid: localStorage.getItem("userId"),
      amount: 1000,
      start_date: yearlySubscriptionDates.start_date,
      end_date: yearlySubscriptionDates.end_date,
      subscription_method: { monthly: false, yearly: true },
    };

    updateSubscription(subscriptionData);
  };

  useEffect(() => {
    subscriptionPlan = localStorage.getItem("amount");
    subscriptionPlan === 1000 ? handleMonthlyUpdate() : handleYearlyUpdate();
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-xl p-8 animate-fade-in-up'>
        <div className='text-center'>
          <CheckCircle className='mx-auto h-16 w-16 text-green-500 mb-4' />
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>
            Payment Successful!
          </h2>
          <p className='text-gray-600 mb-6'>
            Thank you for your purchase. Your order has been processed
            successfully.
          </p>
        </div>

        <div className='border-t border-b border-gray-200 py-4 mb-6'>
          <div className='flex justify-between mb-2'>
            <span className='font-medium text-gray-700'>Order ID:</span>
            <span className='text-gray-600'>#12345678</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span className='font-medium text-gray-700'>Date:</span>
            <span className='text-gray-600'>
              {new Date().toLocaleDateString()}
            </span>
          </div>
          <div className='flex justify-between'>
            <span className='font-medium text-gray-700'>Amount Paid:</span>
            <span className='text-gray-600'>{subscriptionPlan}</span>
          </div>
        </div>

        <Link
          href='/Dashboard'
          className='block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-center transition duration-300 ease-in-out transform hover:scale-105'
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};
export default Success;
