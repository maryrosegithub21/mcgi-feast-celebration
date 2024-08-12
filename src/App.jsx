import {Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home.jsx'
import Login from './pages/HomePage/components/LogIn.jsx'
import SignUp from './pages/HomePage/components/SignUp.jsx'
// import HeroBanner from './pages/HomePage/components/HeroBanner.jsx'
// import Welcome from './pages/HomePage/components/Welcome.jsx'
// import Slide from './pages/HomePage/components/SlideShowMain.jsx'
// import Footer from '../src/common/Footer.jsx'


function App() {


  return (
    <>
     <Routes>
     <Route path='/' element={<Home />} />
    <Route path='/mcgi-feast-portal' element={<Home />} />
     
     <Route path='/mcgi-feast-portal-log-in' element={<Login />} />
     <Route path='/mcgi-feast-portal-sign-up' element={<SignUp />} />
     {/* <Route path='/MCGI-BRETHREN-DAY-NZ' element={<HeroBanner />} />
     <Route path='/MCGI-BRETHREN-DAY-NZ' element={<Welcome />} />
     <Route path='/MCGI-BRETHREN-DAY-NZ' element={<Slide />} />
     <Route path='/MCGI-BRETHREN-DAY-NZ' element={<Footer />} /> */}


     </Routes>
    </>
  )
}

export default App
