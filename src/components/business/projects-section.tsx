'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function ProjectsSection() {
  // 视频引用
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);
  const [videoPlayed, setVideoPlayed] = useState(false);

  // 监听滚动，控制视频播放
  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current || videoPlayed) return;
      
      const rect = videoContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 当视频容器的一半进入视口时
      if (rect.top + rect.height / 2 < windowHeight && rect.bottom > 0) {
        setVideoVisible(true);
      } else {
        setVideoVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // 初始检查
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videoPlayed]);

  // 当视频可见且未播放过时，播放视频
  useEffect(() => {
    if (videoVisible && !videoPlayed && videoRef.current) {
      // 短暂延迟，确保视频已加载
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play()
            .then(() => {
              setVideoPlayed(true);
              console.log('视频开始播放');
            })
            .catch(err => {
              console.error('视频播放失败:', err);
            });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [videoVisible, videoPlayed]);

  return (
    <div className="flex flex-col">
      {/* 标题部分 */}
      <div className="flex flex-col items-center justify-center pt-20 pb-8 px-6 md:px-12 lg:px-16">
        <div className="text-center max-w-3xl">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">Our</h2>
          <h1 className="text-7xl font-bold mb-12">Projects</h1>
          <p className="text-center max-w-2xl mx-auto text-lg">
            Hi! Over the years, we've worked on many interesting and technology-driven projects!
            <br />
            Please scroll down to take a look!
          </p>
          
          {/* 向下滚动指示器 */}
          <div className="mt-16 flex justify-center">
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
              className="rounded-full border border-gray-300 p-3"
            >
              <ArrowDown size={24} className="text-gray-800" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 第一个项目 - Awarded DOE FOA Proposal */}
      <div className="mt-24 px-6 md:px-12 lg:px-16 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            {/* 项目文本部分 */}
            <div className="lg:w-1/2 flex flex-col justify-center lg:pr-8 mb-8 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8">Awarded DOE FOA Proposal</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Initiated an FOA proposal and was funded in the amount of $1.75 million in 2020. The primary
                goal of the proposed project was to develop a set of innovative planning and operation tools
                and identify effective strategies informed by real-world implementation and validation to help
                transit agencies gradually and effectively deploy and operate electric buses.
              </p>
            </div>
            
            {/* 项目视频部分 */}
            <div 
              ref={videoContainerRef}
              className="lg:w-1/2 bg-gray-200 rounded-xl overflow-hidden h-[300px] md:h-[400px]"
            >
              <video 
                ref={videoRef}
                src="/business/projects.mp4"
                className="w-full h-full object-cover"
                playsInline
                muted
                preload="auto"
                controls={false}
                onEnded={() => {
                  // 视频播放结束后，保持在最后一帧
                  if (videoRef.current) {
                    videoRef.current.currentTime = videoRef.current.duration;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 第二个项目 - Received DOE Copyright Authorization */}
      <div className="py-20 px-6 md:px-12 lg:px-16 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-center">
              Received DOE<br />
              Copyright Authorization
            </h2>
          </div>
          
          {/* 详细内容 */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-xl text-gray-800 leading-relaxed">
              In 2019, as the sole contributor on the model "A Tool to Estimate Fuel Economy/
              Consumption-Based on Real World Driving Profile", Dr. Wang received DOE
              authorization to assert a closed-source copyright for NREL, which was adopted by
              Google in 2021 to add "most energy efficient route" feature into Google Maps.
            </p>
          </div>
          
          {/* 图片展示 */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image 
                src="/business/products/product1.webp"
                alt="Dr. Wang's tool adopted by Google in 2021"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-1/2 left-0 w-full text-center text-white transform -translate-y-1/2">
                <div className="text-2xl md:text-3xl font-bold tracking-wide">
                  TechFocus – Dr. Wang's tool
                </div>
                <div className="text-xl md:text-2xl font-medium mt-2">
                  adopt by Google in 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 第三个项目 - Improved Freight Movement Energy Efficiency */}
      <div className="pt-0 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl font-bold">
              Improved
            </h2>
            <h3 className="text-4xl font-normal mt-4">
              Freight Movement Energy Efficiency
            </h3>
          </div>
          
          {/* 卡片部分 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 卡片1 */}
            <div className="border border-gray-200 rounded-[30px] p-10 shadow-sm">
              <div className="w-7 h-7 bg-black rounded-full mb-6"></div>
              <h4 className="text-2xl font-medium leading-relaxed">
                Improved the energy efficiency of multi-modal smart city freight movement
              </h4>
            </div>
            
            {/* 卡片2 */}
            <div className="border border-gray-200 rounded-[30px] p-10 shadow-sm md:h-auto">
              <div className="w-7 h-7 bg-black rounded-full mb-6"></div>
              <h4 className="text-2xl font-medium leading-relaxed">
                Developed an intelligent platform that guides transportation system operators to improve energy efficiency
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 