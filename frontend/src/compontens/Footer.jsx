import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2f3a2d] text-white w-full">
      
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <h2 
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Zyora <span className="text-green-400">Tea</span>
            </h2>
            <p className="text-white/60 leading-relaxed max-w-sm mb-8">
              From the misty blue Nilgiris to your cup. We bring you the finest handpicked tea with unmatched freshness, purity, and flavor.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/50 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/50 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>
              <a 
                href="https://wa.me/917592084226" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/50 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white/60 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-green-400 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-white/60 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-green-400 transition-all duration-300"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-white/60 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-green-400 transition-all duration-300"></span>
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white/40 mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-0.5">📍</span>
                <span>Nilgiris, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-0.5">📞</span>
                <span>+91 7592084226</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-0.5">✉️</span>
                <span>support@zyoratea.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Zyora Tea. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-green-700 transition">Privacy Policy</a>
            <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            <a href="#" className="hover:text-green-700 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
