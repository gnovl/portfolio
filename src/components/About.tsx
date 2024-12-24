import React from "react";
import { FaUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  const stack = {
    languages: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C#",
      "HTML5",
      "CSS3",
      "PHP",
    ],
    frameworks: ["React", "Node.js", "Next.js", "Tailwind CSS"],
    versionControl: ["Git", "GitHub"],
    developmentTools: ["JSON", "Prisma"],
    databases: ["MySQL", "Oracle"],
    ai: ["Large Language Models (LLMs)"],
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full">
        <div className="bg-white dark:bg-gray-800 rounded-xs shadow-xl min-h-screen flex flex-col justify-center">
          <div className="w-full py-8 px-4 md:px-8 lg:px-12">
            <div className="flex items-center space-x-3 mb-8">
              <FaUser className="text-2xl text-gray-700 dark:text-gray-300" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {t("translation.home.about.title")}
              </h2>
            </div>

            {/* Personal Introduction */}
            <div className="prose dark:prose-invert max-w-none mt-6">
              <p className="text-base text-justify leading-relaxed dark:text-gray-300">
                {t("translation.home.about.introduction")}
              </p>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">
                {t("translation.home.about.stack.title")}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
                {t("translation.home.about.stack.description")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Languages */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {t("translation.home.about.stack.categories.languages")}
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {stack.languages.map((lang) => (
                      <li key={lang} className="text-sm">
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Frameworks */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {t("translation.home.about.stack.categories.frameworks")}
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {stack.frameworks.map((framework) => (
                      <li key={framework} className="text-sm">
                        {framework}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Version Control */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {t(
                      "translation.home.about.stack.categories.versionControl"
                    )}
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {stack.versionControl.map((tool) => (
                      <li key={tool} className="text-sm">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Development Tools */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {t(
                      "translation.home.about.stack.categories.developmentTools"
                    )}
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {stack.developmentTools.map((tool) => (
                      <li key={tool} className="text-sm">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Databases */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {t("translation.home.about.stack.categories.databases")}
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {stack.databases.map((db) => (
                      <li key={db} className="text-sm">
                        {db}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                    {t("translation.home.about.stack.categories.ai")}
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {stack.ai.map((item) => (
                      <li key={item} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
