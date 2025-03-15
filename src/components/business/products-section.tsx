'use client';

/**
 * Products Section component
 * 
 * This component displays a section with hardware products.
 * 
 * @component
 */

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

// 产品数据
const productsData = [
  // HP Computers
  {
    id: "hp-1",
    category: "hp",
    name: "HP - 11.6\" Chromebook",
    description: "Intel Celeron - 4GB Memory - 32GB eMMC Flash Memory - Ash Gray",
    price: 198.99,
    imageSrc: "/business/products/hp-chromebook.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "hp-2",
    category: "hp",
    name: "HP Stream 14-inch Laptop",
    description: "Intel Celeron N4000, 4 GB RAM, 64 GB eMMC, Windows 10 Home in S Mode With Office 365 Personal For 1 Year",
    price: 233.99,
    imageSrc: "/business/products/hp-stream.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "hp-3",
    category: "hp",
    name: "HP 14-Inch HD Display Laptop",
    description: "Intel Celeron 4GB RAM 64GB eMMC Win 10 Laptop (Pale Gold)",
    price: 245.00,
    imageSrc: "/business/products/hp-14.jpg",
    contactInfo: "Please contact us to purchase"
  },
  
  // TI Calculators
  {
    id: "ti-1",
    category: "ti",
    name: "TI-84 Plus School Pack",
    description: "Pack of 10 calculators for classroom use",
    price: 1334.99,
    imageSrc: "/business/products/ti-84-pack.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "ti-2",
    category: "ti",
    name: "Texas Instruments Ti-84 plus",
    description: "Graphing calculator - Black",
    price: 129.99,
    imageSrc: "/business/products/ti-84.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "ti-3",
    category: "ti",
    name: "Texas Instruments TI-84 Plus CE",
    description: "Color Graphing Calculator, Black 7.5 Inch",
    price: 145.00,
    imageSrc: "/business/products/ti-84-ce.jpg",
    contactInfo: "Please contact us to purchase"
  },
  
  // Game Consoles
  {
    id: "game-1",
    category: "game",
    name: "Sony - PlayStation 5 Console",
    description: "Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio",
    price: 649.00,
    imageSrc: "/business/products/ps5.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "game-2",
    category: "game",
    name: "PlayStation 4 1TB Console - Black",
    description: "Geek Squad® Certified Refurbished products are thoroughly tested, so you can be sure that your device will work right, right away",
    price: 449.00,
    imageSrc: "/business/products/ps4.jpg",
    contactInfo: "Please contact us to purchase"
  },
  {
    id: "game-3",
    category: "game",
    name: "Microsoft - Xbox Series X 1TB Console",
    description: "Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming",
    price: 649.00,
    imageSrc: "/business/products/xbox.jpg",
    contactInfo: "Please contact us to purchase"
  }
];

// 产品类别
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'hp', name: 'Computers' },
  { id: 'ti', name: 'Calculators' },
  { id: 'game', name: 'Gaming' }
];

// 产品卡片组件
interface ProductCardProps {
  product: typeof productsData[0];
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div 
      className="bg-white border border-gray-200 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={product.imageSrc || '/business/products/placeholder.jpg'}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        {/* Category */}
        <div className="mb-2">
          <span className="text-sm uppercase tracking-wider text-gray-500">
            {product.category === 'hp' ? 'Computer' : 
             product.category === 'ti' ? 'Calculator' : 'Gaming'}
          </span>
        </div>
        
        {/* Product Name */}
        <h3 className="text-xl font-bold mb-1 line-clamp-2">{product.name}</h3>
        
        {/* Price */}
        <p className="text-xl font-medium mb-3">${product.price.toFixed(2)}</p>
        
        {/* Product Description */}
        <p className="text-gray-600 text-base mb-6 line-clamp-3">{product.description}</p>
        
        {/* Contact Button */}
        <div className="mt-auto">
          <button className="w-full py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-base font-medium">
            Buy Now
          </button>
        </div>
        
        {/* Empty space to maintain card height */}
        <div className="h-[21px] mt-3"></div>
      </div>
    </motion.div>
  );
};

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 过滤产品
  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory);

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Hardware Products</h2>
          <p className="text-gray-600 text-center text-lg">
            We offer a wide range of high-quality hardware products to meet your technology needs.
            Browse our selection of computers, calculators, and gaming devices.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-16 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-3 text-base font-medium transition-colors duration-300 ${
                activeCategory === category.id 
                  ? 'border-b-2 border-black text-black' 
                  : 'text-gray-500 hover:text-black'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
              />
            ))}
          </AnimatePresence>
          
          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
              <button 
                className="mt-4 px-5 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
                onClick={() => setActiveCategory('all')}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 