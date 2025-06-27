"use client";
import React from "react";
import { Card3d } from "./Card3d";
import { motion } from "motion/react";
const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2, delay: 0.8 }}
      animate={{ opacity: 10 }}
      className="display flex justify-evenly items-center"
    >
      <div className="w-100">
        <span className=" text-5xl font-black  text-black ">
          "Experience Comfort Like Home – Welcome to{" "}
          <span className="text-red-500">-Your Homestay Name</span>"
        </span>
        <div className="bg-white shadow-lg rounded-lg mt-5 p-4">
          <div className="flex flex-col">
            <span className="text-gray-400">Destination</span>
            <span className="text-black font-bold">Duliajan,Assam</span>
          </div>
        </div>
      </div>
      <Card3d />
    </motion.div>
  );
};

export default HeroSection;
