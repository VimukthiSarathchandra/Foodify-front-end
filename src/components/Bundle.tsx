import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Bundle() {
  return (
    <div className="flex flex-col space-y-3 mt-10 mb-15 px-4 md:px-10 lg:px-30 ">
      <h3 className="text-[#FE724C] tracking-widest text-center">BUNDLE</h3>
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">
        Suitable Bundles For You
      </h1>
      <p className="text-gray-500 text-center mb-10">
        Select your suitable catering bundles easy
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center lg:justify-items-stretch">
        <Card className="h-75 w-65">
          <CardHeader>
            <div className="flex  mb-4 gap-2">
              <img
                src="/assets/images/rectangle30.png"
                alt="bundle-1"
                className="w-15 h-15"
              />
              <div className="flex flex-col">
                <CardTitle className="text-2xl text-center">
                  Breakfast
                </CardTitle>
                <p className="text-2xl text-center">
                  $ 15 <span className="text-sm text-gray-500">/pcs</span>
                </p>
              </div>
            </div>

            <CardDescription className="ml-4  mt-2 mb-2">
              <ul className="flex flex-col gap-2 list-disc ">
                <li className="text-gray-500">2x Scrambled Eggs with herbs</li>
                <li className="text-gray-500">2x Buttered Toast Slices</li>
                <li className="text-gray-500">1x Fresh Orange Juice</li>
              </ul>
            </CardDescription>
            <div className="flex justify-center">
              <Button className="text-white bg-[#FE724C] rounded-full w-1/2">
                Add to Cart
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Card className="h-75 w-65">
          <CardHeader>
            <div className="flex  mb-4 gap-2">
              <img
                src="/assets/images/rectangle30.png"
                alt="bundle-1"
                className="w-15 h-15"
              />
              <div className="flex flex-col">
                <CardTitle className="text-2xl text-center">Lunch</CardTitle>
                <p className="text-2xl text-center">
                  $ 15 <span className="text-sm text-gray-500">/pcs</span>
                </p>
              </div>
            </div>

            <CardDescription className="ml-4  mt-2 mb-2">
              <ul className="flex flex-col gap-2 list-disc ">
                <li className="text-gray-500">Grilled Chicken Breast with rice</li>
                <li className="text-gray-500">Seasonal Veggies</li>
                <li className="text-gray-500">Bottle of Mineral Water</li>
              </ul>
            </CardDescription>
            <div className="flex justify-center">
              <Button className="text-white bg-[#FE724C] rounded-full w-1/2">
                Add to Cart
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Card className="h-75 w-65">
          <CardHeader>
            <div className="flex  mb-4 gap-2">
              <img
                src="/assets/images/rectangle30.png"
                alt="bundle-1"
                className="w-15 h-15"
              />
              <div className="flex flex-col">
                <CardTitle className="text-2xl text-center">Dinner</CardTitle>
                <p className="text-2xl text-center">
                  $ 15 <span className="text-sm text-gray-500">/pcs</span>
                </p>
              </div>
            </div>

            <CardDescription className="ml-4  mt-2 mb-2">
              <ul className="flex flex-col gap-2 list-disc ">
                <li className="text-gray-500">Pasta with tomato-basil sauce</li>
                <li className="text-gray-500">Side Garden Salad</li>
                <li className="text-gray-500">Chocolate Brownie</li>
              </ul>
            </CardDescription>
            <div className="flex justify-center">
              <Button className="text-white bg-[#FE724C] rounded-full w-1/2">
                Add to Cart
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Bundle;
