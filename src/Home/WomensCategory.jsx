import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Shirt,
  Star,
  ShoppingBag,
  Clock,
  ChevronLeft,
  ChevronRight,
  Phone,Scissors  
} from "lucide-react";

const WomensCategory = ({ products = [], onAddToCart }) => {
    const womensProducts = products.filter(p => p.serviceFor?.toLowerCase() === "women");
  const scrollRef = useRef(null);
  const [cartItems, setCartItems] = useState({});
  const [selectedVariant, setSelectedVariant] = useState({});
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const cardWidth = 260; // adjusted for better spacing
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth"
    });
  };
const getVariantQty = (product) => {
  const variant = getActiveVariant(product);
  if (!variant) return 0;
  const key = `${product.id}-${variant.type}`;
  return cartItems[key] || 0;
};
const [cartQty, setCartQty] = useState({});
const getActiveVariant = (product) => {
  return selectedVariant[product.id] || product.variants?.[0];
};
const increaseQty = (product) => {
  const variant = getActiveVariant(product);
  if (!variant) return;

  const key = `${product.id}-${variant.type}`;

  setCartItems(prev => ({
    ...prev,
    [key]: (prev[key] || 0) + 1
  }));
};
const decreaseQty = (product) => {
  const variant = getActiveVariant(product);
  if (!variant) return;

  const key = `${product.id}-${variant.type}`;

  setCartItems(prev => {
    const newQty = (prev[key] || 0) - 1;
    if (newQty <= 0) {
      const { [key]: _, ...rest } = prev;
      return rest;
    }
    return { ...prev, [key]: newQty };
  });
};
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7f9fc] to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* ---------- HEADER with refined grey palette ---------- */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#2e3b47] rounded-2xl shadow-lg shadow-gray-300/30">
              <Scissors   className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-medium  text-[#1f2a36]">
                women's Collection
              </h2>
            </div>
          </div>

       <div className="flex gap-3">
  <button
    onClick={() => scroll("left")}
    className="w-11 h-11 rounded-full bg-gray-600  flex items-center justify-center text-white hover:bg-[#1f2a36] hover:border-[#1f2a36] transition-all shadow-sm"
    aria-label="Previous"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>

  <button
    onClick={() => scroll("right")}
    className="w-11 h-11 rounded-full bg-gray-600  flex items-center justify-center text-white hover:bg-[#1f2a36] hover:border-[#1f2a36] transition-all shadow-sm"
    aria-label="Next"
  >
    <ChevronRight className="w-5 h-5" />
  </button>
</div>
        </div>

        <div
          ref={scrollRef}
      className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar"
        >
          {womensProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -8 }}
              className="min-w-[280px] max-w-[280px] bg-white rounded-2xl border border-[#e6ecf2] shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-[#c2d1dd] transition-all duration-200"
            >
              <div className="relative h-40 overflow-hidden rounded-t-2xl bg-[#d9e2ec] flex items-center justify-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Shirt className="w-10 h-10 text-[#8f9fad]" />
                )}
              </div>
              <div className="p-4">
               <div className="flex items-start justify-between gap-2">
  <h3 className="text-base font-semibold text-[#1f2a36] truncate">
    {product.name}
  </h3>

  <div className="flex items-center gap-1 bg-[#eef3f8] px-2 py-1 rounded-full shrink-0">
    <Star className="w-3 h-3 text-[#7d8f9f] fill-current" />
    <span className="text-xs font-medium text-[#2e3b47]">
      {product.rating}
    </span>
  </div>
</div>
                <p className="text-xs font-medium italic text-[#6b7f8f] truncate mt-0.5 mb-1">
                  {product.tagline}
                </p>
                <p className="text-xs font-medium text-gray-700 truncate mb-3">
                  {product.description}
                </p>

            <div className="flex items-center justify-between mb-3">
  {/* Price */}
  <div className="text-sm font-semibold text-[#1f2a36]">
    AED {product.price}
  </div>

  {/* Qty Stepper RIGHT */}
  <div className="flex items-center border border-[#d4dee6] rounded-lg overflow-hidden shrink-0 ml-auto">
    <button
      onClick={(e) => {
        e.stopPropagation();
        decreaseQty(product);
      }}
      className="w-7 h-7 flex items-center justify-center text-[#2e3b47] hover:bg-[#eef3f8]"
    >
      −
    </button>

    <span className="w-7 text-center text-xs font-semibold text-[#1f2a36]">
      {getVariantQty(product)}
    </span>

    <button
      onClick={(e) => {
        e.stopPropagation();
        increaseQty(product);
      }}
      className="w-7 h-7 flex items-center justify-center text-[#2e3b47] hover:bg-[#eef3f8]"
    >
      +
    </button>
  </div>
