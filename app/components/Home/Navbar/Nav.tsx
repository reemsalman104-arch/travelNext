"use client"

import { navlink } from '@/app/constant/constant'
import { handler } from 'next/dist/build/templates/app-page'
import React, {  useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'
type props={

  openNav:()=>void
}
function Nav ({openNav}:props) {
  const [navbg,setNavbg]= useState(false)
  useEffect(() =>{
    const handler = () => {
      if (window.scrollY >= 90 ){ setNavbg(true)}
       else  if (window.scrollY < 90 ) {setNavbg(false)}
    };
  window.addEventListener("scroll", handler)
  return () => window.removeEventListener("scroll", handler)
  }, [])
console.log(navbg)
  return (
    <div className={` ${navbg ? 'bg-blue-950 shadow-md fixed' : 'fixed '} transition-all duration-200 h-[12vh] z-1000 w-[100%] `}>
     <div className='flex items-center h-full justify-between  xl:w-[80%] mx-auto w-[95%]'>
        <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>

                <TbAirBalloon className='w-6 h-6 text-white'/>
            </div>
            <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>trivag</h1>

        </div>
        <div className='hidden lg:flex items-center space-x-10 '>

            {navlink.map((link)=>{
                return <a href='link.url' key={link.id} className='relative text-white hover:text-yellow-300 text-base font-medium w-fit block after:content-[""] after:block  after:absolute  after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform duration-300 after:origin-right after:right-0 after:bottom-0' >
                  {link.label}
                </a>
          
            })}
        </div>
        <div className='flex items-center '>

        <button className='md:text-base px-4 py-2 whitespace-nowrap bg-yellow-300 text-blue-950 rounded-md hover:bg-yellow-400 transition-colors duration-200 text-sm'>Book Now</button>

        <HiBars3BottomRight onClick={openNav} className='text-white text-2xl cursor-pointer lg:hidden'/>
        </div>
     </div>
    </div>
  )
}

export default Nav
