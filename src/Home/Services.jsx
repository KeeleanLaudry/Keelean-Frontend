import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
  CheckCircle2,
  Shirt,
  Scissors,
  SprayCan,
  Thermometer,
  Package,
  ShoppingBag,
  User,
  Calendar,
  Truck,
  Heart,
  Zap
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  // Services data with gray theme
  const services = [
    {
      icon: Shirt,
      title: "Wash & Fold",
      description: "Professional washing and folding service with premium detergents for everyday clothes",
      features: ["Free Pickup", "Same Day", "Eco-friendly", "Quality Check"],
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-gray-700 to-gray-600",
      badge: "Popular",
      price: "$4.99/kg",
      rating: 4.8,
      vendorId: 1
    },
    {
      icon: SprayCan,
      title: "Wash & Iron",
      description: "Complete laundry service with professional ironing for crisp, wrinkle-free clothes",
      features: ["Stain Removal", "Steam Iron", "Fold", "Premium Finish"],
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-gray-600 to-gray-500",
      badge: "Recommended",
      price: "$6.99/kg",
      rating: 4.9,
      vendorId: 2
    },
    {
      icon: Wind,
      title: "Dry Cleaning",
      description: "Expert dry cleaning for delicate fabrics, suits, and formal wear with special care",
      features: ["Delicate Care", "Stain Treatment", "Pressing", "Premium Packaging"],
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-gray-800 to-gray-700",
      badge: "Premium",
      price: "$12.99/item",
      rating: 4.9,
      vendorId: 3
    },
    {
      icon: Thermometer,
      title: "Steam Ironing",
      description: "Professional steam ironing service for perfectly pressed clothes without creases",
      features: ["Steam Press", "Crease-Free", "Fabric Care", "Express Service"],
      image: "https://images.unsplash.com/photo-1489276707441-32e61c82b253?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-gray-500 to-gray-400",
      badge: "Express",
      price: "$2.99/item",
      rating: 4.7,
      vendorId: 4
    },
    {
      icon: Droplets,
      title: "Express Laundry",
      description: "Fast turnaround laundry service for when you need your clothes back quickly",
      features: ["4-Hour Service", "Priority Processing", "Free Delivery", "Quality Assured"],
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-gray-700 to-gray-600",
      badge: "Fastest",
      price: "$8.99/kg",
      rating: 4.8,
      vendorId: 5
    },
    {
      icon: Scissors,
      title: "Shoe Cleaning",
      description: "Professional shoe cleaning and restoration service for all types of footwear",
      features: ["Deep Clean", "Odor Removal", "Waterproofing", "Restoration"],
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-gray-600 to-gray-500",
      badge: "Special",
      price: "$9.99/pair",
      rating: 4.6,
      vendorId: 6
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      comment: "Best laundry service in town! My clothes always come back perfectly clean and folded.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108777-467efb70423f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      comment: "Their dry cleaning service is exceptional. They handle my suits with great care.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Emily Davis",
      role: "Working Professional",
      comment: "The express service is a lifesaver! Fast, reliable, and great quality every time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const handleBookNow = (service) => {
    navigate('/vendor', { 
      state: { 
        service: service,
        from: 'homepage'
      } 
    });
  };

  // Handle view all services
  const handleViewAllServices = () => {
    navigate('/vendor', { 
      state: { 
        viewAll: true,
        from: 'homepage'
      } 
    });
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Features Section */}
     
      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-gray-700 tracking-wider">OUR SERVICES</span>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold mb-6 text-gray-900">
              Professional Laundry Services
            
            </h2>
            <p className="text-gray-600 text-lg">
              Professional cleaning solutions tailored to your needs with eco-friendly approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-40 z-10`} />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-lg">
                    {service.badge}
                  </span>
                  
                  <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-1 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full">
                    <Star className="w-3 h-3 fill-gray-300 text-gray-300" />
                    <span className="text-xs text-white">{service.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl text-white shadow-lg`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book Now Button with navigation */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleBookNow(service)}
                    className="flex items-center space-x-2 text-gray-700 font-medium text-sm group cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewAllServices}
              className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold inline-flex items-center space-x-2 shadow-xl hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;