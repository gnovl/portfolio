import React from "react";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Home: React.FC = () => {
  const { t } = useTranslation();
  function generateSpaces(count: number) {
    const spaces = "\u00A0".repeat(count);
    return spaces;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* navigation bar */}
      <Navigation />

      {/* Home Content */}

      <div
        id="home"
        className="bg-gray-100 flex flex-col justify-center items-center"
      >
        <div className="min-h-screen md:mx-auto text-center pt-4 md:pt-4 p-4 max-w-6xl">
          <div className="bg-white border rounded-lg shadow-xl p-2 lg:p-6">
            <div className="flex justify-center">
              <img
                src="./img/portfolioDesign.png"
                alt="Hero Image"
                className="md:h-64 lg:h-96 rounded-lg"
              />
            </div>
            {/* TRANSLATION */}
            <div className="text-base text-justify">
              <p className="text-3xl text-center font-bold mt-2 text-customColorHeader">
                {i18n.language === "en"
                  ? /* English content */
                    "GINO VARELA"
                  : /* Translated content */
                    t("translation.home.paragraphs.header")}
              </p>
              <p className="text-xl text-center mt-2">
                {i18n.language === "en"
                  ? /* English content */
                    "FullStack Web Developer."
                  : /* Translated content */
                    t("translation.home.paragraphs.header2")}
              </p>

              <p className="text-base text-justify mt-4">
                {i18n.language === "en" ? (
                  /* English content */
                  <>
                    {generateSpaces(6)}👋 Welcome to my portfolio, your friendly
                    guide through the ever-evolving tech terrain. Unlike
                    traditional tech platforms, this is a personal space where I
                    extend a hand to fellow tech enthusiasts like you. I
                    comprehend the challenges of staying current in this dynamic
                    field, and my commitment is straightforward: to assist you
                    in your pursuits.
                  </>
                ) : (
                  /* Translated content */
                  <>
                    {generateSpaces(6)}
                    {t("translation.home.paragraphs.paragraph1")}
                  </>
                )}
              </p>
              <p className="text-base text-justify mt-4">
                {i18n.language === "en"
                  ? /* English content */
                    "This platform functions as both a display of my accomplishments and a valuable tool for the community pursuing their own tech projects. It`s more than just my enthusiasm for technology, it`s about nurturing your success in the tech sphere. Join me to access precious insights and steadfast assistance, equipping you to overcome challenges and attain your objectives in this constantly evolving field."
                  : /* Translated content */
                    t("translation.home.paragraphs.paragraph2")}
              </p>
              <p className="text-base text-justify mt-4">
                {i18n.language === "en"
                  ? /* English content */
                    "My portfolio goes beyond simply showcasing my accomplishments; it serves as a testament to the untapped potential within you."
                  : /* Translated content */
                    t("translation.home.paragraphs.paragraph3")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
