import React from 'react'
import { FaHeart } from 'react-icons/fa';
 type Props = {
    hotel: {
        id: number;
        name: string;
        image: string;
        location: string;
        price: number;
        rating: number;
        reviews: number;
    };
};
function HotelCard({ hotel }: Props) {
  return (
    <div>
      <div className="relative  rounded-lg shadow-md p-4 w-full h-full cursor-pointer group overflow-hidden">
        <div className='absolute  top-4 right-4 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-800 flex-col '>
        <FaHeart className='text-red-500 w-5 h-5' /></div>
        <div >
        <img src={hotel.image} alt={hotel.name} width={500} height={500} className='overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110' />
        </div>
        <div  >
        <h3 className='mt-4 text-lg font-semibold text-blue-900 hover:text-black cursor-pointer transition-all duration-200'>{hotel.name}</h3>
        <p className='text-sm text-gray-600 mt-3 font-medium mb-6'>{hotel.location}</p>
       <div className='flex items-center space-x-2'>
        <div className='px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs'>Rating: {hotel.rating} ({hotel.reviews} reviews)</div>
        </div>
        <p className=' mt-4 text-sm text-gray-800'>Exeptional</p>
        <p className='text-sm text-gray-800 font-bold'>{hotel.reviews} reviews</p>

        </div>
        <p className='mt-3 text-sm text-gray-800 font-medium '> starting from <span className='text-blue-600 font-bold'>US${hotel.price}</span> </p>
      </div>
    </div>
  )
}

export default HotelCard