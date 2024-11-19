import React from "react";

const ScrollArea = ({ children, className }) => {
  return (
    <div
      className={`overflow-auto h-[400px] p-4 border border-gray-200 rounded ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollArea;
