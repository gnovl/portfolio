import React from 'react';
import {FcDocument} from 'react-icons/fc';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaServer } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';


const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center ">
      <div className="md:mx-auto text-center lg:pt-4 p-4 pt-20 max-w-6xl">
      <div className="border-gray-400 border-t my-2"></div>
      <div className="bg-customBGHeader text-customColorHeader border rounded-md flex items-center justify-center mb-2">
          <FcDocument className="text-2xl mr-1" />
          <h2 className="text-2xl font-semibold">{i18n.language === 'en' ? 'About me' : t('translation.home.about.title')}</h2>
        </div>
        <div className="border-gray-400 border-t my-2"></div>
        <div className='bg-white border rounded-lg shadow-xl p-2 lg:p-6'>

        <p className="text-base text-justify mt-4">
              {i18n.language === 'en' ? (
                 /* English content */
                 "👨‍💻 Bachelor's degree in web development, specializing in web development, passionate about emerging technologies and best practices. Experienced in team and individual project development. I also undertake freelance work tailored to the client's needs. My primary goal is to continue growing professionally in the technology field and stay updated with the latest technologies of today."
                 ) : (
                 /* Translated content */
                 t('translation.home.about.paragraph1')
                 )}
             </p>
             <p className="text-base text-justify mt-4">
              {i18n.language === 'en' ? (
                 /* English content */
                 "As an enthusiastic web developer, my tech adventure knows no bounds."
                 ) : (
                 /* Translated content */
                 t('translation.home.about.paragraph2')
                 )}
             </p>
             <p className="text-base text-justify mt-4">
              {i18n.language === 'en' ? (
                 /* English content */
                 "🛠️ Tools that I use in my day-to-day: HTML5, CSS3, JavaScript, React, Node.js, and beyond, my passion fuels my drive for constant growth. My portfolio showcases dynamic web applications that are not just user-friendly but also responsive."
                 ) : (
                 /* Translated content */
                 t('translation.home.about.paragraph3')
                 )}
             </p>

        {/* Skills section */}
        <div className="flex flex-wrap justify-center mt-9">
            <div className="flex items-center mr-4 mb-4">
              <FaHtml5 className="text-4xl mr-2 text-gray-700 hover:text-orange-500" />
              <span>HTML5</span>
            </div>
            <div className="flex items-center mr-4 mb-4">
              <FaCss3 className="text-4xl mr-2 text-gray-700 hover:text-blue-500" />
              <span>CSS3</span>
            </div>
            <div className="flex items-center mr-4 mb-4">
              <FaJs className="text-4xl mr-2 text-gray-700 hover:text-yellow-500" />
              <span>Javascript</span>
            </div>
            <div className="flex items-center mr-4 mb-4">
              <FaReact className="text-4xl mr-2 text-gray-700 hover:text-blue-400" />
              <span>React</span>
            </div>
            <div className="flex items-center mr-4 mb-4">
              <FaNodeJs className="text-4xl mr-2 text-gray-700 hover:text-green-500" />
              <span>Nodejs</span>
            </div>
            <div className="flex items-center mr-4 mb-4">
              <FaServer className="text-4xl mr-2 text-gray-700 hover:text-yellow-500" />
              <span>Expressjs</span>
            </div>
            <div className='flex items-center mr-4 mb-4'>
            <FaServer className="text-4xl mr-2 text-gray-700 hover:text-blue-500 " />
              <span>MySQL</span>
            </div>
            <div className='flex items-center mr-4 mb-4'>
            <DiMongodb className="text-4xl mr-2 text-gray-700 hover:text-black" />
              <span>MongoDB</span>
            </div>

          </div>

          {/* DIV TRANSLATIONS */}
          <div>
          <p className='text-base text-justify mb-2 '>
        {t('translation.home.skills.paragraph1')}
        </p>
        <p className='text-base text-justify mb-2 '>
        {t('translation.home.skills.paragraph2')}
        </p>
          </div>

        
        
        </div>
      </div>
    </div>
  );
};

export default About;
