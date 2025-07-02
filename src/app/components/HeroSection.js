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
          <div className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: easeInOutCubic,
                delay: 0.4,
              }}
              className="flex flex-col gap-4 items-center lg:items-start"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: easeOutQuart,
                  delay: 0.6,
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground text-center lg:text-left"
              >
                Your Perfect{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: easeInOutQuart,
                    delay: 0.8,
                  }}
                  className="text-accent relative"
                >
                  Escape
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-accent/30"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q25,2 50,8 T100,8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </motion.span>{" "}
                <br />
                Awaits in Assam
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: easeInOutCubic,
                  delay: 0.9,
                }}
                className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg text-center lg:text-left mx-auto lg:mx-0"
              >
                Immerse yourself in authentic Assamese culture while enjoying
                modern comforts. Our carefully curated homestay offers the
                perfect blend of tradition and luxury in the scenic heart of
                Northeast India.
              </motion.p>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: easeInOutCubic,
                  delay: 1.0,
                }}
                className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start"
              >
                {[
                  { icon: "🏡", text: "Authentic Experience" },
                  { icon: "🌿", text: "Nature Immersion" },
                  { icon: "🍽️", text: "Local Cuisine" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.1 + index * 0.1,
                      ease: easeInOutCubic,
                    }}
                    className="flex items-center gap-2 text-foreground/60 text-sm"
                  >
                    <span className="text-base">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row gap-4 mt-6 items-center lg:items-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-surface-dark font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Book Your Stay</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("catalogue")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-surface-dark transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <span>Explore Packages</span>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
