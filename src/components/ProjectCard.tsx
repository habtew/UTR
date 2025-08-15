import React, { useState, useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  language: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.mediaType === 'video' && videoRef.current) {
      videoRef.current.play().catch(e => console.error('Error playing video:', e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (project.mediaType === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const content = {
    en: {
      viewLive: 'View live'
    },
    ar: {
      viewLive: 'عرض المشروع'
    }
  };

  const renderMedia = () => {
    switch (project.mediaType) {
      case 'image':
        return (
          <img 
            src={project.thumbnail} 
            alt={language === 'ar' ? project.titleAr : project.title} 
            className="w-full h-full object-cover transition-transform duration-700"
            loading="lazy"
          />
        );
      case 'gif':
        return (
          <img 
            src={isHovered ? project.thumbnail : project.staticImage} 
            alt={language === 'ar' ? project.titleAr : project.title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        );
      case 'video':
        return (
          <div className="relative w-full h-full">
            <video 
              ref={videoRef}
              src={project.fullMedia} 
              poster={project.staticImage}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="none"
            />
            {!isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/30 backdrop-blur-sm rounded-full p-3">
                  <Play size={24} className="text-white" />
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      style={{ aspectRatio: project.aspectRatio || '4/3' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="w-full h-full overflow-hidden">
        {renderMedia()}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
          {language === 'ar' ? project.titleAr : project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {(language === 'ar' ? project.tagsAr : project.tags).map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.externalLink && (
          <a 
            href={project.externalLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} className={`${language === 'ar' ? 'ml-1' : 'mr-1'}`} /> 
            {content[language as keyof typeof content].viewLive}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;