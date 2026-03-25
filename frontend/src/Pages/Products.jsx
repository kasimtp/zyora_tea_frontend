import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../data/products";

const Products = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Premium Teas
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover the perfect blend for your taste
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center place-items-center">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col h-full border border-gray-100 max-w-sm w-full"
            >
              <Link to={`/product/${product.id}`} className="relative group overflow-hidden block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <span className="bg-white text-green-700 font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0 shadow-lg">View Details</span>
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <Link to={`/product/${product.id}`} className="hover:text-green-600 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                </Link>
                
                <div className="space-y-2 mb-6 flex-grow">
                  {product.prices.map((p, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                      <span className="font-medium text-gray-600">{p.size}</span>
                      <span className="font-bold text-green-700">₹{p.price}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/product/${product.id}`} 
                  className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-green-700 transition-colors duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Select Size
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;