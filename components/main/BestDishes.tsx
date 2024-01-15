import { FC } from "react";
import React from "react";
import HeadingSecondary from "../ui/HeadingSecondary";
import styles from "./BesDishes.module.css";
interface BestDishesProps {}
const BestDishes: FC<BestDishesProps> = (): JSX.Element => {
  return (
    <section>
      <div className={styles.headingBox}>
        <HeadingSecondary>Special Dishes</HeadingSecondary>
        <h2 className={styles.headingTers}>Best Dishes From Our Menu</h2>
      </div>
    </section>
  );
};
export default BestDishes;
