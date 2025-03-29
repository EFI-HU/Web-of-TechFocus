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
 * Image layout configuration for news items with featured image
 * 图片布局配置，用于带特色图片的新闻项目
 */
export interface ImageLayout {
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
   * Full title for the news item (used in image layouts)
   * 新闻项目的完整标题（用于图片布局）
   */
  fullTitle: string;
}

/**
 * Map comparison layout configuration for news items with map comparison images
 * 地图比较布局配置，用于带地图比较图片的新闻项目
 */
export interface MapComparisonLayout {
  /**
   * First comparison image title (usually time)
   * 第一张比较图片的标题（通常是时间）
   */
  firstImageTitle: string;
  
  /**
   * Second comparison image title (usually time)
   * 第二张比较图片的标题（通常是时间）
   */
  secondImageTitle: string;
  
  /**
   * Map comparison image URL
   * 地图比较图片的URL
   */
  imageUrl: string;
  
  /**
   * Alternative text for comparison image
   * 比较图片的替代文本
   */
  imageAlt: string;
}

/**
 * Video with special layout configuration for news items with video and special content layout
 * 视频+特殊布局配置，用于带视频和特殊内容布局的新闻项目
 */
export interface VideoWithSpecialLayout {
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
   * Full title for the news item
   * 新闻项目的完整标题
   */
  fullTitle: string;
  
  /**
   * Highlight points to display
   * 要显示的重点内容
   */
  highlights: string[];
}

/**
 * Two column layout configuration for news items with two column content
 * 两列布局配置，用于带两列内容的新闻项目
 */
export interface TwoColumnLayout {
  /**
   * Main content paragraphs for the left column
   * 左侧列的主要内容段落
   */
  leftColumnContent: string[];
  
  /**
   * Quote content for the right column
   * 右侧列的引用内容
   */
  quoteContent: string;
  
  /**
   * Quote author for the right column
   * 右侧列引用的作者
   */
  quoteAuthor?: string;
  
  /**
   * Bottom content paragraph after the two columns
   * 两列布局下方的内容段落
   */
  bottomContent?: string;
}

/**
 * Core Business layout configuration for news items with business card section
 * 核心业务布局配置，用于带业务卡片部分的新闻项目
 */
export interface CoreBusinessLayout {
  /**
   * Title of the core business section
   * 核心业务部分的标题
   */
  title: string;
  
  /**
   * Subtitle of the core business section
   * 核心业务部分的副标题
   */
  subtitle: string;
  
  /**
   * Image URL for the business card
   * 业务卡片的图片URL
   */
  cardImageUrl: string;
  
  /**
   * Alternative text for the business card image
   * 业务卡片图片的替代文本
   */
  cardImageAlt: string;
  
  /**
   * Card title (IT Solutions)
   * 卡片标题（IT解决方案）
   */
  cardTitle: string;
  
  /**
   * Overview section title
   * 概览部分标题
   */
  overviewTitle: string;
  
  /**
   * Overview section content
   * 概览部分内容
   */
  overviewContent: string;
  
  /**
   * Expertise section title
   * 专业知识部分标题
   */
  expertiseTitle: string;
  
  /**
   * Expertise section content
   * 专业知识部分内容
   */
  expertiseContent: string;
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
   * Summary of the news item
   * 新闻项目的摘要
   */
  summary: string;
  
  /**
   * Content paragraphs of the news item
   * 新闻项目的内容段落
   */
  content: string[];
  
  /**
   * Optional author of the news item
   * 新闻项目的可选作者
   */
  author?: string;
  
  /**
   * Optional images for the news item
   * 新闻项目的可选图片
   */
  images?: NewsImage[];
  
  /**
   * Optional videos for the news item
   * 新闻项目的可选视频
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
  
  /**
   * Optional image layout configuration
   * 可选的图片布局配置
   */
  imageLayout?: ImageLayout;
  
  /**
   * Optional map comparison layout configuration
   * 可选的地图比较布局配置
   */
  mapComparisonLayout?: MapComparisonLayout;
  
  /**
   * Optional video with special layout configuration
   * 可选的视频+特殊布局配置
   */
  videoWithSpecialLayout?: VideoWithSpecialLayout;
  
  /**
   * Optional two column layout configuration
   * 可选的两列布局配置
   */
  twoColumnLayout?: TwoColumnLayout;
  
  /**
   * Optional core business layout configuration
   * 可选的核心业务布局配置
   */
  coreBusinessLayout?: CoreBusinessLayout;
} 