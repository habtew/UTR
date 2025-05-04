import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../types';

interface ProjectsGridProps {
  projects: Project[];
  language: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects, language }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  const content = {
    en: {
      title: 'Featured Work',
      description: 'A selection of our best projects showcasing our expertise in web design, development, and digital experiences.',
      all: 'All',
      website: 'Website',
      app: 'App',
      design: 'Design'
    },
    ar: {
      title: 'أعمالنا المميزة',
      description: 'مجموعة مختارة من أفضل مشاريعنا التي تعرض خبرتنا في تصميم وتطوير المواقع والتجارب الرقمية.',
      all: 'الكل',
      website: 'مواقع',
      app: 'تطبيقات',
      design: 'تصميم'
    }
  };
  
  const categories = ['all', ...Array.from(new Set(projects.flatMap(p => p.category)))];
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter, projects]);
  
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const getCategoryLabel = (category: string) => {
    const labels = content[language as keyof typeof content];
    switch (category) {
      case 'all': return labels.all;
      case 'website': return labels.website;
      case 'app': return labels.app;
      case 'design': return labels.design;
      default: return category;
    }
  };
  
  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {content[language as keyof typeof content].title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {content[language as keyof typeof content].description}
          </p>
        </div>
        
        <div className="flex justify-center mb-8 overflow-x-auto py-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => openModal(project)}
              language={language}
            />
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal}
        language={language}
      />
    </section>
  );
};

export default ProjectsGrid;