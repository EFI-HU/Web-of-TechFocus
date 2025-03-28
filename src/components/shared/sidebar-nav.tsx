'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <div 
      ref={contentRef}
      className="hidden md:block" // 在平板电脑尺寸以下隐藏
      style={{
        width: 'calc(12.5% + 40px)', // 占据1.5列栅格(1.5/12 = 12.5%)加上左侧页边距40px
        marginLeft: '0',
        paddingLeft: '40px', // 左侧页边距
        boxSizing: 'border-box',
      }}
    >
      <div className="sticky pt-6 pb-10" style={{ top: '25vh' }}>
        <nav className="flex flex-col space-y-2">
          {items.map((item) => {
            const isActive = item.id === activeId;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className="text-base py-2 px-3 rounded transition-all duration-300 ease-in-out hover:bg-gray-100 text-left relative group flex items-center w-full"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span 
                  className="transition-all duration-300 ease-in-out flex items-center"
                  style={{ 
                    fontWeight: isActive ? 700 : 400,
                    color: isActive ? '#000000' : '#666666',
                    opacity: isActive ? 1 : 0.85,
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '14px',
                    letterSpacing: '0.01em',
                    lineHeight: '1.2', // 调整行高
                    paddingTop: '1px', // 微调文本位置
                  }}
                >
                  {item.title}
                </span>
                {isActive && (
                  <motion.span 
                    className="absolute left-0 bg-blue-600 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ 
                      left: '-10px', 
                      width: '4px',
                      height: '16px', // 略微调大高度
                      top: 'calc(50% - 8px)', // 向上偏移8px (原来的5px + 新增的3px)
                      transform: 'translateY(-50%)' 
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>
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