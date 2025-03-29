'use client';

import Image from 'next/image';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 处理表单提交
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* 左侧图片区域 */}
          <div className="w-full md:w-[60%] max-w-3xl">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/contact.jpg"
                alt="Contact Us"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            </div>
          </div>

          {/* 右侧表单区域 */}
          <div className="w-full md:w-[35%]">
            <div className="w-full">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 姓名输入框 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 outline-none"
                    required
                  />
                </div>

                {/* 邮箱输入框 */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 outline-none"
                    required
                  />
                </div>

                {/* 主题输入框 */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 outline-none"
                    required
                  />
                </div>

                {/* 消息文本框 */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 outline-none resize-none"
                    required
                  />
                </div>

                {/* 提交按钮 */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2.5 px-6 rounded-lg hover:bg-gray-800 transition duration-200 font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 