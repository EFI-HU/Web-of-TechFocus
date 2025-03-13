/**
 * News page component of the enterprise website
 * 企业官网的新闻页面组件
 * 
 * This component serves as the entry point for the news section, rendering:
 * 该组件作为新闻部分的入口点，渲染：
 * - News article list
 * - 新闻文章列表
 * - Article content
 * - 文章内容
 * - Navigation elements
 * - 导航元素
 * 
 * The component uses the NewsPage component from components/news
 * 该组件使用来自 components/news 的 NewsPage 组件
 * 
 * @component
 */

import { NewsPage } from '@/components/news';

export default function Page() {
  return <NewsPage />;
} 