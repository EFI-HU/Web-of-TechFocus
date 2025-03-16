'use client';

import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      window.Tally.loadEmbeds();
      // 给一个小延迟确保表单完全加载
      setTimeout(() => setIsLoading(false), 800);
    };
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen h-full bg-white">
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-1">
                <div className="relative transform transition-transform duration-300">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-gray-400 rounded-full animate-spin" style={{ borderTopColor: 'transparent', animationDuration: '1s' }}></div>
                      </div>
                    </div>
                  )}
                  <iframe
                    data-tally-src="https://tally.so/embed/wkvOor?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    title="Contact us"
                    style={{ minHeight: '400px', maxHeight: '400px' }}
                    className="rounded-xl"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}