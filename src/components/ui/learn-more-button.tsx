import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowForward } from '@mui/icons-material';

interface LearnMoreButtonProps {
  href: string;
  className?: string;
  children?: ReactNode;
}

export function LearnMoreButton({ href, className = '', children }: LearnMoreButtonProps) {
  return (
    <Link 
      href={href} 
      className={`inline-flex items-center text-black font-medium group ${className}`}
    >
      <ArrowForward sx={{ 
        fontSize: 16,
        marginRight: '8px',
      }} />
      <span className="relative font-medium">
        {children || "Learn more"}
      </span>
    </Link>
  );
} 