import React from "react";
import HeroSection from "./components/HeroSection";
import Catelogue from "./components/Catelogue";
import Gallery from "./components/Gallery";
import { Cards } from "./components/Cards";
import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs";

const page = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <Catelogue />
      {/* <Gallery /> */}
      <Cards />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default page;
