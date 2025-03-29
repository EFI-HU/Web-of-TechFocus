import { HeroSection } from '@/components/career';

export default function CareerPage() {
  return (
    <main className="w-full h-screen overflow-hidden">
      {/* 只保留第一屏 */}
      <div className="w-full h-screen bg-black">
        <HeroSection />
      </div>
    </main>
  );
} 