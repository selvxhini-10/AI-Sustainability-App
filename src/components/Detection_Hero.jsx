import React from 'react'
import { TbFileTypeDoc } from 'react-icons/tb';
import Hero from '../assets/crop_disease.mp4'
import Laptop from '../assets/laptop.jpg'



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
 <div className='w-full bg-white py-16 px-4'>
 <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
 <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
 <div className='flex flex-col justify-center'>
   <p className='text-[#399a4b] font-bold '>Crop Disease Classifier</p>
   <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Upload An Image</h1>
   <p>
   This AI-powered plant disease classifier analyzes crop and plant images to detect diseases. Using deep learning, the model distinguishes between normal and disease-affected plants, providing quick and reliable results to support plant health solutions. Choose a file, and the model will predict whether it shows disease.
   </p> 
   <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'><a href="https://github.com/selvxhini-10/AI-Sustainability-App.git">Process</a></button>
 </div>
</div>

</div>
<div className='w-full bg-white py-16 px-4'>

    
</div>
        </div>   
    );


};
export default Detection_Hero;