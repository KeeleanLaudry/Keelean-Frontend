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
      logo: "https://i.pinimg.com/736x/b8/eb/cc/b8ebccf6677dbbfd9dbb60e2cd82edac.jpg",
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
      image: "https://i.pinimg.com/736x/76/6f/c5/766fc5cc452ee8b764cfc46518209f92.jpg",
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
      logo: "https://i.pinimg.com/736x/0e/fd/fa/0efdface4fa518ac575bf83c0967bebe.jpg",
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
      logo: "https://i.pinimg.com/736x/c8/a1/aa/c8a1aad3849a41f70a25391c167f821e.jpg",
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
      image: "https://i.pinimg.com/1200x/a7/1a/93/a71a93c8bd31fe66a876a10623c69de3.jpg",
      logo: "https://i.pinimg.com/736x/aa/d8/a1/aad8a1b7e3ca8296619be640b0db511a.jpg",
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
    },
    {
  id: 106,
  name: "UrbanWash Laundry",
  tagline: "Smart Laundry for Modern Living",
  image: "https://i.pinimg.com/736x/63/cf/98/63cf98f44877186daf77f695805d74e3.jpg",
  logo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&q=80",
  rating: 4.7,
  reviews: 540,
  location: "Vile Parle East, Mumbai",
  coordinates: { lat: 19.1008, lng: 72.8511 },
  distance: "2.8 km",
  price: "5.49/kg",
  priceRange: "$5.49 - $13.99",
  services: ["Wash & Fold", "Steam Iron", "Express", "Curtain Cleaning"],
  timing: "7 AM - 10 PM",
  phone: "+91 98765 43215",
  email: "urbanwash@laundry.com",
  featured: false,
  discount: "18% off",
  estTime: "18 hrs",
  verified: true,
  experience: "4+ years",
  orders: "6K+",
  satisfaction: "96%",
  badges: ["Express"],
  about: "Urban-focused laundry service with fast turnaround and premium care."
},

{
  id: 107,
  name: "GreenLeaf Cleaners",
  tagline: "Nature-Friendly Fabric Care",
  image: "https://i.pinimg.com/736x/f4/6c/bb/f46cbb7cafc35e9443e1de7aa7835749.jpg",
  logo: "https://i.pinimg.com/736x/e7/4b/e1/e74be102a291f61f47df692174d85cd3.jpg",
  rating: 4.8,
  reviews: 720,
  location: "Santacruz West, Mumbai",
  coordinates: { lat: 19.0817, lng: 72.8410 },
  distance: "3.9 km",
  price: "6.49/kg",
  priceRange: "$6.49 - $15.49",
  services: ["Eco Wash", "Dry Cleaning", "Delicates", "Organic Care"],
  timing: "8 AM - 9 PM",
  phone: "+91 98765 43216",
  email: "greenleaf@laundry.com",
  featured: true,
  discount: "22% off",
  estTime: "24 hrs",
  verified: true,
  experience: "7+ years",
  orders: "9K+",
  satisfaction: "97%",
  badges: ["Eco-Friendly"],
  about: "Eco-conscious cleaning using biodegradable detergents and gentle processes."
},

{
  id: 108,
  name: "QuickPress Laundry",
  tagline: "Instant Press & Laundry Experts",
  image: "https://i.pinimg.com/474x/a2/5a/76/a25a76b171e890f6470e9382d4b9d5e0.jpg",
  logo: "https://i.pinimg.com/736x/4d/83/61/4d8361d319543e2bf127382ddf3a4005.jpg",
  rating: 4.6,
  reviews: 380,
  location: "Ghatkopar East, Mumbai",
  coordinates: { lat: 19.0790, lng: 72.9080 },
  distance: "6.2 km",
  price: "4.79/kg",
  priceRange: "$4.79 - $11.99",
  services: ["Steam Iron", "Wash & Fold", "Same Day", "Office Wear"],
  timing: "24/7",
  phone: "+91 98765 43217",
  email: "quickpress@laundry.com",
  featured: false,
  discount: "12% off",
  estTime: "6 hrs",
  verified: false,
  experience: "3+ years",
  orders: "3K+",
  satisfaction: "94%",
  badges: ["Express"],
  about: "Fast ironing and laundry solutions ideal for office and daily wear."
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">

<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  className="mb-6"
>
  <div className=" px-6 py-5">
    <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
      Available Vendors
    </h1>
    <p className="text-gray-500 text-sm font-medium mt-1">
      Find trusted laundry service providers near you
    </p>
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.05 }}
  className="bg-white rounded-2xl border border-gray-200 shadow-sm px-5 py-4 mb-6"
