import { FC } from "react";
import React from "react";
import HeadingSecondary from "../ui/HeadingSecondary";

import styles from "./PopularCat.module.css";
import CatCard from "../ui/CatCard";
import { categories } from "@/data/data";

interface PopularCatProps {}
const PopularCat: FC<PopularCatProps> = (): JSX.Element => {
  return (
    <section
      id="#popularCat"
      className={styles.popularityCat}
      style={{
        marginBottom: "18rem",
      }}
    >
      <div className={styles.headingBox}>
        <HeadingSecondary customStyles={{ textAlign: "center" }}>
          CUSTOMER FAVORITES
        </HeadingSecondary>
        <h2 className={styles.headingTers}>Popular Categories</h2>
      </div>

      <ul className={styles.cardContainer}>
        {categories.map((dish) => {
          return (
            <CatCard
              dishesAvailable={dish.quantity}
              name={dish.name}
              image={dish.image}
              key={dish.name}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default PopularCat;
