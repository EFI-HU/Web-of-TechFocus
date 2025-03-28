import { NewsItem } from '@/types/news';

/**
 * 新闻数据
 * 包含所有新闻文章的数据
 */
export const newsData: NewsItem[] = [
  {
    id: '1',
    date: '2025-03-21',
    title: 'New Website',
    summary: 'New corporate website offers modern interface, detailed service insights, and interactive features for clients and partners.',
    content: [
      'TechFocus has officially launched its new and improved website, designed to provide clients, partners, and industry professionals with a streamlined and interactive user experience.',
      'The updated website (www.techfocususa.com) offers: 1. A modern, easy-to-navigate interface 2.Detailed insights into TechFocus\'s IT solutions and services 3.Case studies showcasing successful projects 4.A dedicated resource hub for industry news and research.',
      '"As a technology-driven company, it was essential for us to have a digital presence that reflects our expertise and values.Our new website is designed to provide a seamless experience, enabling visitors to explore our services, learn about our projects, and connect with our experts."',
      'In addition to the revamped design, the website includes an interactive contact section where businesses and agencies can easily inquire about TechFocus\'s services and potential collaborations.',
      'The launch of the new website marks another step in TechFocus\'s journey to expand its digital footprint and enhance customer engagement. The company invites visitors to explore the site and discover the innovative solutions it offers.'
    ],
    author: 'Dr. Wang,CEO of TechFocus LLC,AI & Federal IT Solutions Leader',
    images: [
      {
        url: '/news/new_website.jpg',
        alt: 'TechFocus new website launch',
        type: 'banner'
      }
    ],
    // 新增字段，用于特殊布局
    specialLayout: {
      location: 'Boulder, CO',
      date: 'March 21, 2025',
      fullTitle: 'We Launches New Website to Enhance Customer Engagement',
      highlights: [
        'A modern, easy-to-navigate interface.',
        'Case studies showcasing successful projects.',
        'A dedicated resource hub for industry news and research.',
        'Detailed insights into TechFocus\'s IT solutions and services.'
      ]
    }
  },
  {
    id: '2',
    date: '2023-05-03',
    title: 'Smart Cities',
    summary: 'New AI-driven platform optimizes urban freight movement, reducing energy consumption and operational costs.',
    content: [
      'In its latest innovation, TechFocus has successfully enhanced the energy efficiency of freight movement in smart cities by developing an intelligent transportation platform. The platform provides real-time decision-making capabilities for transportation system operators, optimizing freight movement while reducing energy consumption.',
      'The newly developed system leverages AI-driven analytics and multi-modal logistics integration to enhance transportation efficiency across various freight networks. The platform is designed to streamline routes, predict demand patterns, and minimize fuel consumption, ensuring a greener and more cost-effective urban freight ecosystem.',
      '"As cities grow and logistics demands increase, there is a pressing need for smarter, more efficient freight movement strategies," said Dr. Wang. "Our platform not only reduces operational costs but also plays a crucial role in lowering environmental impact."',
      'This milestone reflects TechFocus\'s commitment to sustainability and innovation in urban transportation, reinforcing its position as a leader in intelligent transportation solutions.'
    ],
    videos: [
      {
        url: '/news/smart_citys.mp4',
        alt: 'Smart freight transportation system video',
        posterUrl: '/news/smart-freight.jpg'
      }
    ],
    // 视频布局配置，更新为与原型图一致
    videoLayout: {
      location: 'Boulder, CO',
      date: 'May 3, 2023',
      fullTitle: 'We Improves Freight Transportation Efficiency in Smart Cities'
    }
  },
  {
    id: '3',
    date: '2021-12-04',
    title: 'Routing',
    summary: 'Google Maps adopts TechFocus\'s fuel economy model to help drivers find the most energy-efficient routes.',
    content: [
      'In a significant achievement, TechFocus has received DOE authorization in 2019 for a closed-source copyright on an advanced fuel economy estimation model. The model, developed exclusively by Dr. Wang, has since been adopted by Google Maps to introduce its "most energy-efficient route" feature in 2021.',
      'This data-driven tool, titled "A Tool to Estimate Fuel Economy/Consumption-Based on Real-World Driving Profile," is designed to analyze and predict fuel consumption patterns based on diverse driving behaviors and environmental conditions. The DOE\'s authorization allows TechFocus to maintain exclusive rights to the model, ensuring continued innovation and refinement.',
      'With Google Maps now offering users the ability to select routes that minimize fuel consumption, TechFocus has made a significant contribution to reducing global carbon emissions and promoting energy-efficient mobility.'
    ],
    author: 'TechFocus Media Team',
    images: [
      {
        url: '/news/routing.gif',
        alt: 'Google Maps energy-efficient routing feature',
        type: 'banner'
      }
    ],
    // 添加图片布局配置，与原型图一致
    imageLayout: {
      location: 'Boulder, CO',
      date: 'December 4, 2021',
      fullTitle: 'Our Model Integrated into Google Maps for Energy-Efficient Routing'
    },
    // 添加地图比较布局配置，用于第二屏
    mapComparisonLayout: {
      firstImageTitle: 'Aug. 13. 11am',
      secondImageTitle: 'Aug. 13. 4pm',
      imageUrl: '/news/GoogleMaps.png',
      imageAlt: 'Google Maps fuel consumption comparison at different times'
    }
  },
  {
    id: '4',
    date: '2020-01-04',
    title: 'Electric Bus',
    summary: 'DOE grant funds development of tools to help transit agencies optimize electric bus deployment and operations.',
    content: [
      'In its latest innovation, TechFocus has successfully enhanced the energy efficiency of freight movement in smart cities by developing an intelligent transportation platform. The platform provides real-time decision-making capabilities for transportation system operators, optimizing freight movement while reducing energy consumption.',
      'The newly developed system leverages AI-driven analytics and multi-modal logistics integration to enhance transportation efficiency across various freight networks. The platform is designed to streamline routes, predict demand patterns, and minimize fuel consumption, ensuring a greener and more cost-effective urban freight ecosystem.',
      '"As cities grow and logistics demands increase, there is a pressing need for smarter, more efficient freight movement strategies," said Dr. Wang. "Our platform not only reduces operational costs but also plays a crucial role in lowering environmental impact."',
      'This milestone reflects TechFocus\'s commitment to sustainability and innovation in urban transportation, reinforcing its position as a leader in intelligent transportation solutions.'
    ],
    author: 'TechFocus Media Team',
    videos: [
      {
        url: '/news/electric_bus.mp4',
        alt: 'Electric bus deployment and operations video',
        posterUrl: '/news/electric_bus_poster.jpg'
      }
    ],
    // 视频布局配置，根据原型图设置
    videoLayout: {
      location: 'Boulder, CO',
      date: 'January 4, 2020',
      fullTitle: 'We Receives $1.75M DOE Grant for Electric Bus Planning Tools'
    },
    // 添加视频+特殊布局配置，结合视频和第一篇文章的特殊布局
    videoWithSpecialLayout: {
      location: 'Boulder, CO',
      date: 'January 4, 2020',
      fullTitle: 'We Receives $1.75M DOE Grant for Electric Bus Planning Tools',
      highlights: [
        'Development of innovative planning tools for electric bus deployment.',
        'Real-world implementation and validation strategies for transit agencies.',
        'Optimization of deployment strategies and energy efficiency.',
        'Enhancement of overall operation of electric transit fleets.'
      ]
    }
  },
  {
    id: '5',
    date: '2017-03-01',
    title: 'Established',
    summary: 'New company launches to deliver cutting-edge technology solutions for federal agencies and commercial clients.',
    content: [
      'A new era of IT solutions has begun with the launch of TechFocus, a company committed to delivering cutting-edge technology solutions to federal agencies and commercial clients. Established on [exact founding date in 2017], TechFocus has rapidly emerged as a leader in IT modernization, artificial intelligence, machine learning, cloud computing, and data science.',
      'Founded by a team of highly skilled professionals, 75% of whom hold advanced degrees, TechFocus was created to bridge the gap between emerging technologies and mission-critical applications. With a strong emphasis on cybersecurity, cloud computing, and AI-driven solutions, the company is uniquely positioned to help organizations navigate the complexities of digital transformation.',
      '"We recognized a growing need for highly specialized technology solutions that could seamlessly integrate into existing infrastructures while improving operational efficiency," said Dr. Lijuan Wang, a key figure behind the company\'s inception. "TechFocus is built on a foundation of expertise, research, and real-world implementation, making us a reliable partner for businesses and government agencies alike."',
      'Since its launch, TechFocus has worked extensively with federal institutions, contributing to AI-driven projects, cloud migration initiatives, and cutting-edge machine learning applications. As the company moves forward, it remains dedicated to innovation, efficiency, and sustainability in IT solutions.'
    ],
    author: 'TechFocus Media Team',
    // 添加特殊布局配置，与原型图一致
    specialLayout: {
      location: 'Boulder, CO',
      date: 'March 1, 2017',
      fullTitle: 'TechFocus Established to Drive Innovation in IT Solutions',
      highlights: []
    },
    // 添加核心业务布局配置，用于底部的Core Business部分
    coreBusinessLayout: {
      title: 'Core',
      subtitle: 'Business',
      cardImageUrl: '/news/core_business.jpg',
      cardImageAlt: 'IT Solutions business card',
      cardTitle: 'IT Solutions',
      overviewTitle: 'Overview',
      overviewContent: 'IT modernization, AI, machine learning, cloud computing, data science.',
      expertiseTitle: 'Core Expertise',
      expertiseContent: 'Integrating emerging technologies with mission-critical applications, operational efficiency, cybersecurity.'
    }
  }
]; 