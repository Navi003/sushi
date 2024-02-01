"use client";

import { FC } from "react";
import React from "react";
import styles from "./MobileNav.module.css";
import Link from "next/link";

interface MobileNavProps {
  className?: string;
  showNav: boolean;
  setShowNav: (state: boolean) => void;
}
const MobileNav: FC<MobileNavProps> = ({
  className,
  showNav,
  setShowNav,
}): JSX.Element => {
  return (
    <nav
      className={`${styles.mobileNav} ${className ? className : ""} ${
        !showNav && styles.hidden
      }`}
    >
      <div className={styles.close} onClick={(e) => setShowNav(false)}></div>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#popularCat">Menu</Link>
        </li>

        <li>
          <Link href="#aboutus">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="#bestDishes">Offers</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MobileNav;
