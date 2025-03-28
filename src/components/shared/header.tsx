'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Headroom from 'react-headroom';
import { Button } from '../ui/button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';

// 初始化字体
const orbitron = Orbitron({ subsets: ['latin'], display: 'swap' });

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuClose = () => {
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // 切换body的overflow样式
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // 组件卸载时恢复body样式
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // 菜单项动画变体
  const menuVariants = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  // 在组件顶部添加 menuItems 数组（在 Header 组件内，useState 下方）
  const menuItems = [
    { href: '/news', label: 'News' },
    { href: '/business', label: 'Solutions' },
    { href: '/contact', label: 'Contact' },
    { href: '/career', label: 'Career' },
    { href: '/federal', label: 'Government' },
  ];

  return (
    <>
      {/* 移动端菜单和遮罩 */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* 添加一个全屏遮罩层来阻止背景交互 */}
            <div 
              className="fixed inset-0 w-full h-screen bg-transparent md:hidden pointer-events-auto" 
              style={{ zIndex: 996 }}
            />
            {/* 背景遮罩和菜单面板合并为一个全屏组件 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-sm md:hidden"
              style={{ zIndex: 998 }}
              onClick={handleMenuClose}
            >
              <motion.nav
                className="flex flex-col h-full pt-24 w-full"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="w-full" onClick={(e) => e.stopPropagation()}>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      variants={{
                        open: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            delay: index * 0.1,
                            duration: 0.5,
                            ease: [0.4, 0, 0.2, 1]
                          }
                        },
                        closed: {
                          y: 20,
                          opacity: 0
                        }
                      }}
                      className="relative"
                    >
                      <Link 
                        href={item.href} 
                        className={`block py-4 pr-8 text-right text-2xl font-medium text-black hover:text-gray-600 transition-colors duration-200 ${
                          item.href === '/federal' ? 'font-bold' : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMenu();
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Headroom
        style={{
          zIndex: 997,
          transition: 'all .5s ease-in-out'
        }}
        // 向下滚动200px后开始隐藏
        downTolerance={200}
        // 向上滚动10px后显示
        upTolerance={10}
        // 固定在顶部时的样式
        pinStart={0}
        // 禁用在某些情况下的固定效果
        disable={false}
        // 包装器样式
        wrapperStyle={{}}
        // 元素固定和未固定时的样式通过style对象传递
        calcHeightOnResize={true}
      >
        <header className="w-full py-4 bg-white transition-all duration-500">
          <div className="flex justify-between items-center px-0 mx-auto">
            {/* 左侧LOGO */}
            <div className="flex-shrink-0 relative z-[999] pl-4 md:pl-8" style={{ marginLeft: '-6px' }}>
              <Link href="/" className="flex items-center gap-2">
                {/* 公司Logo - 尺寸已增加 */}
                <div className="relative w-60 h-16">
                  <Image 
                    src="/logoFont02.svg" 
                    alt="Company Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
            
            {/* 移动端菜单按钮 */}
            <div className="md:hidden fixed top-4 right-4 z-[999]">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground hover:bg-transparent p-0 w-10 h-10"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <CloseIcon sx={{ fontSize: 32 }} className="text-black" />
                ) : (
                  <MenuIcon sx={{ fontSize: 32 }} className="text-black" />
                )}
              </Button>
            </div>
            
            {/* 桌面端导航 */}
            <nav className="hidden md:flex items-center gap-8 pr-16">
              <Link href="/news" className="text-[16px] font-medium text-[#111] hover:opacity-70 transition-opacity">
                News
              </Link>
              <Link href="/business" className="text-[16px] font-medium text-[#111] hover:opacity-70 transition-opacity">
                Solutions
              </Link>
              <Link href="/contact" className="text-[16px] font-medium text-[#111] hover:opacity-70 transition-opacity">
                Contact
              </Link>
              <Link href="/career" className="text-[16px] font-medium text-[#111] hover:opacity-70 transition-opacity">
                Career
              </Link>
              <Link 
                href="/federal" 
                className="ml-2 px-4 py-2 bg-black text-white rounded-full text-[14px] font-medium transition-colors duration-300 hover:bg-white hover:text-black hover:border-black border border-black"
              >
                Government
              </Link>
            </nav>
          </div>
        </header>
      </Headroom>
    </>
  );
}