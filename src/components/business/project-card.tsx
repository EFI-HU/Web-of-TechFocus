/**
 * Project Card component
 * 
 * This component displays a project card with title, description,
 * and optional image and tags.
 * 
 * @component
 */

import { Project } from '@/types/business';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      layout
    >
      {/* Project Image */}
      {project.imageUrl && (
        <div className="relative w-full h-52 bg-gray-200">
          <Image 
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Project Title */}
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        
        {/* Project Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Project Description */}
        <p className="text-gray-600 mb-4 text-base">{project.description}</p>
        
        {/* Expandable Full Description */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray-700 mt-4 border-t pt-4 text-base">{project.fullDescription}</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Toggle Button */}
        <button
          onClick={toggleExpand}
          className="mt-4 text-base font-medium text-purple-600 hover:text-purple-800 transition-colors duration-200 flex items-center"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          <svg 
            className={`ml-1 w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </motion.div>
  );
} 