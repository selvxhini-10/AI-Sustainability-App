import React from 'react'
import Laptop from '../assets/laptop.jpg'
import Pic1 from '../assets/pic1.jpg'
import Pic2 from '../assets/pic2.png'
import Pic3 from '../assets/pic3.jpg'
import Pic4 from '../assets/pic4.jpg'


const Project = () => {

    return (
        <div className='w-full bg-black py-16 px-4'>
          {/* Text Section on the Left */}
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-4xl sm:text-3xl flex items-center justify-center text-2xl text-white font-bold py-2'>Project Description</h1>
            <p className='max-w-[1100px] mx-auto md:text-1xl sm:text-xl text-white py-2 text-center'>
            Our AI-powered farming system integrates machine learning and IoT to enhance soil health monitoring, crop rotation strategies, smart irrigation, and crop disease detection. By combining real-time sensor data with AI-driven insights, we provide farmers with actionable recommendations to maximize yield while minimizing resource waste.
</p>

            <div class="grid grid-cols-4 gap-4">
            <img className='w-[500px] h-[160px] mx-auto my-4' src={Pic1} alt='/' />
            <img className='w-[500px] h-[160px] mx-auto my-4' src={Pic2} alt='/' />
            <img className='w-[500px] h-[160px] mx-auto my-4' src={Pic3} alt='/' />
  <img className='w-[500px] h-[160px] mx-auto my-4' src={Pic4} alt='/' />
</div>
            </div>
            </div>
      
    );
};

export default Project