import React from "react";
// import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full  h-full  flex items-center"
      // style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl  bg-red-900  mx-auto px-6 w-full ">
        <div className="max-w-xl backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-xl text-white">

          <p className="text-4xl  md:text-5xl lg:text-6xl  font-bold leading-tight">
            From the Blue Hills <br /> to Your Cup
          </p>

          <p className="mt-5 text-lg md:text-xl text-gray-200">
            Experience the true taste of Nilgiris Zyora Tea. Handpicked Nilgiri
            tea, freshly packed and delivered straight to your doorstep
            anywhere in India.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-700 px-7 py-3 rounded-lg font-semibold transition">
              Order Now
            </button>

            <button className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Explore Tea
            </button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="animate-bounce text-white text-sm">
          Scroll ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;