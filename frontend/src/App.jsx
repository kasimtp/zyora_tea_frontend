import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from  "./compontens/Navbar.jsx"
import Hero from "./Pages/Hero.jsx";
import Home  from  "./Pages/Home.jsx"
import Products from "./Pages/Products.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import AddressPage from "./Pages/AddressPage.jsx";
import Cart from "./Pages/Cart.jsx";
import Footer from "./compontens/Footer.jsx";



function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 👇 Navbar ivide mention cheyyunnu */}
      <Navbar />

      <div className="flex-grow">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
           <Route path="/"element={<Home />}/>
          <Route path="/hero" element={<Hero />}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;