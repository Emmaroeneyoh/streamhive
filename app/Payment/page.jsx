import React from "react";

const page = () => {
  return (
    <div>
      <div className='sm:flex sm:flex-col sm:align-center p-10'>
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
        <div className='mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-2'>
          <div className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'>
            <div className='p-6'>
              <h2 className='text-xl leading-6 font-bold text-slate-900'>
                Starter
              </h2>
              <p className='mt-2 text-base text-slate-700 leading-tight'>
                For new makers who want to fine-tune and test an idea.
              </p>
              <p className='mt-8'>
                <span className='text-4xl font-bold text-slate-900 tracking-tighter'>
                  $0
                </span>

                <span className='text-base font-medium text-slate-500'>
                  /mo
                </span>
              </p>
              <a
                href='/sign-up'
                className='mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center'
              >
                Join as a Starter
              </a>
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
          {/* <div className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'>
            <div className='p-6'>
              <h2 className='text-xl leading-6 font-bold text-slate-900'>
                Superior
              </h2>
              <p className='mt-2 text-base text-slate-700 leading-tight'>
                For creators with multiple ideas who want to efficiently test
                and refine them.
              </p>
              <p className='mt-8'>
                <span className='text-4xl font-bold text-slate-900 tracking-tighter'>
                  $8
                </span>

                <span className='text-base font-medium text-slate-500'>
                  /mo
                </span>
              </p>
              <a
                href='/sign-up'
                className='mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center'
              >
                Join as a Superior
              </a>
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    All Free features
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    5 landing pages included
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    50,000 visits/mo
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    1,000 conversion actions included
                  </span>
                </li>
                <li className='flex space-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='flex-shrink-0 h-5 w-5 text-green-400'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    aria-hidden='true'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M5 12l5 5l10 -10'></path>
                  </svg>
                  <span className='text-base text-slate-700'>
                    1% payment commission
                  </span>
                </li>
              </ul>
            </div>
          </div> */}

          {/* 2 */}
          <div className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'>
            <div className='p-6'>
              <h2 className='text-xl leading-6 font-bold text-slate-900'>
                Shipper
              </h2>
              <p className='mt-2 text-base text-slate-700 leading-tight'>
                For productive shippers who want to work more efficiently.
              </p>
              <p className='mt-8'>
                <span className='text-4xl font-bold text-slate-900 tracking-tighter'>
                  $15
                </span>

                <span className='text-base font-medium text-slate-500'>
                  /mo
                </span>
              </p>
              <a
                href='/sign-up'
                className='mt-8 block w-full bg-primary rounded-md py-2 text-sm font-semibold text-white text-center'
              >
                Join as a Shipper
              </a>
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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

export default page;
