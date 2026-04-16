import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
const location = useLocation();
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
    },
    {
  icon: Package,
  title: "Blanket Cleaning",
  description: "Deep cleaning service for blankets, quilts, and comforters with hygienic drying",
  features: ["Heavy Wash", "Anti-Bacterial", "Soft Finish", "Odor Removal"],
  image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=800&q=80",
  color: "from-gray-700 to-gray-600",
  badge: "Seasonal",
  price: "$14.99/item",
  rating: 4.7,
  vendorId: 7
},
{
  icon: Home,
  title: "Curtain Cleaning",
  description: "Gentle fabric-safe curtain cleaning with steam finish and wrinkle-free hanging",
  features: ["Fabric Care", "Steam Finish", "Dust Removal", "Fresh Fragrance"],
  image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  color: "from-gray-600 to-gray-500",
  badge: "Home Care",
  price: "$8.99/panel",
  rating: 4.6,
  vendorId: 8
}
  ];

  // Testimonials data
 

 const handleBookNow = (service) => {
  navigate("/vendor", {
    state: {
      vendorId: service.vendorId,
      title: service.title
    }
  });
};
  // Handle view all services
  const handleViewAllServices = () => {
    navigate('/services', { 
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
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900">
              Professional Laundry Services
            
            </h2>
            <p className="text-gray-600 text-lg">
              Professional cleaning solutions tailored to your needs with eco-friendly approach
            </p>
          </motion.div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all"
    >
      {/* IMAGE */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/40 to-gray-500/30 z-10" />
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={handleImageError}
          loading="lazy"
        />

        {/* BADGE */}
        <span className="absolute top-2 right-2 z-20 px-2 py-0.5 bg-white/90 rounded-full text-[10px] font-medium text-gray-700 shadow-sm">
          {service.badge}
        </span>

        {/* RATING */}
        <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1 px-1.5 py-0.5 bg-black/40 rounded-full">
          <Star className="w-3 h-3 text-gray-300 fill-gray-300" />
          <span className="text-[10px] text-white">{service.rating}</span>
        </div>
      </div>

      {/* BODY */}
      <div className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="p-2 rounded-lg bg-gray-800 text-white">
            <service.icon className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">
            {service.title}
          </h3>
        </div>

        <p className="text-gray-600 text-[11px] leading-snug mb-2 line-clamp-2">
          {service.description}
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-3">
          {service.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-1 text-[10px] text-gray-600">
              <CheckCircle2 className="w-3 h-3 text-gray-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleBookNow(service)}
          className="flex items-center gap-1 text-gray-700 text-xs font-medium hover:text-gray-900 transition"
        >
          Book Now
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </motion.div>
  ))}
</div>

         {location.pathname !== "/services" && (
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
)}
        </div>
      </section>
    </div>
  );
};

export default HomePage;