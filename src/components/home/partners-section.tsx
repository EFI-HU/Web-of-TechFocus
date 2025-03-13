'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Certification logos data
const certificationLogos = [
  { 
    id: 'A', 
    src: '/logo/A-removebg-preview.png', 
    alt: 'SBA 8(a) Certification',
    description: 'Federal program for socially and economically disadvantaged small businesses.'
  },
  { 
    id: 'B', 
    src: '/logo/B-removebg-preview.png', 
    alt: 'WOSB Certification',
    description: 'Federal program supporting women-owned small businesses in government contracting.'
  },
  { 
    id: 'C', 
    src: '/logo/C-removebg-preview.png', 
    alt: 'EDWOSB Certification',
    description: 'Program for economically disadvantaged women-owned small businesses.'
  },
  { 
    id: 'D', 
    src: '/logo/D-removebg-preview.png', 
    alt: 'DBE Certification',
    description: 'Program ensuring fair competition for transportation contracts.'
  },
];

// Government partner logos data
const governmentLogos = [
  { id: '01', src: '/logo/01-removebg-preview.png', alt: 'Government Partner 01' },
  { id: '02', src: '/logo/02-removebg-preview (1).png', alt: 'Government Partner 02' },
  { id: '03', src: '/logo/03-removebg-preview.png', alt: 'Government Partner 03' },
  { id: '04', src: '/logo/04-removebg-preview.png', alt: 'Government Partner 04' },
  { id: '05', src: '/logo/05-removebg-preview.png', alt: 'Government Partner 05' },
  { id: '06', src: '/logo/06-removebg-preview (1).png', alt: 'Government Partner 06' },
  { id: '07', src: '/logo/07-removebg-preview.png', alt: 'Government Partner 07' },
  { id: '08', src: '/logo/08-removebg-preview.png', alt: 'Government Partner 08' },
  { id: '09', src: '/logo/09-removebg-preview.png', alt: 'Government Partner 09' },
  { id: '10', src: '/logo/10-removebg-preview.png', alt: 'Government Partner 10' },
  { id: '11', src: '/logo/11-removebg-preview.png', alt: 'Government Partner 11' },
];

export function PartnersSection() {
  const [inView, setInView] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [marqueeSpeed, setMarqueeSpeed] = useState(17.5);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Use IntersectionObserver to detect if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // 计算轮播速度
  useEffect(() => {
    const calculateMarqueeSpeed = () => {
      const isMobile = window.innerWidth < 768;
      const logoWidth = isMobile ? 160 : 240; // logo宽度
      const logoSpacing = isMobile ? 8 : 16; // 间距（mx-4 = 8px, mx-8 = 16px）
      const totalWidth = governmentLogos.length * (logoWidth + 2 * logoSpacing);
      // 基准速度：每个logo移动所需的时间（秒）
      const baseSpeed = isMobile ? 1.5 : 2;
      // 总时间 = logo数量 * 基准速度
      const totalSpeed = governmentLogos.length * baseSpeed;
      setMarqueeSpeed(totalSpeed);
    };

    calculateMarqueeSpeed();
    window.addEventListener('resize', calculateMarqueeSpeed);
    return () => window.removeEventListener('resize', calculateMarqueeSpeed);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: "easeInOut",
        duration: 0.5
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-36 px-6 md:px-12 bg-white overflow-hidden relative"
    >
      <motion.div 
        className="container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* 精致的标题区域 */}
        <motion.div 
          className="text-center mb-24 relative"
          variants={itemVariants}
        >
          {/* 标题前装饰元素 */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#9333EA] to-[#6366F1]"></div>
          </div>
          
          <h2 className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#111] to-[#9333EA]">
              Partners & Certifications
            </span>
          </h2>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          className="mb-32"
          variants={itemVariants}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9333EA] to-[#6366F1]">Certifications</span>
              </h3>
              <p className="mt-4 text-gray-600 text-center max-w-2xl text-base md:text-xl">
                As a certified woman-owned and economically disadvantaged small business, we are recognized by federal and state agencies for our commitment to diversity and inclusion in government contracting.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
              {certificationLogos.map((logo) => (
                <motion.div
                  key={logo.id}
                  className="relative w-full aspect-square flex items-center justify-center group"
                  onHoverStart={() => setHoveredLogo(logo.id)}
                  onHoverEnd={() => setHoveredLogo(null)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Logo Image */}
                  <div className="relative w-[60%] md:w-full h-[60%] md:h-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="(max-width: 768px) 80px, 150px"
                      className="object-contain p-1 md:p-2 transition-all duration-300 group-hover:brightness-110"
                      priority
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredLogo === logo.id ? 1 : 0,
                      y: hoveredLogo === logo.id ? 0 : 20
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-3 md:px-6 py-2 md:py-4 rounded-lg shadow-lg z-20 w-56 md:w-80"
                  >
                    <div className="text-gray-700">
                      <p className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{logo.alt}</p>
                      <p className="text-xs md:text-sm leading-relaxed">{logo.description}</p>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 md:w-4 h-3 md:h-4 bg-white rotate-45"></div>
                  </motion.div>

                  {/* Hover Effect Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-purple-200/0"
                    initial={false}
                    animate={{
                      scale: hoveredLogo === logo.id ? 1.1 : 1,
                      borderColor: hoveredLogo === logo.id ? "rgba(167, 139, 250, 0.3)" : "rgba(167, 139, 250, 0)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Government Partners Section */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9333EA] to-[#6366F1]">Government Partners</span>
              </h3>
              <p className="mt-4 text-gray-600 text-center max-w-2xl text-xl">
                We proudly collaborate with these government agencies to deliver innovative solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* 直接在白色背景上轮播 */}
      <div className="relative overflow-hidden py-10">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        
        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Infinite carousel container */}
        <div className="flex overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex animate-marquee whitespace-nowrap"
            style={{
              animationDuration: `${marqueeSpeed}s`
            }}
          >
            {[...governmentLogos, ...governmentLogos].map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`}
                className="mx-4 md:mx-8 flex items-center justify-center"
              >
                <div className="relative w-[160px] md:w-[240px] h-[80px] md:h-[120px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 768px) 160px, 240px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles */}
      <style jsx global>{`
        .animate-marquee {
          animation: marquee linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
} 