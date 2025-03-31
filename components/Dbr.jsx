import React from "react";
import { RichText } from "@/utils/helper";

const Dbr = ({ translations }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const {Title,  Description, Button } = translations;
    const content = RichText(Description);
    const main_image = translations.Main_Image.url ?? null;
    const left_image = translations.Left_Image.url ?? null;
    const right_image = translations.Right_Image.url ?? null;
    const middle_image = translations.Middle_Image.url ?? null;
  
    // const buttonTitle = translations.Button.Title; // Correct button title
    // const buttonLink = translations.Button.Link;
  return (
    <div className=" relative experience-section">
      <img
        src="https://dunesofarabia.com/uploads/print_ecfe6ecff9.png"
        className="w-full h-[60px] object-cover absolute -top-24 rotate-180 z-50"
        alt="Screenshot"
      />
      <section className="text-white px-4 lg:px-28 pb-20 overflow-hidden mt-16 2xl:px-40">
        <div className="flex flex-col lg:flex-row-reverse justify-between  gap-12 max-sm:gap-2 ">
          <div className="w-full sm:w-1/2">
            <h1
              dir="rtl"
              className="text-3xl mb-12 max-md:mb-6 max-md:text-lg max-sm:font-semibold max-sm:text-xl"
            >
              {Title}
            </h1>
            <p className="text-base text-justify max-md:text-base ">
              {content}
            </p>
            <div className=" my-4 w-full max-sm:text-end">
              <a
                target="_blank"
                href={Button.Link}
              >
                <button className="px-16 py-3 border border-gray-300 text-white bg-black rounded-2xl  transition duration-300">
                  {Button.Title}
                </button>
              </a>
            </div>
          </div>

          <div className="relative w-full max-sm:w-[60%] gap-3  ">
            <img
              src={apiUrl + main_image}
              className="min-w-[100px] h-full  object-cover w-full  lg:rounded-3xl sm:min-w-[653.99px] max-md:h-full  max-md:rounded-3xl"
              alt="Adventure Image"
            />
            <img
              src="https://dunesofarabia.com/uploads/exp1_2bc0dd8526.png"
              className="absolute -bottom-6 mr-1 w-full z-20 object-contain max-md:hidden"
              alt="Rectangle Overlay"
            />
          </div>
        </div>
        {/* Bottom Images */}
        <div className="flex flex-row justify-between items-end  relative max-sm:-mt-7 sm:mt-16 lg:-mt-12 gap-6">
          <div className="flex-1 flex flex-col items-center">
            <img
              src={apiUrl + left_image}
              className="w-full  h-auto object-contain max-md:rounded-3xl"
              alt="Arrow"
            />
            {/* <img
              src="/images/exp2a.png"
              className="absolute -bottom-6 w-full z-20 object-contain"
              alt="Rectangle Overlay"
            /> */}
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src={apiUrl + middle_image}
              className="w-full h-auto object-contain max-md:rounded-3xl"
              alt="Buggy"
            />{" "}
            {/* <img
              src="/images/exp3a.png"
              className="absolute -bottom-6 w-full z-20 object-contain"
              alt="Rectangle Overlay"
            /> */}
          </div>{" "}
          <div className="flex-1 flex flex-col items-center ">
            <img
              src={apiUrl + right_image}
              className="w-full  h-auto object-contain "
              alt="Samt"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dbr;
