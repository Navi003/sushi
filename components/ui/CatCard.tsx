import Image from "next/image";
import { FC } from "react";
import React from "react";
import styles from "./CatCard.module.css";
interface CatCardProps {}
const CatCard: FC<CatCardProps> = (): JSX.Element => {
  return (
    <li className={styles.catCard}>
      <div className={styles.imageBox}>
        <Image
          src="/main-dish.png"
          width={100}
          height={100}
          alt="main-disch image"
        />
      </div>
      <div className={styles.textBox}>
        <h5>Main Dish</h5>
        <p>(86 disches)</p>
      </div>
    </li>
  );
};
export default CatCard;
