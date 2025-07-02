"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about us"
      className="relative py-16 px-4 sm:px-6 bg-[#f5f5f2] overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Decorative Blurred Circle */}
        <div className="hidden sm:block absolute w-60 h-60 bg-indigo-100 rounded-full blur-[100px] top-10 left-10 -z-10 opacity-30"></div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/images/homestay.jpg"
            alt="Our Homestay"
            className="w-full max-w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-md"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6 leading-snug"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {"A Warm Welcome Awaits You".split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                  },
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {"Tucked in the heart of nature, our cozy homestay invites you to relax, recharge, and reconnect with what matters most. Whether you're here for peace, adventure, or just a good night's sleep — we’ve crafted the perfect space for it."
              .split(" ")
              .map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                    },
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
          </motion.p>
          <motion.p
            className="text-gray-600 text-sm sm:text-base mb-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {"From locally sourced meals to scenic views and heartfelt hospitality, every corner of our home is built to make you feel welcome."
              .split(" ")
              .map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
                    },
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
          </motion.p>
          <button className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 shadow-sm w-full sm:w-auto">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
