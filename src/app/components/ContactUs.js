"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-[#f5f5f2] py-16 px-4 md:px-24">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <div className="space-y-6">
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get in Touch ✉️
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Have questions or want to book your stay? Fill out the form and
            we’ll get back to you soon!
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Right Content */}
        <motion.div
          className="hidden rounded-lg overflow-hidden md:block"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <img
            src="/images/homestay.jpg"
            alt="Contact Illustration"
            className="w-full rounded-lg max-w-md mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
