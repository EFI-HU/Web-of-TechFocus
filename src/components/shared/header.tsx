import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className="w-full py-5 md:py-6 px-6 md:px-12 flex justify-between items-center bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-50 shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110">
            <Image 
              src="/logo.svg" 
              alt="TechFocus Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">TechFocus</span>
        </Link>
      </div>
      
      {/* 移动端菜单按钮 */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" className="text-foreground hover:bg-gray-100 rounded-full btn-hover-effect">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
      
      {/* 桌面端导航 */}
      <nav className="hidden md:flex items-center gap-5">
        <Link href="/business" className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors font-medium btn-hover-effect">
          Business
        </Link>
        <Link href="/contact" className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors font-medium btn-hover-effect">
          Contact
        </Link>
        <Link href="/career" className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors font-medium btn-hover-effect">
          Career
        </Link>
      </nav>
    </header>
  );
} 