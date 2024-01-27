import Image from "next/image";
import { FC } from "react";
import React from "react";
import styles from "./CatCard.module.css";
interface CatCardProps {
  name: string;
  dishesAvailable: number;
  image: string;
}
const CatCard: FC<CatCardProps> = ({
  name,
  image,
  dishesAvailable,
}): JSX.Element => {
  return (
    <li className={styles.catCard}>
      <div className={styles.imageBox}>
        <Image src={image} width={100} height={100} alt={name} />
      </div>
      <div className={styles.textBox}>
        <h5>{name}</h5>
        <p>({dishesAvailable} disches)</p>
      </div>
    </li>
  );
};
export default CatCard;
