import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { FaTrash, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("zyora_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    const newItems = cartItems.map(item => 
      item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(newItems);
    localStorage.setItem("zyora_cart", JSON.stringify(newItems));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (cartItemId) => {
    const newItems = cartItems.filter(item => item.cartItemId !== cartItemId);
    setCartItems(newItems);
    localStorage.setItem("zyora_cart", JSON.stringify(newItems));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.selectedSize.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const totalAmount = subtotal + shipping;

  const handleCheckout = () => {
    // In a real app, you would pass the whole cart to AddressPage
    // For now we pass the first item to keep AddressPage working or handle full cart logic later
    if (cartItems.length > 0) {
      navigate('/address', { 
        state: { 
          product: cartItems[0].product, 
          selectedSize: cartItems[0].selectedSize, 
          quantity: cartItems[0].quantity,
          isCartCheckout: true,
          cartTotal: totalAmount
        } 
      });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white p-10 rounded-3xl shadow-sm text-center max-w-lg w-full">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added any premium Zyora tea to your cart yet.</p>
          <Link to="/product" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 w-full">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Cart Items List */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex flex-col divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:bg-gray-50 transition-colors">
                    
                    {/* Product Image */}
                    <Link to={`/product/${item.product.id}`} className="shrink-0 overflow-hidden rounded-2xl w-32 h-32 sm:w-28 sm:h-28 border border-gray-100">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between h-full text-center sm:text-left">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <Link to={`/product/${item.product.id}`}>
                            <h3 className="text-xl font-bold text-gray-900 hover:text-green-700 transition">{item.product.name}</h3>
                          </Link>
                          <span className="text-lg font-bold text-green-700 hidden sm:block">₹{item.selectedSize.price * item.quantity}</span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium mb-4">Size: {item.selectedSize.size}</p>
                      </div>

                      <div className="flex items-center justify-center sm:justify-between w-full">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:text-green-600 transition"
                          >
                            -
                          </button>
                          <span className="w-12 text-center text-sm font-semibold text-gray-900 border-x border-gray-200">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-green-50 hover:text-green-600 transition"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Action */}
                        <button 
                          onClick={() => removeItem(item.cartItemId)}
                          className="text-red-400 hover:text-red-600 p-2 transition ml-4 sm:ml-0 flex items-center gap-1 text-sm font-medium"
                        >
                          <FaTrash size={14} /> <span className="hidden sm:inline">Remove</span>
                        </button>
                      </div>
                      
                      {/* Mobile Price */}
                      <div className="mt-4 sm:hidden text-lg font-bold text-green-700">
                        ₹{item.selectedSize.price * item.quantity}
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link to="/product" className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold transition">
                <FaArrowLeft size={14} /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold text-gray-900">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-3xl font-extrabold text-green-700 tracking-tight">₹{totalAmount}</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-right">Taxes included where applicable</p>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center gap-2"
              >
                Proceed to Checkout <FaArrowRight size={16} />
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-medium">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.965 11.965 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Secure Checkout Guarantee
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
