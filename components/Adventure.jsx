import React from "react";
import { RichText } from "@/utils/helper";

const Adventure = ({ translations, lang, header }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const { Description } = translations;
  const content = RichText(Description);
  const main_logo = translations.Main_Logo.url;
  const main_image = translations.Main_Image.url ?? null;
  const left_image = translations.Left_Image.url ?? null;
  const right_image = translations.Right_Image.url ?? null;
  const middle_image = translations.Middle_Image.url ?? null;

  const buttonTitle = translations.Button.Title; // Correct button title
  const buttonLink = translations.Button.Link; 
  
  return (
    <section className="text-white px-4 lg:px-28 pb-20 overflow-hidden 2xl:px-40">
      {/* Previous sections remain the same */}
      <div className="flex justify-center pb-40 ">
        <div className="w-[441px] h-[198px] max-md:w-[212px] max-md:h-[100px]">
          <img
              src={apiUrl + main_logo}
            className="w-full h-full mt-20"
            alt="Announcement"
          />
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row justify-between  gap-12 max-sm:gap-2 max-sm:items-start adventure-zone"
        dir="rtl"
      >
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl mb-12 max-md:mb-6 max-md:text-lg max-sm:font-semibold max-sm:text-xl">
            {translations.Title}
          </h1>
          <p className="text-base text-justify max-md:text-base ">
            {content}
          </p>
          <div className="text-start my-4 w-full">
            <a
              target="_blank"
              href={buttonLink}       //"https://tickets.dunesofarabia.com/event/adventure-and-entertainment-zone"
            >
              <button className="px-16 py-3 border border-gray-300 text-white bg-black rounded-2xl transition duration-300 ">
                {buttonTitle}
              </button>
            </a>
          </div>
        </div>

        <div className="relative  w-full max-sm:w-[60%] gap-3  ">

          <img
            src={apiUrl + main_image}
            className="min-w-[100px] w-full sm:min-w-[653.99px] max-md:h-full  max-md:rounded-3xl"
            alt="Adventure Image"
          />
          {/* <img
            src={apiUrl + righ_image}
            className="absolute -bottom-6 mr-1 w-full z-20 object-contain max-md:hidden"
            alt="Rectangle Overlay"
          /> */}
        </div>
      </div>
      {/* Bottom Images */}
      <div className="flex flex-row justify-between items-end  gap-6 relative max-sm:mt-4 sm:mt-16 lg:-mt-2">
        <div className="flex-1 flex flex-col items-center ">
          <img
            src={apiUrl + right_image}
            className="w-full  h-auto object-contain max-md:rounded-3xl "
            alt="Samt"
          />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img
            src={apiUrl + middle_image}
            className="w-full  h-auto object-contain max-md:rounded-3xl"
            alt="Arrow"
          />
          <img
            src="https://dunesofarabia.com/uploads/Rectangle_464_1_edb2ffdbf3.png"
            className="absolute -bottom-6 w-full z-20 object-contain"
            alt="Rectangle Overlay"
          />
        </div>
        <div className="flex-1 flex flex-col items-center rounded-3xl ">
          <img
            src={apiUrl + left_image}
            className="w-full h-auto object-contain rounded-3xl  "
            alt="Buggy"
          />
          <img
            src="https://dunesofarabia.com/uploads/Rectangle_464_1_edb2ffdbf3.png"
            className="absolute -bottom-6 w-full z-20 object-contain"
            alt="Rectangle Overlay"
          />
        </div>
      </div>
    </section>
  );
};

export default Adventure;
