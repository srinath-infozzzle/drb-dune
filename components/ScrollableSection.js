"use client";
import React, { useRef, useEffect } from "react";

const GridSection = ({ translations, lang }) => {
  const containerRef = useRef(null);
  const isArabic = lang === "ar";

  useEffect(() => {
    // Only apply initial scroll on Arabic small devices
    if (isArabic && window.innerWidth <= 640) {
      const container = containerRef.current;
      if (container) {
        // Scroll to the leftmost position
        container.scrollLeft = container.scrollWidth;
      }
    }
  }, [isArabic]);

  return (
    <>
      <img
        src="https://dunesofarabia.com/uploads/zigzag_98ae98ff95.png"
        className="w-full h-[60px] object-cover mt-20"
      />
      <section className="text-white md:px-24 px-4 pt-20 2xl:px-40  relative">
        <h1 className="text-[28px] max-sm:text-lg">{translations.Title}</h1>
        <div
          ref={containerRef}
          className={`
    grid max-sm:flex max-sm:overflow-x-auto max-sm:space-x-2
    max-lg:grid-cols-3 lg:grid-cols-5
    gap-2 md:gap-4 mt-4 md:mt-8
    max-sm:pb-2 hidescroll
    ${isArabic ? "dir-rtl" : ""}`}
          dir={isArabic ? "ltr" : "ltr"}
        >
          {translations.Items.map((card, index) => (
            <div
              key={card.id}
              className="
        w-full
        rounded-lg
        flex-shrink-0
        relative
        cursor-pointer
        max-sm:min-w-[130px]
        max-sm:w-[130px]
        max-sm:first:ml-2
        max-sm:last:mr-2"
            >
              <div className="relative">
                {card.Link.includes("#") ? (
                  <a href={card.Link}>
                    <img
                      src={`https://dunesofarabia.com${card.Image.url}`}
                      alt={card.Title}
                      className="w-full object-cover rounded-md"
                    />
                  </a>
                ) : (
                  // Render with the <a> tag for all other items
                  <a target="_blank" href={card.Link}>
                    <img
                      src={`https://dunesofarabia.com${card.Image.url}`}
                      alt={card.Title}
                      className="w-full object-cover rounded-md"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GridSection;
