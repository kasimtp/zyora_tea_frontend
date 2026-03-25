import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { productsData } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(product?.prices[0] || null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/product" className="text-green-600 hover:underline">Go back to Products</Link>
      </div>
    );
  }

  const handleOrderClick = () => {
    navigate('/address', { state: { product, selectedSize, quantity } });
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("zyora_cart")) || [];
    
    // Check if the exact product AND size is already in the cart
    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.selectedSize.size === selectedSize.size
    );

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({
        cartItemId: Date.now().toString(),
        product,
        selectedSize,
        quantity
      });
    }

    localStorage.setItem("zyora_cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert(`${quantity}x ${product.name} (${selectedSize.size}) added to your cart!`);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          
          {/* Left Side: Product Image */}
          <div className="md:w-1/2 p-6 md:p-12 bg-green-50/30 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg border border-gray-100"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            
            <div className="mb-2">
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">Key Benefits:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Price section dynamic based on selected size */}
            <div className="text-3xl font-bold text-green-700 mb-6">
              ₹{selectedSize.price * quantity}
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              
              {/* Size Selector */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Size</label>
                <div className="relative">
                  <select 
                    className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-xl border appearance-none bg-gray-50 font-medium"
                    value={selectedSize.size}
                    onChange={(e) => {
                      const newSize = product.prices.find(p => p.size === e.target.value);
                      setSelectedSize(newSize);
                    }}
                  >
                    {product.prices.map((p, index) => (
                      <option key={index} value={p.size}>
                        {p.size} - {p.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="w-full sm:w-1/3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-l-xl transition"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-medium bg-transparent text-gray-900 border-x border-gray-300 py-3">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-r-xl transition"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {/* Add to Cart Button */}
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-white border-2 border-green-600 text-green-700 font-bold py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center gap-2 text-lg hover:bg-green-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>

              {/* Order Now Button */}
              <button 
                onClick={handleOrderClick}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center gap-2 text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Order Now
              </button>
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">
              Secure & quick ordering. No payment needed until confirmed.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
