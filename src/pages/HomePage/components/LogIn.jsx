import { useState, useEffect } from 'react';

// === To applied the style you have to import this === //
import styles from '../components/LogIn.module.css'
// === To applied the style you have to import this === //
import LogInImg from '../../../assets/login-singup/login-logo.png'


// To use link need to install npm i -D react-router-DOM
import { Link } from "react-router-dom";

//=== For showing the home page or printing 
import { useNavigate } from 'react-router-dom';


export default function LogIn() {
  
// // ================================================= Log in for MEMBER ==========================================//  
  const [emailLogin, setEmailLogin] = useState("")
  const [passwordLogin, setPasswordLogin] = useState("")
  const [churchid, setChurchid] = useState("")
  const [messageToRender, setMessageToRender] = useState("")

  const navigate = useNavigate(); // for showing the printing DashBoard of Guest when Arrive

//   // Login Member function
  function handleLoginMember(e) {
    e.preventDefault()

    if (emailLogin === "" || passwordLogin === "" || churchid === "" ){
      setMessageToRender("Please complete information above")
     } else 

    console.log("Login button is working!🤺")

    // Code to handle the login process
    fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({churchId: churchid, email: emailLogin, password: passwordLogin})
      })
    .then((res)=> {
      if (res.status === 401 ){
        console.log("Failed!!!")
        const message = <span style={{color:"red"}}>Your email or password or church id was incorrect</span>
        setMessageToRender(message) 
      } 

      if (res.status === 200 ){
        console.log("Successful!!!")
        const message = <span style={{color:"green"}}>Login Successfull</span>
        setMessageToRender(message)
        // setIsShown(false)
        
      } 
      return res.json()
    })

  }

  // handleChange function for log in member
  function handleChange(e){
    if (e.target.name === "emailMember"){
      setEmailLogin(e.target.value) // store the value into emailLogin state
    } else if (e.target.name === "passwordMember"){
      setPasswordLogin(e.target.value) // store the value into passwordLogin state
    }  else if (e.target.name === "churchId"){
      setChurchid(e.target.value) // store the value into passwordLogin state
    }
  }
// // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Log in for Member ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //


// ============= Login NON Member function =========//
const [emailLoginNonMember, setemailLoginNonMember] = useState("")
const [passwordLoginNonMember, setpasswordLoginNonMember] = useState("")
const [messageToRenderNonMember, setmessageToRenderNonMember] = useState("")


function handleLoginNonMember(e) {
    e.preventDefault()

    if (emailLoginNonMember === "" || passwordLoginNonMember){
      setmessageToRenderNonMember("Please complete information above")
     } else 

    console.log("Login button is working!🤺")

    // Code to handle the login process
    fetch("http://localhost:4000/api/login-guests", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email: emailLoginNonMember, password: passwordLoginNonMember})
      })
    .then((res)=> {
      if (res.status === 401 ){
        console.log("Failed!!!")
        const message = <span style={{color:"red"}}>Your email or password was incorrect</span>
        setmessageToRenderNonMember(message) 
      } 

      if (res.status === 200 ){
        console.log("Successful!!!")
        const message = <span style={{color:"green"}}>Login Successfull</span>
        setmessageToRenderNonMember(message)
        // setIsShown(false)
        
      } 
      return res.json()
    })

  }

// handleChange function for log in non member
function handleChangeNonMember(e){
  if (e.target.name === "emailGuests"){
    setemailLoginNonMember(e.target.value) // store the value into emailLogin state
  } else if (e.target.name === "passwordGuests"){
    setpasswordLoginNonMember(e.target.value) // store the value into passwordLogin state
  } 
  
}
// // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Log in for NON Member ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //





// // ========================= Log In for Guest ===========================================//  
// const [messageToRenderLogInNonMember, setmessageToRenderLogInNonMember] = useState("")



