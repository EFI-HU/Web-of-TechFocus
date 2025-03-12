import { BusinessSection } from '@/components/home/business-section';
import { Hero } from '@/components/home/hero';
import { LandmarkProjectSection } from '@/components/home/landmark-project-section';
import { NewsSection } from '@/components/home/news-section';
import { PartnersSection } from '@/components/home/partners-section';
import { WhyUsSection } from '@/components/home/why-us-section';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex flex-col">
        <Hero />
        <BusinessSection />
        <NewsSection />
        <WhyUsSection />
        <LandmarkProjectSection />
        <PartnersSection />
      </main>
    </div>
  );
}

