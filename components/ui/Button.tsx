import { FC } from "react";
import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
}
const Button: FC<ButtonProps> = ({ children }): JSX.Element => {
  return <div className={styles.button}>{children}</div>;
};
export default Button;
