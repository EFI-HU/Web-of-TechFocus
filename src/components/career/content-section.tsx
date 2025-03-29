'use client';

import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// 文档内容数据结构
interface Section {
  id: string;
  title: string;
  content: string[];
  subsections?: Subsection[];
}

interface Subsection {
  id: string;
  title: string;
  content: string[];
}

// 示例文档内容
const careerContent: Section[] = [
  {
    id: 'about-us',
    title: '关于我们',
    content: [
      'TechFocus是一家专注于IT驱动的集体智能解决方案的公司。我们致力于通过创新技术和前瞻性思维，为各行各业提供变革性的解决方案。',
      '我们的团队由一群充满激情的专业人士组成，他们在技术、设计和业务领域拥有丰富的经验。我们相信，只有通过协作和多元化的思维，才能创造出真正有影响力的产品和服务。'
    ]
  },
  {
    id: 'our-culture',
    title: '我们的文化',
    content: [
      '在TechFocus，我们培养一种开放、协作和创新的文化。我们鼓励团队成员勇于尝试新想法，挑战现状，并不断学习和成长。',
      '我们相信工作与生活的平衡对于保持创造力和生产力至关重要。因此，我们提供灵活的工作安排和支持性的环境，让每个人都能在个人和职业上蓬勃发展。'
    ],
    subsections: [
      {
        id: 'our-values',
        title: '我们的价值观',
        content: [
          '创新：我们不断寻求新的方法和技术来解决复杂的问题。',
          '协作：我们相信团队合作的力量，鼓励跨部门协作。',
          '诚信：我们在所有业务关系中保持透明和诚实。',
          '卓越：我们追求最高标准的质量和性能。',
          '包容：我们重视多元化的观点和背景。'
        ]
      },
      {
        id: 'work-environment',
        title: '工作环境',
        content: [
          '现代化的办公空间，设计用于促进协作和创造力。',
          '最新的技术和工具，支持高效工作。',
          '休闲区域，提供放松和社交的机会。',
          '健康计划，包括健身设施和心理健康资源。'
        ]
      }
    ]
  },
  {
    id: 'benefits',
    title: '福利待遇',
    content: [
      '在TechFocus，我们提供具有竞争力的薪酬和全面的福利待遇，以吸引和留住顶尖人才。我们的福利包括：'
    ],
    subsections: [
      {
        id: 'health-wellness',
        title: '健康与福祉',
        content: [
          '全面的医疗、牙科和视力保险',
          '健身补贴和健康计划',
          '心理健康资源和支持',
          '带薪休假和病假'
        ]
      },
      {
        id: 'financial-benefits',
        title: '财务福利',
        content: [
          '具有竞争力的薪酬',
          '年度绩效奖金',
          '401(k)匹配',
          '股票期权和股权激励计划',
          '教育补助和专业发展基金'
        ]
      },
      {
        id: 'work-life-balance',
        title: '工作生活平衡',
        content: [
          '灵活的工作时间',
          '远程工作选项',
          '带薪育儿假',
          '带薪志愿服务时间',
          '公司活动和团队建设'
        ]
      }
    ]
  },
  {
    id: 'career-growth',
    title: '职业发展',
    content: [
      '在TechFocus，我们致力于帮助员工发展他们的职业并实现他们的潜力。我们提供各种机会来学习新技能，承担新挑战，并在组织内成长。'
    ],
    subsections: [
      {
        id: 'learning-development',
        title: '学习与发展',
        content: [
          '持续学习计划和在线课程',
          '行业会议和研讨会',
          '内部培训和知识分享',
          '导师计划和职业指导'
        ]
      },
      {
        id: 'career-paths',
        title: '职业路径',
        content: [
          '明确的晋升途径',
          '跨职能项目机会',
          '领导力发展计划',
          '内部流动性和职位轮换'
        ]
      }
    ]
  },
  {
    id: 'open-positions',
    title: '职位空缺',
    content: [
      '我们始终在寻找才华横溢、充满激情的个人加入我们的团队。查看我们当前的职位空缺，找到适合您技能和兴趣的角色。'
    ],
    subsections: [
      {
        id: 'engineering',
        title: '工程',
        content: [
          '高级软件工程师',
          '前端开发人员',
          '后端开发人员',
          'DevOps工程师',
          '数据工程师'
        ]
      },
      {
        id: 'design',
        title: '设计',
        content: [
          'UX/UI设计师',
          '产品设计师',
          '视觉设计师',
          '交互设计师'
        ]
      },
      {
        id: 'product-management',
        title: '产品管理',
        content: [
          '产品经理',
          '产品所有者',
          '业务分析师',
          '项目经理'
        ]
      },
      {
        id: 'marketing-sales',
        title: '市场与销售',
        content: [
          '市场营销经理',
          '内容策略师',
          '销售代表',
          '客户成功经理'
        ]
      }
    ]
  }
];

