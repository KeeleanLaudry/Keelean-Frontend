import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";

const popularServices = [
  {
    id: 1,
    name: "Shirt Care",
    price: 89,
    rating: 4.6,
    category: "men",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400",
  },
  {
    id: 2,
    name: "Saree Care",
    price: 249,
    rating: 4.8,
    category: "women",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
  },
  {
    id: 3,
    name: "Blanket Wash",
    price: 349,
    rating: 4.7,
    category: "home",
    image:
      "https://images.unsplash.com/photo-1603251579431-8041402bdeda?w=400",
  },
  {
    id: 4,
    name: "Shoe Cleaning",
    price: 299,
    rating: 4.5,
    category: "footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
  },
];

const PopularServicesPro = ({ onAddToCart, onCardClick, onCategoryClick }) => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Services
            </h2>
            <p className="text-gray-500 text-sm">
              Most booked laundry services
            </p>
          </div>

          <button
            onClick={() => onCategoryClick("all")}
            className="text-sm font-semibold text-gray-600 hover:text-gray-900"
          >
            View All →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {popularServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              onClick={() => onCardClick(service)}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden cursor-pointer relative"
            >
              {/* Shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_2s_linear_infinite]" />
              </div>

              {/* Image */}
              <div className="h-36 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  {service.name}
                </h3>

                {/* Rating + Price */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center bg-gray-100 px-2 py-0.5 rounded-lg text-xs">
                    <Star className="w-3 h-3 text-gray-700 fill-current" />
                    <span className="ml-1 text-gray-700 font-medium">
                      {service.rating}
                    </span>
                  </div>

                  <span className="text-sm font-bold text-gray-900">
                    ₹{service.price}
                  </span>
                </div>

                {/* Add Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(service);
                  }}
                  className="mt-3 w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg text-xs font-semibold hover:bg-gray-800"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Add to Cart
                </motion.button>

                {/* Category Link */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCategoryClick(service.category);
                  }}
                  className="mt-2 text-[11px] text-gray-500 hover:text-gray-800 underline"
                >
                  View similar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* shimmer keyframe */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
};

export default PopularServicesPro;