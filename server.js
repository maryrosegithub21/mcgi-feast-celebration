// ========== Module IMPORTS ========== //
const cors = require("cors");
const express = require("express");
const axios = require("axios");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());


// ========== ROUTE IMPORTS ========== //
const logInRouter = require("./routes/loginRoutes");

// Create API ENDPOINTS HERE!!!
// ROOT ENDPOINT
app.get("/", (req, res) => {
  res.send("The backend is functioning!");
});

// ========== API ========== //

// HOME LOGIN
app.use(logInRouter);

// AI Chat Route
app.post("/api/ai-chat", async (req, res) => {
  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `The AI name is servant of an church organization name members church of God International.
    The AI servant will only answer question related to the church which details are in links https://www.mcgi.org/ , https://www.mcgi.org.nz/ , https://www.mcgi.org.au/
    The AI servant will provide contact information such as email address is info@mcgi.org.nz, contact +64274380184, address 35 Acheron Drive, Riccarton, Christchurch 8041.`,
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

    const result = await chatSession.sendMessage({ content: message });
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error communicating with Google AI Studio:", error);
    res.status(500).json({ error: "Error communicating with Google AI Studio" });
  }
});

// Port
const PORT = process.env.PORT;
app
  .listen(PORT, console.log(`It's working at http://localhost:${PORT}`))
  .on("error", (err) => {
    console.log(err);
  });
