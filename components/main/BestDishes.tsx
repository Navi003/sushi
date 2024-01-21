import { FC } from "react";
import React from "react";
import HeadingSecondary from "../ui/HeadingSecondary";
import styles from "./BesDishes.module.css";
import DishCard from "../ui/DishCard";
interface BestDishesProps {}
const BestDishes: FC<BestDishesProps> = (): JSX.Element => {
  return (
    <section className={styles.sectionBestDishes}>
      <div className={styles.headingBox}>
        <HeadingSecondary>Special Dishes</HeadingSecondary>
        <h2 className={styles.headingText}>Best Dishes From Our Menu</h2>
      </div>
      <div className={styles.bestDishes}>
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </section>
  );
};
export default BestDishes;
