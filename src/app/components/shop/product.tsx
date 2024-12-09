import Image from "next/image"
import styles from "./product.module.css"
import productData from "./productData"

import React from 'react'

function ProductCard() {
  return (
    <div id={styles.productCards}>
      

      {productData.map(({ image, title, discreption, price }, index) => (
        <div id={styles.product} key={index}>
          <Image src={image} alt="" width={1200} height={1200} />
          <h3>{title}</h3>
          <h4>{discreption}</h4>

          <h3>{price}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProductCard