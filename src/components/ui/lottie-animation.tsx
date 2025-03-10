'use client';

import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // 在客户端挂载前显示占位符
    return <div className={cn('w-full h-full bg-gray-50', className)} />;
  }

  if (!src) {
    return <div className={cn('w-full h-full', className)} />;
  }

  return (
    <div className={cn('w-full h-full', className)}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-full"
      />
    </div>
  );
} 