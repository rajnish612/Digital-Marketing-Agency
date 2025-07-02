"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/images/room.jpg",
    alt: "Cozy room interior with comfortable bedding",
    id: 1,
  },
  {
    src: "/images/view.jpg",
    alt: "Scenic view from the homestay",
    id: 2,
  },
  {
    src: "/images/balcony.jpg",
    alt: "Peaceful balcony overlooking nature",
    id: 3,
  },
  {
    src: "/images/food.jpg",
    alt: "Delicious local cuisine",
    id: 4,
  },
  {
    src: "/images/garden.jpg",
    alt: "Beautiful garden area",
    id: 5,
  },
  {
    src: "/images/night.jpg",
    alt: "Homestay ambiance at night",
    id: 6,
  },
];

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 24;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

const ImageCarousel = ({
  items = images,
  autoplay = true,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
}) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Responsive items per view
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        if (width < 640) {
          setItemsPerView(1);
        } else if (width < 1024) {
          setItemsPerView(2);
        } else if (width < 1280) {
          setItemsPerView(3);
        } else {
          setItemsPerView(4);
        }
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const itemWidth =
    containerWidth > 0
      ? (containerWidth - GAP * (itemsPerView - 1)) / itemsPerView
      : 0;
  const trackItemOffset = itemWidth + GAP;

  // Duplicate enough images to fill the track for seamless looping
  const minItems = itemsPerView * 3; // 3x visible for smooth drag
  const repeatCount = Math.ceil(minItems / items.length);
  const extendedItems = Array(repeatCount).fill(items).flat();
  const carouselItems = loop
    ? [...extendedItems, ...extendedItems.slice(0, itemsPerView)]
    : items;

  // Pause on hover functionality
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered) && itemWidth > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= carouselItems.length - itemsPerView) {
            return 0;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
    itemWidth,
    itemsPerView,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex >= carouselItems.length - itemsPerView) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex >= carouselItems.length - itemsPerView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) =>
          Math.min(prev + 1, carouselItems.length - itemsPerView)
        );
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(carouselItems.length - itemsPerView);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragConstraints = {
    left: -trackItemOffset * (carouselItems.length - itemsPerView),
    right: 0,
  };

  if (itemWidth === 0) {
    return (
      <div
        ref={containerRef}
        className="w-full h-64 flex items-center justify-center"
      >
        <div className="text-gray-500">Loading gallery...</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: `${itemWidth * 0.7 + 80}px` }}
    >
      <motion.div
        className="flex items-center cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={loop ? {} : dragConstraints}
        style={{
          gap: `${GAP}px`,
          x,
          width: trackItemOffset * carouselItems.length,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
        dragElastic={0.1}
        dragMomentum={false}
      >
        {carouselItems.map((item, index) => (
          <motion.div
            key={`${item.id || index}-${index}`}
            className="rounded-xl shadow-lg overflow-hidden flex-shrink-0 bg-white"
            style={{
              width: itemWidth,
              height: itemWidth * 0.7,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={280}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 select-none pointer-events-none"
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
              placeholder="blur"
              blurDataURL={item.src}
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex % items.length === index
                ? "bg-blue-600 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            animate={{
              scale: currentIndex % items.length === index ? 1.3 : 1,
            }}
            onClick={() => setCurrentIndex(index)}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-6 bg-[#f5f5f2] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Photo Gallery
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ImageCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
