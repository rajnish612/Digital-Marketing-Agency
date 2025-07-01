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
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-20 px-6 bg-gradient-to-br from-[#f5f5f2] via-[#f8f8f5] to-[#f0f0ed] overflow-hidden"
      id="catalogue"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Our Stay <span className="text-indigo-600">Packages</span>
          </h2>
          <p className={`text-lg text-gray-800 max-w-2xl mx-auto`}>
            Choose from our carefully crafted packages designed to give you the
            perfect homestay experience
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative group ${
                idx === 1 ? "md:-mt-6 md:mb-6" : ""
              }`}
            >
              <div
                className={`relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 h-full ${
                  idx === 1 ? "ring-2 ring-indigo-400 ring-opacity-50" : ""
                }`}
              >
                {/* Popular Badge for middle package */}
                {idx === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Package Icon/Badge */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl font-bold text-white ${
                    idx === 0
                      ? "bg-gradient-to-br from-green-400 to-green-600"
                      : idx === 1
                      ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                      : "bg-gradient-to-br from-orange-400 to-red-500"
                  }`}
                >
                  {idx === 0 ? "🏠" : idx === 1 ? "⭐" : "👑"}
                </div>

                <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-center text-2xl font-bold text-indigo-600 mb-8">
                  {pkg.price}
                </p>

                <ul className="space-y-4 text-gray-700 mb-8">
                  {pkg.features.map((feature, index) => (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * index,
                        ease: "easeOut",
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      key={index}
                      viewport={{ once: true, amount: 0.5 }}
                      className="flex items-center text-base"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <div className="text-center mt-auto">
                  <motion.button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      idx === 1
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700"
                        : "bg-gray-800 text-white hover:bg-gray-900"
                    }`}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Catelogue;
