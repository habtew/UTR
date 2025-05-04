import React, { useEffect, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose, language }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  const content = {
    en: {
      technologiesUsed: 'Technologies used',
      viewProject: 'View project'
    },
    ar: {
      technologiesUsed: 'التقنيات المستخدمة',
      viewProject: 'عرض المشروع'
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setIsMounted(false), 300);
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  if (!isMounted || !project) return null;
  
  const renderMedia = () => {
    switch (project.mediaType) {
      case 'image':
        return (
          <img 
            src={project.fullMedia || project.thumbnail} 
            alt={language === 'ar' ? project.titleAr : project.title} 
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          />
        );
      case 'gif':
        return (
          <img 
            src={project.fullMedia || project.thumbnail} 
            alt={language === 'ar' ? project.titleAr : project.title} 
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          />
        );
      case 'video':
        return (
          <video 
            src={project.fullMedia || project.thumbnail} 
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg" 
            controls
            autoPlay
            muted
            loop
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto transition-transform duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 shadow-md backdrop-blur-sm transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-7/12 p-6 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
            {renderMedia()}
          </div>
          
          <div className="md:w-5/12 p-6 overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'ar' ? project.titleAr : project.title}
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {(language === 'ar' ? project.tagsAr : project.tags).map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-sm dark:prose-invert mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                {language === 'ar' ? project.descriptionAr : project.description}
              </p>
            </div>
            
            {project.technologies && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  {content[language as keyof typeof content].technologiesUsed}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(language === 'ar' ? project.technologiesAr : project.technologies).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {project.externalLink && (
              <a 
                href={project.externalLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                {content[language as keyof typeof content].viewProject} <ExternalLink size={16} className={language === 'ar' ? 'rotate-180' : ''} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;