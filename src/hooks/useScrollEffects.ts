'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollState {
  dawnOpacity: number;
}

export const useScrollEffects = () => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    dawnOpacity: 0,
  });

  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercent = scrollY / (documentHeight - windowHeight);

    // 스크롤에 따라 여명 오버레이 투명도 조절
    const maxOpacity = 1;
    const currentOpacity = Math.min(scrollPercent * 4, maxOpacity);

    setScrollState(prev => ({
      ...prev,
      dawnOpacity: currentOpacity,
    }));
  }, []);

  const requestTick = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [handleScroll]);

  const handleScrollEvent = useCallback(() => {
    requestTick();
  }, [requestTick]);

  useEffect(() => {
    // 컴포넌트 마운트 시 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
    
    window.addEventListener('scroll', handleScrollEvent, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleScrollEvent]);

  // 사진 모드 관련 로직 제거 - 더 이상 필요 없음

  return {
    ...scrollState,
  };
};
