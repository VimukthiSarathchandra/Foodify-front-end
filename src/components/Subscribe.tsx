import { Button } from "./ui/button";


function Subscribe() {
  return (
  <>
  <div className="flex flex-col space-y-5 mt-10 mb-15 px-4 md:px-10 lg:px-30 relative z-10">

    <img src="/assets/images/rectangle.png" alt="Subscribe" className="md:w-full md:h-auto object-cover h-75 rounded-4xl"/>
    <div className="absolute flex flex-col space-y-2 md:space-y-5 md:mt-10 mt-10  lg:mt-25 mb-15 px-4 md:px-10 lg:px-15">
      <h2 className=" text-[#FE724C] ">SUBSCRIBE</h2>
      <p className=" md:text-4xl text-2xl font-medium">Perfect Solutions <br /> For Your Foods</p>
      <p className="text-gray-500">Our mission is to provide healthy,  flavorful, and convenient <br />food options for your busy lifestyle.</p>
      <Button className="bg-[#FE724C] text-white w-1/4">Subscribe</Button>
    </div>
  </div>
  </>
  );
}

export default Subscribe;