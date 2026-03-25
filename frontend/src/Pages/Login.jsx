import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classic from "../assets/classic.jpg"; // Using an existing image

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const intendedDestination = location.state?.from || "/";

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      // Dummy success: normally you'd save a token here
      navigate(intendedDestination); // Go to intended page
    }
  };

  const handleGoogleLogin = () => {
    // Dummy Google Login
    navigate(intendedDestination); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-4xl">
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Side Branding / Image */}
          <div className="md:w-1/2 relative hidden md:block">
            <img 
              src={classic} 
              alt="Zyora Tea Login" 
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12 text-center">
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Zyora Tea</h2>
              <p className="text-lg font-medium shadow-sm">Join us for the finest Nilgiri tea experience, freshly delivered to your door.</p>
            </div>
          </div>

          {/* Right Side Login Form */}
          <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-500 font-medium">Please login or sign up to continue</p>
            </div>

            {/* Google Authentication */}
            <button 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition shadow-sm mb-6 pb-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              Continue with Google
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-400 font-medium">Or continue with phone</span>
              </div>
            </div>

            {/* OTP Authentication Flow */}
            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="flex rounded-xl shadow-sm">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                      className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Enter mobile number"
                      maxLength="10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Send OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enter 4-digit OTP</label>
                  <input
                    type="text"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    className="block w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-center text-2xl tracking-widest font-bold text-green-700"
                    placeholder="• • • •"
                    maxLength="4"
                  />
                  <p className="mt-2 text-sm text-gray-500 flex justify-between">
                    <span>Sent to +91 {phoneNumber}</span>
                    <button type="button" onClick={() => setOtpSent(false)} className="text-green-600 hover:underline">Change</button>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Verify & Login
                </button>
              </form>
            )}

            <p className="mt-8 text-center text-xs text-gray-400">
              By continuing, you agree to Zyora's <a href="#" className="underline hover:text-gray-500">Terms of Service</a> & <a href="#" className="underline hover:text-gray-500">Privacy Policy</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
