
import React from 'react'


const Hero25 = () => {
  return (
    <div className="relative w-full flex flex-col-reverse md:flex-row items-center overflow-hidden">

      {/* :HERO IMAGE */}
      <div className="absolute w-full h-full bg-gradient-to-t from-purple-500 to-pink-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 75%)" }}>
        <img src="https://fancytailwind.com/static/764417c1f2d75b88be8b6abc6cb1fdbd/69f5c/work6.jpg" alt="" className="absolute w-full h-full object-cover object-top opacity-20" />
      </div>

      {/* :PRODUCT */}
      <div className="hidden sm:block relative w-full md:w-1/2 h-1/2 md:h-full">
        <img src="https://fancytailwind.com/static/smartphone-app2-bc19641ca2bea18b4274be13c9780b1c.png" alt="" className="relative mx-auto sm:w-40 md:w-60 xl:w-64" />
      </div>

      {/* :HERO MAIN */}
      <div className="relative pt-20 pb-10 md:py-40 px-3 w-full md:w-1/2 h-full sm:h-1/2 md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-white">

        {/* ::Small Title */}
        <h2 className="text-xl sm:text-3xl font-mulish">Marketplace for</h2>

        {/* ::Big Title */}
        <h1 className="text-5xl sm:text-7xl font-mulish">Fancy Hero 25</h1>

        {/* ::Text */}
        <p className="max-w-lg py-5 font-thin leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolores sunt sequi ab repellendus, molestias odit rerum beatae voluptates quidem numquam explicabo non voluptatum accusamus itaque natus eveniet amet veniam.</p>

        {/* ::Download App */}
        <div className="flex-shrink-0 py-5 flex flex-col sm:flex-row items-center">
          {/* Apple Store */}
          <a href="#link" className="py-2 sm:pr-5">
            <img src="https://fancytailwind.com/static/badge-apple-store-white-transparent-" alt="" className="w-40" />
          </a>
          {/* Google Store */}
          <a href="#link" className="py-2 sm:pl-5">
            <img src="https://fancytailwind.com/static/badge-play-store-white-transparent-" alt="" className="w-40" />
          </a>
        </div>

      </div>
      
    </div>
  )
}

export default Hero25
