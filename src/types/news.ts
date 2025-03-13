/**
 * Type definitions for news-related interfaces
 * 新闻相关接口的类型定义
 */

/**
 * News image interface
 * 新闻图片接口
 */
export interface NewsImage {
  /**
   * URL of the image
   * 图片的URL地址
   */
  url: string;
  
  /**
   * Alternative text for the image
   * 图片的替代文本
   */
  alt: string;
  
  /**
   * Type of the image (banner or square)
   * 图片类型（横幅或方形）
   */
  type: 'banner' | 'square';
  
  /**
   * Optional position of the image in the content (paragraph index, starting from 1)
   * 图片在内容中的可选位置（段落索引，从1开始）
   */
  position?: number;
}

/**
 * News item interface
 * 新闻项目接口
 */
export interface NewsItem {
  /**
   * Unique identifier for the news item
   * 新闻项目的唯一标识符
   */
  id: string;
  
  /**
   * Publication date of the news item
   * 新闻项目的发布日期
   */
  date: string;
  
  /**
   * Title of the news item
   * 新闻项目的标题
   */
  title: string;
  
  /**
   * Content paragraphs of the news item
   * 新闻项目的内容段落
   */
  content: string[];
  
  /**
   * Author of the news item
   * 新闻项目的作者
   */
  author: string;
  
  /**
   * Brief summary of the news item
   * 新闻项目的简短摘要
   */
  summary: string;
  
  /**
   * Optional array of images associated with the news item
   * 与新闻项目关联的可选图片数组
   */
  images?: NewsImage[];
} 