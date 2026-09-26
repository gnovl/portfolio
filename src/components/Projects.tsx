import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCopy,
  FaCheck,
  FaArchive,
  FaTools,
  FaTasks,
  FaChartLine,
  FaGraduationCap,
  FaCalendarCheck,
  FaLaptopCode,
} from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

interface ProjectLink {
  live?: string;
  github?: string;
}

interface Project {
  id: keyof typeof projectsData;
  links: ProjectLink;
  translationKey: string;
  lastUpdated: string;
  isArchived?: boolean;
  icon: React.ElementType;
  gradientClass: string;
  iconClass: string;
  dotClass: string;
}

// Project data with links and last updated dates

const projectsData = {
  averiasHogar: {
    links: {
      github: "https://github.com/gnovl/averias-app",
    },
    lastUpdated: "2024-12",
    isArchived: true,
  },
  TaskNail: {
    links: {
      github: "https://github.com/gnovl/task-nail-app",
    },
    lastUpdated: "2025-06",
    isArchived: true,
  },
  siteMonitorService: {
    links: {
      github: "https://github.com/gnovl/site-monitor-service",
    },
    lastUpdated: "2025-05",
    isArchived: false,
  },
  dawProject: {
    links: {
      github: "https://github.com/gnovl/daw-proyecto",
    },
    lastUpdated: "2024-08",
    isArchived: false,
  },
  portfolio: {
    links: {
      github: "https://github.com/gnovl/portfolio",
    },
    lastUpdated: "2026-02",
    isArchived: false,
  },
  inspirationDental: {
    links: {
      live: "https://inspirationesteticadental.es/",
    },
    lastUpdated: "2026-08",
    isArchived: false,
  },
  agendaDental: {
    links: {
      live: "https://agenda-dental.com/",
    },
    lastUpdated: "2026-08",
    isArchived: false,
  },
} as const;

