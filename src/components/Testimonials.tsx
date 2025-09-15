import { Quote } from "lucide-react";

function Testimonials() {
  return (
    <div className="flex md:flex-row flex-col mb-1 md:mb-15 ">
      <div className="object-cover hidden md:block">
        <img
          src="/assets/images/testimonials.png"
          alt="Product"
          className="object-cover "
        />
        <div className="flex">
          <div className="md:w-1/2 w-1/3"></div>
          <div className="bg-[#FFF3EF] w-2/3 md:w-1/2 rounded-br-2xl pt-3 pb-3 pl-3 md:pt-7 md:pb-7 md:pl-7">
            <h3 className="text-[#FE724C]">Mason Jonas</h3>

            <p className=" text-gray-500 text-sm">
              Human Resource Development{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full  md:ml-30 md:mt-15 p-7">
        <h3 className="text-[#FE724C] tracking-widest mb-3 ">TESTIMONIALS</h3>
        <h1 className="text-3xl md:text-4xl lg:text-4xl   font-medium mb-5">
          What they say?
        </h1>
        <p className=" text-3xl md:text-4xl font-medium text-[#FE724C] mb-4">
          <Quote className="opacity-40 " />
          Complete Selection
        </p>

        <p className="text-gray-500  mb-10">
          The food was fresh, flavorful, and delivered on time. Ordering was
          super easy, and I really appreciate the excellent customer service
          they provide.
        </p>
      </div>

      <div className="object-cover md:hidden mb-10">
        <img
          src="/assets/images/testimonials.png"
          alt="Product"
          className="object-cover rounded-tr-[100px] w-11/12 "
        />
        <div className="flex ">
          <div className="w-2/12"></div>
          <div className="bg-[#DFE1E6]  w-9/12  rounded-bl-full rounded-br-full pt-3 pb-3 pl-3 md:pt-7 md:pb-7 md:pl-7">
            <h3 className="text-[#FE724C] ml-7">Mason Jonas</h3>

            <p className=" text-gray-500 text-sm ml-7">
              Human Resource Development
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Testimonials;
