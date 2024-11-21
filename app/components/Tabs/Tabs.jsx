"use client";

import React, { useState } from "react";
import TabsList from "./TabsList";
import TabsTrigger from "./TabsTrigger";
import TabsContent from "./TabsContent";

import {
  FaAcquisitionsIncorporated,
  FaAd,
  FaCalendar,
  FaPhoneAlt,
  FaMailBulk,
  FaSearchDollar,
  FaUser,
} from "react-icons/fa";
import ScrollArea from "../ScrollArea/ScrollArea";
import Tooltip from "../tooltip/Tooltip";
import Button from "../Button";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const about = {
    title: "About Gleeful",
    description: "Get to know us",
    items: [
      {
        company: "Health Firm",
        role: "Social Media Manager",
        duration: "2012 - Present",
      },
      {
        company: "Health Firm2",
        role: "Social Media Manager",
        duration: "2019 - Present",
      },
      {
        company: "Health Firm3",
        role: "Content Creator",
        duration: "Summer 2022",
      },
    ],
  };

  const services = {
    title: "Services",
    description:
      "At gleeful, we offer a range of SEO services to help businesses thrive in the digital space. Our key services include:",
    items: [
      {
        title: "SEO Blog Writing:",
        description:
          "Blogging is a powerful tool for establishing authority and engaging your audience. Our SEO blog writing service focuses on creating high-quality, informative blog posts that are optimized for search engines. We research trending topics in your industry and craft well-structured articles that not only attract visitors but also keep them engaged. Each blog post is designed to enhance your online presence, boost your SEO rankings, and encourage sharing across social media platforms. With Gleeful’s blog writing service, you can consistently provide value to your readers while improving your site's visibility.",
        duration: "2012 - Present",
      },
      {
        title: "SEO Copywriting:",
        description:
          "At gleeful, we understand that effective copy is not just about catchy phrases—it's about creating engaging content that drives conversions and enhances your brand’s visibility online. Our SEO copywriting services are designed to capture your audience’s attention while ensuring your content is optimized for search engines. We conduct thorough keyword research and employ best practices to integrate relevant keywords seamlessly, resulting in compelling copy that resonates with readers and ranks higher in search results. Let us help you tell your story in a way that inspires action.",
        duration: "2019 - Present",
      },
    ],
  };

  const experience = {
    title: "My Experience",
    description: "What we have done",
    items: [
      {
        company: "Health Firm",
        role: "Social Media Manager",
        duration: "2012 - Present",
      },
      {
        company: "Health Firm2",
        role: "Social Media Manager",
        duration: "2019 - Present",
      },
      {
        company: "Health Firm3",
        role: "Content Creator",
        duration: "Summer 2022",
      },
    ],
  };

  const education = {
    title: "My Education",
    description: "Why we're so good",
    items: [
      {
        institution: "Univeristy of Lagos",
        degree: "Digital Marketing",
        duration: "4 Years",
      },
      {
        institution: "Udemey",
        degree: "Social Media Handling",
        duration: "2 Year ",
      },
    ],
  };

  const skills = {
    title: "My Skills",
    description: "What we can do",
    skillsets: [
      {
        icon: <FaSearchDollar />,
        name: "SEO (Search Engine Optimization)",
      },
      {
        icon: <FaCalendar />,
        name: "Content Management",
      },
      {
        icon: <FaMailBulk />,
        name: "Email Marketing",
      },
      {
        icon: <FaAd />,
        name: "PPC (Pay-Per-Click) Advertising",
      },
      {
        icon: <FaUser />,
        name: "UX Design",
      },
      {
        icon: <FaAcquisitionsIncorporated />,
        name: "Analytics and Data Analysis",
      },
    ],
  };

  return (
    <div className='h-full flex flex-col xl:flex-row gap-[60px]'>
      {/* Tabs List */}
      <TabsList>
        <TabsTrigger
          title='About Gleeful'
          isActive={activeTab === 0}
          onClick={() => handleTabClick(0)}
        />
        <TabsTrigger
          title='Services'
          isActive={activeTab === 1}
          onClick={() => handleTabClick(1)}
        />
        <TabsTrigger
          title='Experience'
          isActive={activeTab === 2}
          onClick={() => handleTabClick(2)}
        />
        <TabsTrigger
          title='Education'
          isActive={activeTab === 3}
          onClick={() => handleTabClick(3)}
        />
        <TabsTrigger
          title='Skills'
          isActive={activeTab === 4}
          onClick={() => handleTabClick(4)}
        />
      </TabsList>

      {/* Tabs Content */}
      <TabsContent isActive={activeTab === 0}>
        <div className=' flex flex-col gap-[30px] text-center xl:text-left '>
          <h3 className=' text-4xl font-bold'>{about.title}</h3>
          <p className=' max-w-[600px mx-auto xl:mx-0 text-lg'>
            {about.description}
          </p>
          <ScrollArea>
            <p className=' xl:w-[700px] text-left text-lg '>
              Welcome to gleeful – where digital marketing meets community and
              learning. As a cutting-edge digital marketing agency, we’re
              dedicated to creating impactful strategies and achieving
              outstanding results. But gleeful is more than an agency; it’s also
              a dynamic non-code tech community and academy. Here, you’ll find a
              space to connect with industry experts, dive into workshops, and
              explore our marketing scholarships. Whether you’re looking to
              enhance your skills, stay on top of the latest trends, or join a
              network of like-minded professionals, gleeful is your go-to
              destination for growth and collaboration.
            </p>
          </ScrollArea>
        </div>
      </TabsContent>

      <TabsContent isActive={activeTab === 1}>
        <div className=' flex flex-col gap-[30px] text-center xl:text-left '>
          <h3 className=' text-4xl font-bold'>{services.title}</h3>
          <p className=' max-w-[600px mx-auto xl:mx-0 text-lg'>
            {services.description}
          </p>
          <ScrollArea>
            <div className='flex flex-col justify-start gap-[30px]'>
              {services.items.map((item, index) => {
                return (
                  <div key={index} className=' flex flex-col gap-2'>
                    <h3 className=' text-2xl font-bold'>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className=' flex justify-end items-center'>
                      <a href='#contact'>
                        <Button style={"border"} size={"230px"}>
                          Book a Discovery Cal
                          <FaPhoneAlt />
                        </Button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </TabsContent>

      <TabsContent isActive={activeTab === 2}>
        <div className=' flex flex-col gap-[30px] text-center xl:text-left '>
          <h3 className=' text-4xl font-bold'>{experience.title}</h3>
          <p className=' max-w-[600px mx-auto xl:mx-0 text-lg'>
            {experience.description}
          </p>
          <ScrollArea>
            <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
              {experience.items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className=' border border-primary h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1 '
                  >
                    <span className=' text-secondary'>{item.duration}</span>
                    <h3 className=' text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                      {item.role}
                    </h3>
                    <div className=' flex items-center gap-3'>
                      <span className=' w-[6px] h-[6px] rounded-full bg-secondary '></span>
                      <p>{item.company}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>
      <TabsContent isActive={activeTab === 3}>
        <div className=' flex flex-col gap-[30px] text-center xl:text-left '>
          <h3 className=' text-4xl font-bold'>{education.title}</h3>
          <p className=' max-w-[600px mx-auto xl:mx-0 text-lg'>
            {education.description}
          </p>
          <ScrollArea>
            <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
              {education.items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className=' border border-primary h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1 '
                  >
                    <span className=' text-secondary'>{item.duration}</span>
                    <h3 className=' text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                      {item.degree}
                    </h3>
                    <div className=' flex items-center gap-3'>
                      <span className=' w-[6px] h-[6px] rounded-full bg-secondary '></span>
                      <p>{item.institution}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </ScrollArea>
        </div>
      </TabsContent>

      <TabsContent isActive={activeTab === 4}>
        <div className=' flex flex-col gap-[30px] '>
          <div className=' flex flex-col gap-[30px] text-center xl:text-left '>
            <h3 className=' text-4xl font-bold'>{skills.title}</h3>
            <p className=' max-w-[600px] mx-auto xl:mx-0 text-lg'>
              {skills.description}
            </p>
          </div>
          <ul className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] '>
            {skills.skillsets.map((item, index) => {
              return (
                <li key={index}>
                  <div className=' w-full h-[150px] border border-primary rounded-xl flex flex-col justify-center items-center text-center '>
                    <div className=' text-6xl hover:text-primary transition-all duration-300'>
                      {item.icon}
                    </div>
                    <div className=' text-sm capitalize '>{item.name}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </TabsContent>
    </div>
  );
};

export default Tabs;
