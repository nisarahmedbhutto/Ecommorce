import brandData from "./brandsData";
import Image from "next/image";
import styles from "./brand.module.css";


import React from 'react'

function Brand() {
  return (
    <div id={styles.brandLogo}>
      {brandData.map(({ image }, index) => (
        <div id={styles.logo} key={index}>
          <Image src={image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Brand