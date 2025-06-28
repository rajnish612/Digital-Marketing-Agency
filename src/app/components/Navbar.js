"use client";
import React from "react";
import { motion } from "motion/react";
import { Card3d } from "./Card3d";
// import { Card3d } from "./Card3d";
const listItems = ["Catelogue", "Package", "About us", "Contact"];
const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-100%" }}
      transition={{ duration: 0.8 }}
      animate={{ opacity: 10, translateY: 0 }}
      className="h-30 m-auto bg-transparent z-20 p-4 px-7 relative w-screen flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, translateY: "-100%" }}
        transition={{ duration: 1, delay: 0.5 }}
        animate={{ opacity: 10, translateY: 0 }}
        className="flex xl:text-4xl  lg:text-4xl md:text-3xl text-2xl "
      >
        <span className="text-black font-black ">Home</span>
        <span className="text-red-500 font-black ">Stay.</span>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, translateY: "-100%" }}
        transition={{ duration: 1, delay: 0.5 }}
        animate={{ opacity: 10, translateY: 0 }}
        className="md:flex  items-center hidden font-bold h-full   md:gap-x-10 lg:gap-x-20  "
      >
        {listItems.map((item, idx) => {
          return (
            <motion.li
              initial={{ opacity: 0, translateY: "-100%" }}
              transition={{ duration: 1, delay: idx * 0.8 }}
              animate={{ opacity: 10, translateY: 0 }}
              key={idx}
            >
              <span
                className={` text-white ${
                  idx === 0 && " xl:ml-50 lg:ml-40 md:ml-30"
                }`}
              >
                {item}
              </span>
            </motion.li>
          );
        })}
        {/* <li>
          <span className="text-black xl:ml-50 lg:ml-40 md:ml-30 ">
            Catelogue
          </span>
        </li>
        <li>
          <span className="text-black">Package</span>
        </li>
        <li>
          <span className="text-black">About us</span>
        </li>
        <li>
          <span className="text-black">Contact</span>
        </li> */}
      </motion.ul>
    </motion.div>
  );
};

export default Navbar;
