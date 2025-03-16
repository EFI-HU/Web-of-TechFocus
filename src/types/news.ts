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
 * News video interface
 * 新闻视频接口
 */
export interface NewsVideo {
  /**
   * URL of the video
   * 视频的URL地址
   */
  url: string;
  
  /**
   * Alternative text for the video
   * 视频的替代文本
   */
  alt: string;
  
  /**
   * Poster image URL for the video
   * 视频的海报图片URL
   */
  posterUrl?: string;
  
  /**
   * Optional position of the video in the content (paragraph index, starting from 1)
   * 视频在内容中的可选位置（段落索引，从1开始）
   */
  position?: number;
}

/**
 * Special layout configuration for featured news items
 * 特殊布局配置，用于特色新闻项目
 */
export interface SpecialLayout {
  /**
   * Location where the news was published
   * 新闻发布的地点
   */
  location: string;
  
  /**
   * Formatted date for display
   * 用于显示的格式化日期
   */
  date: string;
  
  /**
   * Full title for the news item (used in special layouts)
   * 新闻项目的完整标题（用于特殊布局）
   */
  fullTitle: string;
  
  /**
   * Highlight points to display
   * 要显示的重点内容
   */
  highlights: string[];
}

/**
 * Video layout configuration for news items with video
 * 视频布局配置，用于带视频的新闻项目
 */
export interface VideoLayout {
  /**
   * Location where the news was published
   * 新闻发布的地点
   */
  location: string;
  
  /**
   * Formatted date for display
   * 用于显示的格式化日期
   */
  date: string;
  
  /**
   * Full title for the news item (used in video layouts)
   * 新闻项目的完整标题（用于视频布局）
   */
  fullTitle: string;
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
  author?: string;
  
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
  
  /**
   * Optional array of videos associated with the news item
   * 与新闻项目关联的可选视频数组
   */
  videos?: NewsVideo[];
  
  /**
   * Optional special layout configuration
   * 可选的特殊布局配置
   */
  specialLayout?: SpecialLayout;
  
  /**
   * Optional video layout configuration
   * 可选的视频布局配置
   */
  videoLayout?: VideoLayout;
} 