import React from "react";

const SheetTrigger = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='px-4 py-2 text-md font-medium  border-primary rounded hover:bg-primary hover:text-white transition-all'
    >
      {children}
    </button>
  );
};

export default SheetTrigger;
