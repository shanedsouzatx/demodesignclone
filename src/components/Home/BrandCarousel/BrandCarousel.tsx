  "use client";
  import React, { useRef, useState } from "react";
  import Image from "next/image";
  import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

  const baseImages = [
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png", 
  ];

  const BrandCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
      setCurrentIndex(prev => {
        if (prev === 0) return 2;
        return prev - 1;
      });
    };

    const scrollRight = () => {
      setCurrentIndex(prev => (prev + 1) % 3);
    };

    // Create virtual infinite list while keeping only 9 items in DOM
    const displayImages = [...baseImages, ...baseImages, ...baseImages];

    return (
      <div className="relative w-[60%] py-20 px-20 mx-auto">
        {/* Left/right navigation icons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-10 p-2 bg-white rounded-full shadow-md transform -translate-y-1/2 hover:bg-gray-100 cursor-pointer active:scale-95 transition-all"
        >
          <BsArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-10 p-2 bg-white rounded-full shadow-md transform -translate-y-1/2 hover:bg-gray-100 cursor-pointer active:scale-95 transition-all"
        >
          <BsArrowRight className="w-5 h-5" />
        </button>

        {/* Single image display */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {displayImages.map((src, index) => (
              <div key={index} className="flex-shrink-0 w-1/3">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={250}
                  height={250}
                  className="object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default BrandCarousel;
