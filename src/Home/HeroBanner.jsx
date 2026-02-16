import React from "react";
import { Shield, Zap, ArrowRight } from "lucide-react";
import bannerImage from "../assets/Banner.png";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
    const navigate = useNavigate();

  return (
        <section 
        className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)'
        }}
      >
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />
      <div className="relative max-w-7xl mx-auto px-6 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
          <div className="text-white space-y-8">
            <span className="inline-block px-4 py-2 rounded-full bg-white/15 backdrop-blur text-sm font-medium tracking-wide">
              Smart Laundry System
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Smart Laundry.
              <br />
              <span className="text-gray-300">Zero Effort.</span>
            </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              From pickup to delivery, Keelean handles your laundry with
              technology-driven precision and premium fabric care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => navigate("/Pickup")}
               className="group px-8 py-4 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center shadow-xl hover:-translate-y-1">
                Schedule Pickup
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate("/trackorder")}
              className="px-8 py-4 rounded-full border border-white/40 hover:bg-white/10 transition-all duration-300 font-semibold text-lg backdrop-blur">
                Track Order
              </button>
            </div>
           
          </div>
          <div className="hidden lg:flex flex-col gap-6 items-end">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:-translate-y-1 transition">
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-white/10">
                  <Shield className="w-7 h-7 text-gray-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Hygiene First
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Hospital-grade cleaning and fabric-safe sanitization
                    for every garment.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl hover:-translate-y-1 transition">
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-white/10">
                  <Zap className="w-7 h-7 text-gray-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Smart Tracking
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Real-time order updates from pickup to delivery.
                  </p>
                  <div className="mt-3 w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gray-300 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
};

export default HeroBanner;
