import { BusinessSection } from '@/components/home/business-section';
import { Hero } from '@/components/home/hero';
import { NewsSection } from '@/components/home/news-section';
import { Header } from '@/components/shared/header';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <BusinessSection />
        <NewsSection />
      </main>
    </div>
  );
}

