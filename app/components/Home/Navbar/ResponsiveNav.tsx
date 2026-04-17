"use client"

import React from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'
import { useState } from 'react'

function ResponsiveNav() {
  const[shownav,setShowNav]=useState(false)
  const handlenavShow=()=>{
    setShowNav(true)
  }
  const handlenavClose=()=>{
    setShowNav(false)
  }
  return (
    <div>
      <Nav openNav={handlenavShow} />
      <MobileNav closeNav={handlenavClose} showNav={shownav}/>
    </div>
  )
}

export default ResponsiveNav
