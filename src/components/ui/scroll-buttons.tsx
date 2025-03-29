import { Fab } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollButtonsProps {
  onUpClick: () => void;
  onDownClick: () => void;
  upDisabled?: boolean;
  downDisabled?: boolean;
}

export function ScrollButtons({ 
  onUpClick, 
  onDownClick, 
  upDisabled = false, 
  downDisabled = false 
}: ScrollButtonsProps) {
  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={onUpClick}
        disabled={upDisabled}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white border border-gray-200 ${
          upDisabled
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-black hover:text-white hover:border-black cursor-pointer'
        }`}
        aria-label="Previous item"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
      
      <button
        onClick={onDownClick}
        disabled={downDisabled}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white border border-gray-200 ${
          downDisabled
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-black hover:text-white hover:border-black cursor-pointer'
        }`}
        aria-label="Next item"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
} 