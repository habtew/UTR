import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Crafting digital experiences that matter',
      description: 'A collection of carefully crafted websites, apps, and design projects that combine aesthetics with functionality.',
      viewProjects: 'View projects',
      getInTouch: 'Get in touch'
    },
    ar: {
      title: 'نصمم تجارب رقمية مميزة',
      description: 'مجموعة من المواقع والتطبيقات ومشاريع التصميم المصممة بعناية والتي تجمع بين الجمال والوظائف.',
      viewProjects: 'عرض المشاريع',
      getInTouch: 'تواصل معنا'
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          {language === 'en' ? (
            <>
              Crafting <span className="text-blue-600 dark:text-blue-400">digital</span> experiences that <span className="text-blue-600 dark:text-blue-400">matter</span>
            </>
          ) : (
            <>
              نصمم <span className="text-blue-600 dark:text-blue-400">تجارب رقمية</span> <span className="text-blue-600 dark:text-blue-400">مميزة</span>
            </>
          )}
        </h1>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
          {content[language as keyof typeof content].description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#work" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
          >
            {content[language as keyof typeof content].viewProjects} <ArrowRight size={16} className={language === 'ar' ? 'rotate-180' : ''} />
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-white font-medium rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            {content[language as keyof typeof content].getInTouch}
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#work" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;