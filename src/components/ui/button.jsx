import React from "react";
import { cn } from "@/lib/utils"; // Optional for class merging

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        `px-5 py-2 text-white font-semibold rounded-lg transition-all duration-300
         bg-green-600/80 hover:bg-green-500 active:bg-green-700
         shadow-[0px_0px_10px_rgba(0,255,150,0.5)] hover:shadow-[0px_0px_15px_rgba(0,255,150,0.7)]
         focus:ring-2 focus:ring-green-400 focus:outline-none`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
