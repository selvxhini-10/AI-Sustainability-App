import React from 'react'; 
import Irrigation_Hero from '../components/Irrigation_Hero';
import Water from '../components/Water';
import Navbar from '../components/Navbar';
import IrrigationVid from '../components/IrrigationVid';

export default function Irrigation() {

    return (
        <div>
            <Navbar/>
           <Irrigation_Hero />
           <IrrigationVid />
        </div>
    )
}
