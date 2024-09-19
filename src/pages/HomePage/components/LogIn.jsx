import { useState, useEffect } from 'react';
import styles from '../components/LogIn.module.css';
import LogInImg from '../../../assets/login-singup/login-logo.png';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [churchid, setChurchid] = useState("");
  const [messageToRender, setMessageToRender] = useState("");
  const navigate = useNavigate();

  function handleLoginMember(e) {
    e.preventDefault();
    if (emailLogin === "" || passwordLogin === "" || churchid === "") {
      setMessageToRender("Please complete information above");
    } else {
      console.log("Login button is working!🤺");
      fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ churchId: churchid, email: emailLogin, password: passwordLogin })
      })
        .then((res) => {
          if (res.status === 401) {
            console.log("Failed!!!");
            const message = <span style={{ color: "red" }}>Your email or password or church id was incorrect</span>;
            setMessageToRender(message);
          }
          if (res.status === 200) {
            console.log("Successful!!!");
            const message = <span style={{ color: "green" }}>Login Successful</span>;
            setMessageToRender(message);
          }
          return res.json();
        });
    }
  }

  function handleChange(e) {
    if (e.target.name === "emailMember") {
      setEmailLogin(e.target.value);
    } else if (e.target.name === "passwordMember") {
      setPasswordLogin(e.target.value);
    } else if (e.target.name === "churchId") {
      setChurchid(e.target.value);
    }
  }

  const [isShown, setIsShown] = useState(true);
  const handleClickClose = () => {
    setIsShown(false);
    navigate(`/mcgi-feast-portal`);
  };

  return (
    <div>
      {isShown && (
        <div className={styles.LogInConatainerDivMRA} id="form">
          <form className={styles.LogInConatainerFormMRA}>
            <div className={styles.LogInDivMRA}>
              <img src={LogInImg} alt="LogInImg" style={{ height: 160, width: 250 }} />
              <h1 className={styles.h1LoginMRA}>Log In</h1>
              <div className={styles.inputContainerLogIn}>
                <input type="churchId" name="churchId" id="churchId" placeholder="Enter your Church ID" className={styles.inputchurchloginMRA} onChange={handleChange} />
                <br />
                <input type="emailMember" name="emailMember" id="emailMember" placeholder="Enter your email" className={styles.inputemailloginMRA} onChange={handleChange} />
                <br />
                <input type="password" name="passwordMember" id="passwordMember" placeholder="Enter your password" className={styles.inputpasswordloginMRA} onChange={handleChange} />
                <br />
                <div className={styles.loginButtonContainer}>
                  <button type="submit" name="loginMember" onClick={handleLoginMember} className={styles.LogInButtonMRA}>Log IN</button>
                </div>
              </div>
              <br />
              <div>{messageToRender}</div>
            </div>
            <button className={styles.CloseButtonMRA} onClick={handleClickClose}>X</button>
          </form>
        </div>
      )}
    </div>
  );
}