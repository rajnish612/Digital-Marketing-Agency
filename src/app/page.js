import React from "react";
import HeroSection from "./components/HeroSection";
import Catelogue from "./components/Catelogue";
import Gallery from "./components/Gallery";

const page = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <Catelogue />
      <Gallery />
    </div>
  );
};

export default page;
