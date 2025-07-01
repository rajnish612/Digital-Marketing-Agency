"use client";
import React from "react";
import { motion } from "motion/react";

// Sophisticated easing curves
const easeInOutCubic = [0.645, 0.045, 0.355, 1];
const easeOutQuart = [0.25, 1, 0.5, 1];
const easeInOutQuart = [0.76, 0, 0.24, 1];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-background flex items-center px-6 lg:px-12"
    >
      <div className="max-w-7xl mt-16 md:mt-20 mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: easeOutQuart,
            delay: 0.2,
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Right Content - Homestay Showcase (move first for mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.8 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end pt-8"
          >
            <div className="relative w-full max-w-lg">
              {/* Main Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: easeInOutQuart,
                  delay: 1.0,
                }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Beautiful homestay in Duliajan, Assam"
                  className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Rating Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                    <span className={`text-sm font-semibold text-gray-800 `}>
                      4.9
                    </span>
                  </div>
                  <p className={`text-xs text-gray-600 `}>128 reviews</p>
                </motion.div>

                {/* Floating Price Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute bottom-4 left-4 bg-accent text-surface-dark rounded-2xl px-4 py-3 shadow-lg"
                >
                  <div className={`text-lg font-bold `}>₹2,500</div>
                  <div className={`text-sm opacity-80 `}>per night</div>
                </motion.div>
              </motion.div>

              {/* Small Gallery Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3 mt-4"
              >
                {[
                  "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.9 + index * 0.1,
                      ease: easeInOutCubic,
                    }}
                    className="w-20 h-20 rounded-xl overflow-hidden shadow-md"
                  >
                    <img
                      src={src}
                      alt={`Homestay ${
                        index === 0
                          ? "interior"
                          : index === 1
                          ? "kitchen"
                          : "garden"
                      }`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 2.2,
                    ease: easeInOutCubic,
                  }}
                  className="w-20 h-20 rounded-xl overflow-hidden shadow-md bg-accent/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className={`text-sm font-bold text-accent `}>+12</div>
                    <div className={`text-xs text-accent/80 `}>more</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 mt-6"
              >
                <div
                  className={`flex items-center gap-2 text-sm text-foreground/70 `}
                >
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <span>3 Bedrooms</span>
                </div>
                <div
                  className={`flex items-center gap-2 text-sm text-foreground/70 `}
                >
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>Garden View</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: easeInOutCubic,
                delay: 0.4,
              }}
              className="flex flex-col gap-3"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: easeOutQuart,
                  delay: 0.6,
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-2"
              >
                Experience Comfort{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: easeInOutQuart,
                    delay: 0.8,
                  }}
                  className="text-accent"
                >
                  Like Home
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: easeInOutCubic,
                  delay: 0.9,
                }}
                className={`text-lg md:text-xl text-foreground/80 leading-relaxed tracking-normal  mb-1`}
              >
                Welcome to your perfect homestay destination in the heart of
                Assam.
              </motion.p>
            </motion.div>

            {/* Destination Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.68, -0.55, 0.27, 1.55],
                delay: 1.1,
              }}
              className="w-full bg-[#f5f5f2]/60 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-4 group"
            >
              {/* Icon - Aligned Left */}
              <div className="flex justify-start mb-3">
                <div className="w-10 h-10 bg-orange-100 border border-orange-300 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Text Content - Left Aligned */}
              <div className="space-y-0.5 text-left">
                <span
                  className={`text-xs font-semibold tracking-widest text-gray-500 uppercase `}
                >
                  Destination
                </span>

                <h3 className="text-xl font-bold text-orange-600 group-hover:text-orange-700 transition duration-300">
                  Duliajan, Assam
                </h3>

                <p
                  className={`text-sm text-gray-700 font-medium leading-snug `}
                >
                  Discover the beauty of{" "}
                  <span className="text-orange-500 font-semibold">
                    Northeast India
                  </span>{" "}
                  with comfort, culture, and calmness.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-3 mt-2"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className={`px-6 py-3 bg-accent text-surface-dark font-semibold rounded-full hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg `}
              >
                Book Your Stay
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("catalogue")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className={`px-6 py-3 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-surface-dark transition-all duration-300 `}
              >
                Explore Packages
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
