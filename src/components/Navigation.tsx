import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";
import { FaFileAlt } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isSmallScreen = window.innerWidth < 768;
  const offsetHome = isSmallScreen ? -160 : -100;
  const offsetAbout = isSmallScreen ? -90 : -40;
  const offsetProjects = isSmallScreen ? -90 : -45;
  const offsetContact = isSmallScreen ? -80 : -45;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const MenuItem = ({
    children,
    onClick,
    className = "",
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
  }) => (
    <Menu.Item>
      {({ active }) => (
        <div
          onClick={onClick}
          className={`${
            active ? "bg-zinc-900" : ""
          } ${className} px-4 py-2 cursor-pointer text-zinc-200`}
        >
          {children}
        </div>
      )}
    </Menu.Item>
  );

  const sectionLinkClass =
    "text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer font-medium";

  return (
    <nav className="bg-black lg:p-3 p-6 pb-3 sticky top-0 z-50 border-b border-zinc-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: language selector, and (on larger screens) section links */}
        <div className="flex items-center space-x-2 lg:space-x-8">
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <Menu as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <Menu.Button className="px-3 py-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 font-medium transition-all duration-200">
                    <IoLanguage size={20} />
                  </Menu.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-32 origin-top-left bg-black border border-zinc-800 shadow-lg p-2 focus:outline-none z-50">
                      <MenuItem
                        onClick={() => changeLanguage("en")}
                        className={
                          i18n.language === "en" ? "font-bold text-white" : ""
                        }
                      >
                        English
                      </MenuItem>
                      <MenuItem
                        onClick={() => changeLanguage("es")}
                        className={
                          i18n.language === "es" ? "font-bold text-white" : ""
                        }
                      >
                        Español
                      </MenuItem>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>

          {/* Section links - sit directly in the bar on larger screens */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={offsetHome}
              className={sectionLinkClass}
            >
              {t("translation.navigation.home")}
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={offsetAbout}
              className={sectionLinkClass}
            >
              {t("translation.navigation.about")}
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={offsetProjects}
              className={sectionLinkClass}
            >
              {t("translation.navigation.projects")}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={offsetContact}
              className={sectionLinkClass}
            >
              {t("translation.navigation.contact")}
            </Link>
          </div>
        </div>

        {/* Right side: actions on larger screens, hamburger menu on smaller screens */}
        <div className="flex items-center">
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="https://github.com/gnovl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-200"
              title="GitHub"
            >
              <AiFillGithub size={22} />
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={offsetContact}
              className="flex items-center gap-2 text-white font-semibold hover:text-zinc-300 transition-colors duration-200 cursor-pointer"
            >
              <FaFileAlt size={14} />
              {i18n.language === "en" ? "Request CV" : "Solicitar CV"}
            </Link>
          </div>

          {/* Mobile Menu */}
          <Menu as="div" className="relative inline-block text-left lg:hidden">
            {({ open }) => (
              <>
                <Menu.Button className="px-4 py-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 font-medium transition-all duration-200 flex items-center space-x-1">
                  <span>Menu</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </Menu.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-black border border-zinc-800 shadow-lg p-2 focus:outline-none z-50">
                    <div className="space-y-1">
                      <MenuItem>
                        <Link
                          to="home"
                          smooth={true}
                          duration={500}
                          offset={offsetHome}
                          className="block w-full"
                        >
                          {t("translation.navigation.home")}
                        </Link>
                      </MenuItem>

                      <MenuItem>
                        <Link
                          to="about"
                          smooth={true}
                          duration={500}
                          offset={offsetAbout}
                          className="block w-full"
                        >
                          {t("translation.navigation.about")}
                        </Link>
                      </MenuItem>

                      <MenuItem>
                        <Link
                          to="projects"
                          smooth={true}
                          duration={500}
                          offset={offsetProjects}
                          className="block w-full"
                        >
                          {t("translation.navigation.projects")}
                        </Link>
                      </MenuItem>

                      <MenuItem>
                        <Link
                          to="contact"
                          smooth={true}
                          duration={500}
                          offset={offsetContact}
                          className="block w-full"
                        >
                          {t("translation.navigation.contact")}
                        </Link>
                      </MenuItem>

                      <div className="border-t border-zinc-800 my-2"></div>

                      <MenuItem>
                        <a
                          href="https://github.com/gnovl"
                          className="flex items-center w-full"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub className="mr-2" size={20} />
                          GitHub
                        </a>
                      </MenuItem>

                      <MenuItem>
                        <Link
                          to="contact"
                          smooth={true}
                          duration={500}
                          offset={offsetContact}
                          className="flex items-center w-full"
                        >
                          <FaFileAlt className="mr-2" size={20} />
                          {i18n.language === "en"
                            ? "Request CV"
                            : "Solicitar CV"}
                        </Link>
                      </MenuItem>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
