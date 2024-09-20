import axios from 'axios';

const googleAIStudioAPI = async (message) => {
  try {
    const response = await axios.post("/api/ai-chat", { message });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    console.error("Error config:", error.config);

    throw error; // Rethrow the error to handle it in the caller function
  }
};

export default googleAIStudioAPI;