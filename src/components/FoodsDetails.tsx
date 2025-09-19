import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";

type Product = {
  _id: string;
  categoryId: string;
  image: string | string[];
  name: string;
  price: number;
  stripePriceId: string;
  description: string;
  ingredients: string;
  calories: string;
  featured: boolean;
  __v: number;
};

interface FoodsDetailsProps {
  product: Product | null;
  children: React.ReactNode;
}

function FoodsDetails({ product, children }: FoodsDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Helper function to get current image
  const getCurrentImage = (product: Product | null) => {
    if (!product) return "/assets/images/FoodMainPic.png";

    if (Array.isArray(product.image)) {
      return product.image[currentImageIndex] || product.image[0];
    }
    return product.image;
  };

  // Helper function to get all images for a product
  const getProductImages = (product: Product | null) => {
    if (!product) return ["/assets/images/FoodMainPic.png"];

    if (Array.isArray(product.image)) {
      return product.image;
    }
    return [product.image];
  };

  if (!product) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-6">
        <div className="md:flex gap-10">
          {/* left side image */}
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <img
              src={getCurrentImage(product)}
              alt={product.name}
              className="w-[300px] h-[200px] rounded-2xl object-cover"
            />

            <div className="flex gap-3 mt-6">
              {getProductImages(product).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`w-20 h-16 rounded-2xl object-cover cursor-pointer border-2 transition-all ${
                    index === currentImageIndex 
                      ? 'border-orange-500 opacity-100' 
                      : 'border-gray-200 opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* right side content */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#FE724C]">
            {product.name}
            </h2>
            <p className="mt-4 text-gray-600">
            {product.description}
            </p>

            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-500">
                🍗 {product.calories}
              </p>
              <p className="text-sm text-gray-500">
                  🥬 {product.ingredients}
                </p>
            </div>

            <Button className="mt-8 px-5 py-2 self-start">
              Add to cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FoodsDetails;
