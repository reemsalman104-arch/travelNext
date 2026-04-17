"use client"
import { destinationdata } from '@/app/data/data';
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function destinationSlider() {
  return (<Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} showDots={false} containerClass="carousel-container" removeArrowOnDeviceType={["tablet", "mobile"]} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px">
    {destinationdata.map((item) => {
        return (
      <div key={item.id} className='m-3'>
        <div className='relative h-[400px]'>
           <div className='absolute inset-0 bg-black opacity-50  rounded-lg'></div> 
        <img src={item.image} width={500} height={400} alt={item.country} className='w-full h-full object-cover rounded-lg' />

      
      </div>
            <h1 className='text-lg font-semibold mt-4'>{item.country}</h1>
      <p className='text-gray-600 text-sm'>{item.travelers} travelers</p>
      </div>
      )
    })}
    </Carousel>
  )
}

export default destinationSlider
