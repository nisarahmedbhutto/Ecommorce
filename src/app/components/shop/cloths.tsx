import React from 'react'
import clothData from './clothsData'
import styles from './cloths.module.css'
import Image from 'next/image'

function Cloths() {
  return (
      <div id={styles.clothCards}>
          {
              clothData.map(({image},index) => (
                  <div id={styles.cloth} key={index}>
                      <Image src={image} alt='' width={1200} height={1200}/>
                  </div>
              ))
          }
    </div>
  )
}

export default Cloths