import React from 'react'
import styles from './footer.module.css'
import twitter from "../../../../public/images/about/twitter.png"
import facebook from "../../../../public/images/about/facebook.png";
import instagram from "../../../../public/images/about/intagram.png";
import Image from 'next/image';

function Footer() {
  return (
    <div>
      <div id={styles.footer}>
        <div id={styles.bandage}>
          <h2>Bandage</h2>
          <div id={styles.links}>
            <Image src={facebook} alt="" />
            <Image src={instagram} alt="" />
            <Image src={twitter} alt="" />
          </div>
        </div>
        <hr id={styles.line} />
        <div id={styles.footerSection}>
          <div className={styles.footerData}>
            <h2>Company Info</h2>
            <h3>About Us</h3>
            <h3>Carrier</h3>
            <h3>We are hiring</h3>
            <h3>Blog</h3>
          </div>
          <div className={styles.footerData}>
            <h2>Legal</h2>
            <h3>About Us</h3>
            <h3>Carrier</h3>
            <h3>We are hiring</h3>
            <h3>Blog</h3>
          </div>
          <div className={styles.footerData}>
            <h2>Features</h2>
            <h3>Business Marketing</h3>
            <h3>User Analytic</h3>
            <h3>Live Chat</h3>
            <h3>Unlimited Support</h3>
          </div>
          <div className={styles.footerData}>
            <h2>Resources</h2>
            <h3>Business Marketing</h3>
            <h3>Watch a Demo</h3>
            <h3>Live Chat</h3>
            <h3>API</h3>
          </div>
          <div id={styles.footerdata}>
            <h2>Get In Touch</h2>
            <div>
              <input type="text" placeholder='Enter Your Eamil'/>
              <button>Subscribe</button>
            </div>
            <h3>Lore imp sum dolor Amit</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer