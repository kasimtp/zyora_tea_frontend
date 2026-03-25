import React from "react";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl ">

          <p className="text-4xl  text-gray-700 sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            From the Blue Hills <br /> to Your Cup
          </p>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-600">
            Experience the true taste of Nilgiris Zyora Tea. Handpicked Nilgiri
            tea, freshly packed and delivered straight to your doorstep
            anywhere in India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition">
              Order Now
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
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