import { Button } from "./ui/button";

function HeroGrid() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-10 mb-15">

        <div className="w-full lg:w-1/2 px-4 md:px-10 lg:px-30 space-y-5 order-1 lg:order-1">
          <h3 className="text-[#FE724C]">CHANGE YOUR CATERING WAY</h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">Peerfect Foods </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FE724C]">Better Live </h1>
          <p className="text-gray-500">
            Eat better, live healthier — explore meals crafted with love and
            natural ingredients.
          </p>
          <Button className="bg-[#FE724C] text-white mb-5">Subscribe</Button>
        </div>

        <div className="w-full lg:w-1/2 order-2 lg:order-2">
          <img 
            src="/assets/images/hero-grid.png" 
            alt="Hero Grid 2" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default HeroGrid;
