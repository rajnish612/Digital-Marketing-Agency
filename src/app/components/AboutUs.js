"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "150+", label: "Happy Clients", color: "text-purple-400" },
  { number: "500+", label: "Projects Completed", color: "text-blue-400" },
  { number: "50+", label: "Team Members", color: "text-green-400" },
  { number: "5+", label: "Years Experience", color: "text-pink-400" }
];

const values = [
  {
    icon: "🎯",
    title: "Strategic Approach",
    description: "Every project starts with a comprehensive strategy tailored to your specific goals and market needs."
  },
  {
    icon: "🚀",
    title: "Innovation First",
    description: "We stay ahead of digital trends and implement cutting-edge solutions to keep you competitive."
  },
  {
    icon: "🤝",
    title: "Partnership Focus",
    description: "We believe in building long-term relationships, not just completing projects."
  },
  {
    icon: "📊",
    title: "Data-Driven Results",
    description: "Every decision is backed by data and analytics to ensure measurable success."
  }
];

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">DigitalBoost</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of digital innovators dedicated to transforming businesses through cutting-edge technology and strategic digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-6xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="Digital Marketing Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Transforming Ideas Into Digital Success
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded with a vision to bridge the gap between traditional business and digital innovation, 
              DigitalBoost has been at the forefront of digital transformation for over 5 years.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our multidisciplinary team combines creative vision with technical expertise to deliver 
              solutions that not only look great but drive real business results.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Our Story
              </button>
              <button className="px-6 py-3 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                Meet The Team
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Our Core Values</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These principles guide everything we do and define how we approach every client relationship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;