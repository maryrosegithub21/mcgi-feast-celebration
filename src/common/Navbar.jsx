// === To applied the style you have to import this === //
import styles from "./Navbar.module.css";
// ^^^ To applied the style you have to import this ^^^ //

// === to use link need to install npm install react-router-dom  === //
import { Link} from "react-router-dom";
import LogIn from '../pages/HomePage/components/LogIn.jsx'
import SignUp from '../pages/HomePage/components/SignUp.jsx'
// ^^^ to use link need to install npm install react-router-dom ^^^ //


// // === To Applied Photos should import this from your folder === //
import mcgilogo from "../assets/NavBar/mcgi-logo.png";
// // ^^^ To Applied Photos should import this from your folder ^^^ //

// // === To access this you have to install the 'npm install react-icons' for font awesome=== //
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// // ^^^^ To access this you have to install the 'npm install react-icons' for font awesome ^^^^ //

// for showing the sign up form
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate(); // for showing the the sign up form


// === variable use and function of button close and open === //
const [nav, setNav] = useState(false)
  // ^^^ variable use and function of button close and open ^^^ //

    // === for login display ===//
//  const [isShown, setIsShown] = useState(false);
 const handleClickLogIn = () => {
  //  setIsShown((current) => !current);
  navigate('/mcgi-feast-portal-log-in'); 

 
 };
    // ^^^ for login display ^^^//

    // === for Sign UP display ===//
    // const[isShownSignUP, setIsShownSignUp] = useState(false);
    const handleClickSignUp = (e) => {
      e.preventDefault();
    // path for showing the sign up form 
      navigate('/mcgi-feast-portal-sign-up'); 
    };
    // ^^^ for SignUp display ^^^//

    
  return (
    <header className={styles.HeaderNavbar}>
      {/* === Left Part of the Header === */}
      <img  src={mcgilogo} alt="mcgilogo" style={{height:50, width:150}}></img>

      {/* === Center Part of the Header === */}
    <nav>
      <ul className={nav ? [styles.MenuNav, styles.active].join(' ') : [styles.MenuNav]}>
      <Link to="/mcgi-feast-portal">HOME</Link>
      <Link to="/mcgi-feast-portal">ABOUT</Link>
      <Link to="/mcgi-feast-portal">EVENTS</Link>
      </ul>

   </nav>
  
    {/* === RightSide Part of Header === */}
   <div className={nav ? [styles.headerDivRight, styles.active].join(' ') : [styles.headerDivRight]}>
    <nav className={styles.headerNavRight}>
    <ul className={styles.headerUlRight}>
      <br />
   
      <button type='submit' className={styles.headerLiRight} onClick={handleClickSignUp}>
      REGISTER
  </button>
      {/* <Link type='submit' onClick={handleClickSignUp}className={styles.headerLiRight}>REGISTER</Link> */}
      {/* {isShownSignUP ? <SignUp/> : ""} */}
      <p>|</p>
      {/* <Link onClick={handleClickLogIn} className={styles.headerLiRight}>LOGIN</Link> */}
      <button type='submit' className={styles.headerLiRight} onClick={handleClickLogIn}>
      LOG IN
      </button>
      {/* {isShown ?  <LogIn />  : "" }  */}

    </ul>
    </nav>
    </div>

 {/* === Button Show When meet the maximum screen of 1024=== */}

    <button onClick={()=> setNav(!nav)} className={styles.OpenCloseButton}  >

      {nav ?  <FaTimes/>  :   <FaBars/> }     
   </button>  
  {/* ^^^ Button Show When meet the maximum screen of 1024 ^^^ */} 
    </header>    
  
  )
}
