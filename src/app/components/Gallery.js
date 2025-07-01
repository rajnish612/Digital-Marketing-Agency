"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/room.jpg",
  "/images/view.jpg",
  "/images/view.jpg",
  "/images/balcony.jpg",
  "/images/food.jpg",
  "/images/garden.jpg",
  "/images/night.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-6 bg-[#f5f5f2]">
      <h2 className="text-4xl font-bold text-center mb-10">Photo Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={src}
              alt={`Gallery Image ${idx + 1}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              loading={idx === 0 ? "eager" : "lazy"}
              priority={idx === 0}
              placeholder="blur"
              blurDataURL={src}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
