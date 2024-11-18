"use client";

import React from "react";

function Button({ size, children, style }) {
  return (
    <div
      className={`w-[${size}] ${
        style === "border"
          ? "border rounded-full border-primary flex justify-center items-center p-3"
          : style === "solid"
          ? " rounded-full bg-primary flex justify-center items-center p-3"
          : " rounded-full flex justify-center items-center p-3"
      }`}
    >
      <button className=' uppercase flex items-center gap-2 text-sm'>
        {children}
      </button>
    </div>
  );
}

export default Button;
