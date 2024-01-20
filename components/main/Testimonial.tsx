import { FC } from "react";
import React from "react";
import Image from "next/image";
import styles from "./Testimonial.module.css";
import HeadingSecondary from "../ui/HeadingSecondary";
interface TestimonialProps {}

const Testimonial: FC<TestimonialProps> = (): JSX.Element => {
  return (
    <div className={styles.testimonial}>
      <div>
        <Image
          src="/sushi-cook.png"
          height={600}
          width={600}
          alt="sushi-cook"
        />
      </div>
      <div className={styles.headingBox}>
        <HeadingSecondary customStyles={{ textAlign: "left" }}>
          Testimonial
        </HeadingSecondary>
        <h2 className={styles.headingTers}>What Our Customers Say About Us</h2>
      </div>
    </div>
  );
};
export default Testimonial;
