import React from 'react'
import Video from '../assets/irrigation.mp4'

const IrrigationVid = () => {

    return (
      <section id="about">

<div className='w-full bg-white py-16 px-4'>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    {/* Video Section on the Left */}
    <div className="flex justify-center items-center">
      <video 
        className="h-[300px] w-auto"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    {/* Content Section on the Right */}
    <div className='flex flex-col justify-center px-4'>
      <p className='text-[#399a4b] font-bold'>HARDWARE COMPONENT</p>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Arduino Soil Moisture Sensor System</h1>
      <p>
        Take a look at our automatic plant watering system! When the soil is dry, the Arduino will command the water pump to run via the relay module. 
        The moisture sensor takes multiple readings from the soil. A regression model is currently being developed to predict yield based on features such as temperature, rainfall, soil health, and crop management practices.
      </p> 
      <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
      <a 
    href="/arduino/smartwateringsystem.ino" 
    download="smartwateringsystem.ino" 
    className="text-[#8dd783]">
    Download Code
  </a></button>
    </div>
  </div>
</div>

      </section>
    );
};

export default IrrigationVid