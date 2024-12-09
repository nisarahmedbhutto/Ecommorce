import React from 'react'
import trialData from './trialDataCard';
import Image from 'next/image'; 
import styles from "./trialData.module.css"

function TrialData() {
  return (
    <div>
      <div id={styles.trial}>
        <h2>Start your 14 days free trial</h2>
        <h5>
          Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met
          sent. RELIT official consequent.
        </h5>
        <button>Try it free now</button>
        <div>
          {trialData.map(({ twitter, facebook, instagram, linkdin }, index) => (
            <div id={styles.links} key={index}>
              <Image src={twitter} alt="" />
              <Image src={facebook} alt="" />
              <Image src={instagram} alt="" />
              <Image src={linkdin} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrialData