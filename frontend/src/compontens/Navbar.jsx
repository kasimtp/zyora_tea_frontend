import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Zyora Logo"
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-green-700">Zyora</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link to="/" className="hover:text-green-600 transition">
              Home
            </Link>

            <Link to="/product" className="hover:text-green-600 transition">
              Product
            </Link>

            <Link
              to="/cart"
              className="relative hover:text-green-600 transition flex items-center gap-1"
            >
              <FaShoppingCart size={18} />
              Cart
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium">
          <Link to="/" onClick={closeMenu} className="block hover:text-green-600">
            Home
          </Link>

          <Link to="/product" onClick={closeMenu} className="block hover:text-green-600">
            Product
          </Link>

          <Link
            to="/cart"
            onClick={closeMenu}
            className="flex items-center gap-2 hover:text-green-600"
          >
            <FaShoppingCart />
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;