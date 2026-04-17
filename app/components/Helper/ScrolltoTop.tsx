"use client"

import React from 'react'
import { useState , useEffect} from 'react'
import { FaArrowUp } from 'react-icons/fa'
function ScrolltoTop() {
    const[isVisible,setIsVisible]=useState(false)

    useEffect(()=>{
        const toggleVisibility=()=>{

             }
            
       
        window.addEventListener('scroll',toggleVisibility)
        return ()=>{
            window.removeEventListener('scroll',toggleVisibility)
        }
    },[])
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>


        {isVisible && (
            <button onClick={scrollToTop} className='p-2 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center'>
                <FaArrowUp/>
            </button>
        )}
    </div>
  )
}

export default ScrolltoTop