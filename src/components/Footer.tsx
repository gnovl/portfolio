import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 py-8 border-t dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            {t("translation.home.footer.description")}
          </p>

          {/* Copyright & Tech Stack */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <AiOutlineCopyright className="mr-1" />
              <span>
                {currentYear} Gino Varela.{" "}
                {t("translation.home.footer.copyright")}
              </span>
            </div>
            <div className="flex items-center">
              <FaCode className="mr-2" />
              <span>{t("translation.home.footer.builtWith")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
