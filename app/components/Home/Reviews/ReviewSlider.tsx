'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-cards"
import {EffectCards} from 'swiper/modules'
import { reviewData } from '@/app/data/data'
import {FaStar} from 'react-icons/fa'

function ReviewSlider() {
  return (
    <div><Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='md:w-[450px] md:h-[350px] w-[90%] min-h-[350px]'>
      
      {reviewData.map((item) => {
        return (<SwiperSlide key={item.id} className='bg-white rounded-3xl block   sm:pt-0 '>
          <div className='w-[80%] mx-auto mt-8'>
            <p className='text-xs sm:text-sm md:text-base font-semibold  '>{item.review}</p>
          
          <div className='flex items-center mt-2'>

            <FaStar className='md:w-6 md:h-6 w-3 h-2 text-yellow-400'/>
            <FaStar className='md:w-6 md:h-6 w-3 h-2 text-yellow-400'/>
            <FaStar className='md:w-6 md:h-6 w-3 h-2 text-yellow-400'/>
            <FaStar className='md:w-6 md:h-6 w-3 h-2 text-yellow-400'/>
          </div>

          <div className='mt-2  '>
            <div className='flex items-center space-x-4  '>
              <img src={item.image} alt='client' width={60} height={70} className='rounded-full'/>
              <div>
                <p className='text-sm sm:text-lg font-semibold'>{item.name}</p>
                <p className='text-xs sm:text-base text-gray-500'>web developer</p>
              </div>
            </div>

          </div>
          </div></SwiperSlide>
     
       
        )
    })
      }
       </Swiper></div> 
      )

}

export default ReviewSlider