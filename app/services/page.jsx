"use client";

import {
  FaAcquisitionsIncorporated,
  FaAd,
  FaCalendar,
  FaMailBulk,
  FaSearchDollar,
  FaUser,
} from "react-icons/fa";

const about = {
  title: "About Me",
  description: "Lorem",
};

const experience = {
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate accusantium atque magni minus repellendus ipsum ullam doloremque ex quam.",
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
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate accusantium atque magni minus repellendus ipsum ullam doloremque ex quam.",
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
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate accusantium atque magni minus repellendus ipsum ullam doloremque ex quam.",
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

const Portfolio = () => {
  return <div>Services</div>;
};

export default Portfolio;
