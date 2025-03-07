import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800  flax flex-col justify-center items-center text-white fixed bottom-0 w-full'>
         <div className="logo font-bold text-white text-2xl">
          <span className='text-green-600'>&lt;</span>
          Pass
          <span className='text-green-600'>OP/&gt;</span>
        </div>
        <div classname="flex justify-center items-center">
        Created by <img className='w-7 mx-2  ' src="heart.png" alt="" /> by Divyanshu
            <p>© 2021 Password Manager. All rights reserved.</p>
        </div>
        
    </div>
  )
}

export default Footer