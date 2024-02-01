"use client";
// HamburgerButton.tsx
import React, { FC, useState } from "react";
import styles from "./HamburgerButton.module.css";

interface HamburgerButtonProps {
  onShowNav: (bool: boolean) => void;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ onShowNav }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
    onShowNav(true);
  };

  return (
    <div
      className={`${styles.hamburgerContainer} ${
        isActive ? styles.change : ""
      }`}
      onClick={toggleHamburger}
    >
      <div className={`${styles.hamburgerBar} ${styles.bar1}`}></div>
      <div className={`${styles.hamburgerBar} ${styles.bar2}`}></div>
      <div className={`${styles.hamburgerBar} ${styles.bar3}`}></div>
    </div>
  );
};

export default HamburgerButton;
