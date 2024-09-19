import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AiChat.module.css'; // Import the CSS module
import googleAIStudioAPI from './googleAIStudioAPI'; // Assuming you have this API function

const AiChat = ({ isVisible, onClose }) => {
  const [chatInput, setChatInput] = useState('');
  const [chatResponses, setChatResponses] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setChatInput(e.target.value);
  };

  const handleSend = async () => {
    if (chatInput.trim() === '') return;

    // Add user input to chat responses
    setChatResponses([...chatResponses, { type: 'user', text: chatInput }]);

    // Call Google AI Studio API
    try {
      const response = await googleAIStudioAPI(chatInput);
      setChatResponses([
        ...chatResponses,
        { type: 'user', text: chatInput },
        { type: 'bot', text: response.response },
      ]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setChatResponses([
        ...chatResponses,
        { type: 'user', text: chatInput },
        { type: 'bot', text: 'Sorry, something went wrong.' },
      ]);
    }

    setChatInput('');
  };

  if (!isVisible) return null;

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div className={styles.headerText}>MCGI AI Chat Assistant</div>
        <button onClick={onClose} className={styles.closeButton}>X</button>
      </div>
      <div className={styles.chatWindow}>
        {chatResponses.map((response, index) => (
          <div
            key={index}
            className={response.type === 'user' ? styles.userMessage : styles.botMessage}
          >
            {response.text}
          </div>
        ))}
      </div>
      <div className={styles.chatInputContainer}>
        <input
          type="text"
          value={chatInput}
          onChange={handleInputChange}
          className={styles.chatInput}
          placeholder="Type your inquiry..."
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default AiChat;