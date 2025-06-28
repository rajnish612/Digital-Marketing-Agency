"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { workSans } from "../fonts";

const listItems = ["Catalogue", "Packages", "About Us", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20 shadow-lg px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1, delay: 0.2 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-1"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Home
            </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">
              Stay.
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.4 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
          >
            {listItems.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group"
              >
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`text-foreground text-sm lg:text-base font-medium hover:text-accent transition-colors duration-300 py-2 px-1 ${workSans.className}`}
                >
                  {item}
                </a>
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Book Now Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 1, delay: 0.8 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <button
              className={`px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-surface-dark transition-all duration-300 ${workSans.className}`}
            >
              Book Now
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-6 h-6 sm:w-8 sm:h-8 space-y-1"
          >
            <span
              className={`w-5 sm:w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5 sm:translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-5 sm:w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 sm:w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-1.5 sm:-translate-y-2"
                  : ""
              }`}
            ></span>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md"
        >
          <div className="py-6 space-y-4">
            {listItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`block text-foreground font-medium hover:text-accent transition-colors duration-300 py-2 border-b border-accent/20 ${workSans.className}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className={`w-full mt-4 px-6 py-3 bg-accent text-accent  font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 ${workSans.className}`}
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
