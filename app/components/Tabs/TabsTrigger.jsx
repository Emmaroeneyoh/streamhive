import React from "react";

const TabsTrigger = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium rounded-lg
        ${
          isActive
            ? "border-b-2 text-gray-950 bg-secondary "
            : " border border-primary text-gray-600 hover:text-secondary"
        }
        focus:outline-none transition-all duration-200`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default TabsTrigger;
