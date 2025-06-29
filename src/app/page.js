import React from "react";
import HeroSection from "./components/HeroSection";
import Catelogue from "./components/Catelogue";
import Gallery from "./components/Gallery";
import { Cards } from "./components/Cards";

const page = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <Catelogue />
      {/* <Gallery /> */}
      <Cards />
    </div>
  );
};

export default page;
