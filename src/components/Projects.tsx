import React, { useState } from "react";
import {
  FaFolderOpen,
  FaGithub,
  FaExternalLinkAlt,
  FaCopy,
  FaCheck,
  FaCalendarAlt,
  FaArchive,
} from "react-icons/fa";
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
} as const;

// Projects array with IDs
const projects: Project[] = [
  {
    id: "averiasHogar",
    links: projectsData.averiasHogar.links,
    translationKey: "averiasHogar",
    lastUpdated: projectsData.averiasHogar.lastUpdated,
    isArchived: projectsData.averiasHogar.isArchived,
  },
  {
    id: "TaskNail",
    links: projectsData.TaskNail.links,
    translationKey: "TaskNail",
    lastUpdated: projectsData.TaskNail.lastUpdated,
    isArchived: projectsData.TaskNail.isArchived,
  },
  {
    id: "siteMonitorService",
    links: projectsData.siteMonitorService.links,
    translationKey: "siteMonitorService",
    lastUpdated: projectsData.siteMonitorService.lastUpdated,
    isArchived: projectsData.siteMonitorService.isArchived,
  },
  {
    id: "dawProject",
    links: projectsData.dawProject.links,
    translationKey: "dawProject",
    lastUpdated: projectsData.dawProject.lastUpdated,
    isArchived: projectsData.dawProject.isArchived,
  },
  {
    id: "portfolio",
    links: projectsData.portfolio.links,
    translationKey: "portfolio",
    lastUpdated: projectsData.portfolio.lastUpdated,
    isArchived: projectsData.portfolio.isArchived,
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
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full">
        <div className="bg-white dark:bg-gray-800 rounded-xs shadow-xl min-h-screen flex flex-col justify-center">
          <div className="w-full py-8 px-4 md:px-8 lg:px-12">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-8">
              <FaFolderOpen className="text-2xl text-gray-700 dark:text-gray-300" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {t("translation.home.projects.title")}
              </h2>
            </div>
            {/* Projects List */}
            <div className="flex flex-col items-center space-y-4">
              {projects.map((project) => {
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
                return (
                  <div
                    key={project.id}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-gray-800 dark:text-white w-full max-w-4xl shadow-sm border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {title}
                        </h3>
                        {project.isArchived && (
                          <span className="flex items-center gap-1 px-2 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md whitespace-nowrap">
                            <FaArchive size={10} />
                            {t("translation.home.projects.archived")}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap sm:mt-1">
                        <FaCalendarAlt className="mr-1" size={12} />
                        <span>
                          {t("translation.home.projects.lastUpdated")}{" "}
                          {formatDate(project.lastUpdated)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-4">
                      {description}
                    </p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-white dark:bg-gray-800 px-3 py-1 rounded-md text-sm font-medium text-gray-600 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-end space-x-4">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                      <button
                        onClick={() => copyToClipboard(project)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors"
                        title="Copy Link"
                      >
                        {copiedProject === project.id ? (
                          <FaCheck size={18} className="text-green-500" />
                        ) : (
                          <FaCopy size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
