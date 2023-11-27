"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function HomePageSlider() {
    const [isLoading, setIsLoading] = useState(true);
    
    const handleLoad = () => {
    setIsLoading(false);
    };
    
    const data = [
        {
            text: "always fresh & always crispy & always hot",
            image: "https://americanlifestylemag.com/wp-content/uploads/2020/02/people-eating-pizza-intext6.jpg",
        },
        {
            text: "we deliver your order wherever you are in NY",
            image: "https://cdn.sanity.io/images/w6ol9cun/production/503a4986a3996ec020a9e2ea800c54a0fe508edd-1200x628.webp?w=1200&fm=webp",
        },
        {
            text: "the best pizza to share with your family",
            image: "https://c8.alamy.com/comp/2G3A84P/happy-group-of-people-eating-pizza-outdoorsthey-are-enjoying-together-2G3A84P.jpg",
        },
       
       
        
    ];
    

    return (
        <Zoom scale={1.0} autoplay infinite duration={2000} transitionDuration={1000} arrows={false} indicators={false}>
      {data.map((data, index) => (
        <div key={index} className="flex flex-col lg:flex-row h-screen border-b">
          {/* Text Section */}
          <div className='flex-1 h-screen flex flex-col justify-center items-center bg-green-200 gap-20 font-semibold font-serif'>
            <h3 className='text-3xl  text-center text-green-600 px-2'>{data.text}</h3>
            <button className='text-white p-2 bg-green-400 rounded-lg cursor-pointer hover:bg-green-500'>Order Now</button>
          </div>

          {/* Image Section */}
          <div className='flex-1 h-screen w-full relative'>
            <Image
              src={data.image}
              alt={`slider Image ${index}`}
              priority
            onLoad={handleLoad}
            layout="fill"
             objectFit='fill'
                     
            />
          </div>
        </div>
      ))}
    </Zoom>
       
      
  )
}

export default HomePageSlider