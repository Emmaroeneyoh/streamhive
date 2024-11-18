"use client";

import Tabs from "../components/Tabs/Tabs";

const about = {
  title: "About Me",
  description: "Lorem",
};

const Resume = () => {
  return (
    <div>
      <div className=' container mx-auto'>
        <Tabs />
      </div>
    </div>
  );
};

export default Resume;
