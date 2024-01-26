import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import Image from "next/image";
import styles from "./Header.module.css";
import Button from "../ui/Button";
import HamburgerButton from "../ui/HamburgerButton";

function Header() {
  return (
    <header className={styles.mainHeader}>
      <nav className={styles.mainNav}>
        <div className={styles.logoMobNav}>
          <Logo />
          <HamburgerButton />
        </div>
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
        <div className={styles.cta}>
          <form className={styles.form}>
            <input placeholder="Search" className={styles.inputSearch} />
          </form>
          <div className={styles.cartBox}>
            <div>
              <Image src="/cart.png" width={35} height={35} alt="cart" />
            </div>
            <Button>contact</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
