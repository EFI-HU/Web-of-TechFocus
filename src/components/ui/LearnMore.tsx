import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

interface LearnMoreProps {
  className?: string;
}

export function LearnMore({ className = '' }: LearnMoreProps) {
  return (
    <Button
      className={`group ${className}`}
      sx={{
        color: '#1c1e21',
        textTransform: 'none',
        fontSize: '17px',
        lineHeight: '24px',
        fontWeight: 400,
        padding: '12px 24px 12px 16px',
        borderRadius: '24px',
        '&:hover': {
          backgroundColor: 'rgba(28, 30, 33, 0.04)',
        }
      }}
      startIcon={
        <div className="w-[24px] h-[24px] rounded-full border border-[#1c1e21] flex items-center justify-center group-hover:bg-[#1c1e21] group-hover:text-white transition-all duration-300">
          <ArrowForwardIcon className="w-4 h-4 transition-colors duration-300" />
        </div>
      }
    >
      Learn more
    </Button>
  );
} 