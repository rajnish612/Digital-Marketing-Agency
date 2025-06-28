"use client";
import React from "react";
import { Card3d } from "./Card3d";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "motion/react";
import { FcLike } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Navbar from "./Navbar";
const HeroSection = () => {
  return (
    <div className="relative">
      <img src="./images/homestay.jpg"  className="absolute top-0 left-0 w-full h-screen object-cover z-0" />
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
        animate={{ opacity: 10 }}
        className="display flex relative z-10 flex-wrap justify-evenly items-center"
      >
        <div className="w-100">
          <span className=" text-5xl font-black  text-black ">
            "Experience Comfort Like Home – Welcome to{" "}
            <span className="text-red-500">-Your Homestay Name</span>"
          </span>
          <div className="bg-white shadow-[3px_-1px_15px_3px_rgba(0,0,0,0.1)] rounded-xl mt-5 p-6">
            <div className="flex flex-col gap-y-2 w-fit ">
              <span className="text-gray-400 font-semibold">Destination</span>
              <span className="text-black font-bold gap-x-2 flex items-center">
                <CiLocationOn color="orange" size={20} />
                Duliajan,Assam
              </span>
            </div>
          </div>
        </div>
        <div className="relative  w-fit h-fit">
          <div className="bg-white shadow-[3px_-1px_15px_3px_rgba(0,0,0,0.1)] rounded-xl top-7 mt-5 p-6 absolute z-10 -rotate-2 ">
            <span className="text-black font-semibold">24/7 Support</span>
          </div>
          <div className="bg-white shadow-[3px_-1px_15px_3px_rgba(0,0,0,0.1)] rounded-xl mt-5 p-6 absolute z-10 right-0 ">
            <span className="text-black font-semibold">Private Balcony</span>
          </div>
          <div className="bg-white flex gap-x-1 items-center shadow-[3px_-1px_15px_3px_rgba(0,0,0,0.1)] rounded-xl -left-6 mt-5 p-6 absolute z-10 bottom-2  ">
            <FcLike color="orange" size={20} />
            <span className="text-black font-semibold">Peaceful Retreat</span>
          </div>
          <div className="bg-white shadow-[3px_-1px_15px_3px_rgba(0,0,0,0.1)] flex gap-x-2 rounded-xl mt-5 p-6 absolute z-10 bottom-2  -right-2 rotate-2 ">
            <Image
              alt="safe and secure"
              width={20}
              height={20}
              style={{ objectFit: "contain", color: "red" }}
              src={"/icons/shield.png"}
            />

            <span className="text-black font-semibold  ">Safe & Secure</span>
          </div>
          <Card3d />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
