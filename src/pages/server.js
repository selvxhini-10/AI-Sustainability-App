const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Replace with your Gemini API endpoint and API key
const GEMINI_API_KEY = 'AIzaSyBSNyZGBByFNltUYoLoEPy-lg9ujqjWW3M'; 
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY';  // Update with correct URL

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Route to get soil and irrigation info based on crop type
app.post('/get-soil-info', async (req, res) => {
  const { cropType } = req.body;

  if (!cropType) {
    return res.status(400).json({ error: 'Crop type is required' });
  }

  try {
    // Make a request to Gemini's API (hypothetical)
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GEMINI_API_KEY}`,  // Gemini API key
      },
      body: JSON.stringify({
        query: `What is the best soil and irrigation method for growing ${cropType}?`,
        max_tokens: 150,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    // Assuming the response format from Gemini is similar to OpenAI
    const message = data.result;  // Adjust as needed based on Gemini's response structure
    res.json({
      soilRecommendation: message.split('\n')[0],
      irrigationRecommendation: message.split('\n')[1],
    });
  } catch (error) {
    console.error('Error communicating with Gemini:', error);
    res.status(500).json({ error: 'Error communicating with Gemini' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
