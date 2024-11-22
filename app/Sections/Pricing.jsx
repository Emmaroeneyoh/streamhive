"use client";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Pricing = () => {
  const { updateSubscription, makePayment } = useAuth();

  function getMonthlySubscriptionDates() {
    const startDate = new Date(); // Current date as the start date
    const endDate = new Date(startDate); // Clone the start date
    endDate.setDate(startDate.getDate() + 30); // Add 30 days to the start date

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
  //   console.log(yearlySubscriptionDates.end_date);

  //   console.log(
  //     `Starts ${yearlySubscriptionDates.start_date} and ends ${yearlySubscriptionDates.end_date}`
  //   );

  const handleMonthlyUpdate = () => {
    const subscriptionData = {
      userid: localStorage.getItem("userId"),
      amount: 1000,
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

  const handlePayment = () => {
    const paymentData = {
      userid: localStorage.getItem("userId"),
      amount: 1000,
      email: localStorage.getItem("email"),
    };
    makePayment(paymentData);
  };

  return (
    <div className=' container mx-auto '>
      <div className='sm:flex sm:flex-col sm:align-center mt-10 p-10'>
        <div className='relative self-center bg-slate-200 rounded-lg p-0.5 flex'>
          <button
            type='button'
            className='relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-slate-50 border-slate-50 text-slate-900 shadow-sm'
          >
            Monthly billing
          </button>
          <button
            type='button'
            className='ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-slate-900'
          >
            Yearly billing
          </button>
        </div>
        <div className=' font-bold text-6xl max-w-[800px] py-12 text-gray-800 max-md:text-center'>
          Pricing built for businesses of all sizes
        </div>
        {/* Pricing */}

        <div className='mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-2'>
          <div className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'>
            <div className='p-6'>
              <h2 className='text-xl leading-6 font-bold text-slate-900'>
                Monthly billing
              </h2>
              <p className='mt-2 text-base text-slate-700 leading-tight'>
                For new makers who want to fine-tune and test an idea.
              </p>
              <p className='mt-8'>
                <span className='text-4xl font-bold text-slate-900 tracking-tighter'>
                  NGN 1000
                </span>

                <span className='text-base font-medium text-slate-500'>
                  /mo
                </span>
              </p>
              <button
                onClick={handlePayment}
                className='mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center'
              >
                Monthly
              </button>
            </div>
            <div className='pt-6 pb-8 px-6'>
              <h3 className='text-sm font-bold text-slate-900 tracking-wide uppercase'>
                What's included
              </h3>
              <ul role='list' className='mt-4 space-y-3'>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    1 landing page included
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    1,000 visits/mo
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    Access to all UI blocks
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    50 conversion actions included
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    5% payment commission
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    Real-time analytics
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2 */}
          <div className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'>
            <div className='p-6'>
              <h2 className='text-xl leading-6 font-bold text-slate-900'>
                Yearly billing
              </h2>
              <p className='mt-2 text-base text-slate-700 leading-tight'>
                For productive shippers who want to work more efficiently.
              </p>
              <p className='mt-8'>
                <span className='text-4xl font-bold text-slate-900 tracking-tighter'>
                  NGN 6000
                </span>

                <span className='text-base font-medium text-slate-500'>
                  /yr
                </span>
              </p>
              <button
                onClick={handleYearlyUpdate}
                className='mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center'
              >
                Yearly
              </button>
            </div>
            <div className='pt-6 pb-8 px-6'>
              <h3 className='text-sm font-bold text-slate-900 tracking-wide uppercase'>
                What's included
              </h3>
              <ul role='list' className='mt-4 space-y-3'>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    All Standard features
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    20 landing pages included
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    200,000 visits/mo
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    5,000 conversion actions included
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    No payment commission
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
