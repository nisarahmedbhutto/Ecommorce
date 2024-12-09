import productData from "./productData";
import Image from "next/image";
import styles from "./product.module.css"

import React from 'react'

function ProductCard() {
  return (
    <div id={styles.card}>
      {productData.map(({ image }, index) => (
        <div key={index}>
          <Image src={image} alt="" width={1200} height={1200} />
        </div>
      ))}
    </div>
  );
}

export default ProductCard