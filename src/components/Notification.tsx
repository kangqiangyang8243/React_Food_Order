import React from 'react'
import { MdCall } from "react-icons/md";

const Notification = () => {
  return (
      <div className='w-full  bg-green-500 text-center text-slate-50 font-serif flex-row md:flex p-2 gap-2 md:items-center' >
      <h3 className='flex-1 font-semibold text-sm lg:text-lg'>Free delivery for all orders over $50. Order your food now!</h3>
      
      <div className='flex justify-center  '>
      <div className='md:mr-2 lg:hidden text-sm bg-green-400 flex items-center rounded-lg p-1'>
        <MdCall className="w-5 h-5 gap-2"/>
        <span>+1 626-333-222</span>
      </div>
    </div>
    </div>
  )
}

export default Notification