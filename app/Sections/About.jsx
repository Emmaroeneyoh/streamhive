import React from "react";

const About = () => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-800'>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <h1 className='text-4xl font-bold text-center mb-6'>About Us</h1>
        <p className='text-lg text-center text-gray-600 mb-12'>
          Empowering seamless real-time communication experiences.
        </p>

        {/* Who We Are Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Who We Are</h2>
          <p className='text-gray-700'>
            We are pioneers in delivering cutting-edge TURN server solutions,
            empowering developers and businesses to create seamless, real-time
            communication experiences. With a deep understanding of modern
            connectivity challenges, we provide tools and APIs that ensure
            reliability, security, and performance in every interaction.
          </p>
        </section>

        {/* Our Mission Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Our Mission</h2>
          <p className='text-gray-700'>
            To revolutionize communication by providing scalable, reliable, and
            developer-friendly TURN server solutions that bridge networks and
            eliminate connectivity barriers.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Our Vision</h2>
          <p className='text-gray-700'>
            A world where every connection is uninterrupted, every communication
            is seamless, and every interaction is meaningful—regardless of
            network conditions.
          </p>
        </section>

        {/* Why We Stand Out Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-semibold mb-4'>Why We Stand Out</h2>
          <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
            {/* Feature 1 */}
            <div className='relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-secondary p-2'>
              <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-12 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 16h-1v-4H9m4-4H9v4h4m6-6v12M4 6v12M7 6h10m0 12H7'
                  />
                </svg>
                <div className='space-y-2'>
                  <h3 className='font-bold'>Innovation-Driven</h3>
                  <p className='text-sm text-muted-foreground'>
                    We stay ahead of the curve, constantly improving our
                    platform to meet evolving connectivity demands.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-secondary p-2'>
              <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-12 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 8c-3.086 0-5.838 1.949-7.03 5h14.06c-1.192-3.051-3.944-5-7.03-5zM5.03 13h13.94c.894 2.573 1.01 4.473.227 5.553C18.446 19.667 16.85 20 12 20c-4.85 0-6.446-.333-7.197-1.447C3.952 17.473 4.136 15.573 5.03 13z'
                  />
                </svg>
                <div className='space-y-2'>
                  <h3 className='font-bold'>Customer-Centric</h3>
                  <p className='text-sm'>
                    Your success is our priority. We provide dedicated support
                    and resources to help you achieve your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-secondary p-2'>
              <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-12 w-12 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 12l4-4 4 4m0 8H8'
                  />
                </svg>
                <div className='space-y-2'>
                  <h3 className='font-bold'>Scalability & Reliability</h3>
                  <p className='text-sm text-muted-foreground'>
                    Whether you're building for a small user base or a global
                    audience, our infrastructure adapts to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section>
          <h2 className='text-3xl font-semibold mb-4'>
            Join Us in Shaping the Future
          </h2>
          <p className='text-gray-700'>
            From startups to enterprises, we empower businesses to thrive in an
            increasingly connected world. Let us help you bring your vision to
            life with unmatched reliability and support.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
