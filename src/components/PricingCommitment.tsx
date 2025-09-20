import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

function PricingCommitment() {
  return (
    <>
      <div className="flex flex-col space-y-5 mt-10 mb-15 px-4 md:px-10 lg:px-30">
        <h3 className="text-[#FE724C] tracking-widest">COMMITMENT</h3>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">Why we are good for you</h1>
        <p className="text-gray-500">
          We are committed to providing you with the best possible service{" "}
          <br />
          and products.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 justify-items-center lg:justify-items-stretch">
            <Card className="w-full">
              <CardHeader>
                <div className="flex justify-center mb-4 md:mt-6">
                  <Star
                    className="bg-[#FE724C] text-white rounded-full p-2"
                    size={40}
                  />
                </div>
                <CardTitle className="text-2xl text-center">
                  Top Rated
                </CardTitle>
                <CardDescription className="text-center mt-2">
                  Our dishes are loved by thousands of happy customers who rate
                  us highly for taste and quality.
                </CardDescription>
              </CardHeader>
            </Card>

           
          </div>

          <div className="lg:mx-15">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">Express Delivery</h1>
            <p className="text-gray-500 mb-4">
              Get your favorite meals delivered hot and fresh, <br />
              faster than you expect.
            </p>
            <h3 className="text-[#FE724C] text-4xl font-bold mb-4">
              37
              <span className="text-2xl">min</span>
            </h3>
            <p className="text-gray-500 mb-4">
              Average delivery time to your doorstep.
            </p>
            <Button variant="outline" className=" text-[#FE724C]">
              See More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingCommitment;
