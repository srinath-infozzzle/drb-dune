import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Adventure from "@/components/Adventure";
import BookTicket from "@/components/BookTicket";
import ContactForm from "@/components/ContactForm";
import Dbr from "@/components/Dbr";
import Footer from "@/components/Footer";
import Heritage from "@/components/Heritage";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import ScrollableSection from "@/components/ScrollableSection";
import Slider from "@/components/Slider";
import Sponsers from "@/components/Sponsers";
import Camping from "@/components/Camping";

const componentMapping = {
  "sections.hero": Hero,
  "sections.explore": ScrollableSection,
  "sections.adventure-section": Adventure,
  "sections.heritage-oasis-section": Heritage,
  "sections.experience-section": Dbr,
  "sections.camping-section": Camping,
  "sections.zone-section": BookTicket,
  "sections.booking-form": ContactForm,
  "sections.partners-section": Sponsers,
};

const Home = () => {
  const router = useRouter();
  const [pageData, setPageData] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { lang } = router.query; // Access the dynamic route parameter
  const pageId = "emq0w83kqsofrq3tjg5zjo87";
  const apiUrl = "https://dunesofarabia.com";

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      try {
        const fetchUrl = `${apiUrl}/api/pages/${pageId}?locale=${lang}&populate=Sections.Image&populate=Sections.Images&populate=Sections.Main_Image&populate=Sections.webook_image&populate=Sections.Map_Image&populate=Sections.Items&populate=Sections.Items.Image&populate=Sections.Main_Logo&populate=Sections.Main_Image&populate=Sections.Left_Image&populate=Sections.Right_Image&populate=Sections.Middle_Image&populate=Sections.Button&populate=Sections.Heritage_Left_Image&populate=Sections.Heritage_Right_Image&populate=Sections.Oasis_Right_Image&populate=Sections.Oasis_Left_Image&populate=Sections.Oasis_Button&populate=Sections.Heritage_Button&populate=Sections.Heritage_Title&populate=Sections.Heritage_Description&populate=Sections.Oasis_Title&populate=Sections.Oasis_Description`;
        const response = await fetch(fetchUrl);
        const result = await response.json();

        const headerUrl = `${apiUrl}/api/header/?populate=*&locale=${lang}`;
        const headerresponse = await fetch(headerUrl);
        const headerresult = await headerresponse.json();

        const footerUrl = `${apiUrl}/api/footer/?populate=Social_Links.Image&populate=Footer_Links&populate=Main_Logo&populate=Left_Logo&populate=Right_Logo&locale=${lang}`;
        const footerrresponse = await fetch(footerUrl);
        const footerresult = await footerrresponse.json();

        setPageData(result.data);
        setHeaderData(headerresult.data);
        setFooterData(footerresult.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    if (lang) {
      loadData();
    }
  }, [lang]);

  if (loading) {
    return (
      <div className="grid h-screen place-items-center">
        <div className="animate-spin h-8 w-8 rounded-full border-4 border-t-4 border-gray-300"></div>
      </div>
    );
  }

  if (!pageData?.Sections) {
    return <div>No sections found.</div>;
  }

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`font-work-sans ${lang === "ar" ? "lang-ar" : "lang-en"}`}
    >
      <div className="all-section">
        {pageData.Sections.map((sec, index) => {
          const Component = componentMapping[sec.__component];
          if (Component) {
            if (sec.__component == "sections.hero") {
              return (
                <>
                  <Component
                    key={index}
                    translations={sec}
                    lang={lang}
                    header={headerData}
                  />
                  <Location translations={sec} />
                </>
              );
            }
            return <Component key={index} translations={sec} lang={lang} />;
          }
          console.warn(`No component found for ${sec.__component}`);
          return null;
        })}
      </div>
      <Footer translations={footerData} />
    </main>
  );
};

export default Home;
