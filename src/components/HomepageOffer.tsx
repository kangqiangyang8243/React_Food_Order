import Image from 'next/image'
import React from 'react'
import HomePageOfferCountDown from './HomePageOfferCountDown'

function HomepageOffer() {
  return (
      <div className='max-w-7xl mx-auto bg-black'>
          <div className='flex flex-col lg:flex-row items-center text-white h-screen bg-[url("https://github.com/safak/restaurant-ui/blob/main/public/offerBg.png?raw=true")] bg-cover lg:bg-contain bg-no-repeat'>
              {/* Text */}
              <div className='flex-1 h-screen flex flex-col items-center text-center font-serif text-white justify-around p-5 gap-5'>
                  <h1 className='text-2xl lg:text-4xl font-bold'>Delicious Burger & French Fry</h1>
                  <p className='text-lg lg:text-2xl'>Progressively simplify effective e-toilers and process-centric methods
                      of empowerment. Quickly pontificate parallel.</p>
                  <HomePageOfferCountDown/>
                  <button className='text-white p-2 lg:text-xl bg-green-400 rounded-lg cursor-pointer hover:bg-green-500'>Order Now</button>
              </div>

              {/* Image */}
              <div className='flex-1 h-screen relative w-full'>
                  <Image src="https://github.com/safak/restaurant-ui/blob/main/public/offerProduct.png?raw=true" alt="" fill className='object-contain'/>
              </div>
          </div>
    </div>
  )
}

export default HomepageOffer