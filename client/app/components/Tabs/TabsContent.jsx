import React from "react";

const TabsContent = ({ children, isActive }) => {
  return (
    <div className={`mt-4 ${isActive ? "block" : "hidden"}`}>{children}</div>
  );
};

export default TabsContent;