>
  {/* Top Row */}
  <div className="flex flex-col lg:flex-row lg:items-center gap-3">

    {/* Filters */}
 <button
  onClick={() => setIsFilterOpen(!isFilterOpen)}
  className="
    flex items-center gap-2 px-4 py-2 rounded-full
    bg-gradient-to-r from-gray-600 via-gray-800 to-black
    text-white text-sm font-medium
    hover:from-black hover:to-gray-600
    transition-all duration-300
    shadow-md
  "
>
  <Filter className="w-4 h-4" />
  Filters
  {selectedFilters.length > 0 && (
    <span className="px-2 py-0.5 text-[11px] bg-white text-gray-900 rounded-full">
      {selectedFilters.length}
    </span>
  )}
</button>
    {/* Search */}
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

      <input
        type="text"
        placeholder="Search vendors, services..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-9 py-2.5 text-sm
                   bg-gray-50 border border-gray-200
                   rounded-full
                   focus:outline-none focus:ring-2 focus:ring-gray-300
                   focus:bg-white transition"
      />

      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>

    {/* Sort */}
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500 hidden md:block">
        Sort
      </span>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="text-sm bg-gray-50 border border-gray-200 
                   rounded-full px-4 py-2
                   focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        <option value="rating">Top Rated</option>
        <option value="price">Price</option>
        <option value="distance">Nearest</option>
        <option value="reviews">Reviews</option>
        <option value="experience">Experience</option>
      </select>
    </div>
  </div>

  {/* Active Chips */}
  {selectedFilters.length > 0 && (
    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
      {selectedFilters.map((filter) => {
        const filterObj = filters.find((f) => f.value === filter);
        return (
          <span
            key={filter}
            className="flex items-center gap-1 px-3 py-1.5 
                       bg-gray-100 text-gray-700
                       rounded-full text-xs
                       hover:bg-gray-200 transition"
          >
            {filterObj?.icon && (
              <filterObj.icon className="w-3 h-3" />
            )}
            {filterObj?.label}
            <button onClick={() => toggleFilter(filter)}>
              <X className="w-3 h-3 ml-1 hover:text-gray-900" />
            </button>
          </span>
        );
      })}
    </div>
  )}
</motion.div>


{/* ===== Expandable Filter Panel ===== */}
<AnimatePresence>
  {isFilterOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm p-4 mb-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => toggleFilter(filter.value)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition ${
              selectedFilters.includes(filter.value)
                ? "bg-gray-900 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <filter.icon className="w-4 h-4" />
            {filter.label}
          </button>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-between mb-6"
        >
       
        </motion.div>
    <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className={
    viewMode === "grid"
      ? "grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      : "space-y-4"
  }
>
  {sortedVendors.map((vendor) => (
    <motion.div
      key={vendor.id}
      variants={itemVariants}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHoveredVendor(vendor.id)}
      onHoverEnd={() => setHoveredVendor(null)}
      onClick={() => handleVendorClick(vendor.id)}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative h-44">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {vendor.discount && (
          <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-gray-900 text-white text-[11px] rounded-full">
            {vendor.discount}
          </span>
        )}

        <div className="absolute top-3 right-3 flex gap-1">
          {vendor.badges?.slice(0, 2).map((badge, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-white/90 text-gray-800 text-[10px] rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="absolute -bottom-6 left-4">
          <img
            src={vendor.logo}
            alt={vendor.name}
            className="w-12 h-12 rounded-xl border-2 border-white shadow"
          />
        </div>
      </div>

      {/* BODY */}
      <div className="p-4 pt-7">
        <h3 className="text-sm font-semibold text-gray-900">
          {vendor.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2">
          {vendor.tagline}
        </p>

        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {vendor.location}
          </div>

          {vendor.verified && (
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {vendor.services?.slice(0, 3).map((s, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-gray-100 border border-gray-200 rounded-full text-[10px]"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-gray-100 pt-2">
          <div className="flex items-center gap-1">
            <img src={DirhamSymbol} className="w-4 h-4" />
            <span className="text-lg font-bold text-gray-900">
              {vendor.price}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="w-3 h-3" />
            {vendor.timing}
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleVendorClick(vendor.id);
          }}
className="w-full mt-3 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg text-xs font-semibold transition"      >
          View Details
        </button>
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