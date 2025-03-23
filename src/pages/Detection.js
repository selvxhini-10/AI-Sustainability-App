import React from 'react'; 
import Detection_Hero from "../components/Detection_Hero";
import Classifier from '../components/Classifier';
import CameraCapture from '../components/CameraCapture';

export default function Detection() {

    return (
        <div>
            <Detection_Hero />
            <Classifier />
            <CameraCapture/>
        </div>
    )
}
