// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='bg-slate-700 text-white'>
//       <div className="mycontainer py-5 flex justify-between items-center px-4 h-14">
//         <div className="logo font-bold text-white text-2xl">
//           <span className='text-green-600'>&lt;</span>
//           Pass
//           <span className='text-green-600'>OP/&gt;</span>
//         </div>
//         {/* <ul>
//           <li className="flex gap-4">
//             <a className='hover:font-bold' href="/">Home</a>
//             <a className='hover:font-bold' href="#">About</a>
//             <a className='hover:font-bold' href="#">Contact</a>
//           </li>
//         </ul> */}
//         <button className='text-white bg-green-500 my-5 rounded-full flex justify-between items-center'>
//           <img className='invert p-1 w-10 ' src="github.png" alt="github logo " />
//           <span className='font-bold px-2'>GitHub</span>
//         </button>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React from "react";
import { Button } from "./ui/button"; // Importing custom button component

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 h-16">
        {/* Logo with Neon Effect */}
        <div className="font-extrabold text-3xl flex items-center tracking-wide">
          <span className="text-green-500 drop-shadow-lg">&lt;</span>
          Pass<span className="text-green-500 drop-shadow-lg">OP/&gt;</span>
        </div>

        {/* GitHub Button with Hover Effect */}
        <Button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 
                          px-4 py-2 rounded-full transition-all duration-300 
                          shadow-md hover:shadow-lg">
          <img className="w-6 h-6 invert" src="github.png" alt="GitHub Logo" />
          <span className="font-semibold text-lg">GitHub</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
