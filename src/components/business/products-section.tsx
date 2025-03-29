'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// 商品数据
const products = [
  {
    id: 1,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 2,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 3,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 4,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 5,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 6,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 7,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 8,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 9,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 10,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 11,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  },
  {
    id: 12,
    price: '$198.99',
    name: 'HP 11.6" Chromebook Intel',
    description: '4GB/32GB eMMC storage',
    color: 'Ash Gray',
    image: '/business/products/product1.webp'
  }
];

export function ProductsSection() {
  const router = useRouter();
  
  // 处理商品点击事件
  const handleProductClick = (productId: number) => {
    // 暂时只是打印信息，后续可以跳转到详情页
    console.log(`商品 ${productId} 被点击了`);
    
    // 跳转到一个临时的产品详情页面
    // 实际开发中可以替换为真实的产品详情页路由
    router.push(`/business/products/${productId}`);
  };
  
  return (
    <div className="flex flex-col bg-white">
      {/* 主内容区域 */}
      <div className="w-full">
        {/* 标题部分 */}
        <div className="flex justify-center py-10">
          <div className="flex items-center">
            <h2 className="text-6xl font-bold">Products</h2>
            <span className="text-6xl font-normal mx-4">X</span>
            <h2 className="text-6xl font-bold">Shop</h2>
          </div>
        </div>
        
        {/* 商品网格 */}
        <div className="px-4 md:px-8 lg:px-12 max-w-[1400px] mx-auto pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex flex-col cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                {/* 商品图片容器 - 使用浅灰色背景和轻微阴影 */}
                <div className="bg-gray-50 p-6 shadow-sm mb-4 flex items-center justify-center">
                  <div className="relative w-full h-[240px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                
                {/* 商品信息 */}
                <div className="flex flex-col items-center text-center">
                  <span className="text-2xl font-bold mb-1">{product.price}</span>
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-sm">{product.description}</p>
                  <span className="text-sm text-gray-600">{product.color}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 