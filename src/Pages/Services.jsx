"use client";

import React, { useState } from "react";
import { X, Droplets, Shirt, Sparkles, Wind, Truck, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ correct

export default function ServicesWithModal() {
  const [selectedService, setSelectedService] = useState(null);

  const navigate = useNavigate(); // ✅ correct

  const services = [
    {
      title: "Wash & Fold",
      desc: "Perfect for daily wear. Washed, dried, folded and packed hygienically.",
      icon: <Droplets size={22} />,
      details: {
        time: "24–48 Hours",
        price: "Starting ₹199",
        includes: [
          "Premium detergent wash",
          "Softener option available",
          "Neat folding & packing",
          "Hygienic handling",
        ],
      },
    },
    {
      title: "Wash & Iron",
      desc: "Fresh wash with professional ironing for a crisp premium look.",
      icon: <Shirt size={22} />,
      details: {
        time: "24 Hours",
        price: "Starting ₹299",
        includes: [
          "Wash + iron finishing",
          "Wrinkle-free press",
          "Perfect for office wear",
          "Clean packaging",
        ],
      },
    },
    {
      title: "Dry Cleaning",
      desc: "Safe cleaning for delicate clothes with fabric protection & shine.",
      icon: <Sparkles size={22} />,
      details: {
        time: "48 Hours",
        price: "Starting ₹499",
        includes: [
          "Safe for delicate fabrics",
          "No color fading",
          "Premium dry-clean solution",
          "Quality check before packing",
        ],
      },
    },
    {
      title: "Steam Ironing",
      desc: "Wrinkle-free finishing for office & party wear using steam press.",
      icon: <Wind size={22} />,
      details: {
        time: "Same Day Available",
        price: "Starting ₹99",
        includes: [
          "Steam press finishing",
          "Perfect for parties & formal wear",
          "Crisp collar and sleeves",
          "Quick turnaround",
        ],
      },
    },
    {
      title: "Pickup & Drop",
      desc: "Free doorstep pickup and delivery with real-time updates.",
      icon: <Truck size={22} />,
      details: {
        time: "As per schedule",
        price: "Free (selected areas)",
        includes: [
          "Doorstep pickup",
          "Doorstep delivery",
          "Live updates on order",
          "Hygienic packing",
        ],
      },
    },
    {
      title: "Express Delivery",
      desc: "Need it fast? Get same-day or next-day delivery options.",
      icon: <Clock size={22} />,
      details: {
        time: "Same Day / Next Day",
        price: "Extra charges apply",
        includes: [
          "Priority processing",
          "Fast pickup",
          "Fast cleaning",
          "Quick delivery",
        ],
      },
    },
  ];

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <div className="inline-block px-5 py-2 mt-5 rounded-full bg-white border border-gray-200 text-gray-800 text-sm font-medium">
            Our Services
          </div>
          <h2 className="mt-6 text-4xl font-semibold text-gray-900">
            Laundry Services Designed for You
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Click on any service to see details, time, and what’s included.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white">{s.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
              </div>

              <p className="text-gray-600">{s.desc}</p>

              <button
                onClick={() => setSelectedService(s)}
                className="mt-6 text-sm font-semibold text-gray-900 hover:underline"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBook={() => navigate("/Booking")} // ✅ navigate here
        />
      )}
    </div>
  );
}

function ServiceModal({ service, onClose, onBook }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
        >
          <X size={18} className="text-gray-800" />
        </button>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 text-white flex items-center justify-center">
            {service.icon}
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-1">{service.desc}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <p className="text-sm text-gray-500">Estimated Time</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">
              {service.details.time}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">
              {service.details.price}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-bold text-gray-900">What’s Included</h4>

          <ul className="mt-3 space-y-2">
            {service.details.includes.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onBook} // ✅ correct
            className="w-full py-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 text-white font-semibold hover:bg-gray-700 transition"
          >
            Book This Service
          </button>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
