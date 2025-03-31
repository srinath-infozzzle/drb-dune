"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const Slider = ({ items }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeImage, setActiveImage] = useState(items[0]);

  useEffect(() => {
    const checkScroll = () => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        setCanScrollLeft(scrollElement.scrollLeft > 1);
        setCanScrollRight(
          scrollElement.scrollWidth >
            scrollElement.scrollLeft + scrollElement.clientWidth + 1
        );
      }
    };
    checkScroll();
    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener("scroll", checkScroll);
    return () => scrollElement?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (direction) => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollElement.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleImageClick = (card) => {
    setActiveImage(card);
  };

  return (
    <section className="text-white px-4 md:px-28 2xl:px-40 pt-10 pb-20 md:pt-20 relative">
      {/* Shower Image */}
      <div className="w-full mb-10 relative">
        <img
          src={activeImage.imgSrc}
          alt={activeImage.title}
          className="w-full h-[400px] md:h-[600px] object-cover object-center rounded-lg"
        />
        <img
          src="/images/Rectangle_464_(1).png"
          className="absolute -bottom-6 w-full z-20 object-contain"
          alt="Rectangle Overlay"
        />
      </div>

      {/* Slider */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-auto hidescroll gap-4 md:gap-7 mt-6 md:mt-12"
        >
          {items.map((card) => (
            <div
              key={card.id}
              className="w-[150px] md:w-[223px] rounded-lg flex-shrink-0 relative cursor-pointer"
              onClick={() => handleImageClick(card)}
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className={`w-full h-[200px] md:h-[299px] object-cover rounded-md 
                  ${
                    activeImage.id === card.id
                      ? "border-4 rounded-3xl border-white"
                      : ""
                  }`}
              />
            </div>
          ))}
        </div>
        {canScrollRight && (
          <ChevronRight
            onClick={() => scroll("right")}
            className="hidden md:block absolute -right-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
          />
        )}
        {canScrollLeft && (
          <ChevronLeft
            onClick={() => scroll("left")}
            className="hidden md:block absolute -left-14 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer"
          />
        )}
      </div>
    </section>
  );
};

export default Slider;
