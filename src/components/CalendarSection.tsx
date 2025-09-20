'use client';

import { motion as m } from 'motion/react';
import CountdownTimer from './CountdownTimer';

export default function CalendarSection() {
  return (
    <div className='h-[120vh] relative flex flex-col items-center justify-center bg-[#fff]'>
      <div className='relative z-10'>
        <m.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 1 }}
          className="w-screen bg-white p-6 border border-gray-300 max-w-[500px]"
        >
          {/* 요일 헤더 */}
          <h1 className='text-black text-2xl text-center mb-8 font-scope-one'>Wedding Day</h1>
          <div className="grid grid-cols-7 gap-1 mb-1">
            {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
              <div 
                key={day} 
                className={`text-center text-sm font-medium py-2 ${
                  index === 0 ? 'text-red-500' : 'text-gray-700'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
          
          {/* 달력 그리드 */}
          <div className="grid grid-cols-7 gap-1">
            {/* 11월 1일은 토요일부터 시작 */}
            {Array.from({ length: 6 }, (_, i) => (
              <div key={`empty-${i}`} className="h-10"></div>
            ))}
            
            {/* 11월 날짜들 */}
            {Array.from({ length: 30 }, (_, i) => {
              const date = i + 1;
              const dayOfWeek = (i + 6) % 7; // 11월 1일이 토요일(6)
              const isSunday = dayOfWeek === 0;
              const isWeddingDay = date === 8;
              
              return (
                <div 
                  key={date} 
                  className={`h-10 flex items-center justify-center text-sm font-medium relative ${
                    isSunday ? 'text-red-500' : 'text-gray-700'
                  }`}
                >
                  {isWeddingDay ? (
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="#ffcbcb" 
                        className="absolute"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="relative z-10 text-white text-xs font-bold">8</span>
                    </div>
                  ) : (
                    <span>{date}</span>
                  )}
                </div>
              );
            })}
          </div>
        </m.div>
        
        <div className='flex flex-col items-center gap-4 text-black text-center my-10'>
          {/* bg-violet-100 py-8 */}
          <m.span
          initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          className='text-md font-gowun-dodum'>성옥♥정운 결혼식까지</m.span>
          <m.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <CountdownTimer 
              targetDate={new Date('2025-11-08T15:30:00')}
            />
          </m.div>
          <m.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            viewport={{ once: true, amount: 0.5 }}
          className='text-md font-gowun-dodum'>남았어요!</m.span>
        </div>
      </div>
    </div>
  );
}
