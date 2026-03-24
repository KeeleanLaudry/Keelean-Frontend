import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "../src/Pages/Home";
import "./index.css";
import Pickup from "./Pages/PickUppage";
import TrackOrder from "./Pages/TrackOrder";
import Services from "./Pages/Services";
import About from "./Pages/AboutUs"
import Footer from "./Home/Footer";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Vendors from "./Vendor/vendor";
import VendorDetails from "./Vendor/VendorDetails";
import Checkout from "./Pages/Checkout";
// import Login from "./Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/pickup" element={<Pickup />} />
  <Route path="/trackorder" element={<TrackOrder />} />
  <Route path="/services" element={<Services />} />
  <Route path="/About" element={<About />} />
  <Route path="/Booking" element={<Booking />} />
  <Route path="/Contact" element={<Contact />} />
{/* <Route path="/Login" element={<Login/>} /> */}
  <Route path="/vendor" element={<Vendors />} />
<Route path="/vendor/:vendorId" element={<VendorDetails />} />
    <Route path="/checkout" element={<Checkout />} />

</Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
