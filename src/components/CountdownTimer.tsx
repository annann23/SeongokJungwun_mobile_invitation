'use client';

import { useCountdown } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className = '' }: CountdownTimerProps) => {
  const timeLeft = useCountdown(targetDate);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`w-[280px] flex justify-between items-center gap-4 text-center ${className}`}>
      <div className="text-[24px] text-violet-300">
        {timeLeft.days} <span className='text-sm font-gowun-dodum text-gray-600'>일</span>
      </div>
        <div className="text-center">
          <div className="text-[24px] font-mono text-violet-300">
            {formatNumber(timeLeft.hours)}<span className='text-sm font-gowun-dodum text-gray-600'>시간</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-[24px] font-mono text-violet-300">
            {formatNumber(timeLeft.minutes)}<span className='text-sm font-gowun-dodum text-gray-600'>분</span>
          </div>
        </div>
        <div className="text-center">
          <div className="text-[24px] font-mono text-violet-300">
            {formatNumber(timeLeft.seconds)}<span className='text-sm font-gowun-dodum text-gray-600'>초</span>
          </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
