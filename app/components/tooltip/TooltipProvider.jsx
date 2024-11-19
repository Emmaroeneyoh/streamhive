import React, { useState, createContext, useContext } from "react";

const TooltipContext = createContext();

const TooltipProvider = ({ children }) => {
  const [tooltipData, setTooltipData] = useState({
    isVisible: false,
    content: "",
    position: { top: 0, left: 0 },
  });

  const showTooltip = (content, position) => {
    setTooltipData({
      isVisible: true,
      content,
      position,
    });
  };

  const hideTooltip = () => {
    setTooltipData((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  return (
    <TooltipContext.Provider value={{ tooltipData, showTooltip, hideTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltip = () => useContext(TooltipContext);

export default TooltipProvider;
