import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Impact from '../components/Impact';
import Project from '../components/Project';
import Features from '../components/Features';
import Functions from '../components/Functions';
import UN from '../components/UN';

export default function Home() {
    
    return (
        <>
    <Navbar />
      <Banner/>
      <About/>
      <Project/>
      <Functions/>
      <Features/>
      <UN />
      <Impact/>
      <Newsletter/>
        </>
    )
   
}