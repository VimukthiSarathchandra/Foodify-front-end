import { Menu } from "lucide-react";
import CategoriesDropdown from "./CategoriesDropdown";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { products, categories } from "@/data";
import { useState, useEffect } from "react";
import FoodsDetails from "./FoodsDetails";

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

function MenuProductItem() {
  
  // default slug: show first one or All
  const [selectedSlug, setSelectedSlug] = useState("Main Course");
  
  // state for selected individual category
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  
  // state for selected product
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // state for current image index (for products with multiple images)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // unique parent slugs (Main Course, Dizzerts, Appetizers)
  const uniqueSlugs = [...new Set(categories.map((c) => c.slug))];

  // filter categories linked to selected parent slug
  const selectedCategories = categories.filter(
    (cat) => cat.slug === selectedSlug
  );

  // get all categoryIds of selectedSlug
  const selectedCategoryIds = selectedCategories.map((cat) => cat._id);

  // filter products by selected category ID or all products from selected slug if no specific category selected
  const filteredProducts = selectedCategoryId 
    ? products.filter((prod) => prod.categoryId === selectedCategoryId)
    : products.filter((prod) => selectedCategoryIds.includes(prod.categoryId));

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

  // Set default category when slug changes
  useEffect(() => {
    const firstCategory = selectedCategories[0];
    if (firstCategory) {
      setSelectedCategoryId(firstCategory._id);
    }
  }, [selectedSlug]);

  // Set default product when filtered products change
  useEffect(() => {
    if (filteredProducts.length > 0 && !selectedProduct) {
      setSelectedProduct(filteredProducts[0]);
      setCurrentImageIndex(0);
    } else if (filteredProducts.length > 0 && selectedProduct) {
      // Check if current selected product is still in the filtered list
      const isCurrentProductInList = filteredProducts.some(prod => prod._id === selectedProduct._id);
      if (!isCurrentProductInList) {
        setSelectedProduct(filteredProducts[0]);
        setCurrentImageIndex(0);
      }
    }
  }, [filteredProducts, selectedProduct]);

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProduct]);

  return (
    <div className="flex flex-col space-y-3 mt-10 mb-20 px-4 md:px-10 lg:px-30 ">
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">
        Today’s featured
      </h1>
      <p className="text-gray-500 text-center mb-10">
        Discover today’s freshly prepared dishes, crafted with passion and
        served to delight your taste buds.
      </p>

      <div className="flex flex-col md:flex-row">
        <div className=" flex ">
          <div className="w-full md:w-1/2 flex flex-col md:justify-center gap-2">
            {uniqueSlugs.map((slug) => (
              <h1
                key={slug}
                onClick={() => setSelectedSlug(slug)}
                className={`text-2xl lg:text-3xl font-bold cursor-pointer 
            ${selectedSlug === slug ? "text-[#FE724C]" : "text-gray-400"}`}
              >
                {slug}
              </h1>
            ))}
          </div>

          <div className="md:w-1/2 md:border-l flex flex-col">
            <div className="gap-2 ml-5 hidden md:flex">
              <Menu className="text-[#FE724C]" />
              <p className="text-gray-500 text-center mb-4">Categories</p>
            </div>
            <CategoriesDropdown 
              selectedSlug={selectedSlug}
              selectedCategoryId={selectedCategoryId}
              setSelectedCategoryId={setSelectedCategoryId}
            />

            <ScrollArea className="h-72 ml-5 md:mt-2 w-48 rounded-md border">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  onClick={() => setSelectedProduct(product)}
                  className={`flex md:justify-center items-end justify-end md:items-center gap-4 ml-5 mt-5 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors ${
                    selectedProduct && selectedProduct._id === product._id ? 'bg-orange-50 border-l-2 border-orange-500' : ''
                  }`}
                >
                  <img
                    src={Array.isArray(product.image) ? product.image[0] : product.image}
                    className="md:w-10  h-10 hidden md:block object-cover rounded-2xl"
                    alt="Menu"
                  />
                  <h1 className=" text-sm md:font-bold ">{product.name}</h1>

                  <img
                    src={Array.isArray(product.image) ? product.image[0] : product.image}
                    className="md:hidden w-10 h-10  object-cover rounded-2xl"
                    alt={product.name}
                  />
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>

        <div className="md:w-3/5 w-full md:flex ">
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center items-center">
            <div>
              <img 
                src={getCurrentImage(selectedProduct)} 
                alt={selectedProduct ? selectedProduct.name : "Menu"} 
                className="w-50 h-50 rounded-2xl object-cover"
              />
            </div>
            <div className="flex gap-5 mt-10 justify-center items-center">
              
              
              <div className="flex gap-2">
                {getProductImages(selectedProduct).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProduct?.name || "Menu"} ${index + 1}`}
                    className={`h-20 w-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-orange-500 opacity-100' 
                        : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              
             
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center ">
            <div className="text-end items-center ">
              <h1 className="text-3xl md:text-4xl lg:text-4xl tracking-widest md:tracking-normal  font-bold mb-5">
                {selectedProduct ? selectedProduct.name : "Chicken Parmesan"}
              </h1>
              <h3 className="text-[#FE724C]  mb-3 ">
                {selectedProduct ? selectedProduct.calories : "Calories : 70gr - Chicken"}
              </h3>

              <p className="text-gray-500  mb-10">
                {selectedProduct ? selectedProduct.description : "A classic Italian favorite topped with rich tomato sauce, melted cheese, and a golden crisp finish."}
              </p>
            </div>
            <div className="gap-5 flex justify-end ">
              <FoodsDetails product={selectedProduct}>
                <Button variant={"outline"}>See More</Button>
              </FoodsDetails>
              <Button>ADD ${selectedProduct ? selectedProduct.price : "40"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuProductItem;
