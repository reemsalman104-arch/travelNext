import React from 'react'
type Props = {
    heading: string
}
function SectionHeading({ heading }: Props) {
  return (
    <div className='w-[80%] mx-auto'>

        <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</h1>
        <p className='text-gray-600 mt-2 sm:text-base text-sm font-meduim'>welcome how we can help you find your next adventure</p>
    </div>
  )
}

export default SectionHeading