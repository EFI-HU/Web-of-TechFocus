'use client';

import { NewsItem } from '@/types/news';
import { format } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// 定义导航项类型
interface NavItem {
  name: string;
  href: string;
}

// 导航项数据
const navItems: NavItem[] = [
  { name: 'Research', href: '/research' },
  { name: 'Safety', href: '/safety' },
  { name: 'ChatGPT', href: '/chatgpt' },
  { name: 'Sora', href: '/sora' },
  { name: 'API Platform', href: '/api-platform' },
  { name: 'For Business', href: '/business' },
  { name: 'Stories', href: '/stories' },
  { name: 'Company', href: '/company' },
  { name: 'News', href: '/news' },
];

// 模拟新闻数据 - 使用主页中的正确日期
const newsData: NewsItem[] = [
  {
    id: '1',
    date: '2025-03-21',
    title: 'TechFocus Launches New Website to Enhance Customer Engagement',
    summary: 'New corporate website offers modern interface, detailed service insights, and interactive features for clients and partners.',
    content: [
      'Boulder, CO – [2025.3.21] – TechFocus has officially launched its new and improved website, designed to provide clients, partners, and industry professionals with a streamlined and interactive user experience.',
      'The updated website (www.techfocususa.com) offers:',
      '✅ A modern, easy-to-navigate interface',
      '✅ Detailed insights into TechFocus\'s IT solutions and services',
      '✅ Case studies showcasing successful projects',
      '✅ A dedicated resource hub for industry news and research',
      '"As a technology-driven company, it was essential for us to have a digital presence that reflects our expertise and values," said Dr. Wang. "Our new website is designed to provide a seamless experience, enabling visitors to explore our services, learn about our projects, and connect with our experts."',
      'In addition to the revamped design, the website includes an interactive contact section where businesses and agencies can easily inquire about TechFocus\'s services and potential collaborations.',
      'The launch of the new website marks another step in TechFocus\'s journey to expand its digital footprint and enhance customer engagement. The company invites visitors to explore the site and discover the innovative solutions it offers.'
    ],
    author: 'TechFocus Media Team',
    images: [
      {
        url: '/news/website-launch.jpg',
        alt: 'TechFocus new website launch',
        type: 'banner' // 长方形图片，放在内容开头
      },
      {
        url: '/woman.png',
        alt: 'Interactive user experience',
        type: 'square',
        position: 5 // 放在第5段落后面
      }
    ]
  },
  {
    id: '2',
    date: '2023-05-03',
    title: 'TechFocus Improves Freight Transportation Efficiency in Smart Cities',
    summary: 'New AI-driven platform optimizes urban freight movement, reducing energy consumption and operational costs.',
    content: [
      'Boulder, CO – [2023.5.3] – In its latest innovation, TechFocus has successfully enhanced the energy efficiency of freight movement in smart cities by developing an intelligent transportation platform. The platform provides real-time decision-making capabilities for transportation system operators, optimizing freight movement while reducing energy consumption.',
      'The newly developed system leverages AI-driven analytics and multi-modal logistics integration to enhance transportation efficiency across various freight networks. The platform is designed to streamline routes, predict demand patterns, and minimize fuel consumption, ensuring a greener and more cost-effective urban freight ecosystem.',
      '"As cities grow and logistics demands increase, there is a pressing need for smarter, more efficient freight movement strategies," said Dr. Wang. "Our platform not only reduces operational costs but also plays a crucial role in lowering environmental impact."',
      'This milestone reflects TechFocus\'s commitment to sustainability and innovation in urban transportation, reinforcing its position as a leader in intelligent transportation solutions.'
    ],
    author: 'TechFocus Media Team',
    images: [
      {
        url: '/news/smart-freight.jpg',
        alt: 'Smart freight transportation system',
        type: 'banner',
        position: 1 // 放在第1段落后面
      }
    ]
  },
  {
    id: '3',
    date: '2021-12-04',
    title: 'TechFocus Model Integrated into Google Maps for Energy-Efficient Routing',
    summary: 'Google Maps adopts TechFocus\'s fuel economy model to help drivers find the most energy-efficient routes.',
    content: [
      'Boulder, CO – [2021.12.4] – In a significant achievement, TechFocus has received DOE authorization in 2019 for a closed-source copyright on an advanced fuel economy estimation model. The model, developed exclusively by Dr. Wang, has since been adopted by Google Maps to introduce its "most energy-efficient route" feature in 2021.',
      'This data-driven tool, titled "A Tool to Estimate Fuel Economy/Consumption-Based on Real-World Driving Profile," is designed to analyze and predict fuel consumption patterns based on diverse driving behaviors and environmental conditions. The DOE\'s authorization allows TechFocus to maintain exclusive rights to the model, ensuring continued innovation and refinement.',
      '"Having our model integrated into a globally used platform like Google Maps underscores the real-world impact of our work," said Dr. Wang. "Our goal is to empower drivers with smarter choices that promote fuel efficiency and environmental sustainability."',
      'With Google Maps now offering users the ability to select routes that minimize fuel consumption, TechFocus has made a significant contribution to reducing global carbon emissions and promoting energy-efficient mobility.'
    ],
    author: 'TechFocus Media Team'
  },
  {
    id: '4',
    date: '2020-01-04',
    title: 'TechFocus Secures $1.75M DOE Grant to Advance Electric Bus Deployment',
    summary: 'DOE grant funds development of tools to help transit agencies optimize electric bus deployment and operations.',
    content: [
      'Boulder, CO – [2020.1.4] – TechFocus has been awarded a $1.75 million grant from the U.S. Department of Energy (DOE) in 2020 to develop innovative planning and operational tools for electric bus deployment. The funding, granted through the DOE\'s Funding Opportunity Announcement (FOA), marks a major milestone in TechFocus\'s mission to support sustainable transportation solutions.',
      'The project aims to assist transit agencies in transitioning to electric buses by leveraging real-world implementation and validation strategies. The tools developed under this initiative will help agencies optimize deployment strategies, improve energy efficiency, and enhance the overall operation of electric transit fleets.',
      '"Electrification of public transportation is a key component of reducing carbon emissions and fostering a greener future," said Dr. Wang. "Through this project, we are providing transit agencies with the necessary tools and data-driven strategies to make informed decisions."',
      'The initiative aligns with TechFocus\'s broader mission to develop sustainable and high-impact technological solutions. With the funding secured, the company is poised to revolutionize the way transit agencies implement electric bus fleets, ensuring an efficient and cost-effective transition.'
    ],
    author: 'TechFocus Media Team'
  },
  {
    id: '5',
    date: '2017-03-01',
    title: 'TechFocus Officially Established to Drive Innovation in IT Solutions',
    summary: 'New company launches to deliver cutting-edge technology solutions for federal agencies and commercial clients.',
    content: [
      'Boulder, CO – [2017.3.1] – A new era of IT solutions has begun with the launch of TechFocus, a company committed to delivering cutting-edge technology solutions to federal agencies and commercial clients. Established on [exact founding date in 2017], TechFocus has rapidly emerged as a leader in IT modernization, artificial intelligence, machine learning, cloud computing, and data science.',
      'Founded by a team of highly skilled professionals, 75% of whom hold advanced degrees, TechFocus was created to bridge the gap between emerging technologies and mission-critical applications. With a strong emphasis on cybersecurity, cloud computing, and AI-driven solutions, the company is uniquely positioned to help organizations navigate the complexities of digital transformation.',
      '"We recognized a growing need for highly specialized technology solutions that could seamlessly integrate into existing infrastructures while improving operational efficiency," said Dr. Lijuan Wang, a key figure behind the company\'s inception. "TechFocus is built on a foundation of expertise, research, and real-world implementation, making us a reliable partner for businesses and government agencies alike."',
      'Since its launch, TechFocus has worked extensively with federal institutions, contributing to AI-driven projects, cloud migration initiatives, and cutting-edge machine learning applications. As the company moves forward, it remains dedicated to innovation, efficiency, and sustainability in IT solutions.'
    ],
    author: 'TechFocus Media Team'
  }
];