export function ContentSection() {
  const [activeSection, setActiveSection] = useState<string>('about-us');
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // 监听滚动位置，更新活动章节和导航栏状态
  useEffect(() => {
    const handleScroll = () => {
      // 检查导航栏是否应该固定
      if (navRef.current) {
        const navTop = navRef.current.getBoundingClientRect().top;
        setIsSticky(navTop <= 30); // 增加缓冲区，避免过早触发固定定位
      }
      
      // 更新活动章节
      const sections = document.querySelectorAll('[data-section-id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          currentSection = section.getAttribute('data-section-id') || '';
        }
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);
  
  // 滚动到指定章节
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`[data-section-id="${sectionId}"]`);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
  };
  
  // 创建内容区域的入场动画
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  
  return (
    <div className="w-full">
      <div className="pt-20 md:pt-28 pb-20" ref={contentRef}>
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 左侧导航栏 */}
          <div 
            ref={navRef}
            className={`md:w-64 lg:w-72 ${
              isSticky ? 'md:fixed md:top-24 md:h-[calc(100vh-6rem)]' : ''
            } bg-gray-50 border-r border-gray-200 overflow-y-auto rounded-lg shadow-sm`}
          >
            <nav className="p-6 sticky top-0">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">目录</h3>
              <ul className="space-y-1">
                {careerContent.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeSection === section.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                    
                    {section.subsections && activeSection === section.id && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {section.subsections.map((subsection) => (
                          <li key={subsection.id}>
                            <button
                              onClick={() => scrollToSection(subsection.id)}
                              className="w-full text-left px-3 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-100"
                            >
                              {subsection.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* 右侧内容区 */}
          <div className={`flex-1 p-6 md:p-10 ${isSticky ? 'md:ml-72 lg:ml-80' : ''}`}>
            {careerContent.map((section, sectionIndex) => (
              <motion.div 
                key={section.id}
                data-section-id={section.id}
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={sectionIndex}
                variants={contentVariants}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                {section.content.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                
                {section.subsections && (
                  <div className="mt-8 space-y-8">
                    {section.subsections.map((subsection, subsectionIndex) => (
                      <motion.div 
                        key={subsection.id}
                        data-section-id={subsection.id}
                        className="ml-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        custom={sectionIndex + subsectionIndex * 0.5}
                        variants={contentVariants}
                      >
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">{subsection.title}</h3>
                        {subsection.content.map((item, index) => (
                          <div key={index} className="mb-2 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <p className="text-gray-700">{item}</p>
                          </div>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            
            {/* 申请按钮 */}
            <motion.div 
              className="mt-12 mb-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/career/apply" 
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                立即申请职位
              </Link>
              <p className="mt-4 text-gray-500">
                没有找到适合您的职位？发送您的简历至 <a href="mailto:careers@techfocus.com" className="text-blue-600 hover:underline">careers@techfocus.com</a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 