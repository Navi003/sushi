import { FC } from "react";
import React from "react";
import styles from "./DishCard.module.css";
import Image from "next/image";

interface DishCardProps {
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string;
}
const DishCard: FC<DishCardProps> = ({
  name,
  price,
  rating,
  description,
  image,
}): JSX.Element => {
  return (
    <div className={styles.dishCard}>
      <Image src={image} width={200} height={200} alt={name} />

      <div className={styles.dishCardText}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.dishCardPrice}>
        <p>${price}</p>
        <div>{rating}</div>
      </div>
    </div>
  );
};
export default DishCard;
