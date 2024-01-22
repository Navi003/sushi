import { FC } from "react";
import React from "react";
import Image from "next/image";
import styles from "./StoryCard.module.css";
interface StoryCardProps {}
const StoryCard: FC<StoryCardProps> = (): JSX.Element => {
  return (
    <div className={styles.storyCard}>
      <div>
        <Image src="/icons/basket.png" alt="basket" width={50} height={50} />
      </div>
      <div className={styles.textBox}>
        <h6>Cattering</h6>
        <p>Delight your guests with our flavors and presentation</p>
      </div>
    </div>
  );
};
export default StoryCard;
