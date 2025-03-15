/**
 * Business related type definitions
 */

// Project type definition
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl?: string;
  tags?: string[];
}

// Product type definition
export interface Product {
  id: string;
  category: 'hp' | 'ti' | 'game';
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  contactInfo?: string;
} 