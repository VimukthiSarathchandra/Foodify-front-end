function AboutGalery() {
  return (
    <>
      <div className="flex flex-col space-y-3 mt-10 mb-20 px-4 md:px-10 lg:px-30 ">
        <h3 className="text-[#FE724C] tracking-widest text-center">GALLERY</h3>
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center">
          Our Story
        </h1>
        <p className="text-gray-500 text-center mb-10">
          From humble beginnings to becoming a trusted catering partner, our
          journey is filled with passion for food, creativity, and customer
          satisfaction. Take a look at some of our moments and creations below.
        </p>

        <div className="flex gap-4">
          <div>
            <img src="/assets/images/pic1.png" alt="About Galery 1" />
          </div>
          <div className="md:mt-23 mt-8">
            <img src="/assets/images/pic2.png" alt="About Galery 2" />
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img src="/assets/images/pic3.png" alt="About Galery 2" />
          </div>
          <div>
            <img src="/assets/images/pic4.png" alt="About Galery 1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutGalery;
