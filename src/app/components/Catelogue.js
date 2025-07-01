"use client";
import React from "react";
import { delay, motion } from "framer-motion";
const packages = [
  {
    name: "Basic",
    price: "₹1,500/night",
    features: [
      "Private Room",
      "Shared Bathroom",
      "Free Wi-Fi",
      "Complimentary Breakfast",
    ],
  },
  {
    name: "Deluxe",
    price: "₹2,500/night",
    features: [
      "Private Room with Balcony",
      "Attached Bathroom",
      "Mountain View",
      "Free Wi-Fi & Breakfast",
    ],
  },
  {
    name: "Premium",
    price: "₹3,500/night",
    features: [
      "Entire Cottage",
      "Kitchen Access",
      "Bonfire Facility",
      "All Deluxe Features Included",
    ],
  },
];

const Catelogue = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 10 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 px-6 bg-[#f5f5f2]"
      id="catalogue"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Stay Packages
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {packages.map((pkg, idx) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, ease: "linear" }}
            viewport={{ once: false }}
            className="bg-[#f5f5f2] p-6 rounded-2xl shadow-md border hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-center text-indigo-600 mb-4">
              {pkg.name}
            </h3>
            <p className="text-center text-xl font-bold text-gray-800 mb-6">
              {pkg.price}
            </p>
            <ul className="space-y-3 text-gray-600 mb-6">
              {pkg.features.map((feature, index) => (
                <motion.li
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ delay: index * 0.5, ease: "linear" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  key={index}
                  viewport={{ once: false }}
                  className="flex items-center"
                >
                  <span className="text-green-600 mr-2">✔</span> {feature}
                </motion.li>
              ))}
            </ul>
            <div className="text-center">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Catelogue;
