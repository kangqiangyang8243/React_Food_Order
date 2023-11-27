// Importing necessary libraries and components
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { MdCall, MdOutlineShoppingCart,MdMenu  } from 'react-icons/md';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (

    <div className='w-full bg-slate-50 border-b font-serif text-lg text-green-700'>
        <div className=' max-w-7xl mx-auto justify-between items-center p-6 flex'>
            {/* left */}
            <ul className='hidden md:inline-flex items-center space-x-5'>
                  <li className='nav_style'>
                      <Link href="/">HomePage</Link>
                </li>
                <li className='nav_style'><Link href="/menu">Menu</Link></li>
                <li className='nav_style hidden lg:inline-flex'>Contact</li>
            </ul>

            {/* middle */}
            <h3 className='text-green-600 text-3xl font-bold cursor-pointer'><Link href="/">YANG</Link></h3>

            {/* right */}
            <ul className='hidden md:inline-flex items-center space-x-5'>
                <li className='hidden lg:inline-flex bg-green-300 items-center rounded-lg p-1 gap-1 text-slate-100 hover:bg-green-400 cursor-pointer'>
                    <MdCall className="w-5 h-5 gap-2" />
                    <span>+1 626-333-222</span>
                </li>
                <li className='nav_style'><Link href="/login">Login</Link></li>
                <li className='flex items-center space-x-1'>
                    <MdOutlineShoppingCart  className="w-6 h-6 gap-2" />
                    <span className='nav_style'><Link href="/cart">Cart (1)</Link></span>
                </li>
              </ul>
              
              <ul className='md:hidden'>
                  <li>
                    <MdMenu className="w-6 h-6"  onClick={toggleDrawer}/>
                    <Drawer
                    open={isOpen}
              onClose={toggleDrawer}
                          direction='right'
                          size={200}
                className='  text-slate-50'                          
                        
            >
              <ul className='bg-green-500 h-full w-full flex flex-col items-center py-5 gap-10 text-2xl'>
                 <li className='nav_style'><Link href="/">HomePage</Link></li>
                <li className='nav_style'><Link href="/menu">Menu</Link></li>
                              <li className='nav_style'>Contact</li>
                               <li className='nav_style'><Link href="/login">Login</Link></li>
                <li className='flex items-center space-x-1'>
                    <MdOutlineShoppingCart  className="w-6 h-6 gap-2" />
                    <span className='nav_style'><Link href="/cart">Cart (1)</Link></span>
                </li>
              </ul>
            </Drawer>
          </li>
              </ul>


        </div>
    </div>
  )
}

export default Navbar

