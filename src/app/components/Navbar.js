"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { workSans } from "../fonts";
import { BsList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
const listItems = ["Catalogue", "About Us", "Contact", "Gallery", "Home"];

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
            className={`md:hidden hover:scale-[1.1] transition-all ml-auto text-3xl text-gray-800 cursor-pointer ${
              isMenuOpen ? "rotate-90  " : " "
            }`}
          />
          {/* )} */}

          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.4 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:flex hidden items-center  ml-50 space-x-6 xl:space-x-8"
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
                  className={`text-foreground text-sm lg:text-base font-medium hover:text-accent transition-colors duration-300 py-2 px-1 ${workSans.className}`}
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
          className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md"
        >
          <div className="py-6 space-y-4">
            {listItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase()}`}
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
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
