'use client';

/**
 * Core Business Section component for the Business page
 * 
 * This component displays the core business areas of the company.
 * 
 * @component
 */

import { motion } from 'framer-motion';
import Image from 'next/image';

// 业务卡片组件
interface BusinessCardProps {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
  index: number;
}

const BusinessCard = ({ title, description, imageSrc, icon, index }: BusinessCardProps) => {
  return (
    <motion.div 
      className="bg-white border border-gray-200 flex flex-col h-[230px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
        {/* Business Image - 5 columns on desktop */}
        <div className="md:col-span-5 relative h-full overflow-hidden">
          <Image 
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Business Content - 7 columns on desktop */}
        <div className="md:col-span-7 p-5 flex flex-col justify-center">
          {/* Icon and Title */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 flex items-center justify-center bg-gray-100">
              <span className="text-gray-700">{icon}</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export function CoreBusinessSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Core Business</h2>
          <p className="text-gray-600 text-center text-xl">
            TechFocus delivers cutting-edge technology solutions to help businesses thrive in the digital era.
            Our core business areas focus on IT solutions and hardware products.
          </p>
        </div>
        
        <div className="space-y-6">
          {/* IT Solutions Card */}
          <BusinessCard 
            title="IT Solutions"
            description="TechFocus covers solutions for cyber security, cloud computing and cloud-related professional services, automated contacts, and more. TechFocus also covers IT consulting, IT operation and maintenance, design and development services, etc."
            imageSrc="/woman.png"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            }
            index={0}
          />
          
          {/* Hardware Card */}
          <BusinessCard 
            title="Hardware"
            description="TechFocus is a well-known reseller of office electronics including notebooks, tablets, desktops, workstations, Chromebook and calculators."
            imageSrc="/hardware.png"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            }
            index={1}
          />
        </div>
      </div>
    </section>
  );
} 