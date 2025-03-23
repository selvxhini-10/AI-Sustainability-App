import React from 'react';
import Single from '../assets/agriculture.png'

const Impact = () => {
  return (
    <section id="impact">

    <div className='w-full py-[10rem] px-4 bg-white'>
          <h1 className='md:text-4xl flex items-center justify-center sm:text-3xl text-2xl font-bold py-2'>Our Impact Goals</h1>

      <div className='max-w-[1240px] pt-[50px] mx-auto grid md:grid-cols-4 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Smart & Sustainable Agriculture</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Promote Regenerative Agriculture through AI-powered recommendations.</p>
                  
              </div>
             
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Enhancing Food Security</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Leveraging data-driven insights to maximize crop yield.</p>
                  </div>
                 </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Reducing Environmental Footprint</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Minimizing carbon emissions and chemical use in farming.</p>
                   </div>
               </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Empowering Farmers with Technology</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Providing accessible and user-friendly AI solutions for better decision-making.</p>
                  </div>
             </div>
      </div>
    </div>
    </section>
  );
};

export default Impact;