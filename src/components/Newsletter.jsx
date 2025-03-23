import React, { useState } from 'react'; // Import useState here

const Newsletter = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <section id="newsletter">
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want the latest news on digital agriculture and sustainability?
          </h1>
          <p>Stay tuned to sign up to our newsletter and stay up to date. The newsletter feature will be deployed in the coming weeks.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
          
      <button 
        className="bg-[#8dd783] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
        onClick={handleClick}
      >
        Notify Me
      </button>

      {clicked && (
        <p className="text-white mt-2">Thank you for signing up!</p>
      )}

          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#8dd783]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Newsletter;