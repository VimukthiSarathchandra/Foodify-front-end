import { Quote } from "lucide-react";

function PricingTestimonials() {
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <div className="flex md:flex-row flex-col bg-[#26120C]">
          <div className="object-cover hidden md:block ">
            <img
              src="/assets/images/testimonials.png"
              alt="Product"
              className="object-cover "
            />
            <div className="md:flex hidden"></div>
          </div>

          <div className="md:w-1/2 w-full  md:ml-30  p-7 ">
            <h3 className="text-[#FE724C] tracking-widest mb-3 ">
              TESTIMONIALS
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-4xl text-white   font-medium mb-5">
              What they say?
            </h1>
            <p className=" text-3xl md:text-4xl font-medium text-[#FE724C] mb-4">
              <Quote className="opacity-40 " />
              Complete Selection
            </p>

            <p className="text-white  ">
              The food was fresh, flavorful, and delivered on time. Ordering was
              super easy, and I really appreciate the excellent customer service
              they provide.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="md:w-1/2 w-1/3 ">
          <div className="bg-[#FFF3EF] w-2/3 md:w-1/2 rounded-br-3xl pt-3 pb-3 pl-3 md:pt-7 md:pb-7 md:pl-7">
            <h3 className="text-[#FE724C]">Mason Jonas</h3>

            <p className=" text-gray-500 text-sm">
              Human Resource Development{" "}
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-1/3"></div>
      </div>
    </>
  );
}

export default PricingTestimonials;
