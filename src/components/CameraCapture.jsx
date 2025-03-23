import React, { useState } from 'react';

const CameraCapture = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [processedImage, setProcessedImage] = useState(null);
  const [detectedLabel, setDetectedLabel] = useState(null);

  const handleProcessImage = () => {
    setLoading(true);
    const blob = dataURLtoBlob(image);
    const formData = new FormData();
    formData.append('file', blob);

    fetch('http://127.0.0.1:5000/upload', {  // Update with your Flask server IP
      method: 'POST',
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      const imgURL = `data:image/jpeg;base64,${data.image}`;  // Base64 encoded processed image
      setProcessedImage(imgURL);
      setDetectedLabel(data.label);  // The disease label
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      setLoading(false);
    });
  };

  const dataURLtoBlob = (dataUrl) => {
    const byteString = atob(dataUrl.split(',')[1]);
    const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  };

  return (
    <div className="image-processing">
      <h2>Process Image for Disease Detection</h2>

      {/* Image preview or instruction */}
      {image && (
        <div>
          <h3>Preview</h3>
          <img src={image} alt="Preview" className="img-thumbnail" />
        </div>
      )}
      
      {/* Button to start the image processing */}
      <button 
        className="btn btn-primary"
        onClick={handleProcessImage}>
        Process Image
      </button>

      {/* Loading spinner while the image is being processed */}
      {loading && <div>Processing...</div>}

      {/* Display processed image */}
      {processedImage && (
        <div>
          <h3>Processed Image</h3>
          <img src={processedImage} alt="Processed" className="img-thumbnail" />
          {detectedLabel && <div><strong>Detected Disease:</strong> {detectedLabel}</div>}
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
