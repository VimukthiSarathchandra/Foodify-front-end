import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";

function AboutUs() {
  return (
    <>
     <div className="flex md:flex-row justify-center flex-col md:mb-15 mt-10 mb-15 px-4 md:px-10 lg:px-30 ">
       
        <div className="md:w-2/3 w-full md:mt-5 p-7  ">
          <h3 className="text-[#FE724C] tracking-widest mb-3 ">About Us</h3>
          <h1 className="text-2xl md:text-4xl lg:text-4xl   font-bold mb-5">
          We Provide the next levels of catering service
          </h1>

          <p className="text-gray-500  mb-10">
          Our team of culinary experts crafts customized menus and delivers impeccable service, ensuring your guests enjoy every bite.
          </p>
        </div>

        <div className="flex items-center justify-center md:items-start md:w-1/3 w-full">
        <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Star
                    className="bg-[#FE724C] text-white rounded-full p-2"
                    size={40}
                  />
                </div>
                <CardTitle className="text-2xl text-center">
                  Top Rated
                </CardTitle>
                <CardDescription className="text-center mt-2">
                Trusted and highly rated by our clients, we consistently deliver catering services that exceed expectations.
                </CardDescription>
              </CardHeader>
            </Card>
        </div>
      </div>
    </>
  );
}

export default AboutUs;