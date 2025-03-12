import React from "react";
import { cn } from "@/lib/utils"; // Optional for class merging

const Input = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        `w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 
         rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 
         placeholder-gray-400 transition-all duration-300
         shadow-[inset_0px_0px_10px_rgba(0,255,150,0.3)] 
         hover:border-green-400`,
        className
      )}
      {...props}
    />
  );
};

export { Input };
