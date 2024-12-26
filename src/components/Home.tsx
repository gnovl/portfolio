import React from "react";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import Footer from "./Footer";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const isSmallScreen = window.innerWidth < 768;
  const offsetAbout = isSmallScreen ? -60 : -40;
  const offsetProjects = isSmallScreen ? -60 : -45;
  const offsetContact = isSmallScreen ? -60 : -45;

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <div id="home" className="bg-gray-100 dark:bg-gray-900">
        <div className="w-full">
          <div className="bg-white dark:bg-gray-800 rounded-xs shadow-xl min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="w-full py-8 px-4 md:px-8 lg:px-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-customColorHeader dark:text-gray-100 text-center">
                {t("translation.home.paragraphs.greeting")} <br />
                {t("translation.home.paragraphs.header")}
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
                {t("translation.home.paragraphs.description")}
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={offsetAbout}
                  className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer w-full md:w-auto text-lg"
                >
                  {t("translation.navigation.about")}
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={offsetProjects}
                  className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer w-full md:w-auto text-lg"
                >
                  {t("translation.navigation.projects")}
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={offsetContact}
                  className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer w-full md:w-auto text-lg"
                >
                  {t("translation.navigation.contact")}
                </Link>
              </div>
            </div>
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
