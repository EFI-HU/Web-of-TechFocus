/**
 * Product Card component
 * 
 * This component displays a product card with image, name, description,
 * price, and contact information.
 * 
 * @component
 */

import { Product } from '@/types/business';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
        <div 
          className={`absolute inset-0 transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        >
          <Image 
            src={product.imageUrl || '/business/products/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black bg-opacity-70 text-white text-sm font-medium rounded-full">
          {product.category === 'hp' ? 'Computer' : 
           product.category === 'ti' ? 'Calculator' : 'Gaming'}
        </div>
      </div>
      
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{product.name}</h3>
        
        {/* Product Description */}
        <p className="text-gray-600 text-base mb-4 line-clamp-3">{product.description}</p>
        
        <div className="flex justify-between items-center">
          {/* Product Price */}
          <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
          
          {/* Buy Button */}
          <button className="px-4 py-2 bg-black text-white text-base rounded-full hover:bg-purple-600 transition-colors duration-300">
            Buy Now
          </button>
        </div>
        
        {/* Empty space to maintain card height */}
        <div className="h-[21px] mt-3"></div>
      </div>
    </div>
  );
} 