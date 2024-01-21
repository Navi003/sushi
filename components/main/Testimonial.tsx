import { FC } from "react";
import React from "react";
import Image from "next/image";
import styles from "./Testimonial.module.css";
import HeadingSecondary from "../ui/HeadingSecondary";
interface TestimonialProps {}

const Testimonial: FC<TestimonialProps> = (): JSX.Element => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.imageBox}>
        <Image
          src="/sushi-cook.png"
          height={600}
          width={600}
          alt="sushi-cook"
        />
      </div>
      <div>
        <div className={styles.headingBox}>
          <HeadingSecondary
            className={styles.headingSec}
            customStyles={{ textAlign: "left" }}
          >
            Testimonial
          </HeadingSecondary>
          <h2 className={styles.headingTers}>
            What Our Customers Say About Us
          </h2>
        </div>
        <div>
          <p className={styles.text}>
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
          <div className={styles.customerFeedbackContainer}>
            <Image
              width={200}
              height={90}
              src="/group.png"
              alt="Group of People who Like our food"
            />
            <div className={styles.customerFeedback}>
              <h6>Customer Feedback</h6>
              <div>
                <span>4.9</span> <span>(18.6k Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
