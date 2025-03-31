import Link from "next/link";
import React from "react";

const Hero = ({ translations, lang, header }) => {
  const mainImage = translations.Main_Image.url;
  const left_logo = header.Left_Logo.url;
  const right_logo = header.Right_Logo.url;

  return (
    <section className="text-white relative ">
      <img
        src={`https://dunesofarabia.com${mainImage}`}
        className="w-full h-auto z-10"
      />

      <Link
        href={`/lang/${lang == "en" ? "ar" : "en"}`}
        className={`absolute top-12 sm:top-20 md:top-32 lg:top-32 left-4 2xl:left-44 sm:left-6 
              z-30 
              text-white font-semibold bg-black rounded-lg 
              px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 
              text-xs sm:text-sm md:text-base 
              w-fit cursor-pointer 
              transition-all duration-300 
              hover:bg-gray-900 
              active:scale-95`}
      >
        {lang == "en" ? "العربيه" : "English"}
      </Link>

      <img
        src={`https://dunesofarabia.com${right_logo}`}
        className={`absolute top-0   w-80 max-sm:w-28 h-auto z-20 object-contain max-md:w-40  right-0 2xl:right-36`}
      />
      <img
        src={`https://dunesofarabia.com${left_logo}`}
        className={`absolute top-0  w-80 max-sm:w-28 h-auto z-20 object-contain max-md:w-40 left-0 2xl:left-36 `}
      />

      <img
        src="https://dunesofarabia.com/uploads/Rectangle_464_1_edb2ffdbf3.png"
        className="absolute bottom-0 w-full  z-20 object-contain "
      />
    </section>
  );
};

export default Hero;
