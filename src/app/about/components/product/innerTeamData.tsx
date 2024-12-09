import React from 'react'
import Image from 'next/image'
import teamData from './innerTeam';
import styles from "./innerTeamData.module.css"


function InnerTeam() {
  return (
    <div id={styles.teamCard}>
      {teamData.map(({ image, instagram, facebook, twitter }, index) => (
        <div id={styles.team} key={index}>
          <Image src={image} alt="" id={styles.img} width={1200} height={1200} />
          <h3>userName</h3>
          <h2>Profession</h2>

          <div id={styles.social}>
            <Image src={facebook} alt="" width={20} height={20} />
            <Image src={instagram} alt="" width={20} height={20} />
            <Image src={twitter} alt="" width={20} height={20} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default InnerTeam