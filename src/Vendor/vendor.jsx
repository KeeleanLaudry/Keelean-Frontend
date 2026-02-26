import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import DirhamSymbol from "../assets/dirham.png";
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Mail,
  ChevronRight,
  ArrowRight,
  Truck,
  Shield,
  Award,
  Users,
  Filter,
  X,
  CheckCircle2,
  Heart,
  Share2,
  Sparkles,
  DollarSign,
  TrendingUp,
  ThumbsUp,
  Zap,
  Briefcase,
  Calendar,
  Map,
  Navigation
} from "lucide-react";

const Vendors = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState("rating");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredVendor, setHoveredVendor] = useState(null);

  // Mock vendors data with enhanced details
  const vendors = [
    {
      id: 101,
      name: "Sparkle Laundry Services",
      tagline: "Premium Care for Your Garments",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4.8,
      reviews: 1250,
      location: "Andheri East, Mumbai",
      coordinates: { lat: 19.1136, lng: 72.8697 },
      distance: "2.3 km",
      price: "4.99/kg",
      priceRange: "$4.99 - $12.99",
      services: ["Wash & Fold", "Dry Cleaning", "Ironing", "Stain Removal"],
      timing: "Open 24/7",
      phone: "+91 98765 43210",
      email: "sparkle@laundry.com",
      featured: true,
      discount: "20% off",
      estTime: "24 hrs",
      verified: true,
      experience: "8+ years",
      orders: "15K+",
      satisfaction: "98%",
      badges: ["Eco-Friendly"],
      about: "Premium laundry service with state-of-the-art equipment and eco-friendly detergents."
    },
    {
      id: 102,
      name: "FreshCare Laundry",
      tagline: "Freshness Delivered to Your Doorstep",
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      reviews: 890,
      location: "Bandra West, Mumbai",
      coordinates: { lat: 19.0596, lng: 72.8295 },
      distance: "3.5 km",
      price: "5.99/kg",
      priceRange: "$5.99 - $14.99",
      services: ["Wash & Fold", "Steam Iron", "Shoe Cleaning", "Leather Care"],
      timing: "8 AM - 10 PM",
      phone: "+91 98765 43211",
      email: "freshcare@laundry.com",
      featured: false,
      discount: "15% off",
      estTime: "12 hrs",
      verified: true,
      experience: "5+ years",
      orders: "8K+",
      satisfaction: "97%",
      badges: ["Premium"],
      about: "Specialized in delicate fabrics and premium garment care."
    },
    {
      id: 103,
      name: "EcoWash Laundry",
      tagline: "Eco-Friendly Cleaning Solutions",
      image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4.7,
      reviews: 650,
      location: "Juhu, Mumbai",
      coordinates: { lat: 19.0884, lng: 72.8265 },
      distance: "4.1 km",
      price: "6.99/kg",
      priceRange: "$6.99 - $15.99",
      services: ["Eco-friendly", "Wash & Fold", "Dry Cleaning", "Organic Care"],
      timing: "7 AM - 11 PM",
      phone: "+91 98765 43212",
      email: "ecowash@laundry.com",
      featured: true,
      discount: "25% off",
      estTime: "18 hrs",
      verified: true,
      experience: "6+ years",
      orders: "7K+",
      satisfaction: "96%",
      badges: ["Eco-Friendly"],
      about: "100% biodegradable detergents and sustainable cleaning process."
    },
    {
      id: 104,
      name: "Speed Laundry",
      tagline: "Fast & Reliable Laundry Service",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4.6,
      reviews: 420,
      location: "Powai, Mumbai",
      coordinates: { lat: 19.1176, lng: 72.9060 },
      distance: "5.2 km",
      price: "7.99/kg",
      priceRange: "$7.99 - $16.99",
      services: ["Express Service", "Wash & Fold", "Ironing", "Same Day"],
      timing: "24/7",
      phone: "+91 98765 43213",
      email: "speed@laundry.com",
      featured: false,
      discount: "10% off",
      estTime: "6 hrs",
      verified: false,
      experience: "3+ years",
      orders: "4K+",
      satisfaction: "94%",
      badges: ["Express"],
      about: "Fastest turnaround time in the city with quality assurance."
    },
    {
      id: 105,
      name: "Royal Dry Cleaners",
      tagline: "Royal Treatment for Your Clothes",
      image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      reviews: 2100,
      location: "Colaba, Mumbai",
      coordinates: { lat: 18.9067, lng: 72.8147 },
      distance: "8.7 km",
      price: "8.99/kg",
      priceRange: "AED8.99 - $19.99",
      services: ["Dry Cleaning", "Wedding Gowns", "Suits", "Delicates"],
      timing: "9 AM - 9 PM",
      phone: "+91 98765 43214",
      email: "royal@laundry.com",
      featured: true,
      discount: "30% off",
      estTime: "36 hrs",
      verified: true,
      experience: "12+ years",
      orders: "25K+",
      satisfaction: "99%",
      badges: ["Premium"],
      about: "Specialized in luxury garments, wedding dresses, and delicate fabrics."
    }
  ];

  // Enhanced filter options
  const filters = [
    { label: "Verified", value: "verified", icon: Shield },
    { label: "24/7 Service", value: "247", icon: Clock },
    { label: "Free Pickup", value: "pickup", icon: Truck },
    { label: "Express Delivery", value: "express", icon: Zap },
    { label: "Eco-Friendly", value: "eco", icon: Sparkles },
    { label: "Premium", value: "premium", icon: Award }
  ];

  const handleVendorClick = (vendorId) => {
    navigate(`/vendor/${vendorId}`);
  };

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const filteredVendors = vendors.filter(vendor => {
    if (selectedFilters.includes("verified") && !vendor.verified) return false;
    if (selectedFilters.includes("247") && vendor.timing !== "24/7") return false;
    if (selectedFilters.includes("eco") && !vendor.badges.includes("Eco-Friendly")) return false;
    if (selectedFilters.includes("premium") && !vendor.badges.includes("Premium")) return false;
    if (selectedFilters.includes("express") && !vendor.badges.includes("Express")) return false;
    if (searchTerm && !vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !vendor.services.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))) return false;
    return true;
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
if (sortBy === "price") {
  const priceA = parseFloat(a.price.replace('AED', '').trim());
  const priceB = parseFloat(b.price.replace('AED', '').trim());
  return priceA - priceB;
}
    if (sortBy === "distance") return parseFloat(a.distance) - parseFloat(b.distance);
    if (sortBy === "reviews") return b.reviews - a.reviews;
    if (sortBy === "experience") return parseInt(b.experience) - parseInt(a.experience);
    return 0;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=""
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
               
              </div>
              <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-2">
                Available Vendors
              </h1>
              <p className="text-gray-500 text-lg">
                Find the best laundry service providers near you
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search vendors or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 px-5 py-3 pl-12 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
         
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
           <div className="flex items-center justify-start space-x-4">
  <button
    onClick={() => setIsFilterOpen(!isFilterOpen)}
    className="flex items-center space-x-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-md"
  >
    <Filter className="w-4 h-4" />
    <span className="font-medium">Filters</span>
    {selectedFilters.length > 0 && (
      <span className="ml-1 px-2 py-0.5 bg-white text-gray-900 text-xs rounded-full">
        {selectedFilters.length}
      </span>
    )}
  </button>

  <div className="flex items-center space-x-3">
    <span className="text-sm text-gray-500">Sort by:</span>
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      <option value="rating">Top Rated</option>
      <option value="price">Price: Low to High</option>
      <option value="distance">Nearest First</option>
      <option value="reviews">Most Reviewed</option>
      <option value="experience">Experience</option>
    </select>
  </div>
