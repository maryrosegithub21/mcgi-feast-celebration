
import { useState, useEffect } from 'react';

// === To applied the style you have to import this === //
import styles from '../components/SignUp.module.css'
// === To applied the photo you have to import this === //
import LogInImg from '../../../assets/login-singup/login-logo.png'
import Navbar from '../../../common/Navbar.jsx'
import Footer from '../../../common/Footer.jsx'





// To use link need to install npm i -D react-router-DOM
import { Link } from "react-router-dom";

//=== For showing the home page or printing 
import { useNavigate } from 'react-router-dom';




export default function LogIn() {
  const navigate = useNavigate(); // for showing the printing DashBoard of Guest when Arrive and regristrations


// =================================== for showing member or non member menu =================================== //
// =============================== for member / non-member function for SHOWING DIV ============================ //
// const [memberLogInShown, setmemberLogInShown] = useState(false)
const [nonmemberLogInShown, setnonmemberLogInShown] = useState(true)
// function handleClickMemberSignUp() {
//   setmemberLogInShown(true);
//   setMessageToRenderSignUpNonMember("");
// }
// function handleClickNonMemberSignUp (){
//   setnonmemberLogInShown(true);
//   // setMessageToRenderSignUpMember("")
// }
// useEffect(() => {
//   console.log(memberLogInShown);
//   console.log(nonmemberLogInShown);
//   if(memberLogInShown === true) {
//     // setmemberLogInShown(true)
//     setnonmemberLogInShown(false)
//   } else if (memberLogInShown === false){

//   }
  
// }, [memberLogInShown])


useEffect(() => {
  // console.log(memberLogInShown);
  console.log(nonmemberLogInShown);
  if(nonmemberLogInShown === true) {
    // setmemberLogInShown(false)
    setnonmemberLogInShown(true)
    navigate('/mcgi-feast-portal-sign-up'); 

  }  
}, [nonmemberLogInShown])

// // ^^^^^^^^^^^^^^^^^^^^^^ FOR SIGN IN AND REGISTER FUNCTION FOR Member ^^^^^^^^^^^^^^^^^^^^^ ///



// ========================= Sign Up for Member ===========================================//  
// const [nameSignUpMember, setNameSignUpMember] = useState("")
// const [emailSignUpMember, setEmailSignUpMember] = useState("")
// const [passwordSignUpMember, setPasswordSignUpMember] = useState("")
// const [confirmSignUpMember, setConfirmPasswordSignUpMember] = useState("")
// const [churchIdSignUpMember, setchurchIdSignUpMember] = useState("")
// const [messageToRenderSignUpMember, setMessageToRenderSignUpMember] = useState("")


// ==============================  Sign UP for MEMBER function ========================= //
// function handleSignUpMember(e) {
//   e.preventDefault()
//   if (nameSignUpMember === "" || emailSignUpMember === "" || passwordSignUpMember === "" || confirmSignUpMember === "" || churchIdSignUpMember === "" ){
//     setMessageToRenderSignUpMember("Please complete information above")
//    } else 
     
//       console.log("Sign Up button is working!🤺")
    
//       // Code to handle the login process
//       fetch("http://localhost:4000/api/signup-members", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({name: nameSignUpMember, email: emailSignUpMember, password: passwordSignUpMember, churchId: churchIdSignUpMember })
//         })
//       .then((res)=> {
//         if (res.status === 401 ){
//           console.log("Failed!!!")
//           const message = <span style={{color:"red"}}>Sign Up Failed</span>
//           setMessageToRenderSignUpMember(message)
//         } 
    
//         if (res.status === 200 ){

//           console.log("Successful!!!")
//           const message = <span style={{color:"green"}}>Successfully Registered</span>
//           setMessageToRenderSignUpMember(message)
        
//         } 
        
//       })
//     }


// handleChange function for Sign UP MEMBER
// function handleChangeSignUpMember(e){
//   if (e.target.name === "emailMemberSignUp"){
//     setEmailSignUpMember(e.target.value) // store the value into emailLogin state
//   } else if (e.target.name === "churchID"){
//     setchurchIdSignUpMember(e.target.value) // store the value into passwordLogin state  
//   } else if (e.target.name === "passwordMemberSignUp"){
//     setPasswordSignUpMember(e.target.value) // store the value into passwordLogin state
  
//     // for matching password confirmation and password enter
//     if(e.target.value !== confirmSignUpMember) {
//       setMessageToRenderSignUpMember("Password do not match")
//     }else 
//     setMessageToRenderSignUpMember("")

//   }else if (e.target.name === "confirmPasswordSignUp"){
//     setConfirmPasswordSignUpMember(e.target.value) // store the value into passwordLogin state  
//     // for matching password confirmation and password enter
//     if(e.target.value !== passwordSignUpMember) {
//       setMessageToRenderSignUpMember("Password do not match")
//     }else 
//     setMessageToRenderSignUpMember("")

//   } else if (e.target.name === "fullNameMemberSignUp"){
//     setNameSignUpMember(e.target.value) // store the value into name state}
//   }
// }


// === for button disabled till password enter match
// const btnProps = {};
// if (passwordSignUpMember !== confirmSignUpMember) {
//   btnProps.disabled = true;
// } else {
//   delete btnProps['disabled'];
// }



// === for button disabled and enabled for members only
// const btnPropsRegisterMember = {};
// if (passwordSignUpMember !== confirmSignUpMember) {
//   btnPropsRegisterMember.disabled = true;
// } else {
//   delete btnPropsRegisterMember['disabled'];
// }


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Sign UP for Member ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //


// ========================= Sign Up for NON MEMBER===========================================//  
const [nameSignUpNonMember, setNameSignUpNonMember] = useState("")
const [emailSignUpNonMember, setEmailSignUpNonMember] = useState("")
const [passwordSignUpNonMember, setPasswordSignUpNonMember] = useState("")
const [confirmSignUpNonMember, setConfirmSignUpNonMember] = useState("")
const [addressSignUpNonMember, setAddressSignUpNonMember] = useState("")
const [contactSignUpNonMember, setContactSignUpNonMember] = useState("")
const [religionSignUpNonMember, setReligionSignUpNonMember] = useState("")
const [newReturnSignUp, setnewReturnSignUp] = useState("")
const [genderSignUpNonMember, setGenderSignUpNonMember] = useState("")


const [messageToRenderSignUpNonMember, setMessageToRenderSignUpNonMember] = useState("")


// ==============================  Sign UP for NON MEMBER function ========================= //
function handleSignUpTeacher(e) {
  e.preventDefault()
  if (nameSignUpNonMember === "" || emailSignUpNonMember === "" || passwordSignUpNonMember === "" || addressSignUpNonMember === "" || contactSignUpNonMember === "" ||  religionSignUpNonMember === "" || newReturnSignUp === ""  || genderSignUpNonMember === ""){
    setMessageToRenderSignUpNonMember("Please complete information above")
   } else 
     
      console.log("Sign Up button is working!🤺")
    
      // Code to handle the login process
      fetch("http://localhost:4000/api/signup-guests", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: nameSignUpNonMember, contact: contactSignUpNonMember, newReturning :  newReturnSignUp, religion:religionSignUpNonMember, address: addressSignUpNonMember, gender: genderSignUpNonMember, email: emailSignUpNonMember, password: passwordSignUpNonMember})
        })
      .then((res)=> {
        if (res.status === 401 ){
          console.log("Failed!!!")
          const message = <span style={{color:"red"}}>Sign Up Failed</span>
          setMessageToRenderSignUpNonMember(message)
        } 
    
        if (res.status === 200 ){
          console.log("Successful!!!")
          const message = <span style={{color:"green"}}>Successfully Registered</span>
          setMessageToRenderSignUpNonMember(message)
        } 
        
      })
    }

