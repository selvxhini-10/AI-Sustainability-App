import React from 'react';
import WaterComponent from "../components/Water";  // Rename the imported Soil component
import Classifier from '../components/Classifier';

export default function Water() {
    return (
        <div>
            <WaterComponent /> {/* Use the renamed component */}
            <Classifier />
        </div>
    );
}
