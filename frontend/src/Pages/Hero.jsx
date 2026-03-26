import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import heroinmobile from "../assets/heroinmobile.jpg"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Desktop Background Image — hidden on mobile & tablet */}
      <img
        src={hero}
        alt="Zyora Tea Plantation"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out hidden lg:block ${
          isLoaded ? "scale-100" : "scale-110"
        }`}
      />

      {/* Mobile & Tablet Background Image — hidden on desktop */}
      <img
        src={heroinmobile}
        alt="Zyora Tea Plantation"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2500ms] ease-out block lg:hidden ${
          isLoaded ? "scale-100" : "scale-110"
        }`}
      />

      {/* Only a very gentle bottom-gradient so the bottom text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Content pinned to the bottom like a magazine cover */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 sm:px-10 lg:px-16 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          
          {/* Left: Title */}
          <div
            className={`transform transition-all duration-1000 delay-300 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5 border border-white/30">
              Premium Nilgiri Tea
            </span>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Taste the <br />
              Highlands.
            </h1>
          </div>

          {/* Right: Description + CTA */}
          <div 
            className={`max-w-md transform transition-all duration-1000 delay-500 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Handpicked from the misty blue Nilgiris. Zyora delivers pure, organic tea straight from the estate to your cup — anywhere in India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/product"
                className="bg-white text-stone-900 hover:bg-stone-100 px-8 py-3.5 rounded-full font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Shop Now →
              </Link>
              <Link
                to="/product"
                className="border border-white/50 hover:border-white text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold tracking-wide transition-all duration-300 text-sm sm:text-base"
              >
                Explore
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;