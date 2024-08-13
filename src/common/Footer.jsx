import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.footerH3MRA}>Contact Us</h3>
          
          <ul>
            <li href ="mailto: info@mcgi.org.nz" className={styles.footerList} >info@mcgi.org.nz</li>
            <li className={styles.footerList}>+64274380184</li>
            <li className={styles.footerList}>35 Acheron Drive, Riccarton, Christchurch 8041</li>
          </ul>
         
        </div>

        <div>
          <h3 className={styles.footerH3MRA}>Our Website</h3>
          <ul>
            <li className={styles.footerList}>Legal information</li>
            <li className={styles.footerList}>Privacy information</li>
            <li className={styles.footerList}>Developed by Engaging Partners</li>
          <li>©2024 Marketing Association | All right reserved</li>

          </ul>
          <br />

        </div>

        <div>
          <h3 className={styles.footerH3MRA}>Connect With Us</h3>

          <ul>
            <li className={styles.footerList}> Facebook</li>
            <li className={styles.footerList}>Instagram</li>
            <li className={styles.footerList}>Youtube</li>
            <li className={styles.footerList}>Email</li>
            <li className={styles.footerList}>Twitter</li>
          </ul>
        </div>

       
        
      </div>
    </div>
  );
}
