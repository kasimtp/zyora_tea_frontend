import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddressPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedSize, quantity } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  // Redirect if accessed directly without a product
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">No product selected</h2>
        <button onClick={() => navigate('/product')} className="text-green-600 hover:underline">
          Go back to Products
        </button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const phoneNumber = "917592084226"; // User requested Whatsapp number
    const totalAmount = selectedSize.price * quantity;
    
    // Format the WhatsApp message
    const message = `Hello Zyora Tea! I would like to place an order:

*--- ORDER DETAILS ---*
🛍️ *Product:* ${product.name}
⚖️ *Size:* ${selectedSize.size}
🔢 *Quantity:* ${quantity}
💰 *Total Price:* ₹${totalAmount}

*--- DELIVERY DETAILS ---*
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
🏠 *Address:* ${formData.address}
📍 *Pincode:* ${formData.pincode}

Please confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        
        {/* Left Side: Order Summary */}
        <div className="md:w-1/3 bg-green-50 p-8 border-r border-green-100 flex flex-col">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-40 object-cover rounded-xl shadow-md border border-gray-100 mb-6"
          />
          <div className="space-y-3 flex-grow">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{product.name}</span>
              <span className="font-semibold text-gray-900">₹{selectedSize.price}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Size</span>
              <span className="font-semibold text-gray-900">{selectedSize.size}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Quantity</span>
              <span className="font-semibold text-gray-900">x{quantity}</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-green-200">
            <div className="flex justify-between font-bold text-lg text-gray-900">
              <span>Total</span>
              <span className="text-green-700">₹{selectedSize.price * quantity}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Delivery Details Form */}
        <div className="md:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Details</h2>
          <form onSubmit={handleWhatsAppOrder} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name} 
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  value={formData.phone} 
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address</label>
              <textarea 
                name="address" 
                required
                rows="3"
                value={formData.address} 
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                placeholder="House/Flat No, Street, Landmark, City"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
              <input 
                type="text" 
                name="pincode" 
                required
                value={formData.pincode} 
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
                placeholder="e.g. 643001"
              />
            </div>

            <button 
              type="submit"
              className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex justify-center items-center gap-3 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Send Order via WhatsApp
            </button>
            <p className="text-center text-sm text-gray-500">You will be redirected to WhatsApp to complete your purchase safely.</p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AddressPage;
