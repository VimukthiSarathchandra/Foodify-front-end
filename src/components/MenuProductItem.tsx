import { categories } from "@/data";
import { Menu } from "lucide-react";
import CategoriesDropdown from "./CategoriesDropdown";
import { Button } from "./ui/button";

function MenuProductItem() {
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
        <div className="md:w-2/5 flex ">
          <div className="w-full md:w-1/2 flex flex-col md:justify-center gap-2">
            <h1 className="text-2xl lg:text-3xl text-[#FE724C] font-bold ">
              Main Course
            </h1>
            <h1 className="text-2xl lg:text-3xl text-gray-400 font-bold ">
              Dizzerts
            </h1>
            <h1 className="text-2xl lg:text-3xl text-gray-400  font-bold ">
              Appetizers
            </h1>
          </div>

          <div className="md:w-1/2 md:border-l flex flex-col">
            <div className="gap-2 ml-5 hidden md:flex">
              <Menu className="text-[#FE724C]" />
              <p className="text-gray-500 text-center mb-4">Categories</p>
            </div>
            <CategoriesDropdown />
            {/* image */}
            <div className="flex md:justify-center items-end justify-end md:items-center gap-4 ml-5 mt-5">
              <img
                src="/assets/images/rectangle36.png"
                className="md:w-1/3  h-10 md:h-auto hidden md:block"
                alt="Menu"
              />
              <h1 className=" text-sm md:font-bold ">Chicken Parmesan</h1>

              <img
                src="/assets/images/rectangle36.png"
                className="md:w-1/3 md:hidden  h-10 md:h-auto "
                alt="Menu"
              />
            </div>
            {/* /// */}

            <div className="flex md:justify-center items-end justify-end md:items-center gap-4 ml-5 mt-5">
              <img
                src="/assets/images/rectangle36.png"
                className="md:w-1/3  h-10 md:h-auto hidden md:block"
                alt="Menu"
              />
              <h1 className=" text-sm md:font-bold ">Chicken Parmesan</h1>

              <img
                src="/assets/images/rectangle36.png"
                className="md:w-1/3 md:hidden  h-10 md:h-auto "
                alt="Menu"
              />
            </div>
            {/* /// */}
            <div className="flex md:justify-center items-end justify-end md:items-center gap-4 ml-5 mt-5">
              <img
                src="/assets/images/rectangle36.png"
                className="md:w-1/3  h-10 md:h-auto hidden md:block"
                alt="Menu"
              />
              <h1 className=" text-sm md:font-bold ">Chicken Parmesan</h1>

              <img
                src="/assets/images/rectangle36.png"
                className="md:w-1/3 md:hidden  h-10 md:h-auto "
                alt="Menu"
              />
            </div>
            {/* /// */}
            <div className="flex md:justify-center items-end justify-end md:items-center gap-4 ml-5 mt-5">
              <img
                src="/assets/images/rectangle36.png"
                className="md:w-1/3  h-10 md:h-auto hidden md:block"
                alt="Menu"
              />
              <h1 className=" text-sm md:font-bold ">Chicken Parmesan</h1>

              <img
                src="/assets/images/rectangle36.png"
                className="md:w-1/3 md:hidden  h-10 md:h-auto "
                alt="Menu"
              />
            </div>
            {/* /// */}
          </div>
        </div>

        <div className="md:w-3/5 w-full md:flex ">
          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center items-center">
            <div className="  ">
              <img src="/assets/images/FoodMainPic.png" alt="Menu" />
            </div>
            <div className=" flex gap-5 mt-10 ">
              <img
                src="/assets/images/rectangle36.png"
                alt="Menu"
                className="h-20"
              />
              <img
                src="/assets/images/rectangle36.png"
                alt="Menu"
                className="h-20"
              />
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col justify-center ">
            <div className="text-end items-center ">
              <h1 className="text-3xl md:text-4xl lg:text-4xl tracking-widest md:tracking-normal  font-bold mb-5">
                Chicken Parmesan
              </h1>
              <h3 className="text-[#FE724C]  mb-3 ">
                Calories : 70gr - Chicken
              </h3>

              <p className="text-gray-500  mb-10">
                A classic Italian favorite topped with rich tomato sauce, melted
                cheese, and a golden crisp finish.
              </p>
            </div>
            <div className="gap-5 flex justify-end ">
              <Button variant={"outline"}>See More</Button>
              <Button>ADD</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuProductItem;
