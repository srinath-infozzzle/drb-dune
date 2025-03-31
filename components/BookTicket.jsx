import React from "react";

const BookTicket = ({ translations }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className="relative booking-section">
      <img
        src="https://dunesofarabia.com/uploads/print_ecfe6ecff9.png"
        className="w-full h-[60px] object-cover relative z-50"
        alt="Screenshot"
      />
      <section className="text-white bg-[#544229cb] px-4 md:px-28 2xl:px-40 pt-10 md:pt-20 pb-16 md:pb-16 z-20 relative -mt-7  ">
        <div className=" mt-12 max-sm:mt-6">
          <h1 className=" text-2xl mb-6 max-sm:text-lg">
            {" "}
            {translations.Title}
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {translations.Items.map((item) => {
              return(
                <div>
              <a
                target="_blank"
                href={item.Link}
              >
                <img
                  src={apiUrl + item.Image.url}
                  className="w-[260px]  md:h-[360px] h-[260px] max-md:w-[200px] object-cover rounded-md cursor-pointer"
                  alt="Screenshot"
                />
              </a>
              <a
                target="_blank"
                href={item.Link}
              >
                <p className="mb-[10px] mt-2 mb-6 md:mb-12 max-sm:text-sm">
                  {item.Title}
                </p>
              </a>
            </div>
              )
            })}
          </div>
        </div>
      </section>
      <img
        src="https://dunesofarabia.com/uploads/print_ecfe6ecff9.png"
        className="w-full h-[60px] object-cover relative -top-12 rotate-180  z-50"
        alt="Screenshot"
      />
    </div>
  );
};

export default BookTicket;
