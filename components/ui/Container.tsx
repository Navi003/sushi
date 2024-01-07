import { FC } from "react";
import React from "react";

import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: FC<ContainerProps> = ({ children }): JSX.Element => {
  console.log(styles);
  return <div className={styles.container}>{children}</div>;
};
export default Container;
