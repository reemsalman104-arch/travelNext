import React from 'react'
import { BsEnvelope, BsEnvelopePaper } from 'react-icons/bs'

function NewsLetter() {
  return (
    <div className=' mt-20 flex bg-black pt-16 pb-16 items-center justify-center w-full flex-col'>
<BsEnvelopePaper className='w-16 h-16 mt-20 text-white'/>
<h1 className='text-lg sm:text-l md:text-2xl text-white font-semibold mt-10 tracking-widest '> Your Travel Journey starts Here</h1>
<p className='text-white mt-4 text-xs sm:text-sm'>Subscribe to our newsletter and never miss an update!</p>
<div className=' w-full'>
    <input type='text' placeholder='Enter your email' className=' px-4 py-3  max-h-10  bg-white mt-8 pb-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] h-12 px-4 block mx-auto my-auto rounded-lg outline-none placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-base ' />
<button className='px-6 py-2 bg-blue-950 text-white mt-4 w-[95%] text-base sm:text-sm sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto  rounded-lg hover:bg-blue-700 transition-all duration-200  md:max-h-10'>Subscribe</button>


</div>
    </div>
  )
}

export default NewsLetter