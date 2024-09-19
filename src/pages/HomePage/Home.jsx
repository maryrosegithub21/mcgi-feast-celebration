// === Routes === //
import React from 'react'
import NavBar from '../../common/Navbar.jsx';
import HeroBanner from '../HomePage/components/HeroBanner.jsx';
import Welcome from '../HomePage/components/Welcome.jsx';
import Slide from '../HomePage/components/SlideShowMain.jsx';
import Footer from '../../common/Footer.jsx'
import AiChat from './components/AiChat.jsx';
import { useState } from 'react';
import styles from './Home.module.css';

export default function Home() { 
  const [isChatVisible, setIsChatVisible] = useState(false);

  const handleShowChat = () => {
    setIsChatVisible(true);
  };

  const handleCloseChat = () => {
    setIsChatVisible(false);
  };

  return (
    <div>
<NavBar />
<HeroBanner />
<Slide />
<Welcome />
<Footer />
<AiChat isVisible={isChatVisible} onClose={handleCloseChat} />
      {!isChatVisible && (
        <button onClick={handleShowChat} className={styles.showChatButton}>
          Chat with us
        </button>
      )}



   </div>
  )
}
