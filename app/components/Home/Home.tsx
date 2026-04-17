"use client"

import React from 'react'
import Hero from './Hero/Hero'
import Destination from './destination/Destination'
import Hotel from './hotel/Hotel'
import WhyChoose from './whyChoose/WhyChoose'
import Reviews from './Reviews/Reviews'
import NewsLetter from './newsLetter/NewsLetter'
import News from './news/News'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
function Home() {


useEffect(()=>{
   const initAOS = async() => {
    await import('aos') 
    AOS.init({
      duration: 1000,
     easing: 'ease',
     once: true,
     anchorPlacement: 'top-bottom',
    });
  }
  initAOS()
}, [])

  return (
    <div className='overflow-hidden'>
    <Hero/>
    <Destination/>
    <Hotel/>
    <WhyChoose/>
    <Reviews/>
    <News/>
    <NewsLetter/>
    </div>
  )
}

export default Home
