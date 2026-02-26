import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Plus, Minus, Users, Search, Filter, Heart, Star, 
  Truck, Shield, Clock, Repeat, Droplets, X, Check, Award, 
  Sparkles, Scissors, Shirt, TrendingUp, Gift, 
  ShoppingCart
} from 'lucide-react';
import products from "../Data/Product";
const LaundryManagementSystem = () => {
  const [cartItems, setCartItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedServiceType, setSelectedServiceType] = useState('all');
  const [variantPopup, setVariantPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState({});
const [selectedOption, setSelectedOption] = useState(null);
const handleSelectOption = (option) => {
  setSelectedOption(option);
};


  const categories = [
    { id: 'all', name: 'All Items', icon: '🛍️', count: products.length },
    { id: 'men', name: "Men's Wear", icon: '👔', count: products.filter(p => p.serviceFor === 'Men').length },
    { id: 'women', name: "Women's Wear", icon: '👗', count: products.filter(p => p.serviceFor === 'Women').length },
    { id: 'unisex', name: 'Unisex', icon: '🧥', count: products.filter(p => p.serviceFor === 'Unisex').length }
  ];
  const filteredProducts = products.filter(product => {
  const matchesSearch =
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "all" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productId, variant) => {
    const key = `${productId}-${variant.type}`;
    setCartItems(prev => ({
      ...prev,
      [key]: (prev[key] || 0) + 1
    }));
    
    setTimeout(() => {
      const element = document.getElementById('cart-summary');
      if (element) {
        element.classList.add('animate-pulse');
        setTimeout(() => element.classList.remove('animate-pulse'), 500);
      }
    }, 100);
  };

  const handleRemoveFromCart = (productId, variantType) => {
    const key = `${productId}-${variantType}`;
    setCartItems(prev => {
      const newCount = (prev[key] || 0) - 1;
      if (newCount <= 0) {
        const { [key]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: newCount };
    });
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((total, [key, count]) => {
      const [productId, variantType] = key.split('-');
      const product = products.find(p => p.id === parseInt(productId));
      const variant = product?.variants.find(v => v.type === variantType);
      return total + (variant?.price || product?.price || 0) * count;
    }, 0);
  };

  const getTotalSavings = () => {
    return Object.entries(cartItems).reduce((total, [key, count]) => {
      const [productId, variantType] = key.split('-');
      const product = products.find(p => p.id === parseInt(productId));
      const variant = product?.variants.find(v => v.type === variantType);
      const savings = (product?.originalPrice - (variant?.price || product?.price)) * count;
      return total + (savings > 0 ? savings : 0);
    }, 0);
  };
const [cartQty, setCartQty] = useState({});

const increaseQty = (productId) => {
  const variant = selectedVariant[productId];
  if (!variant) return;

  const key = `${productId}-${variant.type}`;

  setCartItems((prev) => ({
    ...prev,
    [key]: (prev[key] || 0) + 1
  }));
};

const decreaseQty = (productId) => {
  const variant = selectedVariant[productId];
  if (!variant) return;

  const key = `${productId}-${variant.type}`;

  setCartItems((prev) => {
    const newQty = (prev[key] || 0) - 1;
    if (newQty <= 0) {
      const { [key]: _, ...rest } = prev;
      return rest;
    }
    return { ...prev, [key]: newQty };
  });
};
  // const filteredProducts = products.filter(product => {
  //   const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                        product.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
  //   let matchesCategory = true;
  //   if (selectedCategory !== 'all') {
  //     if (selectedCategory === 'men') matchesCategory = product.serviceFor === 'Men';
  //     else if (selectedCategory === 'women') matchesCategory = product.serviceFor === 'Women';
  //     else if (selectedCategory === 'unisex') matchesCategory = product.serviceFor === 'Unisex';
  //   }
    
  //   return matchesSearch && matchesCategory;
  // });
const getVariantQty = (productId) => {
  const variant = selectedVariant[productId];
  if (!variant) return 0;
  const key = `${productId}-${variant.type}`;
  return cartItems[key] || 0;
};
const getLastCartItem = () => {
  const entries = Object.entries(cartItems);
  if (!entries.length) return null;

  const [key] = entries[entries.length - 1];
  const [productId, variantType] = key.split("-");

  const product = products.find(p => p.id === parseInt(productId));
  const variant = product?.variants.find(v => v.type === variantType);

  return {
    product,
    variant
  };
};
const lastItem = getLastCartItem();
const getDeliveryFee = () => {
  const total = getTotalPrice();
  if (total === 0) return 0;
  return total >= 499 ? 0 : 49;   // free delivery over ₹499
};

const getGrandTotal = () => {
  return getTotalPrice() + getDeliveryFee();
};
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-24">
     <div className="container mx-auto px-4 sm:px-6 py-6 max-w-7xl">
  <div className="flex flex-col gap-4">
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">   
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative flex-1 max-w-2xl group w-full"
      >
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-gray-600 transition-colors" />
        <input
          type="text"
          placeholder="Search for clothes, fabrics, or services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-gray-100 focus:border-gray-300 outline-none transition-all bg-white shadow-sm focus:shadow-md"
        />
        {searchTerm && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setSearchTerm('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </motion.div>
  <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setShowCart(true)}
  className="flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-5 py-3 rounded-2xl shadow-lg w-full md:w-auto justify-center"
>
  <div className="relative">
    <ShoppingCart className="w-5 h-5" />

    {getCartCount() > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
        {getCartCount()}
      </span>
    )}
  </div>

  {/* <span className="text-sm font-semibold">
    {getCartCount() > 0 ? `${getCartCount()} items` : "Select item"}
  </span> */}
</motion.button>
    </div>
  </div>
</div>

      {/* Products Grid - Cards with reduced width */}
      <div className="container mx-auto px-4 sm:px-6 py-6 max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
            {/* <p className="text-sm text-gray-500">{filteredProducts.length} items available</p> */}
          </div>
        </div>

        <AnimatePresence>
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => {
                  setSelectedProduct(product);
                  setVariantPopup(true);
                }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 overflow-hidden group w-full max-w-[280px]"
              >
                {/* Product Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Wishlist Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-3 right-3 w-8 h-8 rounded-full shadow-lg flex items-center justify-center transition-all ${
                      wishlist.includes(product.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                  </motion.button>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badges?.map((badge, idx) => (
                        <div key={idx} className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-0.5 rounded-full text-[10px] font-semibold shadow-lg">
                        {badge}
                      </div>
                    ))}
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] flex items-center space-x-1">
                    {product.serviceFor === 'Men' && <Shirt className="w-2.5 h-2.5" />}
                    {product.serviceFor === 'Women' && <Scissors className="w-2.5 h-2.5" />}
                    {product.serviceFor === 'Unisex' && <Users className="w-2.5 h-2.5" />}
                    <span>{product.serviceFor}'s Wear</span>
                  </div>
                </div>

    {/* Product Details */}
<div className="p-3">
  <div className="flex items-start justify-between gap-2">
    
    {/* LEFT CONTENT */}
    <div className="flex-1">
      <h3 className="text-sm font-bold text-gray-800 group-hover:text-gray-600 transition-colors line-clamp-1">
        {product.name}
      </h3>
      <p className="text-[10px] font-medium text-gray-500 line-clamp-1">
        {product.description}
      </p>
      <p className="text-[10px] font-medium text-gray-500 mt-0.5 italic flex items-center">
        <Sparkles className="w-2.5 h-2.5 mr-0.5 text-yellow-500" />
        "{product.tagline}"
      </p>
    </div>

    {/* RIGHT QTY STEPPER */}
         <div className="flex items-center bg-gray-50 px-1.5 py-0.5 rounded-lg border border-gray-100">
        <Star className="w-2.5 h-2.5 text-yellow-500 fill-current" />
        <span className="ml-0.5 text-[10px] font-semibold">
          {product.rating}
        </span>
      </div>
  </div>

  {/* Rating + Services */}
  <div className="mt-2">
    <div className="flex items-center justify-between mb-1">
      <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
        Services
      </p>
<div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-0.5 py-[2px]">
  
  <button
    onClick={(e) => {
      e.stopPropagation();   // ⭐ prevent popup
      decreaseQty(product.id);
    }}
    className="w-4 h-4 flex items-center justify-center rounded hover:bg-gray-100"
  >
    <Minus className="w-2.5 h-2.5 text-gray-700" />
  </button>

  <span className="w-4 text-center text-[10px] font-bold text-gray-800">
    {getVariantQty(product.id)}
  </span>

  <button
    onClick={(e) => {
      e.stopPropagation();   // ⭐ prevent popup
      increaseQty(product.id);
    }}
    className="w-4 h-4 flex items-center justify-center rounded hover:bg-gray-100"
  >
    <Plus className="w-2.5 h-2.5 text-gray-700" />
  </button>

</div>
</div>
    <div className="flex flex-wrap gap-1">
{product.variants?.slice(0, 3).map((variant, idx) => (
          <div
          key={idx}
          className="bg-gray-50 border text-[10px] font-semibold text-gray-500 border-gray-200 rounded-lg px-1.5 py-0.5"
        >
          {variant.type}
        </div>
      ))}
    </div>
  </div>
</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {getCartCount() > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200 p-3 md:hidden z-30"
          >
            <div className="container mx-auto flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total Items</p>
                <p className="text-lg font-bold text-gray-800">{getCartCount()}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Total Amount</p>
                <p className="text-lg font-bold text-gray-800">₹{getTotalPrice()}</p>
                {getTotalSavings() > 0 && (
                  <p className="text-xs text-green-600">Save ₹{getTotalSavings()}</p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg flex items-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Checkout</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {variantPopup && selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVariantPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-32 bg-gradient-to-r from-gray-800 to-gray-900">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <button
                  onClick={() => setVariantPopup(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-bold text-xl text-white">{selectedProduct.name}</h3>
                  <p className="text-sm text-white/80">{selectedProduct.tagline}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{selectedProduct.reviews} reviews</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {selectedProduct.serviceFor}'s Wear
                  </div>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                  {selectedProduct.variants.map((variant, idx) => {
                    const isSelected = selectedVariant[selectedProduct.id]?.type === variant.type;
                    const isPopular = variant.popular;

                    return (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() =>
                          setSelectedVariant((prev) => ({
                            ...prev,
                            [selectedProduct.id]: variant
                          }))
                        }
                        className={`w-full flex items-center justify-between border-2 rounded-xl px-4 py-3 transition-all relative overflow-hidden ${
                          isSelected
                            ? "border-gray-900 bg-gray-50"
                            : "border-gray-100 hover:border-gray-300"
                        }`}
                      >
                        {isPopular && (
                          <div className="absolute top-0 right-0 bg-gray-500 text-white font-semibold text-[10px] px-2 py-0.5 rounded-bl-lg">
                            Popular
                          </div>
                        )}
                        <div className="flex items-center pt-2 space-x-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'border-gray-900' : 'border-gray-300'
                          }`}>
                            {isSelected && <div className="w-3 h-3 bg-gray-900 rounded-full"></div>}
                          </div>
                          <div className="text-left">
                            <span className={`font-semibold text-sm ${isSelected ? 'text-gray-800' : 'text-gray-700'}`}>
                              {variant.type}
                            </span>
                       
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`font-bold text-base ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                            ₹{variant.price}
                          </span>
                     
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              <motion.button
                whileHover={{
                  scale: selectedVariant[selectedProduct.id] ? 1.04 : 1,
                  y: selectedVariant[selectedProduct.id] ? -2 : 0
                }}
                whileTap={{
                  scale: selectedVariant[selectedProduct.id] ? 0.96 : 1
                }}
                disabled={!selectedVariant[selectedProduct.id]}
              onClick={() => {
  const variant = selectedVariant[selectedProduct.id];
  if (!variant) return;

  const key = `${selectedProduct.id}-${variant.type}`;

  setCartItems((prev) => ({
    ...prev,
    [key]: prev[key] ? prev[key] : 1   // only once add
  }));

  setVariantPopup(false);
}}
                className={`
                  relative overflow-hidden
                  mt-4 w-full py-2.5 rounded-full
                  font-semibold text-sm
                  transition-all duration-300
                  flex items-center justify-center gap-2
                  ${
                    selectedVariant[selectedProduct.id]
                      ? "bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 text-white shadow-md hover:shadow-lg"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                {selectedVariant[selectedProduct.id] && (
                  <span className="absolute inset-0 overflow-hidden rounded-lg">
                    <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_2.5s_linear_infinite]" />
                  </span>
                )}

                {selectedVariant[selectedProduct.id] ? (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart • AED {selectedVariant[selectedProduct.id].price}</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Select option</span>
                  </>
                )}
              </motion.button>
                <div className="mt-4 p-3 bg-gray-50 rounded-xl flex items-center space-x-2">
                  <Droplets className="w-4 h-4 text-gray-500" />
                  <span className="text-xs font-medium text-gray-600">{selectedProduct.fabricCare}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
  {showCart && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowCart(false)}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
      />

      {/* Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-bold text-gray-800">
            Your Cart ({getCartCount()})
          </h3>

          <button
            onClick={() => setShowCart(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {Object.entries(cartItems).map(([key, qty]) => {
            const [productId, variantType] = key.split("-");
            const product = products.find(p => p.id === parseInt(productId));
            const variant = product?.variants.find(v => v.type === variantType);

            if (!product || !variant) return null;

            return (
       <div
  key={key}
  className="flex items-center gap-3 bg-gray-50 rounded-xl p-2"
>
  <img
    src={product.image}
    alt={product.name}
    className="w-14 h-14 rounded-lg object-cover"
  />

  <div className="flex-1">
    <p className="text-sm font-semibold text-gray-800">
      {product.name}
    </p>
    <p className="text-xs text-gray-500">
      {variant.type}
    </p>
     <p className="text-xs text-gray-600">
    {qty} {qty === 1 ? "piece" : "pieces"} 
  </p>

    {/* qty × price */}
    {/* <p className="text-xs text-gray-500">
      {qty} × ₹{variant.price}
    </p> */}
  </div>

  {/* line total */}
  <div className="text-right">
    <p className="text-sm font-bold text-gray-900">
      ₹{qty * variant.price}
    </p>
  </div>
</div>


            );
          })}
 
  <div className=" p-4 space-y-3">

  {/* price breakdown */}
  <div className="space-y-1 text-sm">
    
    <div className="flex justify-between text-gray-600">
      <span>Items Total</span>
      <span>₹{getTotalPrice()}</span>
    </div>

    {getTotalSavings() > 0 && (
      <div className="flex justify-between text-green-600">
        <span>Savings</span>
        <span>-₹{getTotalSavings()}</span>
      </div>
    )}

    <div className="flex justify-between text-gray-600">
      <span>Delivery Fee</span>
      {getDeliveryFee() === 0 ? (
        <span className="text-green-600 font-medium">FREE</span>
      ) : (
        <span>₹{getDeliveryFee()}</span>
      )}
    </div>

  {/* free delivery hint */}
  {getDeliveryFee() > 0 && (
    <div className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
      Add ₹{499 - getTotalPrice()} more for FREE delivery
    </div>
  )}

  {/* grand total */}
  <div className="flex justify-between items-center pt-2 border-t">
    <span className="font-semibold text-gray-800">Grand Total</span>
    <span className="text-lg font-bold text-gray-900">
      ₹{getGrandTotal()}
    </span>
  </div>


</div>

  {/* Cancellation policy */}
  <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-600 leading-relaxed">
    <span className="font-semibold text-gray-800">Cancellation Policy:</span>
    <br />
    Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided if applicable.
  </div>

  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 rounded-xl font-semibold shadow-lg"
  >
    Proceed to Checkout
  </motion.button>
</div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LaundryManagementSystem;