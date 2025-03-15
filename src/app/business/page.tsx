/**
 * Business page component
 * 
 * This component displays the business offerings of the company, including:
 * - Core business areas
 * - Software projects
 * - Hardware products
 * 
 * @component
 */

import { CoreBusinessSection } from '@/components/business/core-business-section';
import { ProductsSection } from '@/components/business/products-section';
import { ProjectsSection } from '@/components/business/projects-section';

export default function BusinessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col">
        {/* Core Business Section */}
        <CoreBusinessSection />
        
        {/* Software Projects Section */}
        <ProjectsSection />
        
        {/* Hardware Products Section */}
        <ProductsSection />
      </main>
    </div>
  );
} 