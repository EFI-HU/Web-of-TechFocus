import { LottieAnimation } from '@/components/ui/lottie-animation';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-16 xl:gap-24">
          {/* 左侧文本内容 - 向右移动一点 */}
          <div className="lg:w-5/12 flex flex-col gap-8 pl-0 md:pl-6 lg:pl-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Together,<br />
              <span className="text-black whitespace-nowrap">let's forge the future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Our mission is Rebooting human governance systems 
              with IT-driven collective intelligence. We want to 
              empower every client through world. We firmly 
              believe: Less is more.
            </p>
          </div>
          
          {/* 右侧网络图形 - 放大一些并向右移动 */}
          <div className="lg:w-6/12 relative h-[400px] md:h-[450px] w-full flex items-center justify-center mt-12 lg:mt-0 pl-0 md:pl-6 lg:pl-12">
            <div className="absolute w-full h-full lg:w-[110%] lg:h-[110%]">
              <div className="relative w-full h-full">
                <LottieAnimation 
                  src="https://lottie.host/a9a735de-cc7f-48c1-8970-848f14ed9db1/Z3AwwYLbUo.lottie"
                  className="w-full h-full"
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 