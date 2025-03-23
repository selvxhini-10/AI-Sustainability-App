import React from 'react';
import One from '../assets/1.png';
import Two from '../assets/2.png';
import Three from '../assets/3.png';
import Four from '../assets/4.png';

const UN = () => {
  return (
    <section id="impact">

    <div className='w-full py-[10rem] px-4 bg-black'>
          <h1 className='md:text-4xl flex items-center justify-center sm:text-3xl text-2xl font-bold py-2 text-white'>UN Sustainability Goals</h1>
          <p className='max-w-[1100px] mx-auto md:text-1xl sm:text-xl text-white py-2 text-center'>
           Our AI-powered Farming Sustainability Application aims to address the UN's Sustainable Development Goals through various features.
</p>

      <div className='max-w-[1240px] pt-[50px] mx-auto grid md:grid-cols-4 gap-8'>
      <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-30 mx-auto mt-[-3rem] bg-transparent' src={One} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Sustainable Cities and Communities</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>By offering AI-driven crop rotation suggestions, our project promotes regenerative agriculture practices, which are essential for maintaining soil health and ensuring long-term agricultural sustainability. 
                  (SDG2) recognizes the inter linkages among supporting sustainable agriculture, empowering small farmers and tackling climate change.
                  </p>
                  </div>
              <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://www.globalgoals.org/goals/11-sustainable-cities-and-communities/">Learn More</a></button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-30 mx-auto mt-[-3rem] bg-transparent' src={Three} alt="/" />
              <h2 className='text-2xl font-bold text-center'>End Hunger</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>We aim to achieve food security and improved nutrition and promote sustainable agriculture.
                  Every year, up to 40 percent of global crop production is lost due to plant diseases, costing the global economy $220 billion.  
                  This effort aligns with the World Food Programme's mission to achieve Zero Hunger, which is the UN’s 2nd goal, by ensuring that everyone has access to safe and nutritious food.</p>
                  </div>
              <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://www.globalgoals.org/goals/2-zero-hunger/">Learn More</a></button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-30 mx-auto mt-[-3rem] bg-transparent' src={Four} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Climate Action</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Our smart irrigation system's optimization of water usage and the early detection of plant diseases using computer vision help minimize resource wastage and reduce the need for chemical interventions. These measures align with the UN's call to action for sustainable practices that lower environmental impacts, such as conserving water and reducing pollution.</p>
                  </div>
              <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://www.globalgoals.org/goals/13-climate-action/">Learn More</a></button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-30 mx-auto mt-[-3rem] bg-transparent' src={Two} alt="/" />
              <h2 className='text-2xl font-bold text-center'>Industry, Innovation, and Infrastructure</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>By providing accessible AI solutions, our project empowers farmers to make informed decisions, enhancing productivity and resilience. This technological empowerment is in line with the UN's recognition of the transformative potential of technology in revolutionizing food production and supporting sustainable development.</p>
                  </div>
              <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'><a href="https://www.globalgoals.org/goals/9-industry-innovation-and-infrastructure/">Learn More</a></button>
          </div>
      </div>
    </div>

    </section>
  );
};

export default UN;