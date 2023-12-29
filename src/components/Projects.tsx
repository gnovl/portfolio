import React from 'react';
import { FcOpenedFolder } from "react-icons/fc";
import ProjectItem from './ItemsProjects';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const projectData = [
  {
    imageSrc: './img/averias_hogar_sc.png',
    title: 'Averías Hogar',
    status: 'Completed',
    technologies: 'Tailwind CSS, React',
    description: '',
    githubLink: '',
    hostingLink: 'https://averiashogar.es/',
  },
  {
    imageSrc: './img/jsSnakeGame.jpg',
    title: 'Snake Game',
    status: 'Currently in development',
    technologies: 'Java',
    description: '',
    githubLink: '',
    hostingLink: '',
  },
  {
    imageSrc: './img/rocket.png',
    title: 'Coming Soon',
    status: 'Coming Soon',
    technologies: '',
    description: 'Stay tuned for exciting projects, innovations, and more. I`m commited to continue growing as a professional.',
    githubLink: '',
    hostingLink: '',
  },
  
  
  // Add more project data objects here
];





const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center lg:pt-14">
      <div className="md:mx-auto text-center pt-20 p-4 max-w-6xl">
      <div className="border-gray-400 border-t my-2"></div>
      <div className="bg-customBGHeader text-customColorHeader border rounded-md flex items-center justify-center mb-2">
          <FcOpenedFolder className="text-2xl mr-1" />
          <h2 className="text-2xl font-semibold">{i18n.language === 'en' ? 'Projects' : t('translation.home.projects.title')}</h2>
        </div>
        <div className="border-gray-400 border-t my-2"></div>
        <div className='bg-white border rounded-lg shadow-xl p-2 lg:p-6 '>
          {/* TRANSLATIONS */}
          <p className="text-base text-justify">
             {i18n.language === 'en' ? (
              /* English content */
             "Here I will be showcasing my current under development projects as well as my finished works, offering a comprehensive overview of my skills and expertise. Explore the diverse range of projects I've undertaken to witness my growth and capabilities firsthand. Whether you're interested in my latest endeavors or past achievements, you'll find a collection that reflects my continuous journey in software and web development."
                 ) : (
               /* Translated content */
             t('translation.home.projects.paragraph1')
              )}
           </p>
           <p className="text-base text-justify mt-2 mb-2">
             {i18n.language === 'en' ? (
              /* English content */
             "🗃️ My projects"
                 ) : (
               /* Translated content */
             t('translation.home.projects.paragraph2')
              )}
           </p>
        
           {/* Iterate over the project data and create a ProjectItem for each */}
           <ul className="list-disc list-inside">
            {projectData.map((project, index) => (
               <ProjectItem projectKey={`project${index + 1}`} key={index} project={project} imageSrc={project.imageSrc} 
                />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
