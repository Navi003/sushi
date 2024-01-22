import { FC } from "react";
import React from "react";
import styles from "./OurStory.module.css";
import HeadingSecondary from "../ui/HeadingSecondary";
import StoryCard from "../ui/StoryCard";
import Button from "../ui/Button";
interface OurStoryProps {}
const OurStory: FC<OurStoryProps> = (): JSX.Element => {
  return (
    <section className={styles.ourStorySection}>
      <div className={styles.textBox}>
        <div className={styles.headingBox}>
          <HeadingSecondary>OUR STORY & SERVICES</HeadingSecondary>
          <h2 className={styles.headingTers}>
            Our Culinary Journey And Services
          </h2>
        </div>

        <div className={styles.action}>
          <p>
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <div className={styles.containerButton}>
            <Button>Explore</Button>
          </div>
        </div>
      </div>
      <div className={styles.storyCardContainer}>
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </section>
  );
};
export default OurStory;
