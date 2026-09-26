import React from "react";
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
    frameworks: ["React", "Node.js", "Next.js", "Tailwind CSS", "Symfony"],
    versionControl: ["Git", "GitHub"],
    developmentTools: ["JSON", "Prisma", "Docker"],
    databases: ["MySQL", "Oracle"],
    ai: ["Large Language Models (LLMs)"],
  } as const;

  const categories: { key: keyof typeof stack; labelKey: string }[] = [
    {
      key: "languages",
      labelKey: "translation.home.about.stack.categories.languages",
    },
    {
      key: "frameworks",
      labelKey: "translation.home.about.stack.categories.frameworks",
    },
    {
      key: "versionControl",
      labelKey: "translation.home.about.stack.categories.versionControl",
    },
    {
      key: "developmentTools",
      labelKey: "translation.home.about.stack.categories.developmentTools",
    },
    {
      key: "databases",
      labelKey: "translation.home.about.stack.categories.databases",
    },
    { key: "ai", labelKey: "translation.home.about.stack.categories.ai" },
  ];

  return (
    <div className="bg-black">
      <div className="w-full py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm text-blue-400 mb-3">~/about</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t("translation.home.about.title")}
          </h2>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl mb-14">
            {t("translation.home.about.introduction")}
          </p>

          <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              {t("translation.home.about.stack.title")}
            </h3>

            <div className="space-y-6">
              {categories.map(({ key, labelKey }) => (
                <div key={key}>
                  <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
                    {t(labelKey)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack[key].map((item) => (
                      <span
                        key={item}
                        className="border border-zinc-800 text-zinc-300 text-sm px-3 py-1.5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
