import React from 'react'
type props = {
    images: string,
    title: string,
    date: string
}
function NewCard({ images, title, date }: props) {
  return (
    <div>
     <div className=' h-[300px] '>
        <img src={images} alt={title} className='w-full h-full object-cover rounded-lg' />
     </div>
     <h2 className='text-lg font-semibold mt-4 text-gray-600 hover:text-blue-950 transition-all duration-200 cursor-pointer'>{title}</h2>
     <p className='text-gray-600 text-sm mt-2'>{date}</p> 
    </div>
  )
}

export default NewCard
