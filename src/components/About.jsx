import React from 'react'
import Laptop from '../assets/laptop.jpg'

const About = () => {

    return (
      <section id="about">

        <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#399a4b] font-bold '>ABOUT</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Learn More About Our Team!</h1>
          <p>
          We are a team of passionate innovators dedicated to leveraging artificial intelligence to revolutionize sustainable agriculture. 
          Our goal is to empower farmers with cutting-edge solutions that optimize crop management, promote sustainability, reduce environmental impact, and improve food security.
          </p> 
          <button className='bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'><a href="#home">GitHub Repo</a></button>
        </div>
      </div>
      </div>
      </section>
    );
};

export default About