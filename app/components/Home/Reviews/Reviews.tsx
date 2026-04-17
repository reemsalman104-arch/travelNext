import React from 'react'
import {FaStar} from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'
function Reviews() {
  return (
    <div className='pt-10 pb-10 flex items-center justify-center flex-col bg-blue-950'>
     <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2  gap-8'> 
      <div>
        <h1 className='text-2xl font-semibold text-white'>what our customer are saying us?</h1>
        <p className='mt-4 text-gray-200 text-sm'>lorem ipsum dolar sit amet consectuter elite lorem ipsum dolar sit amet consectuter elite lorem ipsum dolar sit amet consectuter elite</p>

        <div className='mt-6 flex items-center space-x-6'>

            <div>
                <p className='text-2xl font-semibold text-white'>4.88</p>
                <p className='text-white mb-2'>Overall Rating</p>
                <div className='flex items-center'>
                    <FaStar className='text-white '/>
                      <FaStar className='text-white '/>
                        <FaStar className='text-white '/> 
                         <FaStar className='text-white '/>
                           <FaStar className='text-white '/>

                </div>
            </div>
        </div>
        </div> 
       <div className="overflow-hidden"> <ReviewSlider/></div>
        </div>

    </div>
  )
}

export default Reviews
