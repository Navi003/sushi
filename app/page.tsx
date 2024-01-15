import BestDishes from "@/components/main/BestDishes";
import Hero from "@/components/main/Hero";
import PopularCat from "@/components/main/PopularCat";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularCat />
      <BestDishes />
    </main>
  );
}
