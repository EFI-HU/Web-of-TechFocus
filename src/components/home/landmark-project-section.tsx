'use client';

import { LottieAnimation } from '@/components/ui/lottie-animation';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// 防抖函数
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function LandmarkProjectSection() {
  // 使用 useRef 和 useState 替代 useInView
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // 使用 useEffect 和 IntersectionObserver 检测元素是否在视口中
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 使用防抖处理视图变化
        const handleInViewChange = debounce((isInView: boolean) => {
          setInView(isInView);
        }, 50);
        
        handleInViewChange(entry.isIntersecting);
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

  // 创建视差滚动效果的引用
  const phoneRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: phoneRef,
    offset: ["start end", "end start"]
  });

  // 使用 useSpring 添加平滑过渡效果，防止抖动
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 创建视差效果的变换，使用平滑的滚动进度
  const phoneY = useTransform(smoothScrollYProgress, [0, 1], [50, -50]);
  const phoneRotate = useTransform(smoothScrollYProgress, [0, 1], [5, -5]);

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeInOut",
        duration: 0.6
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
      className="w-full py-28 px-6 md:px-12 bg-white overflow-hidden will-change-transform"
    >
      <motion.div 
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 左侧手机应用展示 */}
          <motion.div 
            ref={phoneRef}
            className="relative h-[600px] flex items-center justify-center order-2 md:order-1 will-change-transform"
            variants={itemVariants}
            style={{
              y: phoneY,
              rotate: phoneRotate
            }}
            transition={{
              y: { type: "spring", stiffness: 100, damping: 30 },
              rotate: { type: "spring", stiffness: 100, damping: 30 }
            }}
          >
            {/* 直接显示Lottie动画，移除手机外框 */}
            <div className="relative w-[320px] h-[560px] rounded-2xl overflow-hidden">
              <LottieAnimation
                src="https://lottie.host/aa9f84b1-05a2-4487-a26a-a3ac3b182d9c/a1zkNj3sZU.lottie"
                loop
                autoplay
              />
            </div>
            
            {/* 装饰元素 - 增加视觉趣味性 */}
            <motion.div 
              className="absolute -z-10 w-64 h-64 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-60 blur-xl will-change-transform"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{ top: '20%', left: '10%' }}
            />
            
            <motion.div 
              className="absolute -z-10 w-48 h-48 rounded-full bg-gradient-to-r from-blue-100 to-cyan-200 opacity-60 blur-xl will-change-transform"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -10, 0],
                opacity: [0.5, 0.6, 0.5]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
                ease: "easeInOut"
              }}
              style={{ bottom: '10%', right: '20%' }}
            />
          </motion.div>
          
          {/* 右侧项目介绍 */}
          <motion.div 
            className="flex flex-col space-y-6 order-1 md:order-2"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Landmark Project</h2>
            
            <h3 className="text-2xl font-bold text-black">DOE-Funded Electric Bus Deployment Initiative</h3>
            
            <p className="text-[14px] text-[#1C2B33] leading-relaxed" style={{ fontFamily: 'Roboto', lineHeight: '1.5', letterSpacing: '0em', fontWeight: 500, textAlign: 'justify' }}>
              Led a $1.75M DOE - funded project (2020) to develop innovative planning tools and validated strategies for transit agencies transitioning to electric buses, ensuring scalable and cost the effective implemen-tation.
            </p>
            
            <ul className="space-y-4 mt-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-black mt-3 mr-3"></span>
                <span className="text-[14px] text-[#1C2B33] leading-relaxed" style={{ fontFamily: 'Roboto', lineHeight: '1.5', letterSpacing: '0em', fontWeight: 500, textAlign: 'justify' }}>Reduced operational costs by 35%</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-black mt-3 mr-3"></span>
                <span className="text-[14px] text-[#1C2B33] leading-relaxed" style={{ fontFamily: 'Roboto', lineHeight: '1.5', letterSpacing: '0em', fontWeight: 500, textAlign: 'justify' }}>Decreased carbon emissions by 60%</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-black mt-3 mr-3"></span>
                <span className="text-[14px] text-[#1C2B33] leading-relaxed" style={{ fontFamily: 'Roboto', lineHeight: '1.5', letterSpacing: '0em', fontWeight: 500, textAlign: 'justify' }}>Implemented in 12 transit agencies nationwide</span>
              </li>
            </ul>
            
            <motion.div 
              className="mt-8"
            >
              <Link 
                href="/projects"
                className="group inline-flex items-center text-[#1C2B33]"
              >
                <div className="flex items-center justify-center w-[20px] h-[20px] mr-2 rounded-full border-2 border-[#1C2B33] group-hover:bg-[#1C2B33] group-hover:text-white transition-colors duration-300">
                  <svg 
                    width="10" 
                    height="10" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="transition-colors duration-300 group-hover:fill-white" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="text-[16px] font-['Roboto'] text-[#1C2B33]" 
                  style={{ 
                    letterSpacing: '-0.005em', 
                    fontWeight: 600, 
                    lineHeight: 1.4 
                  }}>
                  Learn more
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}