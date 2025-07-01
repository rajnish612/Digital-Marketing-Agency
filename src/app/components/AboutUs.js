"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about us"
      className="relative py-24 px-6 bg-[#f5f5f2]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Decorative Blurred Circle */}
        <div className="absolute w-60 h-60 bg-indigo-100 rounded-full blur-[100px] top-10 left-10 -z-10 opacity-30"></div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/homestay.jpg" // Replace with your image
            alt="Our Homestay"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-md"
        >
          <h2 className="text-4xl font-bold text-indigo-700 mb-6 leading-snug">
            A Warm Welcome Awaits You
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Tucked in the heart of nature, our cozy homestay invites you to
            relax, recharge, and reconnect with what matters most. Whether
            you're here for peace, adventure, or just a good night's sleep —
            we’ve crafted the perfect space for it.
          </p>
          <p className="text-gray-600 text-base mb-6">
            From locally sourced meals to scenic views and heartfelt
            hospitality, every corner of our home is built to make you feel
            welcome.
          </p>
          <button className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 shadow-sm">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
