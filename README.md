# 企业官网项目

这是一个使用React和Next.js构建的现代化企业官网项目。

## 项目概述

本项目是一个企业官网，旨在展示公司信息、业务范围、联系方式和招聘信息。网站包含以下主要页面：

- **主页 (Home)**: 公司概览、核心优势、最新动态等
- **业务 (Business)**: 公司提供的产品和服务介绍
- **联系我们 (Contact)**: 联系表单和联系信息
- **招聘 (Career)**: 职位列表和申请入口
- **新闻 (News)**: 公司新闻和动态

## 技术栈

- **前端框架**: React + Next.js (App Router)
- **UI组件库**: shadcn/ui (基于Tailwind CSS)
- **样式**: Tailwind CSS
- **类型检查**: TypeScript
- **动画**: dotLottie (用于高质量矢量动画)
- **内容管理**: Ghost (用于新闻和博客内容)
- **表单处理**: Tally.so (用于联系表单和职位申请)
- **后端**: Next.js API Routes (用于集成第三方服务)

## 项目结构

```
enterprise-website/
├── public/                  # 静态资源
│   ├── logo.svg             # 公司logo
│   ├── woman.png            # IT Solutions业务图片
│   ├── hardware.png         # Hardware业务图片
│   ├── whitehouse.png       # 新闻图片
│   └── news/                # 新闻图片目录
│       ├── website-launch.jpg    # 网站发布新闻图片
│       ├── smart-freight.jpg     # 智能货运新闻图片
│       ├── electric-bus.jpg      # 电动巴士新闻图片
│       └── company-launch.jpg    # 公司成立新闻图片
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/             # API路由
│   │   │   ├── contact/     # 联系表单API (Tally.so集成)
│   │   │   ├── career/      # 招聘相关API (Tally.so集成)
│   │   │   └── news/        # 新闻相关API (WordPress/Ghost集成)
│   │   ├── business/        # 业务页面
│   │   ├── contact/         # 联系页面
│   │   ├── career/          # 招聘页面
│   │   ├── layout.tsx       # 根布局
│   │   ├── page.tsx         # 主页
│   │   └── globals.css      # 全局样式
│   ├── components/          # 组件
│   │   ├── ui/              # UI组件 (shadcn)
│   │   │   └── lottie-animation.tsx # Lottie动画组件
│   │   ├── home/            # 主页组件
│   │   │   ├── hero.tsx     # 主页Hero部分
│   │   │   ├── business-section.tsx # 主页核心业务部分
│   │   │   └── news-section.tsx # 主页新闻部分
│   │   ├── business/        # 业务页面组件
│   │   ├── contact/         # 联系页面组件
│   │   ├── career/          # 招聘页面组件
│   │   ├── news/            # 新闻页面组件
│   │   │   └── news-page.tsx # 新闻页面主组件
│   │   └── shared/          # 共享组件
│   │       └── header.tsx   # 页头组件
│   ├── lib/                 # 工具函数和库
│   │   ├── utils.ts         # 通用工具函数
│   │   ├── wordpress.ts     # WordPress/Ghost API集成
│   │   └── tally.ts         # Tally.so API集成
│   └── types/               # 类型定义
└── ...
```

## 新闻图片模型

新闻页面支持一种固定尺寸的图片模型，用于在文章内容中插入图片：

### 1. Banner图片（长方形）

- **类型**: `banner`
- **尺寸**: 宽度1200px，使用相对定位和负margin突破父容器限制，高宽比为16:9
- **用途**: 适合作为文章的主图或者展示宽屏场景、全景图像等
- **位置**: 可以放在文章开头（默认）或指定段落后面


### 图片数据结构

```typescript
interface NewsImage {
  url: string;        // 图片URL
  alt: string;        // 图片替代文本 
  position?: number;  // 可选，图片在内容中的位置（段落索引，从1开始）
}

interface NewsItem {
  // 其他新闻属性...
  images?: NewsImage[];  // 可选的图片数组
}
```

### 使用示例

```typescript
// 示例：一篇带有一张banner图和一张square图的新闻
{
  id: '1',
  title: '示例新闻标题',
  // 其他属性...
  images: [
    {
      url: '/news/example-banner.jpg',
      alt: '示例banner图片',
      // 未指定position，默认放在内容开头
    },
    {
      url: '/news/example-square.jpg',
      alt: '示例square图片',
      position: 3  // 放在第3段落后面
    }
  ]
}
```

