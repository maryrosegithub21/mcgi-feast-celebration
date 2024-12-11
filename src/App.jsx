import {Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home.jsx'
import Login from './pages/HomePage/components/LogIn.jsx'
// import SignUp from './pages/HomePage/components/SignUp.jsx'

function App() {

  return (
    <>
    
     <Routes>
     <Route path='/' element={<Home />} />

    <Route path='/mcgi-feast-portal' element={<Home />} />
     
     <Route path='/mcgi-feast-portal-log-in' element={<Login />} />
     {/* <Route path='/mcgi-feast-portal-sign-up' element={<SignUp />} /> */}



     </Routes>
    </>
  )
}

export default App
