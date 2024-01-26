import BestDishes from "@/components/main/BestDishes";

import Hero from "@/components/main/Hero";
import OurStory from "@/components/main/OurStory";
import PopularCat from "@/components/main/PopularCat";
import Testimonial from "@/components/main/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularCat />
      <BestDishes />
      <Testimonial />
      <OurStory />
    </main>
  );
}
