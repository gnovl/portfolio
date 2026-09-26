import React from "react";
import { Link } from "react-scroll";
import { AiFillGithub } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const isSmallScreen = window.innerWidth < 768;
  const offsetHome = isSmallScreen ? -160 : -100;
  const offsetAbout = isSmallScreen ? -90 : -40;
  const offsetProjects = isSmallScreen ? -90 : -45;
  const offsetContact = isSmallScreen ? -80 : -45;

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Brand + description */}
          <div className="max-w-sm">
            <h3 className="text-lg font-bold text-white mb-3">Gino Varela</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              {t("translation.home.footer.description")}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-5">
              <span className="w-1.5 h-1.5 bg-emerald-400"></span>
              {t("translation.home.footer.status")}
            </div>
            <a
              href="https://github.com/gnovl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
              title="GitHub"
            >
              <AiFillGithub size={18} />
            </a>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
              ~/{t("translation.home.footer.navLabel")}
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={offsetHome}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t("translation.navigation.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={offsetAbout}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t("translation.navigation.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={offsetProjects}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t("translation.navigation.projects")}
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={offsetContact}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t("translation.navigation.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
          <span>
            © {currentYear} Gino Varela.{" "}
            {t("translation.home.footer.copyright")}
          </span>
          <div className="flex items-center">
            <FaCode className="mr-2" />
            <span>{t("translation.home.footer.builtWith")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
