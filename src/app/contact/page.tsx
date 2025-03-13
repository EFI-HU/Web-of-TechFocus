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
    <div className="min-h-screen h-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] animate-pulse pointer-events-none"></div>
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="fixed bottom-0 left-1/2 w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-[#111]">
              Let's Start a Conversation
            </h1>
            <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto mt-6 animate-fade-in-up">
              Whether you have a question or suggestion, we're here to help. Our team is ready to assist you.
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="p-1 pt-6">
                <div className="relative transform transition-transform duration-300">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
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