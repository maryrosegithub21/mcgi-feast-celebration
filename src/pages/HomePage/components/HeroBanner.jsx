// === To applied the style you have to import this === //
import styles from '../components/HeroBanner.module.css'
// === To applied the style you have to import this === //


// for showing the sign up form
import { useNavigate } from 'react-router-dom';


export default function HeroBanner() {
  const navigate = useNavigate(); // for showing the the sign up form

// Handle form submission logic here
const handleClicksignUpHero = (e) => {
  e.preventDefault();
// path for showing the sign up form 
  navigate('/mcgi-brethren-day-nz-signup'); 
};
  return (
  < div className={styles.parentContainerHeroMRA}>   
  < div className={styles.btnSignUpDivHero} >
  <button type='submit' className={styles.SignUpButtonHeroMRA} onClick={handleClicksignUpHero}>
    REGISTER NOW
  </button>
  <p className={styles.HeroBanH5MRA}>The Feast Dedicated to God is available quarterly. </p>
  </div>
  </div>
   
  )
}
