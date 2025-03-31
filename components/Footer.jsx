const Footer = ({ translations }) => {
  console.log(translations.Social_Links[0].Link);
  return (
    <section className="text-white px-4 lg:px-28 mt-6" dir="rtl">
      <div className="flex justify-center items-center pb-7">
        <img
          src={`https://dunesofarabia.com${translations.Main_Logo.url}`}
          className="w-78 h-auto z-20 object-contain max-md:w-40 max-sm:w-20"
        />
      </div>
      <div className="flex justify-between items-center pb-7 border-b border-[#FFFFFF] ">
        {/* Left Image */}

        <img
          // src="/images/Artboard12.png"
          src={`https://dunesofarabia.com${translations.Right_Logo.url}`}
          className="w-48 h-auto z-20 object-contain max-md:w-40 max-sm:w-20"
        />
        {/* Icons */}
        <div className="flex space-x-6 max-sm:space-x-3 items-center">
          {translations.Social_Links.map((link) => {
            return (
              <a
                key={link.id}
                href={link.Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://dunesofarabia.com${link.Image.url}`}
                  className="w-8 h-auto z-20 object-contain  max-sm:w-5   max-md:ml-3 ml-4 "
                  alt="Facebook"
                />
              </a>
            );
          })}
        </div>

        {/* Right Image */}
        <img
          src={`https://dunesofarabia.com${translations.Left_Logo.url}`}
          className="w-48 h-auto z-20 object-contain max-md:w-40 max-sm:w-20"
        />
      </div>

      <div className=" flex gap-6 mt-12 mb-5 max-sm:text-xs max-sm:mt-6 max-sm:justify-between ">
        {translations.Footer_Links.map((link) => (
          <a key={link.id} href={link.Link}>
            {link.Title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
