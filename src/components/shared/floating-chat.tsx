'use client';

import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function FloatingChat() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // 处理点击外部收起
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // 向下滚动时隐藏，向上滚动时显示
    const isScrollingDown = latest > lastScrollY;
    if (latest < 10) {
      setIsVisible(true);
    } else {
      setIsVisible(!isScrollingDown);
    }
    setLastScrollY(latest);
  });

  // 在 Contact 页面不显示
  if (pathname === '/contact') {
    return null;
  }

  // 根据不同页面设置不同的定位类名
  const positionClassName = pathname === '/' 
    ? "fixed bottom-6 left-1/2 -translate-x-1/2" // 首页：底部居中
    : pathname === '/news' || pathname === '/business'
    ? "fixed bottom-6 left-[calc(50%+4rem)] -translate-x-1/2 md:left-[calc(50%+6rem)]" // news和business页面：右侧内容区域居中
    : "fixed bottom-6 left-1/2 -translate-x-1/2"; // 其他页面：底部居中

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      console.log('Submitted:', inputValue);
      setInputValue('');
      setIsExpanded(false);
    }
  };

  return (
    <motion.div
      ref={chatRef}
      className={`${positionClassName} z-50 flex items-center justify-center`}
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-[#F7F7F7] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow duration-200"
        style={{
          transformOrigin: 'center',
          width: '15rem',
        }}
        animate={{
          width: isExpanded ? '32rem' : '15rem',
        }}
        transition={{
          type: "spring",
          stiffness: 200,  // 降低刚度，使动画更柔和
          damping: 25,     // 调整阻尼，使动画更丝滑
          mass: 1.2,       // 增加质量，使动画更有韵律感
        }}
      >
        {!isExpanded ? (
          <button
            className="flex items-center gap-2 px-5 py-3 w-full justify-center"
            onClick={() => setIsExpanded(true)}
          >
            <span className="text-[#666666] text-[13px] font-normal whitespace-nowrap">Ask TechFoucs agent</span>
            <motion.div 
              className="w-6 h-6 bg-[#999999] rounded-full flex items-center justify-center hover:bg-[#888888] transition-colors duration-200"
              initial={false}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <ArrowUpIcon className="w-4 h-4 text-white" />
            </motion.div>
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 w-full h-12">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask TechFoucs agent"
              className="flex-1 bg-transparent px-5 py-3 text-[13px] outline-none text-[#666666] placeholder:text-[#666666]"
              autoFocus
            />
            <motion.button
              type="submit"
              className="w-6 h-6 bg-[#999999] rounded-full flex items-center justify-center hover:bg-[#888888] transition-colors duration-200 flex-shrink-0"
              initial={false}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <ArrowUpIcon className="w-4 h-4 text-white" />
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
} 