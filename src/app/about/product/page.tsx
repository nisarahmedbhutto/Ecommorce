import React from "react";
import styles from "./page.module.css";
import ProductCard from "../components/product/product";
import Image from "next/image";
import unplush2 from "../../../../public/images/common/unplush (2).png";
import InnerTeam from "../components/product/innerTeamData";
import TrialData from "../components/common/trialData";

function Product() {
  return (
    <div id={styles.productPage}>
      <div id={styles.head}>
        <h3>WHAT WE DO</h3>
        <h2>Innovation tailored for you</h2>
      </div>
      <div id={styles.unplush}>
        <div>
          <Image src={unplush2} alt="" width={1200} height={1200} />
        </div>
        <div>
          <ProductCard />
        </div>
      </div>

      {/* team section */}
      <div id={styles.teamMeet}>
        <h2>Meet Our Team</h2>
        <div>
          <InnerTeam/>
        </div>
      </div>

      {/*  */}
      <div>
        <TrialData/>
      </div>
    </div>
  );
}

export default Product;
