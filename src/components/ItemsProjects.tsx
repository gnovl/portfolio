import React from 'react';
import { RiGithubFill, RiExternalLinkLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

interface ProjectItemProps {
  projectKey: string;
  customStyles?: string;
  imageSrc: string;
  project: {
    title: string;
    technologies: string;
    status: string;
    description: string;
    githubLink: string;
    hostingLink: string;
  };
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  projectKey,
  customStyles,
  imageSrc,
  project, // Pass the entire project object
}) => {
  const { t } = useTranslation();
 


 

  // Define status text colors based on status values
  type StatusColors = {
    [key: string]: string;
  };

  const statusColors: StatusColors = {
    'Completed': 'text-green-500',
    'Terminado': 'text-green-500',
    'Terminé': 'text-green-500', // French translation for 'Terminé'
    'Currently in development': 'text-red-500',
    'En desarrollo': 'text-red-500',
    'En cours de développement': 'text-red-500',
  };

  // Define status text translations based on status values
  type StatusTranslations = {
    [key: string]: string;
  };

  const statusTranslations: StatusTranslations = {
    'Completed': 'Status',
    'Terminado': 'Estado',
    'Terminé': 'État', // French translation for 'Terminé'
    'Currently in development': 'Status',
    'En desarrollo': 'Estado',
    'En cours de développement': 'État',
  };

  const translatedStatus = t(`translation.home.projects.${projectKey}.status`) || project.status;
  const statusColor = statusColors[translatedStatus] || 'text-gray-600';
  const statusTranslation = statusTranslations[translatedStatus] || 'Status';

  return (
    <li className={`p-2 sm:p-4 flex items-center space-x-4 border hover:border-black md:h-32 xl:h-32  ${customStyles}`}>
    <img src={imageSrc} alt={t(`translation.home.projects.${projectKey}.title`)} className="w-24 h-24 sm:w-24 sm:h-24 rounded-lg" />
    <div>
      <h3 className="text-lg font-semibold">{t(`translation.home.projects.${projectKey}.title`)}</h3>
      <span className="text-sm font-semibold ">
        <span className="text-gray-600">
          {i18n.language === 'en' ? statusTranslation : i18n.language === 'es' ? 'Estado' : 'État'}:{' '}
        </span>
        <span className={statusColor}>
          {translatedStatus}.{' '}
        </span>
        {project.technologies && (
        <span className={`text-gray-600 text-sm ml-2`}>
              {i18n.language === 'en' ? 'Tools' : i18n.language === 'es' ? 'Tecnologías' : 'Technologies'}: {t(`translation.home.projects.${projectKey}.technologies`)}
            </span>
            )}
      </span>
      <div className="flex items-center mt-2">
        {/* You can add more elements here if needed */}
      </div>
      <p className="text-sm text-gray-600">{t(`translation.home.projects.${projectKey}.description`)}</p>
      <div className="mt-2">
       {/* Conditionally render GitHub link if available */}
       {project.githubLink && (
            <a href={project.githubLink} className="text-gray-500 hover:text-black mr-4"
            target="_blank"
            rel="noopener noreferrer">
              <RiGithubFill className="inline-block text-xl" />
            </a>
          )}
          {/* Conditionally render Hosting link if available */}
          {project.hostingLink && (
            <a href={project.hostingLink} className="text-gray-500 hover:text-black"
            target="_blank"
            rel="noopener noreferrer">
              <RiExternalLinkLine className="inline-block text-xl" />
            </a>
          )}
      </div>
    </div>
  </li>  );
};

export default ProjectItem;
