import { FC } from "react";
import React from "react";
import styles from "./HeadingSecondary.module.css";
interface HeadingSecondaryProps {
  children: React.ReactNode;
  customStyles?: {};
  className?: String;
}
const HeadingSecondary: FC<HeadingSecondaryProps> = ({
  children,
  customStyles,
  className,
}): JSX.Element => {
  return (
    <h3
      style={customStyles}
      className={`${styles.headingSecondary} ${className ? className : ""}`}
    >
      {children}
    </h3>
  );
};
export default HeadingSecondary;
