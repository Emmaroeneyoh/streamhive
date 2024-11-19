import React from "react";
import { useTooltip } from "./TooltipProvider";

const TooltipContent = () => {
  const { tooltipData } = useTooltip();
  const { isVisible, content, position } = tooltipData;

  if (!isVisible) return null;

  return (
    <div
      className='absolute bg-gray-800 text-black text-xs px-2 py-1 rounded shadow-lg transform -translate-x-1/2 z-50'
      style={{ top: `${position.top + 8}px`, left: `${position.left}px` }}
    >
      {content}
    </div>
  );
};

export default TooltipContent;
