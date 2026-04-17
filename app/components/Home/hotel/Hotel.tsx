import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import { hotelsdata } from '@/app/data/data'
import HotelCard from './hotelCard'
function Hotel() {
  return (
    <div className='pt-20 pb-20'>
        
<SectionHeading heading='Recommended Hotels'/>
<div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 items-center mt-16'>

 {hotelsdata.map((hotel,i) => {
  return (
    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 100} key={hotel.id} className='bg-white rounded-lg shadow-md  '>
    <HotelCard hotel={hotel} />
    </div>
  )
})}
    </div>
    </div>
  )
}

export default Hotel