import React from "react";

const Features = () => {
  return (
    <div>
      <section
        id='features'
        className='relative block px-6 py-10 md:py-20 md:px-10'
      >
        <div className='relative mx-auto max-w-5xl text-center'>
          <h1 className='text-4xl font-bold text-center mb-6'>
            Features That Set Us Apart
          </h1>
          <p className='text-lg text-center mb-8'>
            Discover the advantages that make our TURN server solution the ideal
            choice for developers and businesses.
          </p>
        </div>

        <div className='relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              title: "High Availability and Uptime Guarantees",
              description:
                "With a 99.99% uptime guarantee, our platform ensures uninterrupted real-time applications even during peak usage.",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-clock'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <circle cx='12' cy='12' r='9' />
                  <polyline points='12 7 12 12 15 15' />
                </svg>
              ),
            },
            {
              title: "Global Server Locations",
              description:
                "Our globally distributed servers provide low-latency, high-speed connections, enabling seamless communication anywhere.",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-world'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <circle cx='12' cy='12' r='9' />
                  <path d='M3.6 9h16.8' />
                  <path d='M3.6 15h16.8' />
                  <path d='M12 3a15 15 0 0 0 0 18' />
                  <path d='M12 3a15 15 0 0 1 0 18' />
                </svg>
              ),
            },
            {
              title: "Advanced Security Protocols",
              description:
                "Protect your data streams with state-of-the-art encryption and authentication mechanisms.",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-shield-lock'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M12 3l8 4v5a8 8 0 1 1 -16 0v-5z' />
                  <circle cx='12' cy='13' r='2' />
                  <path d='M12 15v2' />
                </svg>
              ),
            },
            {
              title: "Seamless NAT and Firewall Traversal",
              description:
                "Overcome NAT and firewall barriers effortlessly for peer-to-peer connections in restrictive environments.",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-network'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <circle cx='12' cy='9' r='6' />
                  <path d='M12 3v6m0 3v6m-6 0h12' />
                </svg>
              ),
            },
            {
              title: "Developer-Friendly APIs",
              description:
                "Integrate TURN server capabilities with ease using well-documented APIs and SDKs.",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-code'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <polyline points='7 8 3 12 7 16' />
                  <polyline points='17 8 21 12 17 16' />
                  <line x1='14' y1='4' x2='10' y2='20' />
                </svg>
              ),
            },
            {
              title: "Scalability for All Needs",
              description:
                "From startups to enterprises, our infrastructure adapts dynamically to handle millions of users.",
              icon: (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-stack'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <polyline points='12 4 4 8 12 12 20 8 12 4' />
                  <polyline points='4 12 12 16 20 12' />
                  <polyline points='4 16 12 20 20 16' />
                </svg>
              ),
            },
          ].map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className='rounded-md border border-gray-400 p-8 text-center shadow'
            >
              <div className='button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border'>
                {icon}
              </div>
              <h3 className='mt-6 text-gray-600'>{title}</h3>
              <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-600'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
