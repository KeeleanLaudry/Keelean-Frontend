import React, { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import logo from "../assets/Keelean.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gray-100 duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-5">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            {/* <img
              src={logo}
              alt="Keelean Logo"
              className="h-14 md:h-16 w-auto"
            /> */}
            <div className="flex flex-col leading-none">
          <span className="text-xl font-bold text-gray-900 tracking-wide">
           Keelean
          </span>
          <span className="text-xs font-medium text-gray-500 tracking-widest">
          LAUNDRY SYSTEM
        </span>
          </div>
          </div>
          <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
            <li className="hover:text-gray-900 cursor-pointer">
                  <Link to="/" className="hover:text-gray-900">Home</Link>
            </li>
            <li className="hover:text-gray-900 cursor-pointer">
                  <Link to="/services" className="hover:text-gray-900">Services</Link>
          </li>
            <li className="hover:text-gray-900 cursor-pointer">
             <Link to="/Pricing" className="hover:text-gray-900">Pricing</Link>
          </li>
            <li className="hover:text-gray-900 cursor-pointer">                 
               <Link to="/TrackOrder" className="hover:text-gray-900">Track Order</Link>
        </li>
            <li className="hover:text-gray-900 cursor-pointer">
           <Link to="/About" className="hover:text-gray-900">About Us</Link>
        </li>
            <li className="hover:text-gray-900 cursor-pointer">
           <Link to="/Contact" className="hover:text-gray-900">Contact</Link>
      </li>

          </ul>
          <div className="hidden lg:flex items-center gap-5">
            <User className="cursor-pointer" size={18} />
            <ShoppingCart className="cursor-pointer" size={18} />

            <button
              className="
                bg-gradient-to-r from-gray-600 to-gray-500
                hover:from-gray-800 hover:to-gray-600
                text-white px-5 py-2 rounded-md
                transition-all duration-300
              "
            >
              Schedule Pickup
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden w-full bg-gray-100 border-t border-gray-300 px-6 py-4 space-y-4">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Services</p>
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">Track Order</p>
          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Contact </p>


          <div className="flex gap-4 pt-2">
            <User />
            <ShoppingCart />
          </div>

          <button className="w-full bg-gray-900 text-white py-2 rounded-md">
            Schedule Pickup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
