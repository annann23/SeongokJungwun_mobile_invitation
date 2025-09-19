'use client';

import { useScrollEffects } from '@/hooks/useScrollEffects';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { motion as m } from 'framer-motion';
import Image from 'next/image';
import Stars from '@/components/Stars';
import DawnOverlay from '@/components/DawnOverlay';
import SilhouetteSection from '@/components/SilhouetteSection';
import PhotoSection from '@/components/PhotoSection';
import CountdownTimer from '@/components/CountdownTimer';
import MapSection from '@/components/MapSection';
import AccountSection from '@/components/AccountSection';

export default function Home() {
  const {
    dawnOpacity,
    scrollToTop,
  } = useScrollEffects();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 별과 그라데이션이 있는 섹션들 */}
      <div className="relative min-h-screen bg-black text-white">
      <Stars />
      <DawnOverlay opacity={dawnOpacity} />
   
        <div className="relative h-screen flex flex-col justify-center items-center text-center z-30">
          <div className="font-waterfall text-white" style={{ 
            animation: 'textTwinkle 3s ease-in-out infinite alternate',
            height: '96px',
            lineHeight: '96px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TypingText text="Chae Seongok" delay={0} />
          </div>
          <div className="font-waterfall text-white" style={{ 
            animation: 'textTwinkle 3s ease-in-out infinite alternate',
            height: '48px',
            lineHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TypingText text="and" delay={2000} />
          </div>
          <div className="font-waterfall text-white" style={{ 
            animation: 'textTwinkle 3s ease-in-out infinite alternate',
            height: '96px',
            lineHeight: '96px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TypingText text="Kim Jungwun" delay={3000} />
          </div>
          <span className='text-[#ffffff] text-[14px] font-waterfall absolute bottom-[30px] right-[30px]'>made by jungwun</span>
      </div>

      {/* 실루엣 섹션 */}
      <div id="silhouetteSection" className="transition-opacity duration-300">
        <SilhouetteSection />
        </div>
      </div>

      {/* 초대 문구 섹션 */}
      <div className="h-200vh flex flex-col items-center justify-center relative" style={{ backgroundColor: '#ffffff' }}>
        <div className="w-full h-full absolute inset-0" style={{
          background: 'linear-gradient(180deg, #000000 0%, #ffffff 50%, #ffffff 100%)'
        }}></div>
        <div className="relative z-10">
          <div className='h-screen text-[#ffffff] flex flex-col items-center justify-center'>
            <m.div 
            className='text-lg text-center font-noto-serif-kr'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
            >사랑은 두 사람이</m.div>
            <m.div 
            className='text-lg text-center font-noto-serif-kr'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            >마주 쳐다보는 것이 아니라</m.div>
            <m.div 
            className='text-lg text-center font-noto-serif-kr'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            >함께 같은 방향을 바라보는 것이다</m.div>
            <m.div 
            className='text-sm text-center font-noto-serif-kr'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
            >- 생텍쥐페리 -</m.div>
          </div>
       
          <div className='h-120vh text-black flex flex-col items-center justify-center w-screen px-[30px]'>
            <m.img
             initial={{ opacity: 0, y: 100 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5 }}
             viewport={{ once: true, amount: 0.5 }}
             src="/images/wedding_img/img_6.jpg" alt="invitation" className='relative w-full h-auto object-cover'/>
            <m.h1 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-black text-[32px] text-center my-[12px] font-noto-serif-kr">초대합니다</m.h1>  
            <m.h3 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.7 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-black text-[14px] my-[4px] text-center font-noto-serif-kr">저희 두 사람의 새로운 시작을 <br/>귀한 발걸음으로 축복해주시면 감사드리겠습니다.</m.h3>   
            <m.h3 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-black text-[14px] my-[30px] text-center font-noto-serif-kr">신랑 채성옥 · 신부 김정운</m.h3>     
            <m.h3 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-black text-[14px] text-center my-[4px] font-noto-serif-kr">2025. 11. 8 토요일 15:30</m.h3>    
            <m.h3 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-black text-[14px] text-center my-[4px] mb-8 font-noto-serif-kr">르비르모어 클리타홀</m.h3>
          </div>
        </div>
      </div>

        
      <div className='h-screen flex flex-col items-center justify-center bg-[#fff]' >
        <div className='relative z-10'>
          <div className="w-full max-w-md mx-auto bg-white p-6 border border-gray-300">
            {/* 요일 헤더 */}
            <h1 className='text-black text-2xl text-center mb-8 font-noto-serif-kr'>Wedding Day</h1>
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
          </div>
          <div className='text-black text-center mb-8'>
            <span className='text-lg'>성옥❤️정운 결혼식까지</span>

        <m.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <CountdownTimer 
                targetDate={new Date('2025-11-08T15:30:00')}
                className="mt-4"
              />
        </m.div>
            <span className='text-lg'>남았어요!</span>
          </div>
        </div>
      </div>
      

      {/* 사진 섹션 */}
      <PhotoSection
        onBackToTop={scrollToTop}
      />

      {/* 지도 섹션 */}
      <MapSection />

      {/*계좌번호 섹션*/}
      <div className='min-h-screen flex flex-col items-center justify-center bg-white text-black py-20'>
        <div className="w-full max-w-md mx-auto px-4">
          <m.h3 
            className="text-md text-center mb-4 font-noto-serif-kr"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            마음 전하실 곳
          </m.h3>
          <m.div 
            className="text-sm text-center text-gray-600 mb-8 font-noto-serif-kr"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-2">참석이 어려우신 분들을 위해 기재했습니다</p>
            <p>너그러운 마음으로 양해 부탁드립니다</p>
          </m.div>

          <AccountSection />
        </div>
      </div>
    </div>
  );
}

// 타이핑 효과만 적용된 텍스트 컴포넌트
function TypingText({ text, delay }: { 
  text: string; 
  delay: number;
}) {
  const { displayText } = useTypingEffect({ 
    text, 
    speed: 100, 
    delay 
  });

  return <span 
    className="font-waterfall" 
    style={{ 
      fontSize: '3rem', 
      fontWeight: 'bold',
      lineHeight: '1',
      color: '#ffffff'
    }}
  >
    {displayText}
  </span>;
}