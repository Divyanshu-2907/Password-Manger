import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-gray-900/50 backdrop-blur-md shadow-lg border border-gray-700 
                  rounded-xl p-6 transition-all duration-300 hover:shadow-[0px_0px_20px_rgba(0,255,150,0.4)] 
                  ${className}`}
    >
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

export { Card, CardContent };
