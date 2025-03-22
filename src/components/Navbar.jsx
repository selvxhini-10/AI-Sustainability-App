import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const  handleNav = () => {
        setNav(!nav)
    };

    const scrollToSection = (id) => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };
    return (
      <section id="home">
{/*flex justify-between items-center mx-auto h-24 px-6 fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white shadow-md p-4 z-20 */}
  {/* Top navigation */}
        <nav className="flex justify-between items-center mx-auto h-24 px-6 fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white shadow-md p-4 z-20">
 
            <h1 className='w-full text-3xl font-bold text-[#8dd783]'>REACT.</h1>
            <ul className='hidden md:flex'>
            <li className='p-4'>
          <a href="#home">Home</a> 
        </li>
        <li className='p-4'>
          <a href="#about">About</a>
        </li>
        <li className='p-4'>
          <a href="#features">Features</a>
        </li>
        <li className='p-4'>
          <a href="#impact">Impact</a>
        </li>
        <li className='p-4'>
          <a href="#newsletter">Contact</a>
        </li>
            </ul>
       

            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div 
  className={
    !nav 
      ? 'fixed left-0 top-0 w-[60%] h-full bg-[#0f1416] border-r border-gray-900 ease-in-out duration-500 z-40'
      : 'fixed left-[-100%]'
  }
>

                <h1 className='w-full text-3xl font-bold text-[#8dd783] m-4'>REACT.</h1>
                <ul className='uppercase space-y-2 w-full bg-[#0f1416] border-r '>
                <li className="p-4 border-b border-gray-600 text-white w-full"> <a href="#home">Home</a> </li>
                </ul> <ul className='uppercase space-y-2 w-full bg-[#0f1416] border-r '>
<li className="p-4 border-b border-gray-600 text-white w-full"> <a href="#about">About</a></li>
</ul>
<ul className='uppercase space-y-2 w-full  bg-[#0f1416] border-r '>
<li className="p-4 border-b border-gray-600 text-white w-full"><a href="#features">Features</a></li>
</ul>
<ul className='uppercase space-y-2 w-full  bg-[#0f1416] border-r '>
<li className="p-4 border-b border-gray-600 text-white w-full">  <a href="#impact">Impact</a></li>
</ul>
<ul className='uppercase space-y-2 w-full h-full bg-[#0f1416] border-r '>
<li className="p-4 border-b border-gray-600 text-white w-full"><a href="#newsletter">Contact</a></li>

                </ul>
                <ul className='w-full min-h-screen bg-[#0f1416] border-r '>

</ul>            
</div>
      
    </nav>
        </section>
    );
};
export default Navbar