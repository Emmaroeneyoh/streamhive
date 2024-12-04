"use client";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Pricing = () => {
  const { makePayment } = useAuth();

  const handleMonthlyBasicPayment = () => {
    localStorage.removeItem("amount");
    const amount = 95000;
    localStorage.setItem("amount", amount);
    const paymentData = {
      userid: localStorage.getItem("userId"),
      amount: 95000,
      email: localStorage.getItem("email"),
    };
    makePayment(paymentData);
  };

  const handleYearlyBasicPayment = () => {
    localStorage.removeItem("amount");
    const amount = 1020000;
    localStorage.setItem("amount", amount);
    const paymentData = {
      userid: localStorage.getItem("userId"),
      amount: 1020000,
      email: localStorage.getItem("email"),
    };
    makePayment(paymentData);
  };

  const handleMonthlyEcoPayment = () => {
    localStorage.removeItem("amount");
    const amount = 120000;
    localStorage.setItem("amount", amount);
    const paymentData = {
      userid: localStorage.getItem("userId"),
      amount: 120000,
      email: localStorage.getItem("email"),
    };
    makePayment(paymentData);
  };

  const handleYearlyEcoPayment = () => {
    localStorage.removeItem("amount");
    const amount = 1320000;
    localStorage.setItem("amount", amount);
    const paymentData = {
      userid: localStorage.getItem("userId"),
      amount: 1320000,
      email: localStorage.getItem("email"),
    };
    makePayment(paymentData);
  };

  return (
    <div className='container mx-auto mt-10 p-10'>
      {/* Billing Toggle */}
      <div className='sm:flex sm:flex-col sm:items-center'>
        <div className='relative self-center bg-slate-200 rounded-lg p-0.5 flex'>
          <button
            type='button'
            className='relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-slate-50 border-slate-50 text-slate-900 shadow-sm'
          >
            Monthly Billing
          </button>
          <button
            type='button'
            className='ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-slate-900'
          >
            Yearly Billing
          </button>
        </div>
        <h1 className='font-bold text-6xl max-w-[800px] py-12 text-gray-800 text-center'>
          Pricing built for businesses of all sizes
        </h1>
      </div>

      {/* Pricing Plans */}
      <div className='mt-12 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-2'>
        {/* Basic Plan Monthly*/}
        <div className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'>
          <div className='p-6'>
            <h2 className='text-xl font-bold text-slate-900'>
              Monthly Basic Plan
            </h2>
            <p className='mt-2 text-base text-slate-700'>
              Designed for small-scale projects and beginners.
            </p>
            <p className='mt-8'>
              <span className='text-4xl font-bold text-slate-900'>
                NGN 95,000
              </span>
              <span className='text-base font-medium text-slate-500'> /mo</span>
            </p>
            {/* <p className='text-sm text-slate-500 mt-1'>NGN 1,020,000 yearly</p> */}
            <button
              onClick={handleMonthlyBasicPayment}
              className='mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center'
            >
              Subscribe to Monthly Basic Plan
            </button>
          </div>
          <div className='pt-6 pb-8 px-6'>
            <h3 className='text-sm font-bold text-slate-900 tracking-wide uppercase'>
              What's included
            </h3>
            <ul className='mt-4 space-y-3'>
              {[
                "Regional server access",
                "99.5% uptime guarantee",
                "100 sessions limit",
                "2 Gbps bandwidth",
                "Standard security features",
                "Email support",
                "Basic analytics",
              ].map((feature, index) => (
                <li key={index} className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 12l5 5l10 -10'
                    />
                  </svg>
                  <span className='text-base text-slate-700'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Basic Plan Yearly */}
        <div className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'>
          <div className='p-6'>
            <h2 className='text-xl font-bold text-slate-900'>
              Yearly Basic Plan
            </h2>
            <p className='mt-2 text-base text-slate-700'>
              Designed for small-scale projects and beginners.
            </p>
            <p className='mt-8'>
              <span className='text-4xl font-bold text-slate-900'>
                NGN 1,020,000
              </span>
              <span className='text-base font-medium text-slate-500'> /mo</span>
            </p>
            {/* <p className='text-sm text-slate-500 mt-1'>NGN 1,020,000 yearly</p> */}
            <button
              onClick={handleYearlyBasicPayment}
              className='mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center'
            >
              Subscribe to Basic Plan
            </button>
          </div>
          <div className='pt-6 pb-8 px-6'>
            <h3 className='text-sm font-bold text-slate-900 tracking-wide uppercase'>
              What's included
            </h3>
            <ul className='mt-4 space-y-3'>
              {[
                "Regional server access",
                "99.5% uptime guarantee",
                "100 sessions limit",
                "2 Gbps bandwidth",
                "Standard security features",
                "Email support",
                "Basic analytics",
              ].map((feature, index) => (
                <li key={index} className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 12l5 5l10 -10'
                    />
                  </svg>
                  <span className='text-base text-slate-700'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Eco Plan Monthly */}
        <div className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'>
          <div className='p-6'>
            <h2 className='text-xl font-bold text-slate-900'>
              Monthly Eco Plan
            </h2>
            <p className='mt-2 text-base text-slate-700'>
              Perfect for businesses needing top-tier performance and
              scalability.
            </p>
            <p className='mt-8'>
              <span className='text-4xl font-bold text-slate-900'>
                NGN 120,000
              </span>
              <span className='text-base font-medium text-slate-500'> /mo</span>
            </p>
            {/* <p className='text-sm text-slate-500 mt-1'>NGN 1,1320,000 yearly</p> */}
            <button
              onClick={handleMonthlyEcoPayment}
              className='mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center'
            >
              Subscribe to Monthly Eco Plan
            </button>
          </div>
          <div className='pt-6 pb-8 px-6'>
            <h3 className='text-sm font-bold text-slate-900 tracking-wide uppercase'>
              What's included
            </h3>
            <ul className='mt-4 space-y-3'>
              {[
                "Global server access",
                "99.99% uptime guarantee",
                "Unlimited sessions",
                "High bandwidth allocation",
                "Advanced security features",
                "Dedicated 24/7 support",
                "Real-time analytics",
                "Customizable API access",
                "Scalable deployment options",
                "Performance monitoring tools",
              ].map((feature, index) => (
                <li key={index} className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 12l5 5l10 -10'
                    />
                  </svg>
                  <span className='text-base text-slate-700'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Eco Plan Yearly */}
        <div className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'>
          <div className='p-6'>
            <h2 className='text-xl font-bold text-slate-900'>
              Yearly Eco Plan
            </h2>
            <p className='mt-2 text-base text-slate-700'>
              Perfect for businesses needing top-tier performance and
              scalability.
            </p>
            <p className='mt-8'>
              <span className='text-4xl font-bold text-slate-900'>
                NGN 1,320,000
              </span>
              <span className='text-base font-medium text-slate-500'> /mo</span>
            </p>
            {/* <p className='text-sm text-slate-500 mt-1'>NGN 1,1320,000 yearly</p> */}
            <button
              onClick={handleYearlyEcoPayment}
              className='mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center'
            >
              Subscribe to Yearly Eco Plan
            </button>
          </div>
          <div className='pt-6 pb-8 px-6'>
            <h3 className='text-sm font-bold text-slate-900 tracking-wide uppercase'>
              What's included
            </h3>
            <ul className='mt-4 space-y-3'>
              {[
                "Global server access",
                "99.99% uptime guarantee",
                "Unlimited sessions",
                "High bandwidth allocation",
                "Advanced security features",
                "Dedicated 24/7 support",
                "Real-time analytics",
                "Customizable API access",
                "Scalable deployment options",
                "Performance monitoring tools",
              ].map((feature, index) => (
                <li key={index} className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 text-green-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 12l5 5l10 -10'
                    />
                  </svg>
                  <span className='text-base text-slate-700'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
