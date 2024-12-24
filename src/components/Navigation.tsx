import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { AiFillGithub, AiOutlineFilePdf } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import ResumeModal from "./ResumeModal";
import DarkModeToggle from "./DarkModeToggle";

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const isSmallScreen = window.innerWidth < 768;
  const offsetHome = isSmallScreen ? -160 : -100;
  const offsetAbout = isSmallScreen ? -90 : -40;
  const offsetProjects = isSmallScreen ? -90 : -45;
  const offsetContact = isSmallScreen ? -80 : -45;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            active ? "bg-gray-100 dark:bg-gray-700" : ""
          } ${className} px-4 py-2 cursor-pointer rounded-md dark:text-gray-200`}
        >
          {children}
        </div>
      )}
    </Menu.Item>
  );

  return (
    <nav className="bg-white dark:bg-gray-800 lg:p-3 p-6 pb-3 sticky top-0 z-50 border-b dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Language Selector */}
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <Menu.Button className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md font-medium transition-all duration-200">
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
                  <Menu.Items className="absolute left-0 mt-2 w-32 origin-top-left bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg p-2 focus:outline-none">
                    <MenuItem
                      onClick={() => changeLanguage("en")}
                      className={i18n.language === "en" ? "font-bold" : ""}
                    >
                      English
                    </MenuItem>
                    <MenuItem
                      onClick={() => changeLanguage("es")}
                      className={i18n.language === "es" ? "font-bold" : ""}
                    >
                      Español
                    </MenuItem>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          <DarkModeToggle />
        </div>

        {/* Main Menu */}
        <Menu as="div" className="relative inline-block text-left">
          {({ open }) => (
            <>
              <Menu.Button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md font-medium transition-all duration-200 flex items-center space-x-1">
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
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg p-2 focus:outline-none">
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

                    <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

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

                    <MenuItem onClick={openModal}>
                      <div className="flex items-center w-full">
                        <AiOutlineFilePdf className="mr-2" size={20} />
                        View CV
                      </div>
                    </MenuItem>
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
      <ResumeModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navigation;
