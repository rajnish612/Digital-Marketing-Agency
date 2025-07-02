"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

import { BsList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
const listItems = ["Catalogue", "About Us", "Contact", "Gallery", "Home"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const lastStateChangeY = useRef(0);
  const SCROLL_THRESHOLD = 100; // px

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastStateChangeY.current);

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100 &&
        delta > SCROLL_THRESHOLD
      ) {
        // Scrolling down and past 100px, and threshold passed
        setIsVisible(false);
        lastStateChangeY.current = currentScrollY;
        if (isMenuOpen) setIsMenuOpen(false); // Auto-close menu
      } else if (currentScrollY < lastScrollY && delta > SCROLL_THRESHOLD) {
        // Scrolling up and threshold passed
        setIsVisible(true);
        lastStateChangeY.current = currentScrollY;
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      animate={{
        opacity: 1,
        y: isVisible ? 0 : -100,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-lg px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center relative justify-start h-16 sm:h-20">
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

          <BsList
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`xl:hidden hover:scale-[1.1] transition-all ml-auto text-3xl text-foreground cursor-pointer ${
              isMenuOpen ? "rotate-90" : ""
            }`}
          />
          {/* )} */}

          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.4 }}
            animate={{ opacity: 1, y: 0 }}
            className="xl:flex hidden items-center ml-auto space-x-6 xl:space-x-8"
          >
            {listItems.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group"
                onClick={() =>
                  console.log(item.toLowerCase()) ||
                  document
                    .getElementById(item.toLowerCase())
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`text-foreground text-sm lg:text-base font-medium hover:text-accent transition-colors duration-300 py-2 px-1 `}
                >
                  {item}
                </a>
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="xl:hidden overflow-hidden"
        >
          <div className="pb-8 pt-4 border-t border-gray-200 shadow-xl">
            <div className=" space-y-2">
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
                  className="group flex items-center justify-between py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-accent/10 hover:text-accent transition-all duration-300 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item}</span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
