import { FC } from "react";
import React from "react";
import HeadingSecondary from "../ui/HeadingSecondary";
import styles from "./BesDishes.module.css";
import DishCard from "../ui/DishCard";
import { bestDishes } from "@/data/data";
interface BestDishesProps {}
const BestDishes: FC<BestDishesProps> = (): JSX.Element => {
  return (
    <section id="bestDishes" className={styles.sectionBestDishes}>
      <div className={styles.headingBox}>
        <HeadingSecondary>Special Dishes</HeadingSecondary>
        <h2 className={styles.headingText}>Best Dishes From Our Menu</h2>
      </div>
      <div className={styles.bestDishes}>
        {bestDishes.map((dish) => {
          return (
            <DishCard
              rating={dish.rating}
              description={dish.description}
              price={dish.price}
              name={dish.name}
              image={dish.image}
              key={dish.name}
            />
          );
        })}
      </div>
    </section>
  );
};
export default BestDishes;
