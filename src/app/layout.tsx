/**
 * Root layout component for the entire application
 * 整个应用程序的根布局组件
 * 
 * This component serves as the main layout wrapper that includes:
 * 该组件作为主布局包装器，包含：
 * - Font configurations (Geist Sans and Geist Mono)
 * - 字体配置（Geist Sans 和 Geist Mono）
 * - Global metadata (title and description)
 * - 全局元数据（标题和描述）
 * - Header component
 * - 页头组件
 * 
 * @component
 */

import { FloatingChat } from '@/components/shared';
import { Header } from "@/components/shared/header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Initialize Geist Sans font with Latin subset
// 初始化 Geist Sans 字体，使用拉丁字符集
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

// Initialize Geist Mono font with Latin subset
// 初始化 Geist Mono 字体，使用拉丁字符集
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Define global metadata for the application
// 定义应用程序的全局元数据
export const metadata: Metadata = {
  title: "TechFocus",
  description: "TechFocus official website",
};

/**
 * Root layout component that wraps all pages
 * 包装所有页面的根布局组件
 * 
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to be rendered
 * @returns {React.ReactElement} Root layout element
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
