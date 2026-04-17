import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import WhyChoosecard from './whyChoosecard'
function WhyChoose() {
  return (
    <div className='pt-16 pb-24 '>

        <SectionHeading heading='Why Choose Us'/>
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0">
                <WhyChoosecard image="/images/rrr.svg" title='Best price guarantee'/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <WhyChoosecard image="/images/sss.svg" title='Easy and Quik Open'/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <WhyChoosecard image="/images/sv.svg" title='Customer Care'/>
            </div>
        </div>
      
    </div>
  )
}

export default WhyChoose
