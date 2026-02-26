import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, 
  Shield, 
  Leaf, 
  Droplets, 
  Wind, 
  ArrowRight,
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Play,
  Award,
  Users,
  Home,
  Sofa,
  Maximize2,
  Wifi,
  Bath,
  Sparkle,
  CheckCircle2
} from "lucide-react";

// Import images (add your images in assets folder)
import heroBg from "../assets/banner.png";
import aboutImg from "../assets/banner.png";
import service1 from "../assets/banner.png";
import service2 from"../assets/banner.png";
import service3 from "../assets/banner.png";
import teamMember from"../assets/banner.png";
import testimonialImg from "../assets/banner.png";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  // Stats data
  const stats = [
    { number: "15K+", label: "Happy Clients", icon: Users },
    { number: "98%", label: "Satisfaction", icon: Star },
    { number: "50+", label: "Expert Cleaners", icon: Award },
    { number: "24/7", label: "Support", icon: Clock }
  ];

 
  // Process steps
  const processSteps = [
    { 
      number: "01", 
      title: "Book Online", 
      description: "Schedule your cleaning in just 60 seconds",
      icon: Wifi 
    },
    { 
      number: "02", 
      title: "We Arrive", 
      description: "Professional cleaners with eco-friendly equipment",
      icon: Users 
    },
    { 
      number: "03", 
      title: "Deep Clean", 
      description: "Thorough cleaning with attention to detail",
      icon: Sparkle 
    },
    { 
      number: "04", 
      title: "Enjoy Fresh", 
      description: "Return to a sparkling clean space",
      icon: CheckCircle2 
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "The team did an amazing job cleaning my entire house. Very professional and thorough!",
      rating: 5,
      image: testimonialImg
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "Our office has never looked better. Highly recommend their commercial cleaning service.",
      rating: 5,
      image: testimonialImg
    },
    {
      name: "Emily Davis",
      role: "Pet Owner",
      content: "Love that they use pet-safe products. My dog was completely relaxed during cleaning.",
      rating: 5,
      image: testimonialImg
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="absolute top-0 left-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img src={aboutImg} alt="Cleaning" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="absolute top-32 right-0 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img src={service1} alt="Cleaning" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="absolute bottom-0 left-20 w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img src={service2} alt="Cleaning" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -right-4 top-1/2 w-32 h-32 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full flex items-center justify-center text-white font-bold"
                >
                  <div className="text-center">
                    <div className="text-lg">15+</div>
                    <div className="text-xs">Years</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
           <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <span className="text-sm font-semibold text-gray-500 tracking-wider">
    ABOUT US
  </span>

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-4xl font-bold mt-4 mb-6"
  >
    Cleaning Products Safe for
    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
      Children and Pets
    </span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="text-gray-600 mb-6 leading-relaxed"
  >
    We provide professional laundry and home cleaning services designed for
    modern households. Our trained staff uses eco-friendly detergents,
    advanced equipment, and hygienic processes to ensure your clothes and
    living spaces remain fresh, safe, and spotless. From everyday laundry
    to deep home sanitation, we deliver reliable and affordable solutions.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35 }}
    className="text-gray-600 mb-8 leading-relaxed"
  >
    With years of experience serving families, working professionals, and
    businesses, we focus on convenience, quality care, and timely service.
    Our pickup & delivery model saves your time while maintaining premium
    fabric care standards.
  </motion.p>

  {/* Key Services */}
  <div className="space-y-4 mb-8">
    {[
      "Shine & Sparkle Home Cleaning",
      "Premium Laundry & Garment Care",
      "FreshWave Upholstery Refreshing",
      "Kitchen & Bathroom Deep Sanitization",
      "Eco-Friendly & Pet-Safe Cleaning",
      "On-Time Pickup & Doorstep Delivery"
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 + index * 0.1 }}
        className="flex items-center space-x-3"
      >
        <CheckCircle2 className="w-5 h-5 text-gray-700" />
        <span className="text-gray-700">{item}</span>
      </motion.div>
    ))}
  </div>

  {/* Trust Stats */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="grid grid-cols-3 gap-6"
  >
   
  </motion.div>
</motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;