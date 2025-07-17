"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🎯",
    title: "Digital Strategy",
    description: "Comprehensive digital marketing strategies tailored to your business goals",
    features: ["Market Analysis", "Competitor Research", "Goal Setting", "ROI Tracking"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "🚀",
    title: "SEO & SEM",
    description: "Boost your search rankings and drive targeted traffic to your website",
    features: ["Keyword Research", "Technical SEO", "Content Optimization", "PPC Campaigns"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "📱",
    title: "Social Media",
    description: "Engage your audience across all major social media platforms",
    features: ["Content Creation", "Community Management", "Paid Advertising", "Analytics"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Modern, responsive websites that convert visitors into customers",
    features: ["Custom Design", "E-commerce", "Mobile-First", "Performance Optimization"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description: "Data-driven insights to optimize your marketing performance",
    features: ["Performance Tracking", "Conversion Optimization", "A/B Testing", "Reporting"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: "🎨",
    title: "Creative Design",
    description: "Stunning visuals that capture attention and drive engagement",
    features: ["Brand Identity", "Graphic Design", "Video Production", "UI/UX Design"],
    color: "from-pink-500 to-rose-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your business and accelerate growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;