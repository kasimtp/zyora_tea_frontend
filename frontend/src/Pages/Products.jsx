import React from "react";
import chukkappi from "../assets/chukkappi.jpg";
import classic from "../assets/classic.jpg";
import green from "../assets/green.jpg";
import masala from "../assets/masala.jpg";

const Products = () => {
  return (
    <div className="max-w-7xl justify-center m-auto p-6 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
    {/* <h3 className="text-lg font-bold mb-2">Cardamom Tea</h3> */}
       <div className="flex  gap-20 flex-cols-4">
         <img src={chukkappi} alt="chukkappi" className="w-full  h-[900px] " />
         <img src={green} alt="green" className="w-full h-9/12 " />
          <img src={green} alt="green" className="w-full h-9/12 " />
           <img src={green} alt="green" className="w-full h-9/12" />
      {/* Product 1 */}
       </div>
    
      {/* Product 2
      <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
        <img src={classic} alt="classic" className="w-full h-48 object-cover" />

        <div className="p-4 text-center">
          <h3 className="text-lg font-bold mb-2">Classic Tea</h3>

          <div className="text-gray-700 space-y-1">
            <p>250 gm - ₹130</p>
            <p>500 gm - ₹260</p>
            <p>1 kg - ₹520</p>
          </div>
        </div>
      </div> */}

      {/* Product 3 */}
      {/* <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
        <img src={green} alt="green" className="w-full h-48 object-cover" />

        <div className="p-4 text-center">
          <h3 className="text-lg font-bold mb-2">Green Tea</h3>

          <div className="text-gray-700 space-y-1">
            <p>250 gm - ₹150</p>
            <p>500 gm - ₹300</p>
            <p>1 kg - ₹600</p>
          </div>
        </div>
      </div> */}

      {/* Product 4 */}
      {/* <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
        <img src={masala} alt="masala" className="w-full h-48 object-cover" />

        <div className="p-4 text-center">
          <h3 className="text-lg font-bold mb-2">Masala Tea</h3>

          <div className="text-gray-700 space-y-1">
            <p>250 gm - ₹140</p>
            <p>500 gm - ₹280</p>
            <p>1 kg - ₹560</p>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default Products;