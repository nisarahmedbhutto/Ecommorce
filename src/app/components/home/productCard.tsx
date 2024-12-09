import React from 'react'
import styles from "./productCard.module.css";
import { productCard } from './productCardData';
import Image from 'next/image';

function ProductCard() {
  return (
    <div id={styles.cardContenor}>
      {productCard.map(
        ({ image, title, prices, category, newPrices }, index) => (
          <div id={styles.card} key={index}>
            <Image src={image} alt="image" width={1200} height={1200} />
            <h5>{title}</h5>
            <p>{category}</p>
            <div id={styles.priceSet}>
                      <span id={styles.oldprice}>{prices}</span>
                      
              <span id={styles.newprice}>{newPrices}</span>
            </div>
            <div id={styles.color}>
              <div className={styles.colorsItem} id={styles.one}></div>
              <div className={styles.colorsItem} id={styles.two}></div>
              <div className={styles.colorsItem} id={styles.three}></div>
              <div className={styles.colorsItem} id={styles.four}></div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default ProductCard