import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import DestinationSlider from './destinationSlider'

function Destination() {
  return (
    <div className='pt-20 pb-20 '>
     <SectionHeading heading='Exploring Popular Destination'/>   
      <div className='w-[80%] mx-auto mt-14'>
       <DestinationSlider/> 
      </div>
    </div>
  )
}

export default Destination
