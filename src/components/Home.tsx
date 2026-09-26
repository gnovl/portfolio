import React from "react";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import TechMarquee from "./TechMarquee";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navigation />

      {/* Hero Section */}
      <div id="home" className="bg-black">
        <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-16">
          <div className="w-full max-w-3xl text-center">
            <p className="text-xs md:text-sm font-semibold tracking-widest text-blue-400 uppercase mb-4">
              {t("translation.home.paragraphs.eyebrow")}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              {t("translation.home.paragraphs.header")}
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              {t("translation.home.paragraphs.taglinePrefix")}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-semibold">
                {t("translation.home.paragraphs.taglineHighlight")}
              </span>
              {t("translation.home.paragraphs.taglineSuffix")}
            </p>
          </div>

          <div className="w-full mt-16">
            <TechMarquee />
          </div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
