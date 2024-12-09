import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link';
import Image from 'next/image';
import vector7 from '../../../../public/images/common/Vector (7).png'
import vector9 from '../../../../public/images/common/Vector (9).png'
import TrialData from '../components/common/trialData';
import Brand from '@/app/components/common/brand';

function Pricing() {
  return (
    <div id={styles.pricingPage}>
      <div id={styles.pricing}>
        <h3>PRICING</h3>
        <h2>Simple Pricing</h2>
        <div id={styles.vector}>
          <Link href={"/about/"}>Home</Link>
          <Image src={vector7} alt="" />
          <Link href={"/about/pricing"}>Pricing</Link>
        </div>
      </div>

      {/* monthly section card */}
      <div id={styles.monthly}>
        <h2>Pricing</h2>
        <h3>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </h3>
        <div id={styles.icon}>
          <h6>Monthly</h6>
          <div id={styles.arow}>
            <h1></h1>
          </div>
          <h6>Yearly</h6>
          <h5>Save 25%</h5>
        </div>
      </div>

      {/* pricing save card */}
      <div id={styles.pricingSave}>
        <div id={styles.inner}>
          <h2>FREE</h2>
          <h4>
            Organize across all <br /> apps by hand
          </h4>
          <h3>
            0 <sup>$</sup> Per Month
          </h3>
          <div id={styles.innerSave}>
            <h6>
              <Image src={vector9} alt="" />{" "}
            </h6>{" "}
            <h5>Unlimited product updates</h5>
          </div>
        </div>
        <div id={styles.inner2}>
          <h2>STANDARD</h2>
          <h4>
            Organize across all <br /> apps by hand
          </h4>
          <h3>
            0 <sup>$</sup> Per Month
          </h3>
          <div id={styles.innerSave}>
            <h6>
              <Image src={vector9} alt="" />{" "}
            </h6>{" "}
            <h5>Unlimited product updates</h5>
          </div>
          <div id={styles.innerSave}>
            <h6>
              <Image src={vector9} alt="" />{" "}
            </h6>{" "}
            <h5>Unlimited product updates</h5>
          </div>
        </div>
        <div id={styles.inner}>
          <h2>PREMIUM</h2>
          <h4>
            Organize across all <br /> apps by hand
          </h4>
          <h3>
            0 <sup>$</sup> Per Month
          </h3>
          <div id={styles.innerSave}>
            <h6>
              <Image src={vector9} alt="" />{" "}
            </h6>{" "}
            <h5>Unlimited product updates</h5>
          </div>
        </div>
      </div>

      {/* big component  */}
      <div id={styles.big}>
        <h3>Trusted By Over 4000 Big Companies</h3>

        <Brand />
      </div>

      {/* pricing faqs */}
      <div id={styles.faqs}>
        <h2>Pricing FAQs</h2>
        <div id={styles.faqsData}>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
          <div>
            <Image
              src={vector7}
              alt="Greater Than Icon"
              width={20}
              height={20}
              className={styles.redIcon}
            />{" "}
            <h3>the quick fox jumps over the lazy dog</h3>
            <h4>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h4>
          </div>
        </div>
        <h4>Haven t got your answer? Contact our support</h4>
      </div>

      {/* trial section */}
      <div>
        <TrialData/>
      </div>
    </div>
  );
}

export default Pricing