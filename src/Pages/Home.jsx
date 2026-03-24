import React from "react";
import HeroBanner from "../Home/HeroBanner";
import Services from "../Home/Services";
import Testimonial from "../Home/Testimonial";
import products from "../Data/Product";
import CategorySection from "../Home/CategorySection";

import { Home as HomeIcon, Shirt, Scissors, Footprints } from "lucide-react";

const Home = () => {

  const onAddToCart = (product) => {
    console.log("Add to cart:", product);
  };

  return (
    <>
      <HeroBanner />
      <Services />

      <CategorySection
        title="Home Collection"
        icon={HomeIcon}
        products={products}
        filterFn={(p) => p.category === "home"}
        onAddToCart={onAddToCart}
      />

      <CategorySection
        title="Men's Collection"
        icon={Shirt}
        products={products}
        filterFn={(p) => p.category === "men"}
        onAddToCart={onAddToCart}
      />

      <CategorySection
        title="Women's Collection"
        icon={Scissors}
        products={products}
        filterFn={(p) => p.serviceFor?.toLowerCase() === "women"}
        onAddToCart={onAddToCart}
      />

      <CategorySection
        title="Footwear Collection"
        icon={Footprints}
        products={products}
        filterFn={(p) => p.category === "footwear"}
        onAddToCart={onAddToCart}
      />

      <Testimonial />
    </>
  );
};

export default Home;