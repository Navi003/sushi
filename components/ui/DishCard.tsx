import { FC } from "react";
import React from "react";
import styles from "./DishCard.module.css";
import Image from "next/image";

interface DishCardProps {}
const DishCard: FC<DishCardProps> = (): JSX.Element => {
  return (
    <div className={styles.dishCard}>
      <Image
        src="/sushi-salad-1.png"
        width={200}
        height={200}
        alt="best-dish"
      />

      <div className={styles.dishCardText}>
        <h3>Best Sushi Salad</h3>
        <p>Description of the item</p>
      </div>
      <div className={styles.dishCardPrice}>
        <p>$10.00</p>
        <div>4.9</div>
      </div>
    </div>
  );
};
export default DishCard;
