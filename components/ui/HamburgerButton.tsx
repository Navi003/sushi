"use client";
// HamburgerButton.tsx
import React, { useState } from "react";
import styles from "./HamburgerButton.module.css";

const HamburgerButton: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
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
