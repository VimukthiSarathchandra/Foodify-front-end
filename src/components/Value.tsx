import { HandPlatter, Star, Citrus } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Product() {
  return (
    <div className="flex flex-col space-y-3 mt-10 mb-15 px-4 md:px-10 lg:px-30 ">
      <h3 className="text-[#FE724C] tracking-widest text-center">VALUE</h3>
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">
        Our Value
      </h1>
      <p className="text-gray-500 text-center mb-10">
        At Foodify, our values guide everything we do – from selecting the
        freshest ingredients to providing outstanding service and ensuring
        customer satisfaction.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center lg:justify-items-stretch">
        <Card className="border-none shadow-none">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Citrus
                className="bg-[#FE724C] text-white rounded-full p-2"
                size={40}
              />
            </div>
            <CardTitle className="text-2xl text-center">Fresh</CardTitle>
            <CardDescription className="text-center mt-2">
              We source the freshest ingredients every day to create dishes that
              are flavorful, healthy, and beautifully presented.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-none shadow-none">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <HandPlatter
                className="bg-[#FE724C] text-white rounded-full p-2"
                size={40}
              />
            </div>
            <CardTitle className="text-2xl text-center">Serving Best</CardTitle>
            <CardDescription className="text-center mt-2">
              Our commitment to excellence means every meal is prepared and
              served with care, ensuring the best experience for your guests.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-none shadow-none">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Star
                className="bg-[#FE724C] text-white rounded-full p-2"
                size={40}
              />
            </div>
            <CardTitle className="text-2xl text-center">Top Rated</CardTitle>
            <CardDescription className="text-center mt-2">
              Trusted and highly rated by our clients, we consistently deliver
              catering services that exceed expectations.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default Product;
