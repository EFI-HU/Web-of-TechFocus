'use client';

import { newsData } from '@/data/news-data';
import { NewsItem } from '@/types/news';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Content, ContentItem } from '@/components/shared/sidebar-nav';

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
    // 获取当前选中的新闻
    const news = selectedNews;
    
    // 如果有地图比较布局配置，渲染地图比较布局
    if (news.mapComparisonLayout && news.id === '3') {
      const mapLayout = news.mapComparisonLayout; // 使用临时变量避免类型检查错误
      const imageLayout = news.imageLayout; // 获取图片布局配置
      
      return (
        <>
          {/* 第一屏：顶部日期 */}
          <div className="mb-8 text-center">
            <div className="text-gray-600">
              {imageLayout?.location} {imageLayout?.date}
            </div>
          </div>
          
          {/* 第一屏：左侧GIF和右侧标题的两栏布局 */}
          <div className="w-full mb-16 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              {/* 左侧GIF */}
              {news.images && news.images.length > 0 && (
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl image-container">
                    <img 
                      src={news.images[0].url} 
                      alt={news.images[0].alt} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* 右侧标题 */}
              <div className="w-full md:w-1/2 flex items-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                  {imageLayout?.fullTitle}
                </h1>
              </div>
            </div>
          </div>
          
          {/* 第一屏和第二屏之间的分隔线 */}
          <div className="w-full max-w-4xl mx-auto my-16 border-t border-gray-200"></div>
          
          {/* 第二屏：文章内容前两段 */}
          <div className="max-w-4xl mx-auto mb-16">
            {news.content.slice(0, 2).map((paragraph, index) => (
              <p key={index} className="text-lg mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* 第二屏：地图比较部分 - 单一图片 */}
          <div className="w-full max-w-6xl mx-auto mb-16">
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="flex justify-between mb-4 text-gray-600">
                  <span className="font-normal">{mapLayout.firstImageTitle}</span>
                  <span className="font-normal">{mapLayout.secondImageTitle}</span>
                </div>
                <div className="w-full relative overflow-hidden rounded-md">
                  <img 
                    src={mapLayout.imageUrl} 
                    alt={mapLayout.imageAlt} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* 第二屏：最后一段文章内容 */}
          <div className="max-w-4xl mx-auto mt-8">
            {news.content.slice(2).map((paragraph, index) => (
              <p key={index + 2} className="text-lg mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* 文章底部空白区域 */}
          <div className="h-32 md:h-40"></div>
        </>
      );
    }
    
    // 如果有视频+特殊布局配置，使用视频+特殊布局
    if (news.videoWithSpecialLayout) {
      const videoSpecialLayout = news.videoWithSpecialLayout; // 使用临时变量避免类型检查错误
      return (
        <>
          {/* 日期和标题部分 */}
          <div className="mb-16 text-center">
            <div className="text-gray-600 mb-6">
              {videoSpecialLayout.location} {videoSpecialLayout.date}
            </div>
            <h1 className="text-5xl md:text-6xl font-medium mb-12 tracking-tight">
              {videoSpecialLayout.fullTitle.split('<br />').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < videoSpecialLayout.fullTitle.split('<br />').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <div className="max-w-2xl mx-auto text-center space-y-4">
              {videoSpecialLayout.highlights.map((highlight, index) => (
                <p key={index} className="text-lg">{highlight}</p>
              ))}
            </div>
          </div>
          
          {/* 顶部视频 */}
          {news.videos && news.videos.length > 0 && (
            <div className="w-full mb-20 max-w-6xl mx-auto">
              <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl video-container">
                <video 
                  src={news.videos[0].url} 
                  poster={news.videos[0].posterUrl}
                  autoPlay
                  muted
                  playsInline
                  loop={false}
                  controls={false}
                  className="w-full h-auto object-cover"
                  onEnded={(e) => {
                    // 不做任何操作，让视频停留在最后一帧
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
          
          {/* 文章内容 */}
          <div className="max-w-4xl mx-auto">
            {news.content.map((paragraph, index) => {
              // 第一段落特殊处理，与原型图一致
              if (index === 0) {
                return (
                  <p key={index} className="text-lg mb-10 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
              // 第二段落特殊处理，与原型图一致
              else if (index === 1) {
                return (
                  <p key={index} className="text-lg mb-10 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
              // 第三段落特殊处理，引用样式，与原型图一致
              else if (index === 2) {
                return (
                  <div key={index} className="mb-16">
                    <blockquote className="text-2xl font-medium text-center mb-4 max-w-3xl mx-auto leading-relaxed">
                      {paragraph}
                    </blockquote>
                  </div>
                );
              }
              // 其他段落正常处理
              else {
                return (
                  <p key={index} className="text-lg mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
          
          {/* 文章底部空白区域 */}
          <div className="h-32 md:h-40"></div>
        </>
      );
    }
    
    // 如果有视频布局配置，使用视频布局
    if (news.videoLayout) {
      const videoLayout = news.videoLayout; // 使用临时变量避免类型检查错误
      return (
        <>
          {/* 日期和标题部分 */}
          <div className="mb-16 text-center">
            <div className="text-gray-600 mb-6">
              {videoLayout.location} {videoLayout.date}
            </div>
            <h1 className="text-5xl md:text-6xl font-medium mb-16 tracking-tight">
              {videoLayout.fullTitle}
            </h1>
          </div>
          
          {/* 顶部视频 */}
          {news.videos && news.videos.length > 0 && (
            <div className="w-full mb-14 max-w-6xl mx-auto">
              <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl video-container">
                <video 
                  src={news.videos[0].url} 
                  poster={news.videos[0].posterUrl}
                  autoPlay
                  muted
                  playsInline
                  loop={false}
                  controls={false}
                  className="w-full h-auto object-cover"
                  onEnded={(e) => {
                    // 不做任何操作，让视频停留在最后一帧
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
          
          {/* 检查是否有两列布局配置 */}
          {news.twoColumnLayout ? (
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row gap-10 md:gap-24">
                {/* 左侧内容列 */}
                <div className="w-full md:w-3/5">
                  {news.twoColumnLayout.leftColumnContent.map((paragraph, index) => (
                    <p key={index} className="text-lg mb-8 leading-relaxed text-gray-800">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* 右侧引用列 */}
                <div className="w-full md:w-2/5">
                  <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                    <blockquote className="text-xl italic mb-4 leading-relaxed text-gray-700">
                      {news.twoColumnLayout.quoteContent}
                    </blockquote>
                    {news.twoColumnLayout.quoteAuthor && (
                      <p className="text-right text-gray-600 font-medium">- {news.twoColumnLayout.quoteAuthor}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* 底部内容 */}
              {news.twoColumnLayout.bottomContent && (
                <div className="mt-16 mb-8">
                  <p className="text-lg leading-relaxed text-gray-800">
                    {news.twoColumnLayout.bottomContent}
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* 如果没有两列布局配置，使用普通内容布局 */
            <div className="max-w-4xl mx-auto">
              {news.content.map((paragraph, index) => (
                <p key={index} className="text-lg mb-8 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          
          {/* 文章底部空白区域 */}
          <div className="h-32 md:h-40"></div>
        </>
      );
    }
    
    // 如果有图片布局配置，使用图片布局
    if (news.imageLayout) {
      const imageLayout = news.imageLayout; // 使用临时变量避免类型检查错误
      return (
        <>
          {/* 顶部日期 */}
          <div className="mb-8 text-center">
            <div className="text-gray-600">
              {imageLayout.location} {imageLayout.date}
            </div>
          </div>
          
          {/* 左侧GIF和右侧标题的两栏布局 */}
          <div className="w-full mb-16 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              {/* 左侧GIF */}
              {news.images && news.images.length > 0 && (
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl image-container">
                    <img 
                      src={news.images[0].url} 
                      alt={news.images[0].alt} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* 右侧标题 */}
              <div className="w-full md:w-1/2 flex items-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
                  {imageLayout.fullTitle}
                </h1>
              </div>
            </div>
          </div>
          
          {/* 文章内容 */}
          <div className="max-w-4xl mx-auto">
            {news.content.map((paragraph, index) => {
              return (
                <p key={index} className="text-lg mb-8 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
          
          {/* 文章底部空白区域 */}
          <div className="h-32 md:h-40"></div>
        </>
      );
    }
    
    // 如果有特殊布局配置，使用特殊布局
    if (news.specialLayout) {
      const specialLayout = news.specialLayout; // 使用临时变量避免类型检查错误
      
      // 检查是否是第五篇文章（Officially Established）
      const isOfficiallyEstablished = news.id === '5';
      
      return (
        <>
          {/* 日期和标题部分 */}
          <div className={`${isOfficiallyEstablished ? 'mb-24' : 'mb-16'} text-center`}>
            <div className="text-gray-600 mb-6">
              {specialLayout.location} {specialLayout.date}
            </div>
            <h1 className={`${isOfficiallyEstablished ? 'text-5xl md:text-6xl' : 'text-5xl md:text-6xl'} font-medium mb-12 tracking-tight`}>
              {specialLayout.fullTitle.split('<br />').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < specialLayout.fullTitle.split('<br />').length - 1 && <br />}
                </span>
              ))}
            </h1>
            {specialLayout.highlights && specialLayout.highlights.length > 0 && (
              <div className="max-w-2xl mx-auto text-center space-y-4">
                {specialLayout.highlights.map((highlight, index) => (
                  <p key={index} className="text-lg">{highlight}</p>
                ))}
              </div>
            )}
          </div>
          
          {/* 顶部大图 - 更大的尺寸，仅当有图片时显示 */}
          {news.images && news.images.length > 0 && (
            <div className="w-full mb-20 max-w-6xl mx-auto">
              <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl image-container">
                <img 
                  src={news.images[0].url} 
                  alt={news.images[0].alt} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
          
          {/* 文章内容 */}
          <div className="max-w-4xl mx-auto">
            {news.content.map((paragraph, index) => {
              // 第五篇文章的特殊处理
              if (isOfficiallyEstablished) {
                // 所有段落都作为普通正文处理，不再对第三段特殊处理
                return (
                  <p key={index} className={`text-lg ${index < news.content.length - 1 ? 'mb-8' : 'mb-16'} leading-relaxed`}>
                    {paragraph}
                  </p>
                );
              }
              
              // 其他文章的处理逻辑
              // 第一段落特殊处理，与原型图一致
              if (index === 0) {
                return (
                  <p key={index} className="text-lg mb-10 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
              // 第二段落特殊处理，与原型图一致
              else if (index === 1) {
                return (
                  <p key={index} className="text-lg mb-10 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
              // 第三段落特殊处理，引用样式，与原型图一致
              else if (index === 2) {
                return (
                  <div key={index} className="mb-16">
                    <blockquote className="text-2xl font-medium text-center mb-4 max-w-3xl mx-auto leading-relaxed">
                      {paragraph}
                    </blockquote>
                  </div>
                );
              }
              // 其他段落正常处理
              else {
                return (
                  <p key={index} className="text-lg mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
          
          {/* 第五篇文章的Core Business部分 */}
          {isOfficiallyEstablished && news.coreBusinessLayout && (
            <div className="w-full max-w-4xl mx-auto mt-32 mb-16">
              {/* Core Business标题 */}
              <div className="text-center mb-16">
                <h2 className="text-5xl font-normal mb-0 leading-none tracking-tight">
                  {news.coreBusinessLayout.title}
                </h2>
                <h2 className="text-5xl font-normal tracking-tight">
                  {news.coreBusinessLayout.subtitle}
                </h2>
              </div>
              
              {/* 只保留图片，去掉卡片样式和下方内容 */}
              <div className="w-full max-w-4xl mx-auto">
                {/* 卡片图片 */}
                <img 
                  src={news.coreBusinessLayout.cardImageUrl} 
                  alt={news.coreBusinessLayout.cardImageAlt} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
          
          {/* 文章底部空白区域 */}
          <div className="h-32 md:h-40"></div>
        </>
      );
    }
    
    // 对于其他文章，使用标准布局
    if (!news.images || news.images.length === 0) {
      // 如果没有图片，直接渲染所有段落
      return (
        <>
          {/* 标题和摘要 */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">{news.title}</h1>
            <p className="text-lg text-gray-600">{news.summary}</p>
          </div>
          
          {news.content.map((paragraph, index) => (
            <p key={index} className="text-lg mb-6 leading-relaxed max-w-4xl mx-auto">
          {paragraph}
        </p>
          ))}
          
          {/* 文章底部空白区域 */}
          <div className="h-32 md:h-40"></div>
        </>
      );
    }

    // 如果有图片，在指定位置插入图片
    const result: React.ReactNode[] = [];
    
    // 添加标题和摘要
    result.push(
      <div key="title-summary" className="mb-10">
        <h1 className="text-3xl md:text-4xl font-medium mb-4">{news.title}</h1>
        <p className="text-lg text-gray-600">{news.summary}</p>
      </div>
    );

    // 先添加没有指定位置的图片（默认放在内容开头）
    const unpositionedImages = news.images?.filter(img => img.position === undefined) || [];
    
    // 只保留banner类型的图片
    const bannerImages = unpositionedImages.filter(img => img.type === 'banner');
    
    // 如果有banner类型的图片，先添加第一张
    if (bannerImages.length > 0) {
      const firstBannerImage = bannerImages[0];
      result.push(
        <div key={`img-default-${firstBannerImage.url}`} className="w-full mb-10 max-w-5xl mx-auto">
          <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl image-container">
          <img 
              src={firstBannerImage.url} 
            alt={firstBannerImage.alt} 
              className="w-full h-auto object-cover"
          />
          </div>
        </div>
      );
    }
    
    // 然后按顺序添加内容和指定位置的图片
    news.content.forEach((paragraph, index) => {
      result.push(
        <p key={`p-${index}`} className="text-lg mb-6 leading-relaxed max-w-4xl mx-auto">
          {paragraph}
        </p>
      );

      // 检查是否有图片应该放在这个段落后面，只保留banner类型
      const positionedBannerImages = news.images?.filter(img => 
        img.position === index + 1 && img.type === 'banner'
      ) || [];
      
      // 添加指定位置的图片
      positionedBannerImages.forEach(image => {
        result.push(
          <div key={`img-${index}-${image.url}`} className="w-full my-10 max-w-5xl mx-auto">
            <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl image-container">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
          );
        });
    });
    
    // 添加文章底部空白区域
    result.push(
      <div key="bottom-space" className="h-32 md:h-40"></div>
    );

    return result;
  };

  // 移动端导航栏日期项
  const MobileDateItem = ({ news }: { news: NewsItem }) => {
    const isActive = news.id === selectedNewsId;
    
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
        {news.title}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* 使用新的Content组件作为桌面端侧边栏 */}
      <Content 
        items={newsData.map(news => ({
          id: news.id,
          title: news.title
        }))}
        selectedId={selectedNewsId}
        onSelect={(id) => setSelectedNewsId(id)}
        title="News"
      />
      
      {/* 移动端顶部导航栏 - 在桌面端隐藏 */}
      <div className="md:hidden bg-white shadow-sm w-full">
        <div className="flex justify-between items-center px-0 py-3">
          <div className="text-lg font-medium pl-4">News</div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center space-x-1 text-gray-700 pr-4"
          >
            <span className="text-sm">{selectedNews.title}</span>
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
            <div className="flex flex-col">
              {/* 文章内容 */}
              <div className="w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedNewsId}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* 文章正文内容 */}
                    <div className="prose max-w-none overflow-x-hidden">
                      {renderContent()}
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
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.image-container:hover img {
  transform: scale(1.02);
}

/* 视频容器样式 */
video {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  display: block;
}

/* 确保视频和图片容器样式一致 */
.video-container, .image-container {
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* 引用样式 */
blockquote {
  font-style: italic;
  color: #333;
  position: relative;
  padding: 0 2rem;
  line-height: 1.6;
}

blockquote::before,
blockquote::after {
  content: '"';
  font-size: 2.5rem;
  position: absolute;
  opacity: 0.3;
}

blockquote::before {
  left: 0;
  top: -1rem;
}

blockquote::after {
  right: 0;
  bottom: -2rem;
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
    width: 100%;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  
  .banner-image img {
    aspect-ratio: 16/9;
    border-radius: 1rem;
    width: 100%;
  }
  
  .max-w-3xl {
    max-width: 48rem !important; /* 768px */
  }
  
  .max-w-4xl {
    max-width: 56rem !important; /* 896px */
  }
  
  .max-w-5xl {
    max-width: 70rem !important; /* 1120px */
  }
  
  .max-w-6xl {
    max-width: 76rem !important; /* 1216px */
  }
}

/* 响应式布局 - 中等屏幕 (768px - 1199px) */
@media (min-width: 768px) and (max-width: 1199px) {
  .banner-image {
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  
  .banner-image img {
    aspect-ratio: 16/9;
    border-radius: 1rem;
    width: 100%;
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
    max-width: 60rem !important; /* 960px */
    margin-left: auto !important;
    margin-right: auto !important;
  }
  
  .max-w-6xl {
    max-width: 64rem !important; /* 1024px */
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
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  .banner-image img {
    aspect-ratio: 4/3;
    border-radius: 0.75rem;
    width: 100%;
  }
  
  .max-w-2xl, .max-w-3xl, .max-w-4xl, .max-w-5xl, .max-w-6xl {
    max-width: 100% !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  
  blockquote {
    padding: 0 1rem;
    font-size: 1.25rem;
  }
  
  /* 移动设备上GIF和标题的布局 */
  .flex-col.md\:flex-row {
    gap: 1.5rem !important;
  }
  
  .flex-col.md\:flex-row h1 {
    font-size: 2.5rem !important;
    text-align: center;
    line-height: 1.2;
    margin-top: 0.5rem;
    font-weight: 500 !important; /* 确保移动设备上的字体粗细一致 */
  }
  
  /* 确保所有标题在移动设备上字体粗细一致 */
  h1 {
    font-weight: 500 !important;
    font-size: 2.75rem !important;
    line-height: 1.2;
  }
  
  /* 确保GIF在移动设备上有正确的宽高比 */
  .image-container {
    max-width: 100%;
    margin: 0 auto;
  }
  
  /* 确保视频在移动设备上有正确的宽高比 */
  .video-container {
    max-width: 100%;
    margin: 0 auto;
  }
  
  /* 调整移动设备上的文章内容间距 */
  .text-lg {
    font-size: 1.125rem !important;
    line-height: 1.75;
  }
  
  /* 调整移动设备上的日期和标题间距 */
  .mb-10 {
    margin-bottom: 2rem !important;
  }
  
  .mb-4 {
    margin-bottom: 1rem !important;
  }
  
  /* 调整移动设备上的两列布局 */
  .flex-col.md\:flex-row .w-full.md\:w-3\/5,
  .flex-col.md\:flex-row .w-full.md\:w-2\/5 {
    width: 100% !important;
    margin-bottom: 2rem;
  }
  
  /* 调整移动设备上的引用块样式 */
  .bg-gray-50.p-8 {
    padding: 1.5rem !important;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
`;

// 添加样式到head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
} 