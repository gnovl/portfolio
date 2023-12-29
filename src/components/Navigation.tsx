import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub } from 'react-icons/ai';
import './HighlightSection.css'
import { useTranslation } from 'react-i18next';




const Navigation: React.FC = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState<string | null>('');

    const handleSetActiveSection = (id: string | null) => {
      setActiveSection(id);
    };
  
    useEffect(() => {
        // Function to handle scroll events
      const handleScroll = () => {
        // An array of section IDs to check
        const sections = ['home', 'about', 'projects', 'contact'];
        // Loop through each section
        for (const sectionId of sections) {
            // Get the DOM element of the section by its ID
          const section = document.getElementById(sectionId);
  
          if (section) {
            // Get the position of the section relative to the viewport
            const rect = section.getBoundingClientRect();
             // Check if the top of the section is at or above 100 pixels from the top of the viewport
        // and if the bottom of the section is at or below 100 pixels from the top of the viewport

            if (rect.top <= 100 && rect.bottom >= 100) {
                // If the conditions are met, set the active section to this section's ID
              handleSetActiveSection(sectionId);
              // Exit the loop, as we've found the active section
              break;
            }
          }
        }
  
        // Check if the scroll position is very close to the top (within a threshold)
        const isAtTop = window.scrollY < 10;
        if (isAtTop) {
             // If the scroll position is near the top, set the active section to 'home'
          handleSetActiveSection('home');
        }
      };
  
      // Initialize the active section on first load
      handleScroll();
  
      // Add a scroll event listener to the window, so we can call handleScroll when the user scrolls
      window.addEventListener('scroll', handleScroll);
      // Cleanup: Remove the scroll event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed
    const offsetHome = isSmallScreen ? -160 : -100;
    const offsetAbout = isSmallScreen ? -90 : 5;
    const offsetProjects = isSmallScreen ? -90 : 70;
    const offsetContact = isSmallScreen ? -80 : 10;


  return (
    <nav className="bg-white lg:p-3 p-6 pb-3 sticky top-0 z-50 border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <ul className="flex flex-col md:flex-row lg:ml-auto md:ml-auto">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={offsetHome}
              className={`md:hover:bg-customGrayHover  px-2 py-0 md:py-2 md:m-1   rounded-md transition duration-300 cursor-pointer ${
                activeSection === 'home' ? 'active-link' : 'font-thin'
              }`}
            >
              {t('translation.navigation.home')}
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={offsetAbout}
              className={` md:hover:bg-customGrayHover px-2 py-0 md:py-2 md:m-1 rounded-md transition duration-300 cursor-pointer ${
                activeSection === 'about' ? 'active-link' : 'font-thin'
              }`}
            >
              {t('translation.navigation.about')}
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={offsetProjects}
              className={`md:hover:bg-customGrayHover px-2 py-0 md:py-2 md:m-1 rounded-md transition duration-300 cursor-pointer ${
                activeSection === 'projects' ? 'active-link' : 'font-thin'
              }`}
            >
              {t('translation.navigation.projects')}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={offsetContact}
              className={` md:hover:bg-customGrayHover px-2 py-0 md:py-2 md:m-1 rounded-md transition duration-300 cursor-pointer ${
                activeSection === 'contact' ? 'active-link' : 'font-thin'
              }`}
            >
              {t('translation.navigation.contact')}
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <a
            href="https://github.com/gnovl"
            className="hover:text-blue-500"
            target='_blank'
          >
            <AiFillGithub size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;