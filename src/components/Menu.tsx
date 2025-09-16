import { Fish, IceCreamCone, Martini } from "lucide-react";

function Product() {
  return (
    
      <div className="flex flex-col space-y-3 mt-10 mb-15 px-4 md:px-10 lg:px-30 ">
        <h3 className="text-[#FE724C] tracking-widest ">PRODUCT</h3>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold ">
          Menus for tofday
        </h1>
        <p className="text-gray-500 mb-10">
          Taste the freshness in every bite, carefully crafted for your day.
        </p>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="md:w-1/2 w-full">
            <img src="/assets/images/menu.png" alt="Product" />
          </div>
          <div className="md:w-1/2 w-full text-end md:p-10 ">
            <h2 className="text-2xl font-medium md:mb-3 mb-1">
              Breakfast Monday
            </h2>
            <p className="text-gray-500">
              Kickstart your day with a delicious and nutritious breakfast, made
              fresh every morning.
            </p>

            <div className="flex justify-end mt-10 gap-10">
              <div className="flex flex-col">
                <h2 className="text-xl font-medium md:mb-3 mb-1">
                  Main Course
                </h2>
                <p className="text-gray-500">
                  Avocado Toast & Seasonal Fruits.
                </p>
              </div>

              <Fish
                className="text-white bg-[#FE724C] rounded-full p-2"
                size={60}
              />
            </div>

            <div className="flex justify-end mt-10 gap-10">
              <div className="flex flex-col">
                <h2 className="text-xl font-medium md:mb-3 mb-1">Dessert</h2>
                <p className="text-gray-500">Greek Yogurt with Honey & Nuts.</p>
              </div>
              <IceCreamCone
                className="text-white bg-[#FE724C] rounded-full p-2"
                size={60}
              />
            </div>
            <div className="flex justify-end mt-10 gap-10">
              <div className="flex flex-col">
                <h2 className="text-xl font-medium md:mb-3 mb-1">Appetizer</h2>
                <p className="text-gray-500">Mini Fruit Salad Bowl.</p>
              </div>
              <Martini
                className="text-white bg-[#FE724C] rounded-full p-2"
                size={60}
              />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Product;