// ======== handleChange function for Sign UP NON MEMBER =======
function handleChangeSignUpNonMember(e){
  if (e.target.name === "emailNonMember"){
    setEmailSignUpNonMember(e.target.value) // store the value into emailLogin state
  } else if (e.target.name === "fullNameNonMember"){
    setNameSignUpNonMember(e.target.value) // store the value into name state}
  } else if (e.target.name === "address"){
    setAddressSignUpNonMember(e.target.value) // store the value into name state}
  } else if (e.target.name === "contact"){
    setContactSignUpNonMember(e.target.value) // store the value into name state}
  } else if (e.target.name === "gender"){
    setGenderSignUpNonMember(e.target.value) // store the value into name state}
  } else if (e.target.name === "newReturning"){
    setnewReturnSignUp(e.target.value) // store the value into name state}
  } else if (e.target.name === "religion"){
    setReligionSignUpNonMember(e.target.value) // store the value into name state}
  } else if (e.target.name === "passwordNonMember"){
    setPasswordSignUpNonMember(e.target.value) // store the value into passwordLogin state

    // for matching password confirmation and password enter
    if(e.target.value !== confirmSignUpNonMember) {
      setMessageToRenderSignUpNonMember("Password do not match")
    }else 
    setMessageToRenderSignUpNonMember("")

  }else if (e.target.name === "confirmPasswordNonMember"){
    setConfirmSignUpNonMember(e.target.value) // store the value into passwordLogin state  
    // for matching password confirmation and password enter
    if(e.target.value !== passwordSignUpNonMember) {
      setMessageToRenderSignUpNonMember("Password do not match")
    }else 
    setMessageToRenderSignUpNonMember("")

  }
}

