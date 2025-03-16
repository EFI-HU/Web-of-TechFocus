'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function HeroSection() {
  // 状态用于控制字体加载
  const [fontLoaded, setFontLoaded] = useState(false);

  // 使用useEffect加载自定义字体
  useEffect(() => {
    // 创建一个新的FontFace对象
    const racingPowerFont = new FontFace(
      'RacingPower', 
      `url('/Fonts/racingpowerdemoitalic-pgqyo.otf')`
    );

    // 加载字体
    racingPowerFont.load().then((loadedFont) => {
      // 将字体添加到document.fonts
      document.fonts.add(loadedFont);
      // 更新状态，表示字体已加载
      setFontLoaded(true);
    }).catch((error) => {
      console.error('字体加载失败:', error);
      // 即使字体加载失败，也设置为true以显示内容
      setFontLoaded(true);
    });
  }, []);

  // 不再需要滚动相关的动画效果

  return (
    <motion.section 
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* 背景图片 - 添加由远及近的镜头拉近效果 */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.2, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 2.5, 
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 1.5 }
        }}
      >
        <Image 
          src="/join_us.jpg" 
          alt="Join Our Team" 
          fill
          priority
          className="object-cover object-center filter brightness-90"
          sizes="100vw"
        />
        {/* 渐变叠加层 - 添加动画效果 */}
        <motion.div 
          className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        ></motion.div>
      </motion.div>

      {/* 几何装饰元素 - 配合镜头拉近效果 */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        {/* 左侧装饰线条 */}
        <motion.div 
          className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.div 
          className="absolute left-8 md:left-16 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        
        {/* 右侧装饰线条 */}
        <motion.div 
          className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.div 
          className="absolute right-8 md:right-16 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        />
        
        {/* 顶部装饰线条 */}
        <motion.div 
          className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
        
        {/* 底部装饰线条 */}
        <motion.div 
          className="absolute bottom-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        />
      </motion.div>
      
      {/* 内容容器 - 配合镜头拉近效果的动画 */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.8, 
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {/* 顶部小标题 */}
        <motion.div
          className="mb-4 md:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center">
            <div className="w-8 h-[1px] bg-white/70"></div>
            <span className="mx-3 text-white text-sm md:text-base uppercase tracking-widest drop-shadow-md">Join Our Team</span>
            <div className="w-8 h-[1px] bg-white/70"></div>
          </div>
        </motion.div>
        
        {/* 主标题 - 增强文字阴影以保持可读性 */}
        <motion.h1 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span 
            className={`block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white ${
              fontLoaded ? 'font-racingpower' : 'italic'
            }`}
            style={{ 
              fontFamily: fontLoaded ? 'RacingPower, cursive' : 'inherit',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.7)',
              lineHeight: '1.1'
            }}
          >
            Find Your Future
          </span>
          <span className="block mt-4 text-xl md:text-2xl lg:text-3xl text-white font-light tracking-wider drop-shadow-lg">
            SHAPE TOMORROW WITH US
          </span>
        </motion.h1>
        
        {/* 描述文本 - 增强文字阴影 */}
        <motion.p
          className="mt-8 md:mt-10 max-w-xl text-center text-white text-base md:text-lg leading-relaxed drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Join a team of innovators, creators, and visionaries dedicated to transforming industries through cutting-edge technology and forward-thinking solutions.
        </motion.p>
        
        {/* 按钮组 */}
        <motion.div
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button 
            onClick={() => window.open('/PDF/Career at TechFocus.pdf', '_blank')}
            className="px-8 py-3 border border-white text-white rounded-full text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Explore Our Company
          </button>
          <button 
            onClick={() => window.open('https://tally.so/r/mZDgja', '_blank')}
            className="px-8 py-3 border border-white text-white rounded-full text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Apply Now
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 