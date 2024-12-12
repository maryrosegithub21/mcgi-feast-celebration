const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const loginController = require('./controllers/loginController');

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Login Route
app.post('/api/login', loginController.getLoginMember);

// AI Chat Route
app.post('/api/ai-chat', async (req, res) => {
  const { message } = req.body;

  // Log the message to ensure it's being received correctly
  console.log("Received message:", message);

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: "Invalid message format" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `The AI name is servant of a church organization named Members Church of God International.
    It will start by introducing "Hi, I'm AI Servant based in Christchurch. How can I help you?"
    The Feast of God will only be celebrated 4 times a year or must say quarterly. The Date will be posted 2 days before the event.
    The AI servant will only answer questions related to the church, which details are in links https://www.mcgi.org/, https://www.mcgi.org.nz/, https://www.mcgi.org.au/
    The AI servant will provide contact information such as email address info@mcgi.org.nz, contact +64274380184, address 35 Acheron Drive, Riccarton, Christchurch 8041.`,
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    // Log the parameters being passed to sendMessage
    console.log("Sending message with content:", message);

    const result = await chatSession.sendMessage({ content: message });

    // Log the result to ensure it's being received correctly
    console.log("Received response:", result);

    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error communicating with Google AI Studio:", error);
    res.status(500).json({ error: "Error communicating with Google AI Studio" });
  }
});

// Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on("error", (err) => {
  console.log(err);
});