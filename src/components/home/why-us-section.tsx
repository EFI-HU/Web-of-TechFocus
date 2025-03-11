'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export function WhyUsSection() {
  // 使用 useRef 和 useState 替代 useInView
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // 使用 useEffect 和 IntersectionObserver 检测元素是否在视口中
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

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-28 px-6 md:px-12 bg-white"
    >
      <motion.div 
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* 标题部分 - 居中显示 */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Why <span className="text-[#9333EA]">us</span>
          </h2>
        </motion.div>

        {/* 内容部分 - 左右布局 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* 左侧文字介绍 - 直接放在白色背景上，占据更多空间 */}
          <motion.div 
            className="flex flex-col space-y-6 md:col-span-7"
            variants={itemVariants}
          >
            <div className="flex flex-col space-y-2">
              <h3 className="text-3xl font-bold text-gray-900">Dr. Lijuan Wang</h3>
              <p className="text-xl font-medium text-[#9333EA]">CEO of TechFocus LLC</p>
              <p className="text-xl font-medium text-gray-700">AI & Federal IT Solutions Leader</p>
            </div>
            
            <div className="w-16 h-1 bg-[#9333EA] rounded-full"></div>
            
            <p className="detail-text-lg leading-relaxed">
              Visionary CEO leading a Woman-Owned SBA 8(a) certified firm specializing in AI, cloud computing, and IT solutions for federal agencies.
            </p>
            
            <ul className="space-y-4 detail-text-lg">
              <li className="flex items-start">
                <span className="text-[#9333EA] mr-2">•</span>
                <span>Drove TechFocus LLC to secure $2M (2023) and $4M (2024) in federal contracts through AI innovation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9333EA] mr-2">•</span>
                <span>Pioneered the "Most Fuel-Efficient Route" feature at NREL, adopted by Google Maps, slashing 2M tons of carbon emissions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9333EA] mr-2">•</span>
                <span>Ph.D. in Mechanical Engineering with expertise in machine learning and federal tech strategy.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9333EA] mr-2">•</span>
                <span>Recognized ARPA-E reviewer and trusted partner in government IT optimization.</span>
              </li>
            </ul>
            
            <motion.div 
              className="mt-4"
            >
              <Link 
                href="/about" 
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center font-medium">
                  Read more
                  <svg 
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#9333EA] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* 右侧图片 - 正方形照片，垂直居中 */}
          <motion.div 
            className="md:col-span-5 flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="relative w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src="/leader.jpg"
                alt="Dr. Lijuan Wang - CEO of TechFocus LLC"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 