## 开发计划

### 已完成
- 项目初始化
- 安装基础依赖
- 配置shadcn/ui
- 创建基本页面结构
- 实现页头组件
- 实现首页Hero部分
- 更新Hero部分使用动态GIF图像
- 优化页面布局和视觉效果
  - 改进响应式布局，使用12列网格系统
  - 添加渐变文本效果
  - 添加按钮悬停动画效果
  - 优化组件间距和对齐
  - 增强页头组件的视觉效果
  - 移除大脑图像的悬停放大效果
- 将静态GIF替换为Lottie动画
  - 添加Lottie动画组件
  - 集成CDN托管的dotLottie动画
  - 优化动画组件，解决服务端渲染问题
  - 从lottie-react迁移到@lottiefiles/dotlottie-react
- UI调整
  - 将"let's forge"文本颜色从渐变色改为黑色
  - 移除"Click to continue"按钮
- 实现首页核心业务部分
  - 创建BusinessSection组件
  - 实现业务卡片布局
  - 添加响应式设计
  - 集成实际业务图片(woman.png和hardware.png)
- 实现首页新闻部分
  - 创建NewsSection组件
  - 实现新闻日期列表
  - 实现新闻内容展示
  - 添加导航按钮
  - 优化响应式布局
  - 实现新闻切换交互功能
  - 集成实际新闻图片(whitehouse.png)
  - 优化导航按钮位置，放置在图片右侧
- 整体布局优化
  - 调整各组件间的垂直间距，提升视觉节奏感
  - 优化图片尺寸和位置，增强视觉平衡
  - 改进文本和图片的对比度，提高可读性
  - 添加微妙的阴影效果，增强层次感
  - 优化移动端和桌面端的响应式表现
- 用户体验优化
  - 改进图片宽高比，使用16:9的宽屏比例，提升视觉美感
  - 增强新闻部分的交互性，允许用户直接点击日期切换内容
  - 优化鼠标滚轮交互，仅在鼠标悬停在新闻列表或内容区域时通过滚轮切换内容，其他区域保持正常页面滚动
  - 添加平滑的新闻内容切换动画效果，使用framer-motion实现内容过渡动画
  - 实现新闻浏览与页面滚动的无缝衔接，当滚动到最后一篇文章后继续滚动会自然过渡到页面滚动，同样当滚动到第一篇文章时向上滚动会自然过渡到页面向上滚动
  - 增强新闻内容切换动画效果，添加交错动画序列，各元素以不同的延迟和动画参数呈现，创造层次感和精致的用户体验
  - 优化新闻内容切换过程，实现真正无缝的内容过渡，避免切换时出现白屏，新内容在旧内容消失前就开始显示
  - 实现导航栏滚动隐藏和显示功能
    - 集成react-headroom库
    - 向下滚动时导航栏自动隐藏
    - 向上滚动时导航栏自动显示
    - 优化导航栏过渡动画效果
- 导航栏和按钮交互优化
  - 重新设计导航栏，采用更现代的样式
  - 为导航栏标签添加悬停时的下划线动画效果
  - 为Federal按钮添加悬停时的颜色变化动画
  - 为"Read more"按钮添加相同的交互效果
- 更新首页新闻部分
  - 更新新闻数据，使用真实的公司新闻
  - 添加新闻图片
  - 优化新闻展示顺序，按时间倒序排列
- 重新设计新闻页面
  - 实现左侧日期导航栏
  - 实现右侧文章内容展示
  - 添加文章切换动画效果
  - 优化移动端和桌面端的响应式布局
- 新闻页面功能增强
  - 添加两种固定尺寸的图片模型（banner和square）
  - 支持在文章内容中的指定位置插入图片
  - 优化图片展示效果，添加圆角和阴影

### 进行中
- 完善首页其他部分
- 实现页脚组件
- 开发Ghost API集成，支持从CMS获取新闻内容和图片
- 实现联系页面和Tally.so表单集成

### 待完成
- 实现业务页面
- 实现招聘页面和Tally.so职位申请集成
- 实现WordPress/Ghost内容集成
- 部署上线

## 如何运行

1. 安装依赖:
```bash
npm install
```

2. 启动开发服务器:
```bash
npm run dev
```

3. 构建生产版本:
```bash
npm run build
```

4. 启动生产服务器:
```bash
npm start
```
