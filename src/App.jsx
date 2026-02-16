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
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pickup" element={<Pickup />} />
        <Route path="/trackorder" element={<TrackOrder/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="About" element={<About/>} />
        <Route path="Booking" element={<Booking/>} />
        <Route path="Contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
