import React from 'react'
import { TbFileTypeDoc } from 'react-icons/tb';
import Hero from '../assets/crop_disease.mp4'


const Detection_Hero = () => {
    return (
        <div>
        <div className="relative h-screen w-full flex items-center justify-center text-white">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={Hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

  {/* Overlay for better contrast */}

{/* Text Content */}
<div className="relative z-10 text-center">
        <div className='text-white'>
        <div className="absolute top-0 left-0 w-full h-full"></div>

                <p className='text-[#8dd783] md:text-2xl font-bold p-2'>Using Computer Vision to Analyze Crop Images</p>
                <div>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>AI For Crop Disease Detection</h1>   
                </div>
                
            </div>
            </div>
</div>

        </div>   
    );


};
export default Detection_Hero;