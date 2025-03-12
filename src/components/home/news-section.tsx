'use client';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  publishDate: string;
  readTime: string;
  imageSrc: string | null;
}

interface NewsItemProps {
  date: string;
  isActive: boolean;
  onClick: () => void;
}

const NewsDateItem = ({ date, isActive, onClick }: NewsItemProps) => {
  return (
    <button 
      className={`whitespace-nowrap py-2 px-4 md:px-0 transition-all duration-300 ease-in-out hover:text-black relative ${
        isActive 
          ? 'text-black font-medium tracking-tight md:pl-4' 
          : 'text-gray-500 font-normal tracking-normal hover:pl-2'
      }`}
      onClick={onClick}
    >
      {isActive && (
        <span className="absolute hidden md:block left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black"></span>
      )}
      <span className="font-geist-sans">{date}</span>
      {isActive && (
        <span className="absolute md:hidden left-0 bottom-0 w-full h-0.5 bg-black"></span>
      )}
    </button>
  );
};

interface NewsContentProps {
  title: string;
  date: string;
  readTime: string;
  imageSrc: string | null;
}

const NewsContent = ({ title, date, readTime, imageSrc }: NewsContentProps) => {
  return (
    <motion.div 
      className="flex flex-col absolute inset-0"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // 自定义缓动函数，创造更流畅的动画
      }}
    >
      <motion.div 
        className="relative w-[90%] aspect-[16/9] rounded-2xl overflow-hidden mb-8 bg-gray-100 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.6,
          delay: 0.1, // 图片动画稍微延迟，创造交错效果
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {imageSrc ? (
          <Image 
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 90vw, 70vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            图片占位符
          </div>
        )}
      </motion.div>
      <motion.h3 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ 
          duration: 0.5,
          delay: 0.2, // 标题动画再延迟一点
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {title}
      </motion.h3>
      <motion.div 
        className="flex flex-col space-y-1 mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ 
          duration: 0.5,
          delay: 0.3, // 日期信息动画再延迟一点
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <p className="detail-text-lg">{date} Publication</p>
        <p className="detail-text-lg">{readTime}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ 
          duration: 0.5,
          delay: 0.4, // 按钮动画最后出现
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <Link 
          href="#" 
          className="inline-flex items-center text-black font-medium group"
        >
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 mr-3 overflow-hidden">
            <span className="relative z-10">
              <svg 
                className="w-5 h-5" 
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
          </div>
          <span className="relative">
            Read more
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

interface NavigationButtonProps {
  direction: 'up' | 'down';
  onClick: () => void;
  disabled?: boolean;
}

const NavigationButton = ({ direction, onClick, disabled = false }: NavigationButtonProps) => {
  return (
    <button 
      className={`w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'
      }`}
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'up' ? 'Previous news' : 'Next news'}
    >
      <svg 
        className="w-5 h-5" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {direction === 'up' ? (
          <path d="M18 15l-6-6-6 6" />
        ) : (
          <path d="M6 9l6 6 6-6" />
        )}
      </svg>
    </button>
  );
};

export function NewsSection() {
  // 新闻数据
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: "March 21, 2025",
      title: "TechFocus Launches New Website to Enhance Customer Engagement",
      publishDate: "March 21, 2025",
      readTime: "3 min read",
      imageSrc: "/news/website-launch.jpg"
    },
    {
      id: 2,
      date: "May 3, 2023",
      title: "TechFocus Improves Freight Transportation Efficiency in Smart Cities",
      publishDate: "May 3, 2023",
      readTime: "4 min read",
      imageSrc: "/news/smart-freight.jpg"
    },
    {
      id: 3,
      date: "December 4, 2021",
      title: "TechFocus Model Integrated into Google Maps for Energy-Efficient Routing",
      publishDate: "December 4, 2021",
      readTime: "3 min read",
      imageSrc: "/whitehouse.png"
    },
    {
      id: 4,
      date: "January 4, 2020",
      title: "TechFocus Secures $1.75M DOE Grant to Advance Electric Bus Deployment",
      publishDate: "January 4, 2020",
      readTime: "4 min read",
      imageSrc: "/news/electric-bus.jpg"
    },
    {
      id: 5,
      date: "March 1, 2017",
      title: "TechFocus Officially Established to Drive Innovation in IT Solutions",
      publishDate: "March 1, 2017",
      readTime: "5 min read",
      imageSrc: "/news/company-launch.jpg"
    }
  ];

  // 当前选中的新闻索引
  const [activeIndex, setActiveIndex] = useState(0); // 默认选中第一项，最新的新闻
  // 添加节流控制，防止滚轮事件触发过于频繁
  const [isScrolling, setIsScrolling] = useState(false);
  const newsListRef = useRef<HTMLDivElement>(null);
  const newsContentRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const controls = useAnimation();

  // 处理上一个和下一个按钮点击
  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < newsItems.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // 处理触摸事件
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeIndex < newsItems.length - 1) {
      handleNext();
    }
    if (isRightSwipe && activeIndex > 0) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // 当前选中的新闻
  const activeNews = newsItems[activeIndex];
  
  // 添加一个状态来存储内容区域的高度
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // 添加一个状态来存储图片高度
  const [imageHeight, setImageHeight] = useState(0);
  
  // 监听activeNews变化，更新内容区域的高度
  useEffect(() => {
    if (contentRef.current) {
      // 设置一个最小高度，确保即使内容很少也有足够的空间
      const minHeight = 600;
      // 获取当前内容的高度
      const height = Math.max(contentRef.current.scrollHeight, minHeight);
      setContentHeight(height);
      
      // 获取图片高度
      const imageElement = contentRef.current.querySelector('.aspect-\\[16\\/9\\]');
      if (imageElement) {
        setImageHeight(imageElement.clientHeight);
      }
    }
  }, [activeNews]);

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* 左侧标题和日期列表 */}
          <div className="md:col-span-3">
            {/* News标题 */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight font-geist-sans relative inline-block">
              News
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-black"></span>
            </h2>
            
            {/* 日期列表 - 在手机端隐藏滚动条 */}
            <div 
              ref={newsListRef} 
              className="flex md:flex-col overflow-x-auto scrollbar-hide md:overflow-x-visible pb-4 md:pb-0 space-x-6 md:space-x-0 md:space-y-5 text-base md:text-lg relative"
            >
              {newsItems.map((item, index) => (
                <NewsDateItem 
                  key={item.id}
                  date={item.date} 
                  isActive={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          
          {/* 中间新闻内容 */}
          <div 
            ref={newsContentRef} 
            className="md:col-span-9 relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div 
                className="md:col-span-12 relative"
                ref={contentRef}
                style={{ 
                  height: contentHeight > 0 ? `${contentHeight}px` : 'auto'
                }}
              >
                <AnimatePresence mode="sync" initial={true}>
                  <NewsContent 
                    key={activeNews.id}
                    title={activeNews.title}
                    date={activeNews.publishDate}
                    readTime={activeNews.readTime}
                    imageSrc={activeNews.imageSrc}
                  />
                </AnimatePresence>
              </div>
            </div>
            
            {/* 右侧导航按钮 - 仅在桌面端显示 */}
            <div className="hidden md:absolute md:flex md:top-[10%] md:right-0 flex-col gap-4">
              <NavigationButton 
                direction="up" 
                onClick={handlePrevious}
                disabled={activeIndex === 0}
              />
              <NavigationButton 
                direction="down" 
                onClick={handleNext}
                disabled={activeIndex === newsItems.length - 1}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 添加全局样式 */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
} 