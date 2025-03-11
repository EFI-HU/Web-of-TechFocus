'use client';

import { Orbitron } from 'next/font/google';
import Link from 'next/link';
import Headroom from 'react-headroom';
import { Button } from '../ui/button';

// 初始化字体
const orbitron = Orbitron({ subsets: ['latin'], display: 'swap' });

export function Header() {
  return (
    <Headroom
      style={{
        zIndex: 50,
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
          {/* 左侧LOGO文字 - 模仿Anthropic样式 */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={`text-[26px] font-black text-[#111] tracking-wider relative inline-block uppercase ${orbitron.className}`}>
                TECH<span className="text-[#9333EA]">FOCUS</span>
              </span>
            </Link>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-gray-100 rounded-full btn-hover-effect">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
          
          {/* 桌面端导航 - 模仿截图中的导航样式 */}
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
  );
} 