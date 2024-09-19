import axios from 'axios';

const googleAIStudioAPI = async (message) => {
  try {
    const response = await axios.post("/api/ai-chat", { message });
    return response.data;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw error;
  }
};

export default googleAIStudioAPI;