// Projects array with IDs, plus the cover art (icon + accent colors) for each
const projects: Project[] = [
  {
    id: "averiasHogar",
    links: projectsData.averiasHogar.links,
    translationKey: "averiasHogar",
    lastUpdated: projectsData.averiasHogar.lastUpdated,
    isArchived: projectsData.averiasHogar.isArchived,
    icon: FaTools,
    gradientClass: "from-amber-900/60 via-black to-black",
    iconClass: "text-amber-400",
    dotClass: "bg-amber-400",
  },
  {
    id: "TaskNail",
    links: projectsData.TaskNail.links,
    translationKey: "TaskNail",
    lastUpdated: projectsData.TaskNail.lastUpdated,
    isArchived: projectsData.TaskNail.isArchived,
    icon: FaTasks,
    gradientClass: "from-violet-900/60 via-black to-black",
    iconClass: "text-violet-400",
    dotClass: "bg-violet-400",
  },
  {
    id: "siteMonitorService",
    links: projectsData.siteMonitorService.links,
    translationKey: "siteMonitorService",
    lastUpdated: projectsData.siteMonitorService.lastUpdated,
    isArchived: projectsData.siteMonitorService.isArchived,
    icon: FaChartLine,
    gradientClass: "from-emerald-900/60 via-black to-black",
    iconClass: "text-emerald-400",
    dotClass: "bg-emerald-400",
  },
  {
    id: "dawProject",
    links: projectsData.dawProject.links,
    translationKey: "dawProject",
    lastUpdated: projectsData.dawProject.lastUpdated,
    isArchived: projectsData.dawProject.isArchived,
    icon: FaGraduationCap,
    gradientClass: "from-sky-900/60 via-black to-black",
    iconClass: "text-sky-400",
    dotClass: "bg-sky-400",
  },
  {
    id: "inspirationDental",
    links: projectsData.inspirationDental.links,
    translationKey: "inspirationDental",
    lastUpdated: projectsData.inspirationDental.lastUpdated,
    isArchived: projectsData.inspirationDental.isArchived,
    icon: FaTooth,
    gradientClass: "from-rose-900/60 via-black to-black",
    iconClass: "text-rose-400",
    dotClass: "bg-rose-400",
  },
  {
    id: "agendaDental",
    links: projectsData.agendaDental.links,
    translationKey: "agendaDental",
    lastUpdated: projectsData.agendaDental.lastUpdated,
    isArchived: projectsData.agendaDental.isArchived,
    icon: FaCalendarCheck,
    gradientClass: "from-cyan-900/60 via-black to-black",
    iconClass: "text-cyan-400",
    dotClass: "bg-cyan-400",
  },
  {
    id: "portfolio",
    links: projectsData.portfolio.links,
    translationKey: "portfolio",
    lastUpdated: projectsData.portfolio.lastUpdated,
    isArchived: projectsData.portfolio.isArchived,
    icon: FaLaptopCode,
    gradientClass: "from-blue-900/60 via-black to-black",
    iconClass: "text-blue-400",
    dotClass: "bg-blue-400",
  },
];

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [copiedProject, setCopiedProject] = useState<string | null>(null);

  // Format date to display (e.g., "Jan 2024" or "Ene 2024")
  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split("-");

    const monthNames =
      i18n.language === "es"
        ? [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
          ]
        : [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];

    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const copyToClipboard = (project: Project) => {
    const url =
      project.links.live || project.links.github || window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedProject(project.id);
    setTimeout(() => {
      setCopiedProject(null);
    }, 2000);
  };

  return (
    <div className="bg-black">
      <div className="w-full py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm text-blue-400 mb-3">~/projects</p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            {t("translation.home.projects.title")}
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => {
              const Icon = project.icon;
              const title = t(
                `translation.home.projects.items.${project.translationKey}.title`,
              );
              const description = t(
                `translation.home.projects.items.${project.translationKey}.description`,
              );
              const technologiesValue = t(
                `translation.home.projects.items.${project.translationKey}.technologies`,
                { returnObjects: true },
              );
              const technologies: string[] = Array.isArray(technologiesValue)
                ? technologiesValue.map((tech) => String(tech))
                : [];
              const visibleTechnologies = technologies.slice(0, 3);
              const extraTechCount =
                technologies.length - visibleTechnologies.length;
              return (
                <div
                  key={project.id}
                  className="border border-zinc-800 bg-zinc-950 flex flex-col"
                >
                  {/* Cover art */}
                  <div
                    className={`relative aspect-video w-full overflow-hidden border-b border-zinc-800 bg-gradient-to-br ${project.gradientClass} flex items-center justify-center`}
                  >
                    <Icon
                      size={72}
                      className={`absolute -right-4 -bottom-5 opacity-10 ${project.iconClass}`}
                    />
                    <Icon
                      size={28}
                      className={`relative z-10 ${project.iconClass}`}
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                        <span
                          className={`inline-block w-1.5 h-1.5 ${project.dotClass}`}
                        ></span>
                        <span>{formatDate(project.lastUpdated)}</span>
                      </div>
                      {project.isArchived && (
                        <span className="flex items-center gap-1 px-1.5 py-0.5 border border-zinc-700 text-zinc-400 text-[11px] font-medium whitespace-nowrap">
                          <FaArchive size={9} />
                          {t("translation.home.projects.archived")}
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-semibold text-white mb-1.5 line-clamp-1">
                      {title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-3 line-clamp-2 flex-1">
                      {description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {visibleTechnologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="border border-zinc-800 text-zinc-300 text-[11px] px-1.5 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                      {extraTechCount > 0 && (
                        <span className="border border-zinc-800 text-zinc-500 text-[11px] px-1.5 py-0.5">
                          +{extraTechCount}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-end space-x-3 pt-3 border-t border-zinc-800">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white transition-colors"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt size={13} />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <FaGithub size={15} />
                        </a>
                      )}
                      <button
                        onClick={() => copyToClipboard(project)}
                        className="text-zinc-400 hover:text-white transition-colors"
                        title="Copy Link"
                      >
                        {copiedProject === project.id ? (
                          <FaCheck size={13} className="text-emerald-400" />
                        ) : (
                          <FaCopy size={13} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
