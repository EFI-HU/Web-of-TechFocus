'use client';

import { AnimatePresence, motion } from 'framer-motion';
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
      className={`text-left py-3 px-2 transition-colors hover:text-black ${isActive ? 'text-black font-bold' : 'text-gray-500'}`}
      onClick={onClick}
    >
      {date}
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
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 bg-gray-100 shadow-sm"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
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
        <p className="text-gray-600">{date} Publication</p>
        <p className="text-gray-600">{readTime}</p>
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
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 mr-3 group-hover:bg-gray-100 transition-colors">
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
          </div>
          <span>Read more</span>
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
      date: "March 24",
      title: "AI Advancements in Healthcare",
      publishDate: "March 24, 2025",
      readTime: "3 min read",
      imageSrc: null
    },
    {
      id: 2,
      date: "March 23",
      title: "Cloud Computing Trends",
      publishDate: "March 23, 2025",
      readTime: "4 min read",
      imageSrc: null
    },
    {
      id: 3,
      date: "March 22",
      title: "Introducing the Intelligence Age",
      publishDate: "January 31, 2025",
      readTime: "2 min read",
      imageSrc: "/whitehouse.png"
    },
    {
      id: 4,
      date: "March 21",
      title: "Cybersecurity Best Practices",
      publishDate: "March 21, 2025",
      readTime: "5 min read",
      imageSrc: null
    },
    {
      id: 5,
      date: "March 15",
      title: "The Future of Remote Work",
      publishDate: "March 15, 2025",
      readTime: "3 min read",
      imageSrc: null
    },
    {
      id: 6,
      date: "February 02",
      title: "Blockchain Technology Explained",
      publishDate: "February 02, 2025",
      readTime: "6 min read",
      imageSrc: null
    }
  ];

  // 当前选中的新闻索引
  const [activeIndex, setActiveIndex] = useState(2); // 默认选中第三项，即March 22
  // 添加节流控制，防止滚轮事件触发过于频繁
  const [isScrolling, setIsScrolling] = useState(false);
  const newsListRef = useRef<HTMLDivElement>(null);
  const newsContentRef = useRef<HTMLDivElement>(null);

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

  // 处理鼠标滚轮事件
  const handleWheel = (event: WheelEvent) => {
    // 获取事件目标元素
    const target = event.target as Node;
    
    // 检查鼠标是否在新闻列表或内容区域内
    const isInNewsList = newsListRef.current?.contains(target);
    const isInNewsContent = newsContentRef.current?.contains(target);
    
    // 只有当鼠标在新闻列表或内容区域内时才处理滚轮事件
    if (isInNewsList || isInNewsContent) {
      // 如果正在滚动中，则忽略此次滚轮事件
      if (isScrolling) return;
      
      // 向上滚动，切换到上一条新闻
      if (event.deltaY < 0) {
        // 如果不是第一条新闻，则阻止默认滚动行为并切换到上一条
        if (activeIndex > 0) {
          event.preventDefault();
          setIsScrolling(true);
          handlePrevious();
          
          // 300毫秒后重置滚动状态
          setTimeout(() => {
            setIsScrolling(false);
          }, 300);
        }
        // 如果已经是第一条新闻，则不阻止默认滚动，允许页面向上滚动
      } 
      // 向下滚动，切换到下一条新闻
      else if (event.deltaY > 0) {
        // 如果不是最后一条新闻，则阻止默认滚动行为并切换到下一条
        if (activeIndex < newsItems.length - 1) {
          event.preventDefault();
          setIsScrolling(true);
          handleNext();
          
          // 300毫秒后重置滚动状态
          setTimeout(() => {
            setIsScrolling(false);
          }, 300);
        }
        // 如果已经是最后一条新闻，则不阻止默认滚动，允许页面向下滚动
      }
    }
  };

  // 添加和移除滚轮事件监听器
  useEffect(() => {
    // 使用捕获阶段来确保我们能在事件冒泡之前捕获它
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    
    return () => {
      document.removeEventListener('wheel', handleWheel, { capture: true });
    };
  }, [activeIndex, isScrolling]); // 依赖项包括activeIndex和isScrolling

  // 当前选中的新闻
  const activeNews = newsItems[activeIndex];
  
  // 添加一个状态来存储内容区域的高度
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // 监听activeNews变化，更新内容区域的高度
  useEffect(() => {
    if (contentRef.current) {
      // 设置一个最小高度，确保即使内容很少也有足够的空间
      const minHeight = 600;
      // 获取当前内容的高度
      const height = Math.max(contentRef.current.scrollHeight, minHeight);
      setContentHeight(height);
    }
  }, [activeNews]);

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 md:mb-20">News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* 左侧日期列表 */}
          <div ref={newsListRef} className="md:col-span-2 flex flex-col space-y-1">
            {newsItems.map((item, index) => (
              <NewsDateItem 
                key={item.id}
                date={item.date} 
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          
          {/* 中间新闻内容 */}
          <div ref={newsContentRef} className="md:col-span-9 relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div 
                className="md:col-span-12 relative"
                ref={contentRef}
                style={{ height: contentHeight > 0 ? `${contentHeight}px` : 'auto' }}
              >
                <AnimatePresence mode="sync" initial={false}>
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
            
            {/* 右侧导航按钮 - 绝对定位在图片右侧 */}
            <div className="absolute top-1/3 -right-16 flex flex-col gap-4">
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
          
          {/* 占位列，保持布局平衡 */}
          <div className="md:col-span-1"></div>
        </div>
      </div>
    </section>
  );
} 