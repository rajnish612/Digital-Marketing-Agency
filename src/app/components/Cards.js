"use client";

import Gallery from "./Gallery";
import { Carousel } from "./ui/carousel";
export function Cards() {
  const slideData = [
    {
      title: "homestay",
      button: "Explore Component",
      src: "/images/homestay.jpg",
    },
    {
      title: "balcony",
      button: "Explore Component",
      src: "/images/balcony.jpg",
    },
    {
      title: "garden",
      button: "Explore Component",
      src: "/images/garden.jpg",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "/images/night.jpg",
    },
    {
      title: "food",
      button: "Explore Component",
      src: "/images/food.jpg",
    },
    {
      title: "room",
      button: "Explore Component",
      src: "/images/room.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Gallery />
      <Carousel slides={slideData} />
    </div>
  );
}
