import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, 
  ChevronDown, 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X 
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [location, setLocation] = useState("Mumbai, India");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(3);
const locationPath = useLocation();
const isHomePage = locationPath.pathname === "/";
const navigate = useNavigate();
  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items
 const menuItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled  || !isHomePage
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Keelean Laundry System */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl blur-lg group-hover:blur-xl transition-all" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl flex items-center justify-center shadow-xl border border-gray-300/20">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${(isScrolled || !isHomePage) ? 'text-gray-900' : 'text-white'} leading-tight`}>
                Keelean
              </span>
              <span className={`text-[8px] font-medium ${(isScrolled || !isHomePage) ? 'text-gray-900' : 'text-white'} tracking-[0.2em]`}>
                LAUNDRY SYSTEM
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
           {menuItems.map((item) => (
  <motion.button
    key={item.name}
    onClick={() => navigate(item.path)}
    whileHover={{ y: -2 }}
    className={`text-sm font-medium transition-colors ${
      (isScrolled || !isHomePage)
        ? 'text-gray-700 hover:text-gray-900'
        : 'text-white/90 hover:text-white'
    }`}
  >
    {item.name}
  </motion.button>
))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* Location Selector */}
            <div className="relative hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                  (isScrolled || !isHomePage) 
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{location}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              {/* Location Dropdown */}
              <AnimatePresence>
                {isLocationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                  >
                    <div className="p-3">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Popular Cities</p>
                      {["Mumbai", "Delhi", "Bangalore", "Pune", "Chennai"].map((city) => (
                        <button
                          key={city}
                          onClick={() => {
                            setLocation(city);
                            setIsLocationOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                        >
                          {city}
                        </button>
                      ))}
                      <div className="border-t border-gray-200 mt-2 pt-2">
                        <button className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                          Detect my location
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Bar */}
            <motion.div
              animate={{ width: isSearchOpen ? "250px" : "40px" }}
              transition={{ duration: 0.3 }}
              className="relative hidden md:block"
            >
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => !searchQuery && setIsSearchOpen(false)}
                className={`w-full h-10 pl-10 pr-4 rounded-full text-sm outline-none transition-all border
                  ${
                      (isScrolled || !isHomePage) 
                      ? "bg-gray-100 text-gray-900 placeholder-gray-400 border-gray-300 focus:border-gray-600"
                      : "bg-white/10 backdrop-blur-md text-white placeholder-white/70 border-white/30 focus:border-white"
                  }
                  ${isSearchOpen ? 'opacity-100' : 'opacity-0'}
                `}
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                 (isScrolled || !isHomePage)  ? 'text-gray-600' : 'text-white'
                }`}
              >
                <Search className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Cart Icon */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-2 rounded-lg transition-colors ${
                (isScrolled || !isHomePage)  ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              <ShoppingBag className={`w-5 h-5 ${(isScrolled || !isHomePage)  ? 'text-gray-700' : 'text-white'}`} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gray-900 text-white text-xs rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </motion.button>

            {/* Login/Sign Up Button */}
           <motion.button
  onClick={() => navigate("/login")}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
    (isScrolled || !isHomePage) 
      ? 'bg-gray-900 text-white hover:bg-gray-800' 
      : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30'
  }`}
>
  <User className="w-4 h-4" />
  <span className="text-sm font-medium">Sign In</span>
</motion.button>
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                (isScrolled || !isHomePage) ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className={`w-5 h-5 ${(isScrolled || !isHomePage)  ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${(isScrolled || !isHomePage)  ? 'text-gray-700' : 'text-white'}`} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4"
            >
              <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-2 border-t border-gray-200 space-y-2">
                  <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                    <MapPin className="w-4 h-4" />
                    <span>{location}</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg">
                    <User className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;