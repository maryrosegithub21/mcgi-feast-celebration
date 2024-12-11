// // === To applied the style you have to import this === //
// import styles from "./Navbar.module.css";
// // ^^^ To applied the style you have to import this ^^^ //

// // === to use link need to install npm install react-router-dom  === //
// import { Link} from "react-router-dom";
// import LogIn from '../pages/HomePage/components/LogIn.jsx'
// import SignUp from '../pages/HomePage/components/SignUp.jsx'
// // ^^^ to use link need to install npm install react-router-dom ^^^ //


// // // === To Applied Photos should import this from your folder === //
// import mcgilogo from "../assets/NavBar/mcgi-logo.png";
// // // ^^^ To Applied Photos should import this from your folder ^^^ //

// // // === To access this you have to install the 'npm install react-icons' for font awesome=== //
// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// // // ^^^^ To access this you have to install the 'npm install react-icons' for font awesome ^^^^ //

// // for showing the sign up form
// import { useNavigate } from 'react-router-dom';

// export default function Navbar() {

//   const navigate = useNavigate(); // for showing the the sign up form


// // === variable use and function of button close and open === //
// const [nav, setNav] = useState(false)
//   // ^^^ variable use and function of button close and open ^^^ //

//     // === for login display ===//
// //  const [isShown, setIsShown] = useState(false);
//  const handleClickLogIn = () => {
//   //  setIsShown((current) => !current);
//   navigate('/mcgi-feast-portal-log-in'); 

 
//  };
//     // ^^^ for login display ^^^//

//     // === for Sign UP display ===//
//     const handleClickSignUp = (e) => {
//       e.preventDefault();
//     // path for showing the sign up form 
//     window.open('https://docs.google.com/forms/d/1RHi93Cpq3e6zWXatLa7yLFjYH-64_ZIMzfcZhWFUSMc/edit', '_blank');
//     };
//     // ^^^ for SignUp display ^^^//

    
//   return (
//     <header className={styles.HeaderNavbar}>
//       {/* === Left Part of the Header === */}
//       <img  src={mcgilogo} alt="mcgilogo" style={{height:50, width:150}}></img>

//       {/* === Center Part of the Header === */}
//     <nav>
//       <ul className={nav ? [styles.MenuNav, styles.active].join(' ') : [styles.MenuNav]}>
//       <Link to="/mcgi-feast-portal">HOME</Link>
//       <Link to="/#welcome-our-beliefs">ABOUT</Link>
//       <Link to="/#event">EVENTS</Link>
//       </ul>

//    </nav>
  
//     {/* === RightSide Part of Header === */}
//    <div className={nav ? [styles.headerDivRight, styles.active].join(' ') : [styles.headerDivRight]}>
//     <nav className={styles.headerNavRight}>
//     <ul className={styles.headerUlRight}>
//       <br />
   
//       <button type='submit' className={styles.headerLiRight} onClick={handleClickSignUp}>
//       REGISTER
//   </button>
//       <p>|</p>
//           <button type='submit' className={styles.headerLiRight} onClick={handleClickLogIn}>
//       LOG IN
//       </button>
//     </ul>
//     </nav>
//     </div>

//  {/* === Button Show When meet the maximum screen of 1024=== */}

//     <button onClick={()=> setNav(!nav)} className={styles.OpenCloseButton}  >

//       {nav ?  <FaTimes/>  :   <FaBars/> }     
//    </button>  
//   {/* ^^^ Button Show When meet the maximum screen of 1024 ^^^ */} 
//     </header>    
  
//   )
// }


import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import mcgilogo from "../assets/NavBar/mcgi-logo.png";
import Register from '../pages/HomePage/components/Register'; // Import the Register component

export default function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for modal visibility

  const handleClickLogIn = () => {
    navigate('/mcgi-feast-portal-log-in');
  };

  const handleClickSignUp = (e) => {
    e.preventDefault();
    setShowForm(true); // Show the modal when the button is clicked
  };

  const handleCloseModal = () => {
    setShowForm(false); // Hide the modal when closed
  };

  return (
    <header className={styles.HeaderNavbar}>
      <img src={mcgilogo} alt="mcgilogo" style={{ height: 50, width: 150 }} />

      <nav>
        <ul className={nav ? [styles.MenuNav, styles.active].join(' ') : [styles.MenuNav]}>
          <Link to="/mcgi-feast-portal">HOME</Link>
          <Link to="/#welcome-our-beliefs">ABOUT</Link>
          <Link to="/#event">EVENTS</Link>
        </ul>
      </nav>

      <div className={nav ? [styles.headerDivRight, styles.active].join(' ') : [styles.headerDivRight]}>
        <nav className={styles.headerNavRight}>
          <ul className={styles.headerUlRight}>
            <br />
            <button type='submit' className={styles.headerLiRight} onClick={handleClickSignUp}>
              REGISTER
            </button>
            <p>|</p>
            <button type='submit' className={styles.headerLiRight} onClick={handleClickLogIn}>
              LOG IN
            </button>
          </ul>
        </nav>
      </div>

      <button onClick={() => setNav(!nav)} className={styles.OpenCloseButton}>
        {nav ? <FaTimes /> : <FaBars />}
      </button>

      {/* Render the Register modal */}
      <Register show={showForm} onClose={handleCloseModal}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfBFrZdtH6BavnEWN2QMyRpR0lsD48Oy1O6mEUy9SS9dcLgGg/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Registration Form"
        >
          Loading…
        </iframe>
      </Register>
    </header>
  );
}