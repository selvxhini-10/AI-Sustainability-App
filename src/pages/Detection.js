import React from 'react'; 
import Detection_Hero from "../components/Detection_Hero";
import Classifier from '../components/Classifier';
import CameraCapture from '../components/CameraCapture';
import Navbar from '../components/Navbar';

export default function Detection() {

    return (
        <div>
            <Navbar/>
            <Detection_Hero />
            <Classifier />
            <CameraCapture/>
        </div>
    )
}