// =================================== for showing member or non member menu =================================== //
// =============================== for member / non-member function for SHOWING DIV ============================ //
const [memberLogInShown, setmemberLogInShown] = useState(true)
const [nonmemberLogInShown, setnonmemberLogInShown] = useState(false)
function handleClickMemberLogIn() {
  setmemberLogInShown(true); 
  setmessageToRenderNonMember("");
  setMessageToRender("");
}
function handleClickNonMemberLogIn (){
  setnonmemberLogInShown(true);
  setmessageToRenderNonMember("");
  setMessageToRender("");
}
useEffect(() => {
  console.log(memberLogInShown);
  console.log(nonmemberLogInShown);
  if(memberLogInShown === true) {
    setmemberLogInShown(true)
    setnonmemberLogInShown(false)
  } else if (memberLogInShown === false){
    setMessageToRender(false);
  }
  
}, [memberLogInShown])


useEffect(() => {
  console.log(memberLogInShown);
  console.log(nonmemberLogInShown);
  if(nonmemberLogInShown === true) {
    setmemberLogInShown(false)
    setnonmemberLogInShown(true)
  }  
}, [nonmemberLogInShown])

// // ^^^^^^^^^^^^^^^^^^^^^^ FOR SIGN IN FUNCTION FOR MEMBER ^^^^^^^^^^^^^^^^^^^^^ ///


  // ============== for button close and log in===============//
const [isShown, setIsShown] = useState(true); 
const handleClickClose = () => {
  setIsShown(false);
  navigate(`/MCGI-BRETHREN-DAY-NZ`);
};
// // ^^^^^^^^^^^^^^^^^^^^^^^ For button close ^^^^^^^^^^^^^^^^//


  return (
    <div>

      {isShown && 
      <div className={styles.LogInConatainerDivMRA} id="form">
     
        <form className={styles.LogInConatainerFormMRA} >
       
        <div className={styles.LogInDivMRA}>
        <img src={LogInImg} alt="LogInImg" style={{height:160, width:250}}></img>
        <h1 className={styles.h1LoginMRA}>Log In</h1>
        <div className={styles.linkDivLogInMRA}>
            <Link onClick={handleClickMemberLogIn} className={styles.LogInLinkMRA}>Members</Link>
            <Link onClick={handleClickNonMemberLogIn} className={styles.LogInLinkMRA} >Guests</Link>
        </div>


          {/* ==== MEMBER LOG IN === */}
          {memberLogInShown && 
          < div className={styles.inputContainerLogIn}>
          <input type="churchId" name="churchId" id="churchId" placeholder="Enter your Church ID" className={styles.inputchurchloginMRA} onChange={handleChange}/> 
          <br />
        <input type="emailMember" name="emailMember" id="emailMember" placeholder="Enter your email" className={styles.inputemailloginMRA} onChange={handleChange}/> 
        <br />
        <input type="password" name="passwordMember" id="passwordMember" placeholder="Enter your password" className={styles.inputpasswordloginMRA}  onChange={handleChange}/>
        <br />
        <div className={styles.loginButtonContainer}>
        <button  type="submit" name="loginMember" onClick={handleLoginMember} className={styles.LogInButtonMRA}>Log IN</button>
        </div>
        </div>
        }
        <br />
        <div >{messageToRender}</div>
          {/* ^^^^ MEMBER LOG IN ^^^^ */}


         {/* ==== Non MEMBER LOG IN ==== */}
         {nonmemberLogInShown && 
          < div className={styles.inputContainerLogIn}>
        <input type="email" name="emailGuests" id="emailGuests" placeholder="Enter your email" className={styles.inputemailloginMRA} onChange={handleChangeNonMember}/> 
        <br />
        <input type="password" name="passwordGuests" id="passwordGuests" placeholder="Enter your password" className={styles.inputpasswordloginMRA}  onChange={handleChangeNonMember}/>
        <br />
        <div className={styles.loginButtonContainer}>
        <button  type="submit" name="loginGuests" onClick={handleLoginNonMember} className={styles.LogInButtonMRA}>LOG IN</button>
        </div>
        </div>
        }
        <br />
        <div >{messageToRenderNonMember}</div>
      
        {/* ^^^^^ MEMBER LOG IN ^^^^^ */}
        </div>
          <button className={styles.CloseButtonMRA} onClick={handleClickClose}>X</button>  
        </form>
       </div>
       }
    </div>
  )
}
