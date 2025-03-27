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
      className="w-full py-24 md:py-36 px-4 md:px-24 lg:px-48 bg-white"
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
          <h2 className="text-[40px] md:text-[40px] leading-[1.1] tracking-[-0.01em] mb-2" style={{ fontFamily: 'Roboto', fontWeight: 500, color: '#1C2B33' }}>
            Why <span className="text-[#1C2B33]">us</span>
          </h2>
        </motion.div>
        
        {/* 灰色背景组件 */}
        <div className="w-screen -mx-[50vw] relative left-1/2">
          <div className="w-full bg-[#f1f4f7]">
            <div className="w-full flex flex-col md:flex-row justify-between items-center py-16">
              {/* 左侧文字 - 向右移动5% */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left pl-[5%]">
                <h3 className="text-[36px] md:text-[54px] leading-[1.1] tracking-[0.01em] text-[#1C2B33] mb-2" style={{ fontFamily: 'Roboto', fontWeight: 600, letterSpacing: '0.01em' }}>Dr.Lijuan Wang</h3>
                <p className="text-[14px] text-[#1C2B33]">CEO of TechFocus LLC,AI & Federal IT Solutions Leader</p>
                <Link href="/about" className="text-[14px] text-[#1C2B33] hover:text-[#555555] transition-colors duration-250" style={{ fontFamily: 'Roboto', lineHeight: '1.5', letterSpacing: '0.01em' }}>Learn more</Link>
              </div>
              
              {/* 右侧图片 - 靠右并离内容容器5%距离 */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-8 md:mt-0 pr-[5%]">
                <div className="relative w-[336px] h-[336px] md:w-[468px] md:h-[468px] rounded-2xl overflow-hidden">
                  <Image 
                    src="/leader.jpg"
                    alt="Dr. Lijuan Wang - CEO of TechFocus LLC"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}