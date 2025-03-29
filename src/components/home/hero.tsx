import { LottieAnimation } from '@/components/ui/lottie-animation';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-16 xl:gap-24">
          {/* 左侧文本内容 - 向右移动一点 */}
          <div className="lg:w-5/12 flex flex-col gap-8 pl-0 md:pl-6 lg:pl-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Together, <span className="text-black" style={{ whiteSpace: 'nowrap' }}>We Shape the Future</span>
            </h1>
            <span style={{ 
              fontSize: '18px', 
              lineHeight: 1.5, 
              color: '#1C2B33', 
              fontFamily: 'Roboto', 
              fontWeight: 500,
              textAlign: 'justify',
              display: 'inline-block',
              width: '100%'
            }}>
              We empower government agencies with IT-driven intelligence, delivering secure, efficient, and scalable solutions that enhance public sector operations and digital transformation. We believe: Innovation thrives in simplicity.
            </span>
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