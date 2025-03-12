import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 flex flex-col items-center w-full shadow-lg border-t border-gray-700">
      {/* Logo */}
      <div className="font-extrabold text-2xl flex items-center gap-2 tracking-wide">
        <span className="text-green-500 drop-shadow-md">&lt;</span>
        Pass<span className="text-green-500 drop-shadow-md">OP/&gt;</span>
      </div>

      {/* Creator Info */}
      <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
        <span>Created with</span>
        <span className="text-red-500 animate-pulse">❤️</span>
        <span>by Divyanshu</span>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 mt-2">
        © {new Date().getFullYear()} Password Manager. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
