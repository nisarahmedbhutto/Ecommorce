import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import technology from "../../../public/images/about/technology 1.png";
import Team from "../components/about/innerTeam";
import Brand from "../components/common/brand";
import unplush from "../../../public/images/about/unsplash_vjMgqUkS8q8.png";
import filter from "../../../public/images/about/filter.png";

function About() {
  return (
    <div id={styles.aboutpage}>
      <div id={styles.about}>
        <div id={styles.content}>
          <h3>ABOUT COMPANY</h3>
          <h2>ABOUT US</h2>
          <h4>
            We know how large objects will act, but things on a small scale
          </h4>
          <div>
            <h5>Get Quote Now</h5>
          </div>
        </div>
        <div id={styles.image}>
          <Image src={technology} alt="" width={1200} height={1200} />
        </div>
      </div>

      {/* problem section */}
      <div id={styles.problem}>
        <div>
          <h2>Problems trying</h2>
          <h3>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div>
          <h4>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </h4>
        </div>
      </div>

      {/* treding section */}
      <div id={styles.trendingContenor}>
        <div>
          <h1 className={styles.treding}>15K</h1>
          <h3 className={styles.category}>Happy Customers</h3>
        </div>
        <div>
          <h1 className={styles.treding}>150K</h1>
          <h3 className={styles.category}>Monthly Visitors</h3>
        </div>
        <div>
          <h1 className={styles.treding}>15</h1>
          <h3 className={styles.category}>Countries Worldwide</h3>
        </div>
        <div>
          <h1 className={styles.treding}>100+</h1>
          <h3 className={styles.category}>Top Partners</h3>
        </div>
      </div>

      {/* video section */}
      <div id={styles.video}>
        <Image src={filter} alt="" />
      </div>

      {/* team section */}
      <div id={styles.team}>
        <div>
          <h2>Meet Our Team</h2>
          <h4>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </h4>
        </div>
        <div>
          <Team />
        </div>
      </div>

      {/*  */}
      <div id={styles.compare}>
        <h1>Big Companies Are Here</h1>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* brand section */}
      <div>
        <Brand />
      </div>

      {/* banner section */}
      <div id={styles.lastBanner}>
        <div id={styles.bannerContent}>
          <h2>WORK WITH US</h2>
          <h3>Now Let’s grow Yours</h3>
          <p>
            The gradual accumulation of information about atomic <br />
            and small-scale behavior during the first quarter of the 20th
          </p>
          <button>Button</button>
        </div>
        <div>
          <Image src={unplush} alt="" width={1200} height={1200} />
        </div>
      </div>
    </div>
  );
}

export default About;
