import { Button } from "./ui/button";

function AboutHeading() {
  return (
    <>
      <div className="flex flex-col space-y-5 mt-10 mb-15 md:px-10 lg:px-30 relative z-10">
        <img
          src="/assets/images/aboutpicture.png"
          alt="Subscribe"
          className="md:w-full md:h-auto object-cover h-100 md:rounded-4xl"
        />
        <div className="absolute inset-0 flex flex-col space-y-2 md:space-y-5 justify-center items-center text-center p-4">
          <p className=" md:text-4xl text-white text-2xl font-medium text-center">
            Trust Us, All Set Just For You
          </p>
          <p className="text-white text-center text-sm ">
            We specialize in creating unforgettable dining experiences for
            weddings,
            <br />
            parties, and corporate events with our exceptional catering
            service.
          </p>

          <Button className="bg-[#FE724C] text-white ">Subscribe</Button>
        </div>
      </div>
    </>
  );
}

export default AboutHeading;
