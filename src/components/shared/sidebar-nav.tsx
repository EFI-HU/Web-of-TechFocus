'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

// 定义导航项类型
export interface NavItem {
  id: string;
  title: string;
}

interface SidebarNavProps {
  items: NavItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  title: string;
}

export function SidebarNav({ items, selectedId, onSelect, title }: SidebarNavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  const selectedItem = items.find(item => item.id === selectedId) || items[0];
  
  // 移动端导航栏项
  const MobileNavItem = ({ item }: { item: NavItem }) => {
    const isActive = item.id === selectedId;
    
    return (
      <button
        key={item.id}
        onClick={() => {
          onSelect(item.id);
          setIsMobileMenuOpen(false);
        }}
        className={`py-3 px-4 text-sm transition-all duration-300 ease-in-out ${
          isActive 
            ? 'bg-gray-100 text-black font-medium' 
            : 'text-gray-600 hover:bg-gray-50'
        } text-center whitespace-nowrap`}
      >
        {item.title}
      </button>
    );
  };

  return (
    <>
      {/* 桌面端导航栏 */}
      <div className="w-full h-full flex flex-col">
        <div className="w-full pl-8 py-4">
          <nav className="flex flex-col space-y-6">
            {items.map((item) => {
              const isActive = item.id === selectedId;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className="text-base py-2 px-3 rounded transition-all duration-300 ease-in-out hover:bg-gray-100 text-left relative group flex items-center w-full"
                >
                  <span 
                    className="transition-all duration-300 ease-in-out"
                    style={{ 
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#000000' : '#AAAAAA',
                      opacity: isActive ? 1 : 0.85,
                      transform: isActive ? 'scale(1.02)' : 'scale(1)'
                    }}
                  >
                    {item.title}
                  </span>
                  <span className="absolute right-2 opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                    &gt;
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      
      {/* 移动端导航栏 */}
      <div className="md:hidden">
        <div className="flex justify-between items-center px-0 py-3">
          <div className="text-lg font-medium pl-4">{title}</div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center space-x-1 text-gray-700 pr-4"
          >
            <span className="text-sm">{selectedItem.title}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        {/* 移动端下拉菜单 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex py-2 px-4 space-x-2 min-w-max">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelect(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`py-3 px-4 text-sm transition-all duration-300 ease-in-out ${
                        item.id === selectedId 
                          ? 'bg-gray-100 text-black font-medium' 
                          : 'text-gray-600 hover:bg-gray-50'
                      } text-center whitespace-nowrap`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 