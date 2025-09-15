
function Process() {
  return (
    <div className="flex flex-col space-y-3 mt-10 mb-15 px-4 md:px-10 lg:px-30 ">
      <h3 className="text-[#FE724C] tracking-widest text-center">PROCESS</h3>
      <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-10">
      Just easy step for you
      </h1>
     
      <div className="flex md:flex-row flex-col gap-4">
        <div className="md:w-1/2 w-full ">
        
          <div className="flex space-x-3 md:mt-20">
          <h2 className="text-xl text-[#FE724C] font-medium md:mb-3 mb-1">01</h2>
          <h2 className="text-xl font-medium md:mb-3 mb-1">Select your best menus</h2>
          </div>
          <p className="text-gray-500 text-sm m-6">Browse our wide selection of fresh, flavorful meals and pick your favorites with ease. Whether you crave healthy, spicy, or sweet, we’ve got you covered.</p>

          <div className="flex space-x-3">
          <h2 className="text-xl text-[#FE724C] font-medium md:mb-3 mb-1">03</h2>
          <h2 className="text-xl font-medium md:mb-3 mb-1">Complete the payments</h2>
          </div>
          <p className="text-gray-500 text-sm m-6">Proceed to our secure and simple checkout system. With multiple safe payment options available, your order will be confirmed in just a few easy clicks.</p>
          <div className="flex space-x-3">
          <h2 className="text-xl text-[#FE724C] font-medium md:mb-3 mb-1">03</h2>
          <h2 className="text-xl font-medium md:mb-3 mb-1">Enjoy your meal</h2>
          </div>
          <p className="text-gray-500 text-sm m-6">Relax while we prepare your order with care. We deliver fresh, hot, and tasty food right to your doorstep, giving you a restaurant-style experience at home.</p>


        </div>

        <div className="md:w-1/2 w-full">
          <img src="/assets/images/process.png" alt="Product" />
        </div>
      </div>
    </div>
  );
}

export default Process;
