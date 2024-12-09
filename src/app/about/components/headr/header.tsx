"use client"

import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link'
import vector from "../../../../../public/images/about/Vector (6).png"
import Image from 'next/image'

function Header2() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // Corrected the logic to toggle the state properly
    };

  return (
    <div>
      <div id={styles.header}>
        <div>
          {" "}
          <h3>Bandage</h3>
        </div>
        <div id={styles.pages}>
          <ol>
            <Link href={"/about/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about/product"}>
              <li>Product</li>
            </Link>

            <Link href={"/about/pricing"}>
              <li>Pricing</li>
            </Link>
            <Link href={"/about/contect"}>
              <li>Contect</li>
            </Link>
          </ol>
        </div>
        <div id={styles.log}>
          <h2>Login</h2>
          <h3>Become a member</h3> <Image src={vector} alt="" width={20} height={20} />
        </div>
        {/* Hamburger Icon */}
        {/* <div id={styles.hidden} onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMan size={30} />
          )}
        </div> */}
        {/* Mobile Menu (Appears when hamburger is clicked) */}
        {isMenuOpen && (
          <ul id={styles.pagesMobile}>
            <li>
              <Link href={"/about"} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about/product"} onClick={toggleMenu}>
                Product
              </Link>
            </li>

            <li>
              <Link href={"/about/pricing"} onClick={toggleMenu}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href={"/about/contect"} onClick={toggleMenu}>
                Contect
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header2