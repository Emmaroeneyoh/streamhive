import React from "react";
import { useTooltip } from "./TooltipProvider";

const TooltipTrigger = ({ children, tooltipContent }) => {
  const { showTooltip, hideTooltip } = useTooltip();

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    const position = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX + rect.width / 2,
    };
    showTooltip(tooltipContent, position);
  };

  const handleMouseLeave = () => {
    hideTooltip();
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      className='inline-block cursor-pointer'
    >
      {children}
    </span>
  );
};

export default TooltipTrigger;