export function NewsPage() {
  const [selectedNewsId, setSelectedNewsId] = useState(newsData[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // 添加处理 URL 参数的 useEffect
  useEffect(() => {
    // 获取 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('article');
    
    // 如果有文章 ID 参数，并且该文章存在，则显示对应文章
    if (articleId) {
      const targetArticle = newsData.find(news => news.id === String(articleId));
      if (targetArticle) {
        setSelectedNewsId(targetArticle.id);
        // 滚动到页面顶部
        window.scrollTo(0, 0);
      }
    }
  }, []);

  const selectedNews = newsData.find(news => news.id === selectedNewsId) || newsData[0];
  
  // 渲染内容，支持在指定位置插入图片
  const renderContent = () => {
    if (!selectedNews.images || selectedNews.images.length === 0) {
      // 如果没有图片，直接渲染所有段落
      return selectedNews.content.map((paragraph, index) => (
        <p key={index} className="mb-6 text-black leading-loose text-left text-lg mx-auto max-w-3xl">
          {paragraph}
        </p>
      ));
    }

    // 如果有图片，在指定位置插入图片
    const result: React.ReactNode[] = [];
    let contentIndex = 0;

    // 先添加没有指定位置的图片（默认放在内容开头）
    const unpositionedImages = selectedNews.images?.filter(img => img.position === undefined) || [];
    
    // 只保留banner类型的图片
    const bannerImages = unpositionedImages.filter(img => img.type === 'banner');
    
    // 如果有banner类型的图片，先添加第一张
    if (bannerImages.length > 0) {
      const firstBannerImage = bannerImages[0];
      result.push(
        <div key={`img-default-${firstBannerImage.url}`} className="my-12 w-full image-container banner-image">
          <img 
            src="/whitehouse.png" 
            alt={firstBannerImage.alt} 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="mt-12 mx-auto max-w-3xl">
            <hr className="border-gray-100" />
          </div>
        </div>
      );
      
      // 添加其他banner图片
      bannerImages.slice(1).forEach(image => {
        result.push(
          <div key={`img-default-${image.url}`} className="my-8 w-full image-container banner-image">
            <img 
              src="/whitehouse.png" 
              alt={image.alt} 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        );
      });
    }
    
    // 然后按顺序添加内容和指定位置的图片
    selectedNews.content.forEach((paragraph, index) => {
      result.push(
        <p key={`p-${index}`} className="mb-6 text-black leading-loose text-left text-lg mx-auto max-w-3xl">
          {paragraph}
        </p>
      );
      contentIndex = index;

      // 检查是否有图片应该放在这个段落后面，只保留banner类型
      const positionedBannerImages = selectedNews.images?.filter(img => 
        img.position === index + 1 && img.type === 'banner'
      ) || [];
      
      // 检查这是否是文章中的第一张图片位置（如果没有无位置的banner图片）
      const isFirstImagePosition = bannerImages.length === 0 && index === 0 && positionedBannerImages.length > 0;
      
      // 如果是第一张图片位置，添加特殊样式
      if (isFirstImagePosition && positionedBannerImages.length > 0) {
        const firstPositionedBanner = positionedBannerImages[0];
        result.push(
          <div key={`img-${index}-${firstPositionedBanner.url}`} className="my-12 w-full image-container banner-image">
            <img 
              src="/whitehouse.png" 
              alt={firstPositionedBanner.alt} 
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <div className="mt-12 mx-auto max-w-3xl">
              <hr className="border-gray-100" />
            </div>
          </div>
        );
        
        // 添加其他指定位置banner图片
        positionedBannerImages.slice(1).forEach(image => {
          result.push(
            <div key={`img-${index}-${image.url}`} className="my-8 w-full image-container banner-image">
              <img 
                src="/whitehouse.png" 
                alt={image.alt} 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          );
        });
      } else {
        // 非第一张图片位置，正常处理
        positionedBannerImages.forEach(image => {
          result.push(
            <div key={`img-${index}-${image.url}`} className="my-8 w-full image-container banner-image">
              <img 
                src="/whitehouse.png" 
                alt={image.alt} 
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          );
        });
      }
    });

    return result;
  };

  // 移动端导航栏日期项
  const MobileDateItem = ({ news }: { news: NewsItem }) => {
    const isActive = news.id === selectedNewsId;
    const formattedDate = format(new Date(news.date), 'MMM d, yyyy');
    
    return (
      <button
        key={news.id}
        onClick={() => {
          setSelectedNewsId(news.id);
          setIsMobileMenuOpen(false);
        }}
        className={`py-3 px-4 text-sm transition-all duration-300 ease-in-out ${
          isActive 
            ? 'bg-gray-100 text-black font-medium' 
            : 'text-gray-600 hover:bg-gray-50'
        } text-center whitespace-nowrap`}
      >
        {formattedDate}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* 桌面端左侧导航栏 - 在移动端隐藏 */}
      <div className="hidden md:block w-64 min-h-screen flex-shrink-0">
        <div className="fixed top-0 left-0 h-screen w-64 flex flex-col justify-center items-start">
          <div className="w-full pl-8 py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
            <nav className="flex flex-col space-y-6">
              {newsData.map((news) => {
                const isActive = news.id === selectedNewsId;
                const formattedDate = format(new Date(news.date), 'MMMM d, yyyy');
                
                return (
                  <button
                    key={news.id}
                    onClick={() => setSelectedNewsId(news.id)}
                    className="text-base text-black py-2 px-3 rounded transition-all duration-300 ease-in-out hover:bg-gray-100 text-left relative group flex items-center w-full"
                  >
                    <span 
                      className="transition-all duration-300 ease-in-out"
                      style={{ 
                        fontWeight: isActive ? 600 : 400,
                        opacity: isActive ? 1 : 0.85,
                        transform: isActive ? 'scale(1.02)' : 'scale(1)'
                      }}
                    >
                      {formattedDate}
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
      </div>
      
      {/* 移动端顶部导航栏 - 在桌面端隐藏 */}
      <div className="md:hidden bg-white shadow-sm w-full">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-lg font-medium">News</div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center space-x-1 text-gray-700"
          >
            <span className="text-sm">{format(new Date(selectedNews.date), 'MMM d, yyyy')}</span>
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
                  {newsData.map((news) => (
                    <MobileDateItem key={news.id} news={news} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* 内容区域 - 桌面端有左侧边距，移动端没有 */}
      <div className="flex-1 overflow-x-hidden">
        <div className="w-full md:ml-0">
          <div className="container mx-auto py-6 md:py-12 px-4 md:px-6 overflow-x-hidden">
            <div className="flex flex-col items-center">
              {/* 文章内容 */}
              <div className="w-full max-w-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedNewsId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* 新的文章标题设计 */}
                    <div className="mb-8 md:mb-12 text-center">
                      {/* 发布时间 - 仅在桌面端显示，移动端已在顶部显示 */}
                      <div className="hidden md:block text-gray-500 mb-4">
                        {format(new Date(selectedNews.date), 'MMMM d, yyyy')}
                      </div>
                      
                      {/* 大标题 - 响应式字体大小 */}
                      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 tracking-tight max-w-5xl mx-auto leading-tight">
                        {selectedNews.title}
                      </h1>
                      
                      {/* 文章概述 - 响应式字体大小 */}
                      <div className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        {selectedNews.summary}
                      </div>
                    </div>
                    
                    {/* 文章正文内容 */}
                    <div className="prose max-w-none overflow-x-hidden">
                      {renderContent()}
                      
                      <div className="max-w-3xl mx-auto mt-8 text-sm text-gray-500 text-center">
                        Author: {selectedNews.author}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 添加移动端和电脑端样式
const styles = `
/* 基础图片容器样式 */
.image-container {
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
}

.image-container img {
  transition: transform 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.02);
}

/* 隐藏滚动条但保持可滚动功能 - 适用于所有设备 */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}

/* 响应式布局 - 大屏幕 (1200px以上) */
@media (min-width: 1200px) {
  .banner-image {
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .banner-image img {
    aspect-ratio: 16/9;
    border-radius: 0.5rem;
  }
  
  .max-w-3xl {
    max-width: 48rem !important; /* 768px */
  }
  
  .max-w-4xl {
    max-width: 56rem !important; /* 896px */
  }
  
  .max-w-5xl {
    max-width: 64rem !important; /* 1024px */
  }
}

/* 响应式布局 - 中等屏幕 (768px - 1199px) */
@media (min-width: 768px) and (max-width: 1199px) {
  .banner-image {
    width: 95%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .banner-image img {
    aspect-ratio: 16/9;
  }
  
  .max-w-3xl {
    max-width: 42rem !important; /* 672px */
    margin-left: auto !important;
    margin-right: auto !important;
  }
  
  .max-w-4xl {
    max-width: 48rem !important; /* 768px */
    margin-left: auto !important;
    margin-right: auto !important;
  }
  
  .max-w-5xl {
    max-width: 52rem !important; /* 832px */
    margin-left: auto !important;
    margin-right: auto !important;
  }
}

/* 响应式布局 - 小屏幕 (767px以下) */
@media (max-width: 767px) {
  .banner-image {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  
  .banner-image img {
    aspect-ratio: 4/3;
    border-radius: 0.375rem;
  }
  
  .max-w-2xl, .max-w-3xl, .max-w-4xl, .max-w-5xl {
    max-width: 100% !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}
`;

// 添加样式到head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
} 