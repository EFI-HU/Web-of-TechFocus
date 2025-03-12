'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Orbitron } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Headroom from 'react-headroom';
import { Button } from '../ui/button';

// 初始化字体
const orbitron = Orbitron({ subsets: ['latin'], display: 'swap' });

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    { href: '/', label: '首页' },
    { href: '/news', label: '新闻动态' },
    { href: '/business', label: '业务范围' },
    { href: '/contact', label: '联系我们' },
    { href: '/career', label: '加入我们' },
  ];

  return (
    <>
      {/* 移动端菜单和遮罩 */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* 背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm md:hidden"
              style={{ zIndex: 998 }}
              onClick={toggleMenu}
            />
            {/* 菜单面板 */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 w-[66.666667%] h-screen bg-black md:hidden"
              style={{ zIndex: 999 }}
            >
              <motion.nav
                className="flex flex-col h-full pt-16"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
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
                      className={`block py-4 pr-8 text-right text-lg font-medium text-white hover:text-[#9333EA] transition-colors duration-200`}
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                    {index !== menuItems.length - 1 && (
                      <div className="absolute bottom-0 right-0 w-full h-[1px] bg-white/10" />
                    )}
                  </motion.div>
                ))}
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
          <div className="flex justify-between items-center px-6 md:px-12 lg:px-16 mx-auto">
            {/* 左侧LOGO和文字 */}
            <div className="flex-shrink-0 relative z-[999]">
              <Link href="/" className="flex items-center gap-2">
                {/* 公司Logo */}
                <div className="relative w-10 h-10">
                  <Image 
                    src="/logo-removebg-preview.png" 
                    alt="TechFocus Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className={`text-[26px] font-black text-[#111] tracking-wider relative inline-block uppercase ${orbitron.className}`}>
                  TECH<span className="text-[#9333EA]">FOCUS</span>
                </span>
              </Link>
            </div>
            
            {/* 移动端菜单按钮 */}
            <div className="md:hidden relative z-[999]">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`text-foreground hover:bg-transparent ${isMenuOpen ? 'text-white' : ''}`}
                onClick={toggleMenu}
              >
                <motion.div
                  animate={isMenuOpen ? "open" : "closed"}
                  className="relative w-4 h-4"
                >
                  <motion.span
                    className={`absolute top-0 left-0 w-4 h-[1px] ${isMenuOpen ? 'bg-white' : 'bg-black'}`}
                    variants={{
                      closed: { rotate: 0, y: 2 },
                      open: { rotate: 45, y: 8 },
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <motion.span
                    className={`absolute top-2 left-0 w-4 h-[1px] ${isMenuOpen ? 'bg-white' : 'bg-black'}`}
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <motion.span
                    className={`absolute top-4 left-0 w-4 h-[1px] ${isMenuOpen ? 'bg-white' : 'bg-black'}`}
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -4 },
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                </motion.div>
              </Button>
            </div>
            
            {/* 桌面端导航 */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/news" className="text-[18px] font-medium text-[#111] hover:opacity-100 transition-opacity relative group">
                News
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/products" className="text-[18px] font-medium text-[#111] hover:opacity-100 transition-opacity relative group">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-[18px] font-medium text-[#111] hover:opacity-100 transition-opacity relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/career" className="text-[18px] font-medium text-[#111] hover:opacity-100 transition-opacity relative group">
                Career
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link 
                href="/federal" 
                className="ml-2 px-5 py-2.5 bg-[#111] text-white rounded-full text-[18px] font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">Federal</span>
                <span className="absolute inset-0 bg-[#9333EA] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              </Link>
            </nav>
          </div>
        </header>
      </Headroom>
    </>
  );
} 