// === for button disabled till password enter match
const btnPropsNonMember = {};
if (passwordSignUpNonMember !== confirmSignUpNonMember) {
  btnPropsNonMember.disabled = true;
} else {
  delete btnPropsNonMember['disabled'];
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Sign UP for NON MEMBER ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ //


  // ============== for button close and SIGN UP===============//
const [isShown, setIsShown] = useState(true); 
const handleClickClose = () => {
  setIsShown(false);
  navigate(`/mcgi-feast-portal`);

};
// // ^^^^^^^^^^^^^^^^^^^^^^^ For button close ^^^^^^^^^^^^^^^^//


  return (
    <div>
 <Navbar/>
      {isShown && 
      
      // <div className={styles.LogInConatainerDivMRA} id="form">
      
        <form className={styles.LogInConatainerFormMRA} >
 
    
       
        <div className={styles.LogInDivMRA}>
        {/* < div className={styles.btncloDivHero} >

<button className={styles.CloseButtonMRA} onClick={handleClickClose}>X</button> 
</div> */}
        <img src={LogInImg} alt="LogInImg"  className={styles.imageSignUp}></img>
        <h1 className={styles.h1LoginMRA}>Sign Up</h1>
        {/* <div className={styles.linkDivLogInMRA}> */}
            {/* <Link {...btnPropsRegisterMember} onClick={handleClickMemberSignUp} className={styles.LogInLinkMRA}>Members</Link> */}
            {/* <Link onClick={handleClickNonMemberSignUp} className={styles.LogInLinkMRA} >Guests</Link> */}
            {/* <Link className={styles.LogInLinkMRA} >Guests</Link> */}
        {/* </div> */}


          {/* ==== MEMBER SIGN UP === */}
          {/* {memberLogInShown && 
         
         <div className={styles.inputContainerSignUp}>
          <input onChange={handleChangeSignUpMember} type="text" name="churchID" id="churchID"  placeholder="Enter your Church Id" /> 
          <br />
          <input onChange={handleChangeSignUpMember} type="text" name="fullNameMemberSignUp" id="fullNameMemberSignUp"  placeholder="Enter your full name"/> 
          <br />
          <input onChange={handleChangeSignUpMember} type="text" name="emailMemberSignUp" id="emailMemberSignUp" placeholder="Enter your email"/> 
          <br />
          <input onChange={handleChangeSignUpMember}  type="password" name="passwordMemberSignUp" placeholder="Enter your password" id="passwordMemberSignUp" />
          <br />
          <input onChange={handleChangeSignUpMember} type="password" name="confirmPasswordSignUp" id="confirmPasswordSignUp" placeholder="Confirm Password" /> 
          <br />
        
          <div className={styles.signUpButtonContainer} >
          <button {...btnProps} className={styles.SignUpButtonMemberMRA} onClick={handleSignUpMember} >SIGN UP</button>
          </div>  
          <br /> 
          <div >{messageToRenderSignUpMember}</div>
          </div>
        } */}
          {/* ^^^^ MEMBER Sign UP ^^^^ */}


         {/* ==== Non MEMBER SIGN UP ==== */}

         {nonmemberLogInShown && 
          <div className={styles.inputContainerSignUp}>
         <p>Please Enter Full Name</p> 
          <input onChange={handleChangeSignUpNonMember} type="text" name="fullNameNonMember" id="fullNameNonMember" placeholder="FULL NAME" className={styles.inputNameTeachersSignUpMRA}/> 
          <br />
         <p>Please Enter Contact Number</p> 
          <input onChange={handleChangeSignUpNonMember} type="number" name="contact" id=" contact" placeholder="CONTACT NUMBER" className={styles.inputNameTeachersSignUpMRA}/> 
          <br />
          <p>Please select if new or returning?</p>
          <div className={styles.wrapnewreturn}>
          <input onChange={handleChangeSignUpNonMember} type="radio" name="newReturning" id=" newReturning" value="New" className={styles.signUpNewReturn}/> 
          <label for="New" className={styles.signUpNewReturn}>New</label>
          </div>
          <div className={styles.wrapnewreturn}>
          <input onChange={handleChangeSignUpNonMember} type="radio" name="newReturning" id=" newReturning" value="Return" className={styles.signUpNewReturn}/> 
          <label for="Return" className={styles.signUpNewReturn}>Return</label>
          <br />
          </div>
          <br />
          <p>Please Enter Religion</p> 
         <input onChange={handleChangeSignUpNonMember} type="text" name="religion" id="religion" placeholder="RELIGION" className={styles.inputNameTeachersSignUpMRA}/> 
          <br />
         <p>Please Enter complete address</p> 
          <input onChange={handleChangeSignUpNonMember} type="text" name="address" id="address" placeholder="ADDRESS" className={styles.inputNameTeachersSignUpMRA}/> 
          <br />
         <p>Please select gender?</p> 
          <div className={styles.wrapnewreturn}>
          <input onChange={handleChangeSignUpNonMember} type="radio" name="gender" id="gender" value="Male" className={styles.inputNameTeachersSignUpMRA}/> 
          <label for="Male" className={styles.signUpNewReturn}>Male</label>
          </div>
          <div className={styles.wrapnewreturn}>
          <input onChange={handleChangeSignUpNonMember} type="radio" name="gender" id="gender" value="Female" className={styles.inputNameTeachersSignUpMRA}/> 
          <label for="Female" className={styles.signUpNewReturn}>Female</label>
          <br />
          </div>
          <div className={styles.wrapnewreturn}>
          <input onChange={handleChangeSignUpNonMember} type="radio" name="gender" id="gender" value="No Answer" className={styles.inputNameTeachersSignUpMRA}/> 
          <label for="No Answer" className={styles.signUpNewReturn}>Prefer not to answer</label>
          <br />

          </div>
          <br />
         <p>Please Enter Email Address</p> 
        <input onChange={handleChangeSignUpNonMember} type="text" name="emailNonMember" id="emailNonMember" placeholder="EMAIL" className={styles.inputEmailSignUpMRA} /> 
        <br />
        <p>Please Enter Password</p> 
        <input onChange={handleChangeSignUpNonMember} type="password" name="passwordNonMember" placeholder="PASSWORD" id="passwordNonMember" />
        <br />
        <p>Confirm Password</p> 
        <input onChange={handleChangeSignUpNonMember} type="password" name="confirmPasswordNonMember" placeholder="CONFIRM PASSWORD" id="confirmPasswordNonMember" className={styles.inputConfirmPasswordSignUpMRA}/> 
        <br />
        <div className={styles.signUpButtonContainer} >
        <button {...btnPropsNonMember} className={styles.SignUpButtonTeacherMRA} onClick={handleSignUpTeacher}>SIGN UP</button>
        </div>
        </div>
         }
        <br /> 
        <div >{messageToRenderSignUpNonMember}</div>
         
        {/* ^^^^^ NON MEMBER SIGN UP ^^^^^ */}
        </div>
        </form>
      //  </div>
       }
      <Footer/>

    </div>
  )
}
