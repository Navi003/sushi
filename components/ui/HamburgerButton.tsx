"use client";
// HamburgerButton.tsx
import React, { FC, useState } from "react";
import styles from "./HamburgerButton.module.css";

interface HamburgerButtonProps {
  onShowNav: any;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ onShowNav }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
    onShowNav((bool: any) => !bool);
  };

  return (
    <div
      style={{
        zIndex: "1000",
      }}
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
