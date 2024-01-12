import { FC } from "react";
import React from "react";
import Button from "../ui/Button";
import Image from "next/image";
import styles from "./Hero.module.css";
interface HeroProps {}
const Hero: FC<HeroProps> = (): JSX.Element => {
  return (
    <section className={styles.hero}>
      <div className={styles.textBox}>
        <div>
          <h1 className={styles.heroTitle}>
            Sushi Bliss, Every Roll a Flavorful <span>Kiss</span>
          </h1>
          <p className={styles.heroText}>
            Masters of Maki: Elevate Your Taste Buds with Our Sushi Creations,
            Where Tradition Meets Innovation!
          </p>
        </div>
        <div className={styles.heroActions}>
          <Button>Order Now</Button>
          <button>Watch Video</button>
        </div>
      </div>
      <div className={styles.imageBox}>
        <figure>
          <Image
            src="/sushi-main.png"
            alt="Tasty Sushi"
            width={600}
            height={600}
          />
        </figure>
      </div>
    </section>
  );
};
export default Hero;
