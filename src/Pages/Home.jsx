import React from "react";
import HeroBanner from "../Home/HeroBanner";
import Services from "../Home/Services";
import HowItWorks from "../Home/About Us";
import FAQSection from "../Home/FAQSection";
import Footer from "../Home/Footer";
import Testimonial from "../Home/Testimonial";
import MensCategorySection from "../Home/MensCategory";
import products from "../Data/Product";
import PopularServicesSection from "../Home/PopularServices"; 
import WomensCategory from "../Home/WomensCategory";
import HomeCategory from "../Home/HomCategory";
import Footwear from "../Home/FootwareCategory"
const Home = () => {
  return (
    <>
      <HeroBanner />
      <Services />
      {/* <HowItWorks /> */}
  <MensCategorySection products={products} />
      <WomensCategory products={products}/>
<HomeCategory products={products}/>
<Footwear products={products}/>
      {/* <CleanlinessSection/>
      <FAQSection /> */}
      <Testimonial/>
      
    </>
  );
};

export default Home;

