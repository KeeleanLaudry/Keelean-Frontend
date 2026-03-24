import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shirt, Star, ShoppingBag, ChevronLeft, ChevronRight, Phone } from "lucide-react";

const CategorySection = ({
  title,
  icon: Icon,
  products = [],
  filterFn,
  onAddToCart
}) => {
  const categoryProducts = products.filter(filterFn);
  const scrollRef = useRef(null);

  const [cartItems, setCartItems] = useState({});
  const [selectedVariant, setSelectedVariant] = useState({});

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth"
    });
  };

  const getActiveVariant = (product) =>
    selectedVariant[product.id] || product.variants?.[0];

  const getVariantQty = (product) => {
    const variant = getActiveVariant(product);
    if (!variant) return 0;
    const key = `${product.id}-${variant.type}`;
    return cartItems[key] || 0;
  };

  const increaseQty = (product) => {
    const variant = getActiveVariant(product);
    if (!variant) return;
    const key = `${product.id}-${variant.type}`;

    setCartItems((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1
    }));
  };

  const decreaseQty = (product) => {
    const variant = getActiveVariant(product);
    if (!variant) return;
    const key = `${product.id}-${variant.type}`;

    setCartItems((prev) => {
      const qty = (prev[key] || 0) - 1;
      if (qty <= 0) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: qty };
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f7f9fc] to-white">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-[#2e3b47] rounded-2xl shadow-lg shadow-gray-300/30">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-medium text-[#1f2a36]">
              {title}
            </h2>
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

        {/* Cards */}
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar">
          {categoryProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="min-w-[280px] max-w-[280px] bg-white rounded-2xl border border-[#e6ecf2] shadow-lg hover:shadow-xl"
            >
              <div className="h-40 bg-[#d9e2ec] rounded-t-2xl overflow-hidden flex items-center justify-center">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
                ) : (
                  <Shirt className="w-10 h-10 text-[#8f9fad]" />
                )}
              </div>

              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-semibold truncate">{product.name}</h3>
                  <div className="flex items-center gap-1 bg-gray-100 px-2 rounded-full">
                    <Star className="w-3 h-3" />
                    <span className="text-xs">{product.rating}</span>
                  </div>
                </div>
                 <p className="text-[10px] font-medium text-gray-500 truncate">
                  {product.tagline}
                </p>

                <p className="text-xs font-semibold text-gray-500 truncate">
                  {product.description}
                </p>

                <div className="flex justify-between mt-3">
                  <span className="font-semibold">AED {product.price}</span>

                  <div className="flex border rounded-lg">
                    <button onClick={() => decreaseQty(product)} className="px-2">−</button>
                    <span className="px-2">{getVariantQty(product)}</span>
                    <button onClick={() => increaseQty(product)} className="px-2">+</button>
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart?.(product)}
                  className="mt-3 w-full py-2 rounded-full bg-gray-600 text-white"
                >
                  <ShoppingBag className="w-4 h-4 inline mr-1"/>
                  Add to cart
                </button>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <button className="border rounded-full py-2 text-xs">
                    <Phone className="w-3 h-3 inline"/> Call
                  </button>

                  <a
                    href={`https://wa.me/?text=I'm interested in ${product.name}`}
                    className="border rounded-full py-2 text-xs text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;