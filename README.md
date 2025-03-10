# 企业官网项目

这是一个使用React和Next.js构建的现代化企业官网项目。

## 项目概述

本项目是一个企业官网，旨在展示公司信息、业务范围、联系方式和招聘信息。网站包含以下主要页面：

- **主页 (Home)**: 公司概览、核心优势、最新动态等
- **业务 (Business)**: 公司提供的产品和服务介绍
- **联系我们 (Contact)**: 联系表单和联系信息
- **招聘 (Career)**: 职位列表和申请入口

## 技术栈

- **前端框架**: React + Next.js (App Router)
- **UI组件库**: shadcn/ui (基于Tailwind CSS)
- **样式**: Tailwind CSS
- **类型检查**: TypeScript
- **内容管理**: WordPress/Ghost (用于新闻和博客内容)
- **表单处理**: Tally.so (用于联系表单和职位申请)
- **后端**: Next.js API Routes (用于集成第三方服务)

## 项目结构

```
enterprise-website/
├── public/                  # 静态资源
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
│   │   ├── layout/          # 布局组件
│   │   │   ├── header.tsx   # 页头
│   │   │   ├── footer.tsx   # 页脚
│   │   │   └── ...
│   │   ├── home/            # 主页组件
│   │   ├── business/        # 业务页面组件
│   │   ├── contact/         # 联系页面组件
│   │   ├── career/          # 招聘页面组件
│   │   └── shared/          # 共享组件
│   ├── lib/                 # 工具函数和库
│   │   ├── utils.ts         # 通用工具函数
│   │   ├── wordpress.ts     # WordPress/Ghost API集成
│   │   └── tally.ts         # Tally.so API集成
│   └── types/               # 类型定义
└── ...
```

## 开发计划

### 已完成
- 项目初始化
- 安装基础依赖
- 配置shadcn/ui

### 进行中
- 创建基本页面结构
- 实现页头和页脚组件

### 待完成
- 实现主页
- 实现业务页面
- 实现联系页面和Tally.so表单集成
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

## 贡献指南

请遵循项目的编码规范和Git提交规范.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
