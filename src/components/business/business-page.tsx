'use client';

import { NavItem, SidebarNav } from '@/components/shared/sidebar-nav';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ProductsSection } from './products-section';
import { ProjectsSection } from './projects-section';

// 导航项数据
const navItems: NavItem[] = [
  { id: 'business', title: 'Business' },
  { id: 'projects', title: 'Projects' },
  { id: 'products', title: 'Products' },
];

// 修改businessData数据
const businessData = [
  {
    id: 'business',
    title: 'Core Business',
    sections: [
      {
        title: 'IT Solutions',
        description: 'TechFocus covers solutions for cyber security, cloud computing and cloud-related professional services, automated contacts,and more.TechFocus also covers IT consulting, IT operation and maintenance, design and development services, etc.',
        image: '/woman.png'
      },
      {
        title: 'Hardware',
        description: 'TechFocus is a well-known reseller of office electronics including notebooks, tablets, desktops, workstations, Chromebook and calculators.',
        image: '/hardware.png'
      }
    ]
  }
];

// 项目数据 - 保留但不再使用，由ProjectsSection组件替代
const projectsData = [
  {
    id: 'projects',
    title: 'Projects',
    content: [
      'TechFocus has successfully delivered numerous high-impact projects across various domains. Our project portfolio demonstrates our capability to handle complex technological challenges and deliver innovative solutions.',
      'Some of our notable projects include:',
      '1. Smart Cities Transportation Platform: An AI-driven system that optimizes urban freight movement, reducing energy consumption and operational costs.',
      '2. Fuel Economy Estimation Model: A data-driven tool adopted by Google Maps to help drivers find the most energy-efficient routes.',
      '3. Electric Bus Planning Tools: A comprehensive suite of tools funded by the DOE to help transit agencies optimize electric bus deployment and operations.',
      'Each project showcases our commitment to innovation, efficiency, and sustainability in IT solutions. We continue to expand our project portfolio, focusing on initiatives that drive meaningful technological advancement and operational improvement.'
    ],
    images: [
      {
        url: '/business/projects-main.jpg',
        alt: 'TechFocus projects overview',
        position: 2
      }
    ]
  }
];

// 产品数据
const productsData = [
  {
    id: 'products',
    title: 'Products',
    content: [
      'TechFocus develops and maintains a range of innovative products designed to address specific challenges in various domains. Our product portfolio includes both software solutions and hardware components.',
      'Our flagship products include:',
      '1. TechFocus Analytics Platform: A comprehensive data analytics solution that helps organizations extract actionable insights from their data.',
      '2. Smart City Management System: An integrated platform for urban management, including traffic control, energy management, and public safety.',
      '3. Secure Communication Suite: A set of tools designed to ensure secure and private communication for government agencies and businesses.',
      'Each product is built with a focus on security, scalability, and user experience, ensuring that our clients can rely on our solutions for their critical operations.'
    ],
    images: [
      {
        url: '/business/products-main.jpg',
        alt: 'TechFocus products overview',
        position: 2
      }
    ]
  }
];

// 定义图片类型接口
interface BusinessImage {
  url: string;
  alt: string;
  position?: number;
}

export function BusinessPage() {
  const [activeSection, setActiveSection] = useState('business');
  
  // 创建各部分的引用
  const sectionRefs = {
    business: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    products: useRef<HTMLDivElement>(null),
  };
  
  // 处理导航项选择，滚动到对应部分
  const handleSelect = (id: string) => {
    setActiveSection(id);
    
    // 滚动到对应部分
    const element = sectionRefs[id as keyof typeof sectionRefs]?.current;
    if (element) {
      const headerOffset = 100; // 设置偏移量，考虑到顶部导航栏的高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // 监听滚动事件，根据滚动位置更新选中的导航项
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // 增加偏移量，使导航更自然
      
      // 检查每个部分的位置
      const sections = Object.entries(sectionRefs);
      
      // 找到当前滚动位置所在的部分
      for (let i = sections.length - 1; i >= 0; i--) {
        const [id, ref] = sections[i];
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          if (activeSection !== id) {
            setActiveSection(id);
          }
          break;
        }
      }
    };
    
    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll);
    
    // 清理函数
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);
  
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* 侧边导航栏 */}
      <div className="md:hidden">
        <SidebarNav 
          items={navItems} 
          selectedId={activeSection} 
          onSelect={handleSelect}
          title="Business"
        />
      </div>
      
      {/* 桌面端左侧导航栏 */}
      <div className="hidden md:block w-64 min-h-screen flex-shrink-0">
        <div className="fixed top-0 left-0 h-screen w-64 flex flex-col justify-center items-start">
          <div className="w-full pl-8 py-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
            <SidebarNav 
              items={navItems} 
              selectedId={activeSection} 
              onSelect={handleSelect}
              title="Business"
            />
          </div>
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="flex-1 overflow-x-hidden">
        <div className="w-full md:ml-0">
          <div className="container mx-auto py-6 md:py-12 px-4 md:px-6 overflow-x-hidden">
            {/* Business部分 */}
            <div 
              ref={sectionRefs.business}
              id="business" 
              className="bg-white"
            >
              <div className="max-w-[90rem] mx-0 pl-0 pr-4 md:pr-8 lg:pr-12 pt-4 md:pt-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-10 md:mb-16 text-gray-900">
                  {businessData[0].title}
                </h1>
                
                {/* 业务卡片网格 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 pb-20">
                  {businessData[0].sections.map((section, index) => (
                    <div key={index} className="flex flex-col">
                      {/* 图片容器 */}
                      <div className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 md:mb-10 shadow-lg">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          priority={index === 0}
                        />
                      </div>
                      
                      {/* 文字内容 */}
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Projects部分 */}
            <div 
              ref={sectionRefs.projects}
              id="projects" 
              className="min-h-screen"
            >
              <ProjectsSection />
            </div>
            
            {/* Products部分 */}
            <div 
              ref={sectionRefs.products}
              id="products" 
              className="min-h-screen"
            >
              <ProductsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 