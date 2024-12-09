import styles from "./feature.module.css"
import Image from "next/image"
import featureData from "./features";

import React from 'react'

function Feature() {
  return (
    <div id={styles.featureCardsContenor}>
      {featureData.map(
        (
          {
            image,
            newData,
            google,
            heading,
            time,
            treding,
            comments,
            discreption,
            more,
          },
          index
        ) => (
          <div id={styles.featureCards} key={index}>
            <div id={styles.cardImage}>
              <Image src={image} alt="image" width={1200} height={1200} />
            </div>
            <div id={styles.content}>
              <div id={styles.google}>
                <h3 id={styles.googleColor}>{google}</h3>
                <h3>{treding}</h3>
                <h3>{newData}</h3>
              </div>
              <div id={styles.headPara}>
                <h2>{heading}</h2>
                <p>{discreption}</p>
              </div>
              <div id={styles.timeComm}>
                <div>
                  <Image src={time} alt="" /> <span>22 April 2021</span>
                </div>
                <div>
                  <Image src={comments} alt="" /> <span>10 comments</span>
                </div>
              </div>
              <span>{more}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Feature