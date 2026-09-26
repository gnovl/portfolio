import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiSymfony,
  SiGit,
  SiGithub,
  SiJson,
  SiPrisma,
  SiDocker,
  SiMysql,
  SiOracle,
} from "react-icons/si";

interface Tech {
  name: string;
  icon: React.ElementType;
  color: string;
}

// Mirrors the stack listed in the About section.
const technologies: Tech[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C#", icon: SiCsharp, color: "#512BD4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Symfony", icon: SiSymfony, color: "#E7E7E7" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "JSON", icon: SiJson, color: "#E7E7E7" },
  { name: "Prisma", icon: SiPrisma, color: "#A0AEC0" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Oracle", icon: SiOracle, color: "#F80000" },
];

// Duplicated once so the strip can loop seamlessly (translateX(-50%)).
const items = [...technologies, ...technologies];

const TechMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2 border border-zinc-800 bg-zinc-950 px-4 py-2 mx-2 shrink-0 whitespace-nowrap"
            >
              <Icon size={18} style={{ color: tech.color }} />
              <span className="text-sm text-zinc-300 font-medium">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;
