/**
 * News section layout component
 * 新闻部分布局组件
 * 
 * This component provides the layout wrapper for the news section, including:
 * 该组件为新闻部分提供布局包装器，包括：
 * - Metadata configuration (title and description)
 * - 元数据配置（标题和描述）
 * - Layout structure for news content
 * - 新闻内容的布局结构
 * 
 * @component
 */

import type { Metadata } from 'next';

// Define metadata for the news section
// 定义新闻部分的元数据
export const metadata: Metadata = {
  title: 'News - TechFocus',
  description: 'Stay updated with TechFocus latest news, product releases, and industry insights',
};

/**
 * News layout wrapper component
 * 新闻布局包装器组件
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to be rendered
 * @returns {React.ReactElement} News layout element
 */
export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 