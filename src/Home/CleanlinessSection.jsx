import React from "react";
import { motion } from "framer-motion";
import cleanlinessImage from "../assets/cleanliness-image.WEBP"; 

export default function CleanlinessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.3 },
    },
  };

  return (
    <section className="mt-10 relative py-20 md:py-28 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-gray-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gray-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-gray-500 rounded-full opacity-20 blur-sm"
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center lg:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-gray-700 uppercase bg-gray-200/80 rounded-full border border-gray-300/50 backdrop-blur-sm"
            >
              Who we serve
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 leading-tight"
            >
              Refreshing Cleanliness{" "}
              <span className="font-medium text-gray-600">For Everyone</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We've meticulously crafted our services to cater to diverse needs and
              preferences of all types of customers. We're here to serve anyone
              seeking safe, swift, and professional laundry services.
            </motion.p>

            {/* CTA Button with hover animation - updated to gray */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block"
            >
              <a
                href="#how-it-works"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-700 text-white font-medium rounded-full overflow-hidden shadow-lg hover:shadow-gray-700/30 transition-shadow duration-300"
              >
                <span className="relative z-10">Learn About How It Works</span>
                <svg
                  className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
           
              </a>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center gap-4 mt-12"
            >
              <div className="h-px w-16 bg-gradient-to-r from-gray-400 to-transparent"></div>
             
            </motion.div>
          </motion.div>

          {/* Right column - Glass card with image and sectors */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main glass card */}
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/50">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-8 overflow-hidden rounded-2xl"
              >
                <img
                  src={cleanlinessImage}
                  alt="Clean and fresh laundry service"
                  className="w-full h-48 md:h-56 object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </motion.div>
            </div>

            {/* Floating bubbles for extra visual interest - now gray */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-400/30 rounded-full blur-xl -z-10"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -top-6 -left-6 w-32 h-32 bg-gray-500/30 rounded-full blur-xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}