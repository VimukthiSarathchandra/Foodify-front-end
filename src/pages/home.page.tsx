import HeroGrid from "@/components/HeroGrid";
import Commitment from "@/components/Commitment";
import Subscribe from "@/components/Subscribe";
import Product from "@/components/Product";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

function HomePage() {
  return (
    <>
      <HeroGrid />
      <Commitment />
      <Process />
      <Testimonials />
      <Product />
      <Subscribe />
    </>
  );
}

export default HomePage;
