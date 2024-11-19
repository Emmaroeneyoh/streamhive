import React from "react";
import TooltipProvider from "./TooltipProvider";
import TooltipTrigger from "./TooltipTrigger";
import TooltipContent from "./TooltipContent";

const Tooltip = () => {
  return (
    <TooltipProvider>
      <div className='relative'>
        <TooltipTrigger tooltipContent='This is the tooltip for Button 1'>
          <button className='px-4 py-2 text-sm font-medium text-black bg-blue-600 rounded hover:bg-blue-700 transition-all'>
            Hover me
          </button>
        </TooltipTrigger>

        {/* <TooltipTrigger tooltipContent='Another tooltip for Button 2'>
          <button className='ml-4 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-all'>
            Hover me too
          </button>
        </TooltipTrigger> */}

        <TooltipContent />
      </div>
    </TooltipProvider>
  );
};

export default Tooltip;
