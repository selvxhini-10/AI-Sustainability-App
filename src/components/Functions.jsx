import React from 'react'
import React2 from '../assets/react.jpeg'
import Node from '../assets/node.png'
import Arduino from '../assets/arduino.png'
import Flask from '../assets/flask.png'
import TechIcon from '../assets/tech.png'


const Functions = () => {

    return (
      <section id="features">

        <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] mx-auto my-4' src={TechIcon} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#399a4b] font-bold '>HOW IT WORKS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>The Tech Used in the Project</h1>
          <p>
          Hardware components such as camera and relay modules collect real-time data such as soil moisture, temperature and humidity.  
          Machine learning models then analyze the collected data to suggest optimal crop rotation, detect plant diseases, and recommend efficient irrigation schedules.
          </p>
          
          {/* Replace with tech stack images */}
          <div className='max-w-[1240px] pt-[50px] mx-auto grid md:grid-cols-4 gap-8'>
          <img className='w-20 pt-4 mx-auto mt-[-3rem] bg-transparent' src={React2} alt="/" />
          <img className='w-30 pt-5 mx-auto mt-[-3rem] bg-transparent' src={Flask} alt="/" />
          <img className='w-30 pt-4 mx-auto mt-[-3rem] bg-transparent' src={Node} alt="/" />
            <img className='w-30 pt-4 mx-auto mt-[-3rem] bg-transparent' src={Arduino} alt="/" />
          </div>

        </div>
      </div>
      </div>
      </section>
    );
};

export default Functions