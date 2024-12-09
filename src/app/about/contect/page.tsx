import styles from "./page.module.css";
import Image from "next/image";
import twitter from "../../../../public/images/contact/Vector (11).png";
import facebook from "../../../../public/images/contact/logos_facebook.png";
import instagram from "../../../../public/images/contact/Vector (13).png";
import linkdin from "../../../../public/images/contact/Vector (14).png";
import technology from "../../../../public/images/contact/technology 1.png";
import arow from "../../../../public/images/contact/Arrow 2.png";
import phone from "../../../../public/images/contact/Vector (5).png";
import location from "../../../../public/images/contact/Vector (15).png";
import email from "../../../../public/images/contact/email.png";

import React from "react";

function Contect() {
  return (
    <div id={styles.contectPage}>
      <div id={styles.contect}>
        <div id={styles.contectData}>
          <h4>CONTACT US</h4>
          <h2>Get in touch today!</h2>
          <h3>
            We know how large objects will act, but things on a small scale
          </h3>
          <h5>Phone ; +451 215 215 </h5>
          <h5>Fax : +451 215 215</h5>
          <div id={styles.socialLinks}>
            <Image src={twitter} alt="" />
            <Image src={facebook} alt="" />
            <Image src={instagram} alt="" />
            <Image src={linkdin} alt="" />
          </div>
        </div>
        <div id={styles.image}>
          <Image src={technology} alt="" width={1100} height={1100} />
        </div>
      </div>

      <div id={styles.visit}>
        <h3>VISIT OUR OFFICE</h3>
        <h2>
          We help small businesses <br /> with big ideas
        </h2>
        <div id={styles.contectStep}>
          <div className={styles.vector}>
            <Image src={phone} alt="" />
            <h5>georgia.young@example.com</h5>
            <h5>georgia.young@ple.com</h5>
            <h5>Get Support</h5>
            <button>Submit Request</button>
          </div>

          <div id={styles.location}>
            <Image src={location} alt="" />
            <h5>georgia.young@example.com</h5>
            <h5>georgia.young@ple.com</h5>
            <h5>Get Support</h5>
            <button>Submit Request</button>
          </div>

          <div className={styles.vector}>
            <Image src={email} alt="" />
            <h5>georgia.young@example.com</h5>
            <h5>georgia.young@ple.com</h5>
            <h5>Get Support</h5>
            <button>Submit Request</button>
          </div>
        </div>

        <div id={styles.arow}>
          <Image src={arow} alt="" />
          <h3>WE Can&apos;t WAIT TO MEET YOU</h3>
          <h2>Let&apos;s Talk</h2>
          <button>Try it free now</button>
        </div>
      </div>
    </div>
  );
}

export default Contect;
