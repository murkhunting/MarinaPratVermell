import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/1518419/pexels-photo-1518419.jpeg",
  "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
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
        className="w-full h-[80vh] object-cover transition-all duration-500"
      />

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-transparent text-white hover:scale-110 transition-transform duration-200"
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
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-transparent text-white hover:scale-110 transition-transform duration-200"
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
