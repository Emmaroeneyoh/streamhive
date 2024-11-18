import React from "react";

const TabsList = ({ children }) => {
  return (
    <div className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
      {children}
    </div>
  );
};

export default TabsList;
