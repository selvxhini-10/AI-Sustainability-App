import React, { useState } from 'react';
import Laptop from '../assets/laptop.jpg'


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
    const dataURLtoBlob = (dataurl) => {
      const arr = dataurl.split(',')
      const mimeMatch = arr[0].match(/:(.*?);/);

      if (!mimeMatch) {
        throw new Error('Invalid MIME type');
      }
      const mime = mimeMatch[1];
      const bstr = atob(arr[1])
      let n = bstr.length;
      const u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type:mime});

    }
    const handleProcessImage = () => {
      setLoading(true);
      const blob = dataURLtoBlob(image);
      const formData = new FormData();
      formData.append('file', blob);
  
      fetch('http://127.0.0.1:5000/detect', { method: 'POST', body: formData })

      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then((data) => {
          const imgURL = `data:image/jpeg;base64,${data.image}`; // Correct string interpolation
          setProcessedImage(imgURL);
          setDetectedLabel(data.label);
          setLoading(false);
          setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: `Detected Diseases: ${data.label}` }, {sender: 'bot', text:'How can we assist you?'}]);
      })
      .catch((error) => {
          console.error('Error ', error);
          setLoading(false);
      });
  }

  const handleSendMessage = () => {
    if (userInput.trim()==='') {
      setWarning("Please enter a message.");
      setTimeout(()=> {
        setWarning("");
      }, 2000);
      return;
    }
    setChatLoading(true);

    const payload = {
      message: userInput,
      chatHistory: messages
    };
    fetch('http://127.0.0.1:5000/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      setMessages([...messages, { sender: 'user', text: userInput}, {sender: 'bot', text: data.response}]);
      setChatLoading(false);
    })
    .catch(error => console.error('Error:', error));

    setUserInput('');
    setWarning('');
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
    return (
      <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          {/* Image preview or laptop image */}
          <div className="flex justify-center items-center">
              {image ? (
                  <img src={image} alt="Preview" className="w-[500px] mx-auto my-4 rounded-lg shadow-lg" />
              ) : (
                  <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
              )}
          </div>

          {/* Right side content */}
          <div className="flex flex-col justify-center">
              <p className="text-[#399a4b] font-bold">Crop Disease Classifier</p>
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Upload An Image</h1>
              <p>
              This Crop Disease Classifier integrates YOLOv8 for image-based disease identification and a GPT-powered chatbot for interactive guidance. It also integrates a chatbot using LangChain and OpenAI. A Flask API unifies these components, enabling real-time detection and expert insights to support farmers and researchers in agriculture.
                  
              </p>

              {/* Custom Process  Button */}
              <label
                  htmlFor="file-upload"
                  className="bg-black text-[#8dd783] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-center cursor-pointer"
              >
                  Upload
              </label>

              {/* Hidden file input */}
              <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
              /> 
          </div>
      </div>
  
     <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
         
          <div className="flex justify-center items-center">
      
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Process the Image</h1>
   </div>
   

      <div className='mt-4'>
        {/* Process Button when no image is displayed */}
        <button 
          className='btn btn-primary mt-3 bg-[#399a4b] text-black w-[200px] rounded-md font-medium my-6 px-6 py-3' 
          onClick={handleProcessImage}>
          Process
        </button>
      </div>
   
    {loading && (
      <div className='mt-4'>
        <div className='spinner-border text-primary' role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Image is being processed...</p>
      </div>
    )}
     {processedImage && (
          <div className='mt-4'>
            <h3>Processed Image</h3>
            <img src={processedImage} alt="Processed" className='img-thumbnail' />
            {detectedLabel && (
              <div className='mt-2'>
              <strong>Detected Diseases: </strong> {detectedLabel}
              </div>
                  )}
  </div>

  )}
 <div className="flex flex-col h-screen justify-between bg-gray-100">
  {/* Chatbox Area */}
  <div className="flex-1 overflow-auto p-4">
    <div className="chatbox space-y-4">
      {/* Chat messages */}
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender === 'bot' ? 'bg-green-100' : 'bg-blue-100'} p-3 rounded-lg`}>
          <p className={`text-sm ${message.sender === 'bot' ? 'text-gray-700' : 'text-black'}`}>{message.text}</p>
        </div>
      ))}
      
      {/* Loading spinner */}
      {isChatLoading && (
        <div className="message loading flex items-center justify-center">
          <div className="spinner-border text-blue-500" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Warning Message */}
  {warning && <p className="warning-message text-red-500 text-center mb-2">{warning}</p>}

  {/* Input Area */}
  <div className="input-area p-4 flex items-center space-x-4 bg-white border-t border-gray-300">
    <input
      type="text"
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Type a message..."
      className="flex-1 p-3 rounded-lg border border-gray-300"
      disabled={!processedImage || isChatLoading}
    />
    <button
      onClick={handleSendMessage}
      disabled={!processedImage || isChatLoading}
      className="bg-[#399a4b] text-white p-3 rounded-lg"
    >
      Send
    </button>
  </div>
</div>



</div>
</div>

  );
};
export default Classifier;