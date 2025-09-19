'use client';

import { useEffect, useRef, memo } from 'react';

const Stars = memo(() => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsContainerRef.current) return;

    // 기존 별들 제거
    starsContainerRef.current.innerHTML = '';

    // 50개의 별로 줄여서 성능 향상
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // 별의 위치를 랜덤하게 설정 (컨테이너 높이 내에서)
      const containerHeight = starsContainerRef.current.offsetHeight;
      const top = Math.random() * containerHeight;
      const left = Math.random() * 100;
      
      star.style.top = top + 'px';
      star.style.left = left + '%';
      
      // 각 별마다 다른 애니메이션 속도와 지연시간 설정
      const animationDuration = (1 + Math.random() * 2); // 1-3초
      const animationDelay = Math.random() * 2; // 0-2초 지연
      
      star.style.animationDuration = animationDuration + 's';
      star.style.animationDelay = animationDelay + 's';
      
      starsContainerRef.current.appendChild(star);
    }
  }, []);

  return (
    <div
      ref={starsContainerRef}
      className="absolute top-0 left-0 w-full h-full bg-black overflow-hidden z-0"
    />
  );
});

Stars.displayName = 'Stars';

export default Stars;