</div>     

                {/* Variant chips – subtle grey */}
<div className="flex gap-1 mb-3 overflow-x-auto hide-scrollbar whitespace-nowrap">
                    {product.variants?.slice(0, 4).map((v, i) => (
                    <span
                      key={i}
                      className="text-[8px] font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full border border-[#d4dee6]"
                    >
                      {v.type}
                    </span>
                  ))}
                </div>

             <motion.button
  whileHover={{ y: -2, scale: 1.02 }}
  whileTap={{ scale: 0.97 }}
  onClick={() => onAddToCart?.(product)}
  className="relative w-full py-2.5 rounded-full 
             bg-gradient-to-r from-gray-500 to-gray-500
             text-white text-sm font-semibold
             flex items-center justify-center gap-2
             shadow-lg shadow-gray-400/30
             overflow-hidden"
>
  {/* shine effect */}
  <span className="absolute inset-0 overflow-hidden rounded-xl">
    <span className="absolute -left-1/2 top-0 h-full w-1/2 
                     bg-gradient-to-r from-transparent via-white/20 to-transparent 
                     animate-[shine_2.5s_linear_infinite]" />
  </span>

  <ShoppingBag className="w-4 h-4" />
  Add to cart
</motion.button>
<div className="grid grid-cols-2 gap-2 mt-2">
  
  {/* Rent Now */}
  <motion.button
    whileHover={{ y: -1 }}
    whileTap={{ scale: 0.95 }}
    className="py-2.5 rounded-full border border-gray-300 
                text-gray-600 text-xs font-semibold
               flex items-center justify-center gap-1.5
               shadow-sm "
  >
    {/* rent icon */}
    <Phone className="w-3.5 h-3.5" />
    Call
  </motion.button>

  {/* WhatsApp */}
  <motion.a
    whileHover={{ y: -1 }}
    whileTap={{ scale: 0.95 }}
    href={`https://wa.me/?text=I'm interested in ${product.name}`}
    target="_blank"
    rel="noopener noreferrer"
    className="py-2.5 rounded-full border
               border-gray-200 text-gray-500 text-xs font-semibold
               flex items-center justify-center gap-1.5
               shadow-sm "
  >
    {/* WhatsApp icon */}
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
      <path d="M12 2C6.48 2 2 6.03 2 11c0 1.77.52 3.43 1.42 4.86L2 22l6.32-1.65C9.84 20.78 10.9 21 12 21c5.52 0 10-4.03 10-9s-4.48-9-10-9zm.07 16.17c-1.02 0-2.02-.27-2.9-.78l-.21-.12-3.75.98 1-3.63-.14-.23c-.59-.95-.9-2.05-.9-3.17 0-3.37 3.13-6.12 6.97-6.12 3.84 0 6.97 2.75 6.97 6.12s-3.13 6.12-6.97 6.12zm3.81-4.58c-.21-.1-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.1-.14.2-.54.68-.66.82-.12.14-.24.16-.45.05-.21-.1-.88-.32-1.67-1.02-.62-.55-1.03-1.22-1.15-1.43-.12-.21-.01-.32.09-.42.09-.09.21-.24.31-.36.1-.12.14-.2.21-.33.07-.14.03-.25-.02-.35-.05-.1-.47-1.12-.64-1.53-.17-.41-.34-.35-.47-.36h-.4c-.14 0-.36.05-.55.25-.19.2-.72.7-.72 1.71 0 1.01.74 1.98.85 2.12.1.14 1.46 2.23 3.55 3.12.5.21.89.33 1.19.42.5.16.95.14 1.31.09.4-.06 1.24-.51 1.42-1 .18-.49.18-.91.13-1-.05-.09-.19-.14-.4-.24z"/>
    </svg>
    WhatsApp
  </motion.a>

</div>
              </div>
            </motion.div>
          ))}
        </div>

        
            </div>

      <style>
      {`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}
      </style>
    </section>
  );
};

export default WomensCategory;
