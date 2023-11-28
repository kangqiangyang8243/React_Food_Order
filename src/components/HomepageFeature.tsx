import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

function HomepageFeature() {

  return (
      <div className='max-w-7xl mx-auto overflow-x-scroll text-green-600'>
          <div className='w-max flex bg-slate-50'>
              {featuredProducts.map((item) => (
                  <div key={item.id} className='w-screen md:w-[33vw] h-[70vh] lg:h-[80vh] flex flex-col items-center font-serif hover:bg-green-100 transition-all duration-500 shadow-md'>
                      <h3>{item.title}</h3>
                      {/* Image */}
                     
                        {item.img && (
                            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                                <Image src={item.img} alt="" fill className="object-contain" />
                            </div>
                      )}
                      
                      {/* info */}
                      <div className='text-center p-2 space-y-3'>
                          <p>{item.desc}</p>
                          <p className='text-lg font-bold'>${item.price}</p>
                          <button className='text-white p-2 bg-green-400 rounded-lg cursor-pointer hover:bg-green-500'>Add to Cart</button>
                      </div>
                      
                  </div>
              ))}
              
          </div>
    </div>
  )
}

export default HomepageFeature