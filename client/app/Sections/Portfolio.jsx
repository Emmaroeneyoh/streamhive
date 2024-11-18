import React from "react";

const projects = [
  {
    num: "01",
    category: "Null",
    title: "gleeful Marketing Academy",
    description:
      "A hub for scholarships, training, and internships, where aspiring marketers and tech enthusiasts can sharpen their skills and gain practical experience.",
    image: "/assets/academy.jpg",
  },
  {
    num: "02",
    category: "Null",
    title: "gleeful Newsletter & Job Board",
    description:
      "Our newsletter— gleeful's marketing weekly is a curated newsletter delivering the latest digital marketing insights, expert tips, and industry trends to help professionals stay ahead of the curve. The newsletter also comes with an exclusive job board connecting top talent with leading companies. If you’re looking for your next career move, our job board is the perfect place to start.",
    image: "/assets/newsletter.jpg",
  },
  {
    num: "03",
    category: "Null",
    title: "gleeful for Recruiters",
    description:
      "Our network of recruiters taps into the talent nurtured by gleeful Marketing Academy and our wider community, ensuring they find the perfect match for their organizations.",
    image: "/assets/recruiter.jpg",
  },
  // {
  //   num: "04",
  //   category: "Null",
  //   title: "Project 4",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sint similique porro rerum repudiandae voluptates ex a itaque tenetur cupiditate.",
  //   image: "/assets/thumbnail.png",
  // },
];

const Portfolio = () => {
  return (
    <div className=' container mx-auto '>
      <div className=' flex flex-col gap-[30px] pb-[30px] text-center xl:text-left '>
        <h3 className=' text-4xl font-bold'>Portfolio</h3>
        <p className=' max-w-[600px mx-auto text-lg xl:mx-0'>
          Our Initiatives at gleeful
        </p>
      </div>
      {projects.map((item, index) => {
        return (
          <div
            key={index}
            className=' flex flex-col xl:flex-row gap-[30px] w-full justify-between items-center pb-20 '
          >
            <div>
              <div className=' text-8xl pb-4 leading-none font-extrabold text-black text-outline'>
                {item.num}
              </div>
              <h2 className=' text-[42px] pb-4 font-bold leading-none hover:text-primary transition-all duration-500 capitalize '>
                {item.title}
              </h2>
              <p className='  max-w-[900px] '>{item.description}</p>
            </div>
            <div className=' w-full bg-blue-500 '>
              <div className=' flex items-center justify-center  w-full h-full'>
                <img src={item.image} alt='' className=' object-cover ' />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
