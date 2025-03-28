'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 定义导航项类型
export interface ContentItem {
  id: string;
  title: string;
  href?: string;
}

interface ContentProps {
  items: ContentItem[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  title: string;
}

export function Content({ items, selectedId, onSelect, title }: ContentProps) {
  const [activeId, setActiveId] = useState<string>(selectedId || (items[0]?.id || ''));
  const contentRef = useRef<HTMLDivElement>(null);
  const [isInitialRender, setIsInitialRender] = useState(true);
  
  // 处理选择项目
  const handleSelect = (id: string) => {
    setActiveId(id);
    if (onSelect) {
      onSelect(id);
    }
  };

  useEffect(() => {
    if (selectedId && selectedId !== activeId) {
      setActiveId(selectedId);
    }
  }, [selectedId, activeId]);
  
  // 用于初始渲染动画的效果
  useEffect(() => {
    // 设置一个短暂的延迟，确保组件已经渲染
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // 容器动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };
  
  // 项目动画变体
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div 
      ref={contentRef}
      className="hidden md:block" // 在平板电脑尺寸以下隐藏
      style={{
        width: 'calc(12.5% + 40px)', // 占据1.5列栅格(1.5/12 = 12.5%)加上左侧页边距40px
        marginLeft: '0',
        paddingLeft: '40px', // 左侧页边距
        boxSizing: 'border-box',
        position: 'fixed', // 改为固定定位
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // 垂直居中
        transform: 'translateY(-10%)', // 向上偏移，使内容整体上移
      }}
    >
      <div className="py-6"> {/* 移除sticky定位 */}
        <motion.nav 
          className="flex flex-col space-y-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, index) => {
            const isActive = item.id === activeId;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="text-base py-2 rounded transition-all duration-300 ease-in-out hover:bg-gray-100 text-left relative group flex items-center w-full"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  paddingLeft: '0px', // 进一步减少左边距，让按钮内容更靠左
                  paddingRight: '8px' // 保持右侧间距
                }}
                variants={itemVariants}
              >
                <span 
                  className="transition-all duration-300 ease-in-out flex items-center"
                  style={{ 
                    fontWeight: isActive ? 700 : 400,
                    color: isActive ? '#000000' : '#666666',
                    opacity: isActive ? 1 : 0.85,
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '14px',
                    letterSpacing: '0em',
                    lineHeight: '1.2', // 调整行高
                    paddingTop: '1px', // 微调文本位置
                    paddingLeft: '3px', // 增加左内边距，使文字远离蓝色小条
                    marginLeft: '0px', // 移除之前的负边距
                  }}
                >
                  {item.title}
                </span>
                <AnimatePresence>
                  {isActive && (
                    <motion.span 
                      className="absolute left-0 bg-blue-600 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        height: '16px',
                        transition: { duration: 0.3, delay: isInitialRender ? 0.2 + index * 0.1 : 0 }
                      }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ 
                        left: '-10px', 
                        width: '4px',
                        top: 'calc(50% - 8px)', // 向上偏移8px (原来的5px + 新增的3px)
                        transform: 'translateY(-50%)' 
                      }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
}

// 为了兼容现有代码，保留原始接口定义，但重命名为NavItem
export interface NavItem {
  id: string;
  title: string;
}

// 为了兼容现有代码，保留原始组件名称和接口，但内部使用新的Content组件
export function SidebarNav({ items, selectedId, onSelect, title }: {
  items: NavItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  title: string;
}) {
  // 将NavItem数组转换为ContentItem数组
  const contentItems = items.map(item => ({
    id: item.id,
    title: item.title
  }));
  
  return <Content items={contentItems} selectedId={selectedId} onSelect={onSelect} title={title} />;
} 