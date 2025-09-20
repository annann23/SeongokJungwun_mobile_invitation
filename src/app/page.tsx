'use client';

import { useState, useEffect, useRef } from 'react';
import { useScrollEffects } from '@/hooks/useScrollEffects';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { motion as m } from 'motion/react';
import Stars from '@/components/Stars';
import DawnOverlay from '@/components/DawnOverlay';
import SilhouetteSection from '@/components/SilhouetteSection';
import InvitationSection from '@/components/InvitationSection';
import PhotoSection from '@/components/PhotoSection';
import CalendarSection from '@/components/CalendarSection';
import MapSection from '@/components/MapSection';
import AccountSection from '@/components/AccountSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const {
    dawnOpacity,
    scrollToTop,
  } = useScrollEffects();

  // BGM 상태 관리
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayPrompt, setShowPlayPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // 음소거 토글 함수
  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isMuted) {
        // 음악 재생
        audio.play();
        audio.loop = true;
        audio.volume = 0.3;
        setShowPlayPrompt(false);
        audio.muted = false;
      } else {
        // 음악 정지
        audio.pause();
        audio.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* BGM 오디오 태그 */}
      <audio
        ref={audioRef}
        src="/music/invitation_bgm.mp3"
        preload="auto"
      />
      
      {/* 별과 그라데이션이 있는 섹션들 */}
      <div className="relative min-h-screen bg-black text-white">
      <Stars />
      <DawnOverlay opacity={dawnOpacity} />
      
      {/* 음소거 토글 버튼 */}
      <button
        onClick={toggleMute}
        className="fixed bottom-4 left-4 z-3000 bg-black opacity-50 w-10 h-10 rounded-full flex items-center justify-center"
        aria-label={isMuted ? "음악 재생" : "음악 정지"}
      >
        <FontAwesomeIcon 
          icon={isMuted ? faVolumeXmark : faVolumeHigh} 
          className="text-white text-sm"
        />
      </button>

      {/* BGM 재생 안내 메시지 */}
      {showPlayPrompt && (
        <div className="fixed bottom-2.5 left-12 z-3000 text-white px-4 py-2 rounded-lg text-[12px] max-w-xs">
          <m.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: 3, repeatType: "reverse" }}
          className="mb-2">🎵 &nbsp;BGM을 재생하려면 버튼을 터치해주세요</m.p>
        </div>
      )}
   
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

      {/* 초대문구 섹션 */}
      <InvitationSection />

      {/* 달력 섹션 */}
      <CalendarSection />

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