import { LottieAnimation } from '@/components/ui/lottie-animation';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* 左侧文本内容 - 占据7列 */}
          <div className="flex flex-col gap-8 lg:col-span-7 max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Together,<br />
              <span className="text-black">let's forge</span> the future
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Our mission is Rebooting human governance systems 
              with IT-driven collective intelligence. We want to 
              empower every client through world. We firmly 
              believe: Less is more.
            </p>
          </div>
          
          {/* 右侧网络图形 - 占据5列 */}
          <div className="relative h-[400px] md:h-[450px] w-full lg:col-span-5 flex items-center justify-center">
            <div className="absolute w-[110%] md:w-[120%] h-[120%] -right-[5%] md:-right-[10%]">
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
    </section>
  );
} 