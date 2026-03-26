import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("zyora_cart")) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Handle scroll and cart count effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    updateCartCount();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Zyora Logo"
              className="h-17 w-17 mt-3 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            {/* <h1 className="text-3xl font-bold text-green-800 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Zyora
            </h1> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link 
              to="/" 
              className={`relative group px-1 py-2 transition ${location.pathname === '/' ? 'text-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left transition-transform duration-300 ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>

            <Link 
              to="/product" 
              className={`relative group px-1 py-2 transition ${location.pathname.startsWith('/product') && location.pathname !== '/product' ? 'text-gray-600 hover:text-green-700' : location.pathname === '/product' ? 'text-green-700' : 'text-gray-600 hover:text-green-700'}`}
            >
              Products
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left transition-transform duration-300 ${location.pathname === '/product' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            <Link
              to="/cart"
              className="relative flex items-center gap-2 text-gray-700 hover:text-green-700 transition bg-green-50 hover:bg-green-100 px-5 py-2.5 rounded-full font-semibold"
            >
              <FaShoppingCart  size={18} />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[11px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-green-700 focus:outline-none p-2 rounded-md transition"
            >
              {menuOpen ? <FaTimes className="text-red-300 fill-current" size={26} /> : <FaBars className="text-[#556b2f]" size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 transform origin-top ${
          menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          <Link 
            to="/" 
            className={`text-xl font-medium tracking-wide ${location.pathname === '/' ? 'text-green-700' : 'text-gray-700'}`}
          >
            Home
          </Link>
          <hr className="border-gray-100" />
          <Link 
            to="/product" 
            className={`text-xl font-medium tracking-wide ${location.pathname.startsWith('/product') ? 'text-green-700' : 'text-gray-700'}`}
          >
            Products
          </Link>
          <hr className="border-gray-100" />
          <Link
            to="/cart"
            className="flex items-center gap-3 text-xl font-medium text-gray-700 hover:text-green-700"
          >
            <div className="relative bg-green-100 p-3 rounded-full text-green-700">
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>
            View Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;