import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroBanner = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Laundry products data with Unsplash images
  const products = [
    {
      id: 1,
      name: "Premium Detergent",
      description: "Eco-friendly formula",
      image: "https://i.pinimg.com/736x/b3/16/23/b3162364b1943326e747b4713d3021cb.jpg",
      color: "from-gray-800 to-gray-600"
    },
    {
      id: 2,
      name: "Fabric Softener",
      description: "Long-lasting freshness",
      image: "https://i.pinimg.com/1200x/02/ef/02/02ef023fec9baaae8bcf3da244e49d54.jpg",
      color: "from-gray-700 to-gray-500"
    },
    {
      id: 3,
      name: "Stain Remover",
      description: "Tough on stains, gentle on fabric",
      image: "https://i.pinimg.com/1200x/6b/83/3c/6b833cba743b0e57a48a37cf86c61d47.jpg",
      color: "from-gray-900 to-gray-700"
    },
    {
      id: 4,
      name: "Eco Wash",
      description: "100% biodegradable",
      image: "https://i.pinimg.com/736x/63/cf/98/63cf98f44877186daf77f695805d74e3.jpg",
      color: "from-gray-600 to-gray-400"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentProductIndex((prev) => (prev + 1) % products.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, products.length]);

  // Manual navigation
  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    })
  };

  const currentProduct = products[currentProductIndex];

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white min-h-[85vh] pt-24 lg:pt-28 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #9ca3af 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * 600, Math.random() * 600],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT CIRCLE IMAGE - Laundry Worker */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-72 h-72 rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Laundry Worker"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* CENTER TEXT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center lg:text-left max-w-xl"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="uppercase tracking-widest text-gray-300 mb-2 flex items-center justify-center lg:justify-start space-x-2"
            >
              <span className="w-8 h-0.5 bg-gray-400"></span>
              <span>Keelean Laundry</span>
              <span className="w-8 h-0.5 bg-gray-400"></span>
            </motion.p>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              FRESH & CLEAN <br /> LAUNDRY
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              Premium laundry service with advanced fabric care, hygienic
              washing and doorstep pickup & delivery for all your garments.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, backgroundColor: 'white', color: '#1f2937' }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all font-semibold shadow-xl"
            >
              BOOK NOW
            </motion.button>
          </motion.div>

          {/* RIGHT PRODUCT IMAGE - WITH AUTO-SCROLL */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col items-center lg:items-end"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
           <div className="relative w-full max-w-md h-[480px] flex items-center justify-center">
  <AnimatePresence initial={false} custom={direction} mode="wait">
  <motion.div
  key={currentProduct.id}
  custom={direction}
  variants={slideVariants}
  initial="enter"
  animate="center"
  exit="exit"
  className="absolute inset-0 flex items-center justify-center"
>

  <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
  className="relative group flex flex-col items-center"
>
  <div className={`absolute inset-0 bg-gradient-to-r ${currentProduct.color} rounded-full blur-3xl opacity-30`} />

  <img
  src={currentProduct.image}
  alt={currentProduct.name}
  className="h-80 lg:h-[420px] object-contain relative z-10 drop-shadow-2xl"
/>

<div className="text-center -mt-2">

    <h3 className="text-xl font-semibold text-white leading-tight">
      {currentProduct.name}
    </h3>
    <p className="text-gray-300 text-sm leading-tight">
      {currentProduct.description}
    </p>
  </div>
</motion.div>

     
    </motion.div>
  </AnimatePresence>
</div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;