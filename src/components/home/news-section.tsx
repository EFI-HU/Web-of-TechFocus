'use client';

import { newsData } from '@/data/news-data'; // 导入新闻数据
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
    <motion.button 
      className={`whitespace-nowrap py-2 transition-all duration-300 ease-in-out relative w-full text-center`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      animate={{
        scale: isActive ? 1.1 : 1,
        opacity: isActive ? 1 : 0.7,
        y: 0
      }}
      transition={{
        scale: { duration: 0.3 },
        opacity: { duration: 0.3 }
      }}
    >
      <span className={`font-geist-sans transition-all duration-300 inline-block ${
        isActive 
          ? 'text-black font-medium tracking-tight text-lg md:text-xl' 
          : 'text-gray-500 font-normal tracking-normal text-base'
      }`}>{date}</span>
      {isActive && (
        <span className="absolute md:hidden left-0 bottom-0 w-full h-0.5 bg-black"></span>
      )}
    </motion.button>
  );
};

interface NewsContentProps {
  title: string;
  date: string;
  readTime: string;
  imageSrc: string | null;
  id: number;
}

const NewsContent = ({ title, date, readTime, imageSrc, id }: NewsContentProps) => {
  // 获取对应的新闻数据项
  const newsItem = newsData.find(item => parseInt(item.id) === id);
  
  // 获取完整标题
  let fullTitle = title;
  if (newsItem?.specialLayout?.fullTitle) {
    fullTitle = newsItem.specialLayout.fullTitle;
  } else if (newsItem?.videoLayout?.fullTitle) {
    fullTitle = newsItem.videoLayout.fullTitle;
  } else if (newsItem?.imageLayout?.fullTitle) {
    fullTitle = newsItem.imageLayout.fullTitle;
  }
  
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
        className="relative w-[98%] md:w-[98%] lg:w-full aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7] rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-sm"
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
            sizes="(max-width: 768px) 98vw, (max-width: 1200px) 90vw, 85vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            图片占位符
          </div>
        )}
      </motion.div>
      <motion.h3 
        className="text-2xl md:text-3xl font-bold mb-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ 
          duration: 0.5,
          delay: 0.2, // 标题动画再延迟一点
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {fullTitle}
      </motion.h3>
      <motion.div 
        className="flex flex-col space-y-1 mb-5"
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
          href={`/news?article=${id}`} 
          className="inline-flex items-center text-gray-700 font-medium group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 mr-3 text-gray-700 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
            <svg 
              className="w-4 h-4 md:w-5 md:h-5" 
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
          <span className="relative font-medium">
            Read more
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
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
      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-300 ${
        disabled 
          ? 'opacity-50 cursor-not-allowed text-gray-400 border-gray-300' 
          : 'text-gray-700 border-gray-400 hover:bg-black hover:text-white hover:border-black cursor-pointer'
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
  // 从newsData转换新闻数据
  const newsItems: NewsItem[] = newsData.map(item => {
    // 确定图片来源
    let imageSrc: string | null = null;
    
    // 对于'Routing'和'Officially Established'两个标签，使用空白占位符
    if (item.title === 'Routing' || item.title === 'Officially Established') {
      imageSrc = null;
    } 
    // 对于有图片的新闻，使用第一张图片
    else if (item.images && item.images.length > 0) {
      imageSrc = item.images[0].url;
    } 
    // 对于有视频的新闻，使用视频海报
    else if (item.videos && item.videos.length > 0 && item.videos[0].posterUrl) {
      imageSrc = item.videos[0].posterUrl;
    }
    
    // 获取格式化的日期
    let formattedDate = item.date;
    if (item.specialLayout?.date) {
      formattedDate = item.specialLayout.date;
    } else if (item.videoLayout?.date) {
      formattedDate = item.videoLayout.date;
    } else if (item.imageLayout?.date) {
      formattedDate = item.imageLayout.date;
    }
    
    return {
      id: parseInt(item.id),
      date: formattedDate,
      title: item.title,
      publishDate: formattedDate,
      readTime: `${Math.ceil(item.content.join(' ').length / 1000)} min read`,
      imageSrc: imageSrc
    };
  });

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
  
  // 监听activeNews变化，更新内容区域的高度和图片高度
  useEffect(() => {
    if (contentRef.current) {
      // 设置一个最小高度，确保即使内容很少也有足够的空间
      const minHeight = 500;
      // 获取当前内容的高度
      const height = Math.max(contentRef.current.scrollHeight, minHeight);
      setContentHeight(height);
      
      // 获取图片高度
      const imageElement = contentRef.current.querySelector('.aspect-\\[16\\/10\\], .aspect-\\[16\\/8\\], .aspect-\\[16\\/7\\]');
      if (imageElement) {
        setImageHeight(imageElement.clientHeight);
      }
    }
  }, [activeNews]);

  // 计算每个日期项的动态样式
  const getItemStyle = (index: number) => {
    const distance = Math.abs(index - activeIndex);
    
    // 根据与当前选中项的距离计算不透明度和缩放比例
    if (distance === 0) return {}; // 当前选中项使用默认样式
    
    const opacity = Math.max(0.4, 1 - distance * 0.2);
    const scale = Math.max(0.8, 1 - distance * 0.1);
    
    return {
      opacity,
      scale,
    };
  };

  return (
    <section className="w-full py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* 左侧标题和日期列表 */}
          <div className="md:col-span-3 lg:col-span-2 md:flex md:flex-col">
            {/* News标题 */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight font-geist-sans relative inline-block">
              News
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-black"></span>
            </h2>
            
            {/* 日期列表容器 */}
            <div className="md:flex md:flex-col">
              {/* 日期列表 - 在手机端水平滚动，在桌面端垂直排列 */}
              <div 
                ref={newsListRef} 
                className="flex md:flex-col overflow-x-auto scrollbar-hide pb-4 md:pb-0 space-x-6 md:space-x-0 md:space-y-5"
              >
                {newsItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    animate={getItemStyle(index)}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <NewsDateItem 
                      date={item.date} 
                      isActive={index === activeIndex}
                      onClick={() => {
                        setActiveIndex(index);
                        // 滚动到视图中间
                        if (newsListRef.current) {
                          const container = newsListRef.current;
                          const element = container.children[index] as HTMLElement;
                          if (element) {
                            // 在移动端，水平滚动到中间
                            if (window.innerWidth < 768) {
                              const containerWidth = container.offsetWidth;
                              const elementLeft = element.offsetLeft;
                              const elementWidth = element.offsetWidth;
                              container.scrollLeft = elementLeft - containerWidth / 2 + elementWidth / 2;
                            }
                          }
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 中间新闻内容 */}
          <div 
            ref={newsContentRef} 
            className="md:col-span-9 lg:col-span-10 relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div 
                className="md:col-span-12 lg:col-span-11 relative"
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
                    id={activeNews.id}
                  />
                </AnimatePresence>
              </div>
            </div>
            
            {/* 右侧导航按钮 - 保持当前位置不变 */}
            <div className="hidden md:absolute md:flex md:flex-col md:gap-4 md:top-1/3 md:-translate-y-1/4 md:right-0">
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