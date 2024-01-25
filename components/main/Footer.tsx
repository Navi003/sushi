import { FC } from "react";
import React from "react";
import styles from "./Footer.module.css";
import Logo from "../ui/Logo";
import ListItem from "../ui/ListItem";
interface FooterProps {}
const Footer: FC<FooterProps> = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBox}>
          <Logo />
          <p className={styles.footerText}>
            Savor the artistry where <br /> every dish is a culinary masterpiece
          </p>
        </div>
        <div className={styles.footerBox}>
          <h3>Useful links</h3>
          <ul>
            <ListItem href="/">About Us</ListItem>
            <ListItem href="/">Event</ListItem>
            <ListItem href="/">Blog</ListItem>
            <ListItem href="/">FAQ</ListItem>
          </ul>
        </div>
        <div className={styles.footerBox}>
          <h3>Main Menu</h3>
          <ul>
            <ListItem href="/">About Us</ListItem>
            <ListItem href="/">Event</ListItem>
            <ListItem href="/">Blog</ListItem>
            <ListItem href="/">FAQ</ListItem>
          </ul>
        </div>
        <div className={styles.footerBox}>
          <h3>Contact us</h3>
          <p className={styles.footerContact}>Example@gmail.com</p>
          <p className={styles.footerContact}>+64 958 248 966</p>
          <p className={styles.footerContact}>Social media</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
