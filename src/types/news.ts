/**
 * 新闻相关类型定义
 */

/**
 * 新闻图片类型
 */
export interface NewsImage {
  /**
   * 图片URL
   */
  url: string;
  
  /**
   * 图片替代文本
   */
  alt: string;
  
  /**
   * 图片类型
   * - banner: 长方形图片，宽度1200px，使用相对定位和负margin突破父容器限制，高宽比为16:9
   * - square: 正方形图片，适中的宽度（max-w-xl，576px），高宽比为1:1
   */
  type: 'banner' | 'square';
  
  /**
   * 图片在内容中的位置
   * - 如果不提供，则默认放在内容开头
   * - 如果提供，则表示放在指定段落后面（段落索引从1开始）
   */
  position?: number;
}

/**
 * 新闻项类型
 */
export interface NewsItem {
  /**
   * 新闻ID
   */
  id: string;
  
  /**
   * 发布日期
   */
  date: string;
  
  /**
   * 新闻标题
   */
  title: string;
  
  /**
   * 新闻内容（段落数组）
   */
  content: string[];
  
  /**
   * 作者
   */
  author: string;
  
  /**
   * 新闻摘要
   */
  summary: string;
  
  /**
   * 新闻图片
   */
  images?: NewsImage[];
} 