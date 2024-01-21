import { FC } from "react";
import React from "react";
import styles from "./OurStory.module.css";
interface OurStoryProps {}
const OurStory: FC<OurStoryProps> = (): JSX.Element => {
  return (
    <section className={styles.ourStorySection}>
      <div></div>
      <div></div>
    </section>
  );
};
export default OurStory;
