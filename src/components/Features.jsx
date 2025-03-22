import React from 'react'
import Farm from '../assets/agriculture.png'
import Water from '../assets/water.png'
import Yield from '../assets/yield.png'
import Climate from '../assets/climate.png'
import Carbon from '../assets/carbon.png'
import Disease from '../assets/disease.png'
import {Link} from 'react-router-dom'

const Features = () => {

    return (
        <div className='w-full bg-black py-16 px-3'>
      
      <h1 className='md:text-4xl flex items-center justify-center sm:text-3xl text-2xl font-bold py-2 text-white'>Product Features</h1>
          
      <div className='max-w-[1240px] pt-[50px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Water} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Reducing Water Waste</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Our smart irrigation system optimizes water usage, preventing overwatering and conserving freshwater resources.</p>
                  
              </div>
              <button className='bg-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 h-30 mx-auto mt-[-3rem] bg-transparent' src={Farm} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Improving Soil Health</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>AI-driven crop rotation suggestions help maintain soil fertility and reduce dependency on chemical fertilizers.</p>
                  </div>
              <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Disease} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Crop Disease Detection</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Using computer vision, we detect plant diseases early, minimizing crop loss and reducing the need for excessive pesticide use.</p>
                   </div>
              <button className='bg-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="/detection">Learn More</a></button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 h-[80px] mx-auto mt-[-3rem] bg-transparent' src={Yield} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Yield Prediction and Forecasting</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Regression models will be used to predict yield based on historical data, weather conditions and temperature.</p>
                  </div>
              <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Carbon} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Lower Carbon Footprint</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>By optimizing farming techniques, we reduce greenhouse gas emissions from inefficient agricultural practices, ensuring greater sustainability.</p>
                  </div>
              <button className='bg-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Climate} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Combatting Climate Change</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Sustainable farming practices improve soil health, which assists in storing carbon and reducing atmospheric carbon dioxide levels.</p>
                  </div>
              <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Learn More</button>
          </div>
      </div>
    </div>
    );
};

export default Features