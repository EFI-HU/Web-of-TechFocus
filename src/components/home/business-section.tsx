import Image from 'next/image';
import Link from 'next/link';

interface BusinessCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const BusinessCard = ({ title, description, imageSrc }: BusinessCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-sm">
        <Image 
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
      <Link 
        href="#" 
        className="inline-flex items-center text-black font-medium group mt-auto"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 mr-3 group-hover:bg-gray-100 transition-colors">
          <svg 
            className="w-5 h-5" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
        <span>Read more</span>
      </Link>
    </div>
  );
};

export function BusinessSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 md:mb-20">Core Business</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* IT Solutions Card */}
          <BusinessCard 
            title="IT Solutions"
            description="TechFocus covers solutions for cyber security, cloud computing and cloud-related professional services, automated contacts, and more. TechFocus also covers IT consulting, IT operation and maintenance, design and development services, etc."
            imageSrc="/woman.png"
          />
          
          {/* Hardware Card */}
          <BusinessCard 
            title="Hardware"
            description="TechFocus is a well-known reseller of office electronics including notebooks, tablets, desktops, workstations, Chromebook and calculators."
            imageSrc="/hardware.png"
          />
        </div>
      </div>
    </section>
  );
} 