import React from 'react'
import { navlink } from '@/app/constant/constant'
import {CgClose} from 'react-icons/cg'

type props={
  closeNav:()=>void,
  showNav:boolean
}
function MobileNav({closeNav,showNav}:props) {
  const navOpen= showNav ? "translate-x-0" : "translate-x-[-100%]"
  return (
    <div>
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black w-full h-full opacity-40 `}></div>
    <div className={`fixed ${navOpen} top-0 left-0 w-[70%] h-full bg-blue-950 z-[1050] flex flex-col items-center justify-center space-y-6`}>
 {navlink.map((link)=>{
                return <a href='link.url' key={link.id} className='relative text-white hover:text-yellow-300 text-base font-medium w-fit block after:content-[""] after:block  after:absolute  after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform duration-300 after:origin-right after:right-0 after:bottom-0' >
                  {link.label}
                </a>
          
            })}
                    <CgClose onClick={closeNav} className='absolute top-4 right-4 text-white text-2xl cursor-pointer z-[1072]' />
        </div>

     </div>
    
  )
}

export default MobileNav
