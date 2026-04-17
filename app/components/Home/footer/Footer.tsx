import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='pt-16 pb-16'>
       <div className='w-[80%] mx-auto flex items-start  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-between  grid '>
      <div className=' space-y-4'>
        <h1 className='text-lg font-bold '>Company</h1>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>About Us</p>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Careers</p>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Blogs</p>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Gifts Cards</p>
           <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Magazine</p>

        
        </div>
         <div className=' space-y-4'>
        <h1 className='text-lg font-bold '>Support</h1>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Contact</p>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Legal Notice</p>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Privacy Policy</p>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Terms&Condition</p>
           <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>SiteMap</p>

        
        </div>
         <div className=' space-y-4'>
        <h1 className='text-lg font-bold '>Other Services</h1>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Car hire</p>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Activitly Finder</p>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Tour List</p>
        <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Flight Finder</p>
           <p className='text-gray-800 text-sm font-medium cursor-pointer hover:text-blue-950'>Travel Agents</p>

        
        </div>
         <div className=' space-y-4'>
        <h1 className='text-lg font-bold '>Contact Us</h1>
        <div className='mt-6'></div>
       <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
       <h1 className='text-base font-bold text-blue-950 mt-1'>+012 45655643</h1>
        <h1 className='text-sm text-gray-600'>Our Email Address</h1>
        <h1 className='text-base font-bold text-blue-950 mt-1'>example@gmail.com</h1>

        

        
        </div>
      
      </div>

      <div className='w-[80%] mx-auto mt-10 border-t text-gray-300 pt-6 flex flex-col md:flex-row justify-between space-between items-center text-sm'>
        <p className='text-center md:text-left'>Copyright © 2024 Travel. All rights reserved.</p>
      <div className=' flex items-center space-x-4 mt-4 md:mt-0'>  
      <span className='text-blue-950 font-bold'>Social:</span>
      <a href="#" className='text-gray-500 hover:text-gray-800'> <FaTwitter/></a>
      <a href="#" className='text-gray-500 hover:text-gray-800'> <FaFacebook/></a>
      <a href="#" className='text-gray-500 hover:text-gray-800'> <FaInstagram/></a>
      </div>
      </div>
    </div>
  )
}

export default Footer
