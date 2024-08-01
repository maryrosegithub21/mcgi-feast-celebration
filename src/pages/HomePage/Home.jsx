// === Routes === //
import React from 'react'
import NavBar from '../../common/Navbar.jsx';
import HeroBanner from '../HomePage/components/HeroBanner.jsx';
import Welcome from '../HomePage/components/Welcome.jsx';
import Slide from '../HomePage/components/SlideShowMain.jsx';



export default function Home() { 

  return (
    <div>
<NavBar />
<HeroBanner />
<Slide />
<Welcome />


   </div>
  )
}
