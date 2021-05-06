import React from 'react'
import { Navbar,Hero } from '../components'

export default function About() {
    return (
        <>
        <Navbar/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-16">
            <h2 className="text-custom-black font-bold text-6xl">About us</h2>
        </div>
        <div className="h-[585px] relative">
        <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="about.png"
          alt="Two girls with the world map"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 shadow h-[548px]"></div>
        </div>
            
        </>
    )
}
