import React, { useState } from "react";
import {
  FaFolderOpen,
  FaGithub,
  FaExternalLinkAlt,
  FaCopy,
  FaCheck,
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
}

// Project data with links
const projectsData = {
  averiasHogar: {
    links: {
      live: "https://averiashogar.es/",
      github: "https://github.com/gnovl/averias-app",
    },
  },
  TaskNail: {
    links: {
      live: "https://www.tasknail.com/",
      github: "https://github.com/gnovl/task-nail-app.git",
    },
  },
  dawProject: {
    links: {
      github: "https://github.com/gnovl/daw-proyecto",
    },
  },
  portfolio: {
    links: {
      live: "https://gnovl.github.io/portfolio/",
      github: "https://github.com/gnovl/portfolio",
    },
  },
} as const;

// Projects array with IDs
const projects: Project[] = [
  {
    id: "averiasHogar",
    links: projectsData.averiasHogar.links,
    translationKey: "averiasHogar",
  },
  {
    id: "TaskNail",
    links: projectsData.TaskNail.links,
    translationKey: "TaskNail",
  },
  {
    id: "dawProject",
    links: projectsData.dawProject.links,
    translationKey: "dawProject",
  },
  {
    id: "portfolio",
    links: projectsData.portfolio.links,
    translationKey: "portfolio",
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [copiedProject, setCopiedProject] = useState<string | null>(null);

  const copyToClipboard = (project: Project) => {
    const url =
      project.links.live || project.links.github || window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedProject(project.id);

    // Reset the copied state after 2 seconds
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
                  `translation.home.projects.items.${project.translationKey}.title`
                );
                const description = t(
                  `translation.home.projects.items.${project.translationKey}.description`
                );

                // Get technologies with proper type handling
                const technologiesValue = t(
                  `translation.home.projects.items.${project.translationKey}.technologies`,
                  { returnObjects: true }
                );

                // Ensure technologies is a string array
                const technologies: string[] = Array.isArray(technologiesValue)
                  ? technologiesValue.map((tech) => String(tech))
                  : [];

                return (
                  <div
                    key={project.id}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-gray-800 dark:text-white w-full max-w-4xl shadow-sm border border-gray-200 dark:border-gray-600"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {title}
                    </h3>

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
