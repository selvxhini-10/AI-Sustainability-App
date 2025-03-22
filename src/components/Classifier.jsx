import React, { useState } from 'react';


const Classifier = () => {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false);
    const [processedImage, setProcessedImage] = useState(null);
    const [detectedLabel, setDetectedLabel] = useState(null);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [warning, setWarning] = useState('');
    const [isChatLoading, setChatLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return; // Prevent errors if no file is selected

        const reader = new FileReader();

        setMessages([]);
        setProcessedImage(null);
        setDetectedLabel(null);
        setLoading(false);
        setWarning("");

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    };
    return (
        <div className='w-full bg-white py-16 px-4'>
            < div className='max-w-[1240px] mx-auto'>
       <div className = "container mt-5">
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>Crop Disease Identificatoin</h1>

        <div className = 'app-body d-flex'>
            <div className='left-content'>
              {image && (
                <div className='mt-4'>
                    <h3>Preview</h3>
                    <img src={image} alt="Preview" className='img-thumbnail' />
                    </div>
              )}
              <div className ='mt-4'>
                <input type="file" accept="image/*" className='form-control-file' onChange={handleImageChange} />
              </div>
            </div>
        </div>
       </div> 
       </div>
       </div>
);


};
export default Classifier;