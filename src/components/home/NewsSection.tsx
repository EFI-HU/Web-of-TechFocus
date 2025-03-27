import Link from 'next/link';
import Image from 'next/image';

// 内联定义 LearnMore 组件
const LearnMore = ({ href = "#" }) => {
  return (
    <Link 
      href={href}
      className="group inline-flex items-center text-[#1C2B33]"
    >
      <div className="flex items-center justify-center w-[20px] h-[20px] mr-2 rounded-full border-2 border-[#1C2B33] group-hover:bg-[#1C2B33] group-hover:text-white transition-colors duration-300">
        <svg 
          width="10" 
          height="10" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="transition-colors duration-300 group-hover:fill-white" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
      <span className="text-[16px] font-['Roboto'] text-[#1C2B33]" 
        style={{ 
          letterSpacing: '-0.005em', 
          fontWeight: 700, 
          lineHeight: 1.4 
        }}>
        Learn more
      </span>
    </Link>
  );
};

export function NewsSection() {
  return (
    <section className="w-full pt-[62px] pb-8 md:pt-[78px] md:pb-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="max-w-[1100px] mx-auto mb-24 flex flex-col items-center pt-[15px]">
          <h2 className="text-[40px] md:text-[40px] leading-[1.05] tracking-[-0.02em] font-normal text-[#1C2B33] mb-8 text-center -mt-[30px]" style={{ fontFamily: 'Roboto', fontWeight: '500' }}>
            Capture the latest updates!
          </h2>
          
          <Link 
            href="/news" 
            className="inline-flex items-center justify-center 
            w-[200.72px] h-[46.4px] text-[16px] font-['Roboto'] 
            text-[#1C2B33] rounded-[100px] border border-[#cbd2d9] 
            px-[11px] py-[16px] mt-[11px] hover:bg-[#f5f5f5] transition-[border,opacity] 
            duration-[333ms] ease-[cubic-bezier(.53, .00, .28, 1.00)]" 
            style={{ letterSpacing: '-0.005em', fontWeight: '700', lineHeight: '1.4' }}>
            <span style={{ fontWeight: '700' }}>Learn more about us</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-16 max-w-[1100px] mx-auto" style={{ transform: 'translate(10px, 10px)' }}>
          {/* First News Item */}
          <div className="flex flex-col h-full">
            <Link 
              href="/news/new-website"
              className="group flex flex-col h-full relative w-[85%] mx-auto"
            >
              <div className="aspect-[16/11.25] relative rounded-[14px] overflow-hidden mb-6 bg-[#f5f5f5]">
                <Image
                  src="/News1.png"
                  alt="We have launched a new website to enhance customer engagement"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-[18px] leading-[1.5] font-normal text-[#1C2B33] group-hover:opacity-60 transition-opacity mb-8" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>
                  We have launched a new website to enhance customer engagement
                </h3>
              </div>
            </Link>
            <div className="mt-[-15px] ml-[30px] w-[75%]">
              <LearnMore href="/news/new-website" />
            </div>
          </div>

          {/* Second News Item */}
          <div className="flex flex-col h-full">
            <Link 
              href="/news/smart-cities"
              className="group flex flex-col h-full relative w-[85%] mx-auto"
            >
              <div className="aspect-[16/11.25] relative rounded-[14px] overflow-hidden mb-6 bg-[#f5f5f5]">
                <Image
                  src="/News3.png"
                  alt="We Improves Freight Transportation Efficiency in Smart Cities"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-[18px] leading-[1.5] font-normal text-[#1C2B33] group-hover:opacity-60 transition-opacity mb-8" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>
                  We're Revolutionizing Urban Freight Transport
                </h3>
              </div>
            </Link>
            <div className="mt-[-15px] ml-[30px] w-[85%]">
              <LearnMore href="/news/smart-cities" />
            </div>
          </div>

          {/* Third News Item */}
          <div className="flex flex-col h-full">
            <Link 
              href="/news/routing"
              className="group flex flex-col h-full relative w-[85%] mx-auto"
            >
              <div className="aspect-[16/11.25] relative rounded-[14px] overflow-hidden mb-6 bg-[#f5f5f5]">
                <Image
                  src="/news/routing.gif"
                  alt="Our Model Integrated into Google Maps for Energy-Efficient Routing"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-[18px] leading-[1.5] font-normal text-[#1C2B33] group-hover:opacity-60 transition-opacity mb-8" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>
                  Our Model Integrated into Google Maps for Energy-Efficient Routing
                </h3>
              </div>
            </Link>
            <div className="mt-[-15px] ml-[30px] w-[85%]">
              <LearnMore href="/news/routing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}