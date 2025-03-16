import Image from 'next/image';
import Link from 'next/link';

interface BusinessCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const BusinessCard = ({ title, description, imageSrc }: BusinessCardProps) => {
  return (
    <div className="flex flex-col max-w-[90%] mx-auto">
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-sm">
        <Image 
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-3">
        {title}
      </h3>
      <p className="detail-text-lg mb-6 leading-relaxed text-sm md:text-base">
        {description}
      </p>
      <div className="mt-auto">
        <Link 
          href="#" 
          className="inline-flex items-center text-gray-700 font-medium group w-auto"
        >
          <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-400 mr-3 text-gray-700 transition-colors duration-300 group-hover:bg-black group-hover:text-white">
            <svg 
              className="w-4 h-4 md:w-5 md:h-5" 
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
          <span className="relative font-medium">
            Read more
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 group-hover:w-full group-hover:bg-black"></span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export function BusinessSection() {
  return (
    <section className="w-full py-20 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 md:mb-16">Core Business</h2>
        
        <div className="flex flex-col md:flex-row md:justify-between md:gap-16 xl:gap-24">
          {/* IT Solutions Card */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <BusinessCard 
              title="IT Solutions"
              description="TechFocus covers solutions for cyber security, cloud computing and cloud-related professional services, automated contacts, and more. TechFocus also covers IT consulting, IT operation and maintenance, design and development services, etc."
              imageSrc="/woman.png"
            />
          </div>
          
          {/* Hardware Card */}
          <div className="md:w-1/2">
            <BusinessCard 
              title="Hardware"
              description="TechFocus is a well-known reseller of office electronics including notebooks, tablets, desktops, workstations, Chromebook and calculators."
              imageSrc="/hardware.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 