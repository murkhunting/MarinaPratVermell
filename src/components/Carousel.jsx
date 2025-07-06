import React, { useState } from "react";

const images = [
  "/assets/1.jpeg",
  "/assets/2.jpeg",
  "/assets/3.jpeg",
  "/assets/4.jpeg",
  "/assets/5.webp",
  "/assets/6.webp",
  "/assets/7.webp",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <div className="relative w-screen mx-auto overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-[90vh] object-cover transition-all duration-500"
      />

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute cursor-pointer top-1/2 left-4 -translate-y-1/2 bg-transparent text-white hover:scale-110 transition-transform duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute cursor-pointer top-1/2 right-4 -translate-y-1/2 bg-transparent text-white hover:scale-110 transition-transform duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
