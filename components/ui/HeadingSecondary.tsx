import { FC } from "react";
import React from "react";
import styles from "./HeadingSecondary.module.css";
interface HeadingSecondaryProps {
  children: React.ReactNode;
  customStyles?: {};
}
const HeadingSecondary: FC<HeadingSecondaryProps> = ({
  children,
  customStyles,
}): JSX.Element => {
  return (
    <h3 style={customStyles} className={styles.headingSecondary}>
      {children}
    </h3>
  );
};
export default HeadingSecondary;
