'use client';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

// 动态导入DotLottieReact组件，禁用SSR
const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then(mod => mod.DotLottieReact),
  { ssr: false }
);

interface LottieAnimationProps {
  src?: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export function LottieAnimation({
  src,
  className,
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const [isMounted, setIsMounted] = useState(false);
  // 添加一个状态来跟踪窗口大小变化
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  // 添加一个引用来跟踪组件是否已卸载
  const isMountedRef = useRef(true);

  useEffect(() => {
    setIsMounted(true);
    
    // 处理窗口大小变化的函数
    const handleResize = () => {
      if (isMountedRef.current) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    // 添加窗口大小变化事件监听
    window.addEventListener('resize', handleResize);
    
    // 清理函数
    return () => {
      isMountedRef.current = false;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMounted) {
    // 在客户端挂载前显示占位符
    return <div className={cn('w-full h-full bg-gray-50', className)} />;
  }

  if (!src) {
    return <div className={cn('w-full h-full', className)} />;
  }

  // 使用key属性强制在窗口大小变化时重新渲染组件
  return (
    <div className={cn('w-full h-full', className)}>
      <DotLottieReact
        key={`${windowSize.width}-${windowSize.height}`}
        src={src}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-full"
      />
    </div>
  );
} 