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
  // Duplicate images for seamless looping
  const marqueeImages = [...images, ...images];
  return (
    <section id="gallery" className="py-16 px-6 bg-[#f5f5f2] overflow-x-hidden">
      <h2 className="text-4xl font-bold text-center mb-10">Photo Gallery</h2>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="marquee flex items-center gap-8">
          {marqueeImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-xl shadow-md overflow-hidden min-w-[320px] max-w-xs flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Gallery Image ${(idx % images.length) + 1}`}
                width={400}
                height={260}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading={idx === 0 ? "eager" : "lazy"}
                priority={idx === 0}
                placeholder="blur"
                blurDataURL={src}
              />
            </motion.div>
          ))}
        </div>
        <style jsx>{`
          .marquee {
            animation: marquee 32s linear infinite;
            will-change: transform;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @media (max-width: 768px) {
            .marquee {
              animation-duration: 48s;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Gallery;
