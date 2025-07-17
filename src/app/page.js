import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import { Cards } from "./components/Cards";
import AboutUs from "./components/AboutUs.js";
import ContactUs from "./components/ContactUs";

const page = () => {
  return (
    <div>
      {" "}
      <HeroSection />
      <Services />
      <Cards />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default page;
