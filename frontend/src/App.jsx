import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from  "./compontens/Navbar.jsx"
import Hero from "./Pages/Hero.jsx";
import Home  from  "./Pages/Home.jsx"



function App() {
  return (
    <>
      {/* 👇 Navbar ivide mention cheyyunnu */}
      {/* <Navbar /> */}

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/hero" element={<Hero />}/>
         <Route path="/"element={<Home />}/>
        {/* <Route path="/product" element={<Product />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </>
  );
}

export default App;