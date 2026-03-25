import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Zyora Tea</h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Experience the true taste of Nilgiris Zyora Tea. Handpicked Nilgiri tea, freshly packed and delivered straight to your doorstep anywhere in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-green-400 transition">Home</Link></li>
              <li><Link to="/product" className="text-gray-400 hover:text-green-400 transition">Products</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-green-400 transition">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Nilgiris, Tamil Nadu, India</li>
              <li>📞 +91 12345 67890</li>
              <li>✉️ support@zyoratea.com</li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Zyora Tea. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400 transition">Facebook</a>
            <a href="#" className="hover:text-green-400 transition">Instagram</a>
            <a href="#" className="hover:text-green-400 transition">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
