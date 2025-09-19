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
    <div className={`w-screen px-[30px] flex justify-between items-center gap-4 text-center ${className}`}>
      <div className="text-[24px] text-black md:text-3xl">
        {timeLeft.days}일
      </div>
        <div className="text-center">
          <div className="text-[24px] md:text-4xl font-mono text-gray-800">
            {formatNumber(timeLeft.hours)}시간
          </div>
        </div>
        <div className="text-center">
          <div className="text-[24px] md:text-4xl font-mono text-gray-800">
            {formatNumber(timeLeft.minutes)}분
          </div>
        </div>
        <div className="text-center">
          <div className="text-[24px] md:text-4xl font-mono text-gray-800">
            {formatNumber(timeLeft.seconds)}초
          </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
