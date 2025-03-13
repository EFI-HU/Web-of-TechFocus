/**
 * Home page component of the enterprise website
 * 企业官网的主页组件
 * 
 * This component integrates multiple sections to create a comprehensive homepage:
 * 该组件集成了多个部分来创建完整的主页：
 * 
 * - Hero section (main banner)
 * - 主横幅部分
 * - Business section (core services)
 * - 业务部分（核心服务）
 * - News section (company updates)
 * - 新闻部分（公司动态）
 * - Why Us section (company advantages)
 * - 为什么选择我们（公司优势）
 * - Landmark Project section (key projects)
 * - 标志性项目部分（重点项目）
 * - Partners section (cooperation partners)
 * - 合作伙伴部分
 * 
 * @component
 */

import { BusinessSection } from '@/components/home/business-section';
import { Hero } from '@/components/home/hero';
import { LandmarkProjectSection } from '@/components/home/landmark-project-section';
import { NewsSection } from '@/components/home/news-section';
import { PartnersSection } from '@/components/home/partners-section';
import { WhyUsSection } from '@/components/home/why-us-section';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col">
        {/* Hero Section - Main banner area */}
        {/* 主横幅区域 */}
        <Hero />
        
        {/* Business Section - Core services showcase */}
        {/* 核心业务展示区域 */}
        <BusinessSection />
        
        {/* News Section - Latest company updates */}
        {/* 最新公司动态区域 */}
        <NewsSection />
        
        {/* Why Us Section - Company advantages */}
        {/* 公司优势展示区域 */}
        <WhyUsSection />
        
        {/* Landmark Project Section - Key projects showcase */}
        {/* 重点项目展示区域 */}
        <LandmarkProjectSection />
        
        {/* Partners Section - Cooperation partners */}
        {/* 合作伙伴展示区域 */}
        <PartnersSection />
      </main>
    </div>
  );
}

