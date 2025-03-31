import React from "react";

const Sponsers = ({ translations }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const LocationImage = translations.Image.url ?? null;
  return (
    <section className=" text-white px-4 lg:px-28  mt-6 pb-12 border-b border-[#FFFFFF]">
      <div className=" justify-center items-center w-full flex flex-col ">
        <img src={apiUrl + LocationImage} className="  min-w-[370px]" />
      </div>
    </section>
  );
};

export default Sponsers;
