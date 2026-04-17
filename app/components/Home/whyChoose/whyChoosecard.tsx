import React from 'react'
type Props = {
    image: string;
    title: string;
}
function whyChoosecard({image,title}: Props) {
  return (
    <div>
        <img src={image} alt={title} width={70} height={70} className='mx-auto text-blue-500 bg-blue-600' />


        <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{title}</h1>
        <p className='mt-2 text-center text-xs font-medium text-gray-700 '>lorem ipsum dolar sit amet consectuter elite </p>
    </div>
  )
}

export default whyChoosecard