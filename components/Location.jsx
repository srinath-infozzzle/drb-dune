"use client";
import { Clock3 } from "lucide-react";
import { RichText } from "@/utils/helper";

const Location = ({ translations }) => {
  if (!translations) return null;

  const { Description, Map_Link, Map_Image, Date_Time, webook_Link, webook_image } = translations;
  const content = Description ? RichText(Description) : null;

  return (
    <section className="text-white px-4 md:px-28 2xl:px-40 pt-4">
      {content && (
        <div className="location-text mb-[20px]">
          <p className="text-justify max-sm:text-sm">{content}</p>
        </div>
      )}
      <div className="flex flex-col lg:flex-row gap-7 mt-6 md:mt-12 max-lg:items-center max-md:gap-6 items-end">
        {Map_Link && Map_Image?.url && (
          <div className="location-image w-[80%] max-md:mt-4 md:w-[555px] h-auto md:h-[194px] z-20 rounded-2xl overflow-hidden">
            <a target="_blank" href={Map_Link}>
              <img src={`https://dunesofarabia.com${Map_Image.url}`} alt="Map" />
            </a>
          </div>
        )}
        {Date_Time && (
          <div
            dir="ltr"
            className="location-time w-[80%] md:w-[279px] h-[165px] md:h-[194px] z-20 p-5 pl-7 bg-[#242424] rounded-2xl max-sm:w-[82.5%]"
          >
            <Clock3 className="w-12 h-12 mb-6 max-sm:w-8 max-sm:h-8" />
            <span className="block text-xl mb-1 max-sm:text-base">{Date_Time}</span>
          </div>
        )}
        {webook_Link && webook_image?.url && (
          <div className="location-webook">
            <a target="_blank" href={webook_Link}>
              <img src={`https://dunesofarabia.com${webook_image.url}`} alt="Webook" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Location;
