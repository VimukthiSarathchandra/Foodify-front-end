function AboutTeam() {
  return (
    <>
      <div className="flex md:flex-row flex-col md:mb-15 mt-10 mb-15 px-4 md:px-10 lg:px-30 ">

        <div className="  object-cover hidden md:block">
          <img
            src="/assets/images/aboutteam.png"
            alt="Product"
            className="object-cover "
          />
        </div>

        <div className="md:w-1/2 w-full  md:ml-30 md:mt-5 p-7 text-end ">
          <h3 className="text-[#FE724C] tracking-widest mb-3 ">Team</h3>
          <h1 className="text-3xl md:text-4xl lg:text-4xl tracking-widest md:tracking-normal  font-bold mb-5">
            Foodify <br />
            Teams
          </h1>

          <p className="text-gray-500  mb-10">
            Our passionate team of chefs and event specialists work together to
            deliver exceptional catering experiences, from menu design to
            flawless service.
          </p>
        </div>

        <div className="  object-cover md:hidden ">
          <img
            src="/assets/images/aboutteam.png"
            alt="Product"
            className="object-cover "
          />
        </div>

      </div>
    </>
  );
}

export default AboutTeam;
