"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop",
    content: "DigitalBoost transformed our online presence completely. Their strategic approach and attention to detail resulted in a 300% increase in our conversion rates.",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    content: "Working with DigitalBoost was a game-changer. Their SEO expertise helped us rank #1 for our target keywords within 6 months.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, CreativeStudio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    content: "The team's creativity and technical skills are unmatched. They delivered a stunning website that perfectly represents our brand.",
    rating: 5
  },
  {
    name: "David Thompson",
    position: "E-commerce Manager, RetailPro",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    content: "Our e-commerce sales increased by 250% after DigitalBoost optimized our online store. Highly recommended!",
    rating: 5
  },
  {
    name: "Lisa Wang",
    position: "CMO, InnovateTech",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    content: "Professional, reliable, and results-driven. DigitalBoost exceeded our expectations in every aspect of our digital marketing campaign.",
    rating: 5
  },
  {
    name: "James Miller",
    position: "Business Owner, LocalBiz",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    content: "From strategy to execution, DigitalBoost delivered exceptional results. Our online visibility and customer engagement improved dramatically.",
    rating: 5
  }
];

export function Cards() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
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
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say about working with DigitalBoost.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Ready to join our success stories?</p>
          <button 
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
