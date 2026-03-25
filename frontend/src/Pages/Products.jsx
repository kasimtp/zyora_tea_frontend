import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../data/products";

const Products = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50/50 via-white to-orange-50/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-3 block">From Nilgiris with Love</span>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Premium Teas
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-green-500 rounded-full"></div>
          </div>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Discover the perfect blend for your taste. Handpicked, freshly packed, and delivered straight to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 justify-center place-items-center">
          {productsData.map((product) => {
            const lowestPrice = Math.min(...product.prices.map(p => p.price));
            
            return (
              <div
                key={product.id}
                className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-gray-100 max-w-sm w-full group"
              >
                <Link to={`/product/${product.id}`} className="relative overflow-hidden block">
                  {/* Category Ribbon */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-green-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                      {product.category || "Premium Tea"}
                    </span>
                  </div>
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <span className="text-white font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-grow bg-white relative z-20 -mt-4 rounded-t-3xl">
                  <div className="flex-grow">
                    <Link to={`/product/${product.id}`} className="hover:text-green-600 transition-colors block mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{product.name}</h3>
                    </Link>
                    
                    <p className="text-gray-500 text-sm line-clamp-2 mt-2 leading-relaxed">
                      {product.description || "The finest premium tea straight from the hills."}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Starting from</p>
                      <span className="text-2xl font-black text-green-700">₹{lowestPrice}</span>
                    </div>
                  </div>

                  <Link
                    to={`/product/${product.id}`} 
                    className="mt-8 w-full bg-green-50 text-green-700 border border-green-200 font-bold py-3.5 px-4 rounded-xl hover:bg-green-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Select Size
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;