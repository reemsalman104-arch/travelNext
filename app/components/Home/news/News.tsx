import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import NewCard from './newCard'
function News() {
  return (
    <div className="pt-16 pb-16">
    <SectionHeading heading='Existing Travel News for you' />
    <div  className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center mt-20 gap-8'>

      <div data-aos="fade-left" data-aos-anchor-placement="top-center" >

        <NewCard images="images/o.jfif" title='top to place to visit in Australia' date='15 november 2024'/>
      </div>
         <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100"> 

        <NewCard images="images/bt.jfif" title='top to place to visit in Bangladish' date='22 november 2024'/>
      </div>
         <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200" >

        <NewCard images="images/pp.jfif" title='top to place to visit in pakistan' date='5 november 2024'/>
      </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300" >

        <NewCard images="images/sw.jfif" title='top to place to visit in New Zealand' date='5 november 2024'/>
      </div>
    </div>
      
    </div>
  )
}

export default News
