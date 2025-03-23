import React, { useState } from 'react';
import { TbFileTypeDoc } from 'react-icons/tb';
import Hero from '../assets/crop_disease.mp4';
import Laptop from '../assets/laptop.jpg';

const Soil = () => {
  // State for handling user input
  const [soilName, setSoilName] = useState('');
  const [soilInfo, setSoilInfo] = useState(null);
  const [fertilityStatus, setFertilityStatus] = useState('');
  const [irrigationMethod, setIrrigationMethod] = useState('');

  // Function to handle form submission and get recommendations
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ soil_name: soilName }), // Ensure you're sending the correct data
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
      } else {
        setSoilInfo(data.best_soil);  // Assuming your backend sends this info
        setIrrigationMethod(data.irrigation_method);  // Based on model output
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <div className="relative h-screen w-full flex items-center justify-center text-white">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-center">
          <p className="text-[#8dd783] md:text-2xl font-bold p-2">
            Using AI to give soil health recommendations
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">
            AI for Improving Soil Health
          </h1>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#399a4b] font-bold">Soil Health Recommendations</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Enter Soil Name for Information
            </h1>
            <p>Enter the soil name to get detailed information and fertility status.</p>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <label>
                Soil Name:
                <input
                  type="text"
                  value={soilName}
                  onChange={(e) => setSoilName(e.target.value)}
                  placeholder="Enter soil name (e.g., soil1, soil2)"
                  className="border p-2 rounded"
                />
              </label>
              <button
                type="submit"
                className="bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
              >
                Get Soil Info
              </button>
            </form>

            {soilInfo && (
              <div className="mt-8 bg-[#e8f7e3] p-4 rounded-md">
                <h3 className="font-bold text-xl">Best Soil for the Crop:</h3>
                <p>{soilInfo}</p>
              </div>
            )}

            {irrigationMethod && (
              <div className="mt-8 bg-[#e8f7e3] p-4 rounded-md">
                <h3 className="font-bold text-xl">Recommended Irrigation Method:</h3>
                <p>{irrigationMethod}</p>
              </div>
            )}

            {fertilityStatus && (
              <div className="mt-8 bg-[#e8f7e3] p-4 rounded-md">
                <h3 className="font-bold text-xl">Fertility Status:</h3>
                <p>{fertilityStatus}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soil;
