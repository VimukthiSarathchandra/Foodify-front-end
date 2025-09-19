import { Pencil, User, Navigation, Phone, CreditCard, Map } from "lucide-react";
import { DateAndTimePicker } from "@/components/DateAndTimePicker";
import { Button } from "@/components/ui/button";

function CartPage() {
  return (
    <>
      <div className="flex md:flex-row flex-col mt-10 md:mb-20 px-4 md:px-10 lg:px-30 ">
        <div className="w-full md:w-2/3 ">
          <h1 className="text-3xl  font-bold text-center">Items & Payment</h1>
          <h3 className="text-[#FE724C] text-sm text-center">4 ITEMS</h3>

          <div className="grid grid-cols-3 gap-3 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img
                src="assets/images/pic3.png"
                alt="FoodMainPic"
                className="w-20 md:w-35 h-20 md:h-35  md:m-5 rounded-2xl object-cover"
              />
              <span className="text-sm font-medium">food name</span>
              <span className="text-sm text-gray-500">price</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src="assets/images/pic3.png"
                alt="FoodMainPic"
                className="w-20 md:w-35 h-20 md:h-35  md:m-5 rounded-2xl object-cover"
              />
              <span className="text-sm font-medium">food name</span>
              <span className="text-sm text-gray-500">price</span>
            </div><div className="flex flex-col items-center justify-center">
              <img
                src="assets/images/pic3.png"
                alt="FoodMainPic"
                className="w-20 md:w-35 h-20 md:h-35  md:m-5 rounded-2xl object-cover"
              />
              <span className="text-sm font-medium">food name</span>
              <span className="text-sm text-gray-500">price</span>
            </div><div className="flex flex-col items-center justify-center">
              <img
                src="assets/images/pic3.png"
                alt="FoodMainPic"
                className="w-20 md:w-35 h-20 md:h-35  md:m-5 rounded-2xl object-cover"
              />
              <span className="text-sm font-medium">food name</span>
              <span className="text-sm text-gray-500">price</span>
            </div>

          </div>
          
        </div>
        <div className="w-full md:w-1/3 md:border-l md:pl-10 m-2 mt-10 md:mt-5 space-y-3" >
          <p className="text-1xl font-bold flex items-center gap-2 mb-5">Shipping Infomation <Pencil size={18} className="text-[#FE724C]" /></p>
          
          <p className="text-sm text-gray-500 flex items-center gap-2">  <User className="text-[#FE724C]" size={18} /> Somapal Disanayaka</p>
          <p className="text-sm text-gray-500 flex items-center gap-2"><Navigation className="text-[#FE724C]" size={18}/> Kegalle Srilanka</p>
          <p className="text-sm text-gray-500 flex items-center gap-2"><Phone className="text-[#FE724C]" size={18}/>+94 000-000-000 </p>
          <p className="text-1xl font-bold flex items-center gap-2 mt-5 md:mt-10 mb-5">Time Delivery <Pencil size={18} className="text-[#FE724C]" /></p>
          <DateAndTimePicker />
          <p className="text-1xl font-bold flex items-center gap-2 mt-5 md:mt-10 mb-5">Payment Method <Pencil size={18} className="text-[#FE724C]" /></p> 
          <div className="flex  gap-7">
          <p className="text-sm text-gray-500 flex items-center gap-2"><CreditCard  className="text-[#FE724C]" size={18}/> 4456 - 2132 -323 -112</p>
          <p className="text-sm text-gray-500 flex items-center gap-2"> 09/20</p>
          </div>
          <p className="text-sm text-gray-500 flex items-center gap-2">  <Map className="text-[#FE724C]" size={18} /> Somapal Disanayaka</p>
          <div className="grid grid-cols-2 gap-3 mr-10 md:mr-0  mt-5 md:mt-10">
          <p className="text-sm text-gray-500 flex ">Subtotal</p>
          <p className="text-sm text-gray-500 flex justify-end"> $100</p>
          <p className="text-sm text-gray-500 flex ">Shipment</p>
          <p className="text-sm text-gray-500 flex justify-end"> Free</p>
          <p className="text-sm text-gray-800 flex  font-bold">Total Price</p>
          <p className="text-sm text-gray-800 flex justify-end font-bold"> $100</p>
          </div>

          <div className="flex justify-center mr-7 md:mr-0">
          <Button className=" w-10/12 mt-7 mb-10 md:mb-0 md:mt-10 ">Place Order</Button>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default CartPage;
