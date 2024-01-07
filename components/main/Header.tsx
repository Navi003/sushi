import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";

import styles from "./Header.module.css";
import Button from "../ui/Button";

function Header() {
  return (
    <header className={styles.mainHeader}>
      <nav className={styles.mainNav}>
        <Logo />
        <ul className={styles.navList}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>

          <li>
            <Link href="/aboutus">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/offers">Offers</Link>
          </li>
        </ul>
        <div className={styles.cta}>
          <div>Search</div>
          <div>cart</div>
          <Button>contact</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
