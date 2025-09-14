import { Button } from "./ui/button";

function HeroGrid() {
  return (
    <>
      <div className="md:flex mt-10 ">

        <div className="md:w-1/2 md:pl-10 m-10 space-y-5 ">
          <h3 className="text-[#FE724C]">CHANGE YOUR CATERING WAY</h3>
          <h1 className="md:text-7xl text-4xl font-bold">Peerfect Foods </h1>
          <h1 className="md:text-7xl text-4xl font-bold text-[#FE724C]">Better Live </h1>
          <p className="text-gray-500">
            Eat better, live healthier — explore meals crafted with love and
            natural ingredients.
          </p>
          <Button className="bg-[#FE724C] text-white">Subscribe</Button>
        </div>

        <div className="md:w-1/2 flex justify-end items-center">
          <img 
            src="/assets/images/hero-grid.png" 
            alt="Hero Grid 2" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default HeroGrid;
