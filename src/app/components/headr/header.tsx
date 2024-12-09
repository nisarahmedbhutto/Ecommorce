"use client"

import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import downArow from "../../../../public/images/home/downArow.png";
import user from "../../../../public/images/home/user.png";
import search from "../../../../public/images/home/search.png";
import favorite from "../../../../public/images/home/favorite.png";
import cart from "../../../../public/images/home/cart.png";
import phone from "../../../../public/images/home/phone.png";
import email from "../../../../public/images/home/email.png";
import instagram from "../../../../public/images/home/instagram.png";
import youtube from "../../../../public/images/home/youtube.png";
import facebook from "../../../../public/images/home/facebook.png";
import twitter from "../../../../public/images/home/twitter.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id={styles.headerFirst}>
      <div id={styles.topHeader}>
        <div id={styles.phone}>
          <Image src={phone} alt="" /> <span>(225) 555-0118</span>
          <Image src={email} alt="" /> <span>michelle.revera@example.com</span>
        </div>
        <div id={styles.title}>
          <h4>Follow Us and get a chance to win 80% off</h4>
        </div>
        <div id={styles.linkIcon}>
          <span>Follow Us :</span>
          <Image src={instagram} alt="" />
          <Image src={youtube} alt="" />
          <Image src={facebook} alt="" />
          <Image src={twitter} alt="" />
        </div>
      </div>
      <div id={styles.header}>
        <div>
          <h3>Bandage</h3>
        </div>
        <div id={styles.pages}>
          <ol>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/shop"}>
              <li>Shop</li>
            </Link>
            <Link href={""}>
              <li>
                <Image src={downArow} alt="arrow" />
              </li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/blog"}>
              <li>Blog</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
            <Link href={"/pages"}>
              <li>Pages</li>
            </Link>
          </ol>
        </div>
        {/* Hamburger Icon */}
        <div id={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.line} ${isMenuOpen ? styles.open : ""}`} />
          <div className={`${styles.line} ${isMenuOpen ? styles.open : ""}`} />
          <div className={`${styles.line} ${isMenuOpen ? styles.open : ""}`} />
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul id={styles.pagesMobile}>
            <li onClick={toggleMenu}>
              <Link href={"/"}>Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href={""}>
                <Image src={downArow} alt="arrow" />
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href={"/about"}>About</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link href={"/pages"}>Pages</Link>
            </li>
          </ul>
        )}
        <div id={styles.icons}>
          <div id={styles.search}>
            <Image src={user} alt="user" />
            <h6>Login / Register</h6>
          </div>
          <div>
            <Image src={search} alt="search" />
          </div>
          <div>
            <Image src={cart} alt="cart" />
          </div>
          <div>
            <Image src={favorite} alt="favorite" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
