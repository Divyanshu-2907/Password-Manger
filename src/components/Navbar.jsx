import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-700 text-white'>
      <div className="mycontainer py-5 flex justify-between items-center px-4 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className='text-green-600'>&lt;</span>
          Pass
          <span className='text-green-600'>OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul> */}
        <button className='text-white bg-green-500 my-5 rounded-full flex justify-between items-center'>
          <img className='invert p-1 w-10 ' src="github.png" alt="github logo " />
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar