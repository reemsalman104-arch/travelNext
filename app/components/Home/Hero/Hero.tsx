import React from 'react'
import SearchBox from '../../Helper/searchBox'

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/images/hj.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 " />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-8 sm:py-10 md:py-16 lg:py-20 mt-10   md:space-y-12 lg:space-y-16 xl:space-y-20"> 
        <div data-aos="fade-up" className="w-full max-w-3xl text-center space-y-4  "> 
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl uppercase font-bold tracking-tight text-white">
            Discover Your Next Adventure
          </h1>
          <p className="text-sm sm:text-base uppercase tracking-[0.2rem] text-white/90">
            Explore the world with us
          </p>
        </div>
        {/* SearchBox with overlapping button */}
        <div className="w-full max-w-4xl flex flex-col relative items-center">
          <div className="w-full  flex  justify-center items-center">
            <SearchBox />
            {/* Overlapping Search Button */}
            <a
              href="#"
              className="absolute flex  justify-center items-center   bottom-0  right-1/2.5  bg-rose-600 hover:bg-gradient-to-r hover:from-rose-600 hover:to-rose-400 text-white space-y-8 font-semibold rounded-md px-6 py-3 shadow-lg transition text-sm sm:text-base   ring-2 ring-rose-400 ring-offset-2 "
              style={{ minWidth: '110px' }}
            >
              Search
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero