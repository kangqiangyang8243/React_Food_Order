import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <div className='w-full bg-slate-50 border-t font-serif text-lg text-green-700'>
          <div className=' max-w-7xl mx-auto justify-between items-center p-4 lg:p-6 flex '>
              {/* left */}
              <h3 className='text-green-600 text-3xl font-bold cursor-pointer'><Link href="/">YANG</Link></h3>


              {/* right */}
              <p className='text-lg'>© ALL RIGHTS RESERVED.</p>
          </div>
    </div>
  )
}

export default Footer