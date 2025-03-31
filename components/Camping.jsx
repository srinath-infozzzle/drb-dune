import React from "react";
import { RichText } from "@/utils/helper";

const Camping = ({ translations }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const { Description } = translations;
    const content = RichText(Description);
  return (
    <section className="px-4 md:px-28 2xl:px-40 camping-section">
      <div className=" text-white  max-sm:gap-3 flex flex-col gap-7 items-center w-full justify-center">
        <h1 className=" lg:text-2xl ">{translations.Title}</h1>
        <p className=" max-sm:text-sm text-center">
          {content}
        </p>
      </div>
      <div className="wrapper flex justify-center items-center my-12 max-sm:my-8">
        <div className="grid grid-cols-3  md:grid-cols-3  gap-6">
          {translations.Images.map((image) => (
            <img src={apiUrl + image.url} alt={image.name} className=" w-full h-full" />
          ))}
        </div>
      </div>
      <div className=" w-full flex justify-center mb-12">
        <a
          target="_blank"
          href={translations.Button.Link}
        >
          <button
            type="submit"
            className="w-fit rounded-2xl py-2 md:py-3 px-4 md:px-6 bg-black border-2 border-white text-white focus:outline-none text-sm md:text-base"
          >
            {translations.Button.Title}
          </button>
        </a>
      </div>
    </section>
  );
};

export default Camping;
