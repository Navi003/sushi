import Image from "next/image";
import { FC } from "react";
import React from "react";

import styles from "./Ratingcard.module.css";

interface RatingCardProps {}
const RatingCard: FC<RatingCardProps> = (): JSX.Element => {
  return (
    <div className={styles.ratingCardBox}>
      <div>
        <Image
          src="/sushi-on-wood.png"
          alt="sushi-on-wood"
          width={70}
          height={70}
        />
      </div>
      <div>
        <h3>Makizushi</h3>
        <div>❇️❇️❇️❇️</div>
        <p>180€</p>
      </div>
    </div>
  );
};
export default RatingCard;
