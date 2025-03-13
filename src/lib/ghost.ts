/**
 * Ghost CMS API集成
 * 用于获取新闻文章和图片
 */

import { NewsImage } from '@/types/news';

// Ghost API配置
const GHOST_URL = process.env.GHOST_URL || 'https://your-ghost-cms.com';
const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY || 'your-content-api-key';
const GHOST_API_VERSION = 'v5.0';

// 定义Ghost API返回的文章类型
interface GhostPost {
  id: string;
  slug: string;
  title: string;
  html: string; // HTML格式的内容
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  updated_at: string;
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  primary_author: {
    id: string;
    name: string;
    slug: string;
    profile_image: string | null;
    bio: string | null;
  };
  // Ghost自定义字段，用于存储额外的图片
  custom_excerpt?: string; // 用作summary
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
  og_title?: string;
  og_description?: string;
  twitter_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  // 自定义字段
  additional_images?: string; // JSON字符串，包含额外的图片信息
}

// 定义我们应用中使用的新闻文章类型
export interface NewsArticle {
  id: string;
  slug: string;
  date: string;
  title: string;
  content: string[];
  summary: string;
  author: string;
  images?: NewsImage[];
}

/**
 * 从Ghost CMS获取所有新闻文章
 * @returns 新闻文章数组
 */
export async function getNewsArticles(): Promise<NewsArticle[]> {
  try {
    const url = `${GHOST_URL}/ghost/api/${GHOST_API_VERSION}/content/posts/?key=${GHOST_CONTENT_API_KEY}&include=tags,authors&limit=all`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    
    const data = await response.json();
    const posts: GhostPost[] = data.posts || [];
    
    // 将Ghost文章转换为我们的NewsArticle格式
    return posts.map(post => transformGhostPost(post));
  } catch (error) {
    console.error('Error fetching news articles:', error);
    return [];
  }
}

/**
 * 根据ID或slug获取单个新闻文章
 * @param idOrSlug 文章ID或slug
 * @returns 新闻文章或null
 */
export async function getNewsArticle(idOrSlug: string): Promise<NewsArticle | null> {
  try {
    const url = `${GHOST_URL}/ghost/api/${GHOST_API_VERSION}/content/posts/slug/${idOrSlug}/?key=${GHOST_CONTENT_API_KEY}&include=tags,authors`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }
    
    const data = await response.json();
    const post: GhostPost = data.posts[0];
    
    if (!post) {
      return null;
    }
    
    // 将Ghost文章转换为我们的NewsArticle格式
    return transformGhostPost(post);
  } catch (error) {
    console.error(`Error fetching news article ${idOrSlug}:`, error);
    return null;
  }
}

/**
 * 将Ghost文章转换为我们的NewsArticle格式
 * @param post Ghost文章
 * @returns 转换后的NewsArticle
 */
function transformGhostPost(post: GhostPost): NewsArticle {
  // 将HTML内容转换为段落数组
  const content = extractParagraphs(post.html);
  
  // 提取图片
  const images = extractImages(post);
  
  return {
    id: post.id,
    slug: post.slug,
    date: post.published_at,
    title: post.title,
    content,
    summary: post.custom_excerpt || post.excerpt,
    author: post.primary_author.name,
    images
  };
}

/**
 * 从HTML内容中提取段落文本
 * @param html HTML内容
 * @returns 段落文本数组
 */
function extractParagraphs(html: string): string[] {
  // 创建一个临时的DOM元素来解析HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  // 获取所有段落元素
  const paragraphs = tempDiv.querySelectorAll('p');
  
  // 提取段落文本
  return Array.from(paragraphs).map(p => p.textContent || '').filter(text => text.trim() !== '');
}

/**
 * 从Ghost文章中提取图片信息
 * @param post Ghost文章
 * @returns 图片信息数组
 */
function extractImages(post: GhostPost): NewsImage[] {
  const images: NewsImage[] = [];
  
  // 添加特色图片作为banner
  if (post.feature_image) {
    images.push({
      url: post.feature_image,
      alt: post.title,
      type: 'banner'
    });
  }
  
  // 解析additional_images字段中的额外图片
  if (post.additional_images) {
    try {
      const additionalImages = JSON.parse(post.additional_images) as NewsImage[];
      images.push(...additionalImages);
    } catch (error) {
      console.error('Error parsing additional images:', error);
    }
  }
  
  return images;
}

/**
 * Ghost CMS中的自定义字段格式示例
 * 
 * additional_images字段的JSON格式示例:
 * [
 *   {
 *     "url": "/news/example1.jpg",
 *     "alt": "Example image 1",
 *     "type": "square",
 *     "position": 2
 *   },
 *   {
 *     "url": "/news/example2.jpg",
 *     "alt": "Example image 2",
 *     "type": "banner",
 *     "position": 5
 *   }
 * ]
 */ 