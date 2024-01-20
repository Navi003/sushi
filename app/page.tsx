import BestDishes from "@/components/main/BestDishes";
import Hero from "@/components/main/Hero";
import PopularCat from "@/components/main/PopularCat";
import Testimonial from "@/components/main/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularCat />
      <BestDishes />
      <Testimonial />
    </main>
  );
}
