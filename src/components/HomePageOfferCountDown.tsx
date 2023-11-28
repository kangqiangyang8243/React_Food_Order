"use client";
import React from 'react';
import Countdown from 'react-countdown';

function HomePageOfferCountDown() {
  return (
   <Countdown date={new Date("2024-01-22T00:00:00")} className='text-3xl lg:text-5xl text-yellow-300 font-sans font-bold' />
  );
}

export default HomePageOfferCountDown;
