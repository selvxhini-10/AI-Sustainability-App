import React from 'react'
import { TbFileTypeDoc } from 'react-icons/tb';
import { ReactTyped } from "react-typed";
import Video from '../assets/farming-bg.mp4'


const Banner = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center text-white">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  {/* Overlay for better contrast */}

{/* Text Content */}
<div className="relative z-10 text-center">
        <div className='text-white'>
        <div className="absolute top-0 left-0 w-full h-full"></div>

                <p className='text-[#8dd783] md:text-2xl font-bold p-2'>GenAI Genesis Hackathon Project</p>
                <div>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Revolutionizing Farming for a </h1>
              
                    <ReactTyped className='md:text-7xl sm:text-6xl text-4xl font-bold md:pl-4 pl-2 whitespace-nowrap'
                    strings={["Sustainable Future","Sustainable Climate","Sustainable City",]}
                    typeSpeed={90}
                    backSpeed={80}
                    loop
                    showCursor={false} // Hide the cursor if you don't want it visible
                
    />
                </div>
                <p className='md:text-3xl sm:text-4xl text-xl font-bold py-4'>AI-powered farming solutions for a greener tomorrow. </p>
               
            </div>
            </div>

           </div>
    );


};
export default Banner;