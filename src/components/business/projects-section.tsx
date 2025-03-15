'use client';

/**
 * Projects Section component
 * 
 * This component displays a section with software projects.
 * 
 * @component
 */

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// 项目数据
const projectsData = [
  {
    id: "doe-foa",
    title: "Awarded DOE FOA Proposal",
    description: "Received $1.75 million funding for electric bus deployment strategies",
    fullDescription: "Initiated an FOA proposal and was funded in the amount of $1.75 million in 2020. The primary goal of the proposed project was to develop a set of innovative planning and operation tools and identify effective strategies informed by real-world implementation and validation to help transit agencies gradually and effectively deploy and operate electric buses.",
    imageSrc: "/hardware.png",
    tags: ["Electric Vehicles", "Public Transit", "Energy Efficiency"],
    year: "2020"
  },
  {
    id: "doe-copyright",
    title: "Received DOE Copyright Authorization",
    description: "Developed fuel economy estimation tool adopted by Google Maps",
    fullDescription: "In 2019, as the sole contributor on the model \"A Tool to Estimate Fuel Economy/Consumption-Based on Real World Driving Profile\", Dr. Wang received DOE authorization to assert a closed-source copyright for NREL, which was adopted by Google in 2021 to add \"most energy efficient route\" feature into Google Maps.",
    imageSrc: "/hardware.png",
    tags: ["Fuel Economy", "Google Maps", "Software Development"],
    year: "2019"
  },
  {
    id: "freight-efficiency",
    title: "Improved Freight Movement Energy Efficiency",
    description: "Developed intelligent platform for transportation system operators",
    fullDescription: "Improved the energy efficiency of multi-modal smart city freight movement; Developed an intelligent platform that guides transportation system operators to improve energy efficiency. Please contact us for details.",
    imageSrc: "/hardware.png",
    tags: ["Freight", "Energy Efficiency", "Smart City"],
    year: "2021"
  }
];

// 项目卡片组件
interface ProjectCardProps {
  project: typeof projectsData[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative cursor-pointer overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[320px] w-full">
        {/* Background Image with Overlay */}
        <div className={`absolute inset-0 transition-colors duration-500 z-10 ${isHovered ? 'bg-black/60' : 'bg-black/30'}`}></div>
        <Image 
          src={project.imageSrc}
          alt={project.title}
          fill
          className={`object-cover z-0 transition-transform duration-700 ${isHovered ? 'scale-105' : ''}`}
          priority
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between text-white">
          <div>
            {/* Year Badge */}
            <div className="inline-block px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-3">
              {project.year}
            </div>
            
            {/* Project Title */}
            <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
            
            {/* Project Tags */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project Description */}
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.p 
                key="full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white/90 text-base"
              >
                {project.fullDescription}
              </motion.p>
            ) : (
              <motion.p 
                key="short"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="text-white/80 text-base line-clamp-2"
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export function ProjectsSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-black">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Software Projects</h2>
          <p className="text-white/70 text-center text-lg">
            Our team has successfully delivered innovative software solutions across various domains.
            Here are some of our notable projects:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 