</div>


            <div className="flex items-center space-x-3">
           

              {/* Active Filters */}
              <div className="flex items-center space-x-2">
                {selectedFilters.map(filter => {
                  const filterObj = filters.find(f => f.value === filter);
                  return (
                    <motion.span
                      key={filter}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex items-center space-x-1 px-3 py-1.5 bg-gray-100 rounded-lg text-sm"
                    >
                      {filterObj?.icon && <filterObj.icon className="w-3 h-3" />}
                      <span>{filterObj?.label}</span>
                      <button onClick={() => toggleFilter(filter)} className="ml-1">
                        <X className="w-3 h-3 hover:text-gray-900" />
                      </button>
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-6 pt-6 border-t border-gray-200"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {filters.map(filter => (
                    <motion.button
                      key={filter.value}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleFilter(filter.value)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        selectedFilters.includes(filter.value)
                          ? 'bg-gray-900 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <filter.icon className="w-4 h-4" />
                      <span>{filter.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-between mb-6"
        >
          <p className="text-gray-500">
            Showing <span className="font-semibold text-gray-900">{sortedVendors.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{vendors.length}</span> vendors
          </p>
       
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={viewMode === "grid" 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
          }
        >
          {sortedVendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              variants={itemVariants}
              whileHover={{ y: viewMode === "grid" ? -5 : -2 }}
              onHoverStart={() => setHoveredVendor(vendor.id)}
              onHoverEnd={() => setHoveredVendor(null)}
              onClick={() => handleVendorClick(vendor.id)}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-200 ${
                viewMode === "list" ? 'flex' : ''
              }`}
            >
              {/* Vendor Image */}
              <div className={`relative ${viewMode === "list" ? 'w-64 h-full' : 'h-56'}`}>
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: hoveredVendor === vendor.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">                
                  {vendor.discount && (
                    <span className="px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full shadow-lg">
                      {vendor.discount}
                    </span>
                  )}
                </div>

                {/* Service Badges */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                  {vendor.badges.slice(0, 2).map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-lg shadow-lg"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="flex items-center space-x-1">
                   
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-6">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="w-12 h-12 rounded-xl border-2 border-white shadow-xl"
                  />
                </div>
              </div>
              <div className={`p-6 ${viewMode === "list" ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 ml-14">
                  {vendor.name}
                </h3>
                <p className="text-sm font-medium text-gray-500">
                  {vendor.tagline}
                </p>
              </div>
              </div>

          <div className="flex items-center justify-between mt-auto pb-3  text-sm">
            <div className="flex items-center space-x-1 text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>{vendor.location}</span>
            </div>

            {vendor.verified && (
              <div className="flex items-center space-x-1 text-blue-600">
                <Shield className="w-3 h-3" />
                <span className="text-xs font-semibold">Verified</span>
              </div>
            )}
          </div>
             <div className="grid grid-cols-2 gap-2 mb-4">
            {vendor.services.slice(0, 4).map((service, idx) => (
              <div
                key={idx}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-700 text-center font-medium"
              >
                {service}
              </div>
            ))}

            {vendor.services.length > 4 && (
              <div className="px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-xs text-gray-600 text-center font-medium">
                +{vendor.services.length - 4} more
              </div>
            )}
          </div>
                <div className="flex items-center justify-between py-3 border-t border-gray-100">
                 <div>
                <div className="flex items-center gap-1">
                  <img src={DirhamSymbol} alt="AED" className="w-6 h-6 object-contain" />
                  <p className="text-2xl font-bold text-gray-900">{vendor.price}</p>
                </div>
              </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-gray-500 mb-1">
                      <Clock className="w-3 h-3" />
                      <span>{vendor.timing}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVendorClick(vendor.id);
                  }}
                  className="w-full mt-4 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-gray-800 hover:to-gray-700 transition-all shadow-lg group"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {sortedVendors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No vendors found</h3>
            <p className="text-gray-500">Try adjusting your filters or search term</p>
            <button
              onClick={() => {
                setSelectedFilters([]);
                setSearchTerm("");
              }}
              className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};


export default Vendors;