'use client';

import { memo } from 'react';
import Image from 'next/image';

const SilhouetteSection = memo(() => {
  return (
    <div className="relative w-full h-[1200px] flex items-end justify-center overflow-hidden z-20">
      <div className="relative w-full h-full flex items-end justify-center">
        <div
          className="relative w-[250px] h-[320px] md:w-[300px] md:h-[400px] mb-[78px] group cursor-pointer"
          onClick={() => {
            // 사진 모드로 전환하는 로직 (useScrollEffects에서 처리)
            const event = new CustomEvent('enterPhotoMode');
            window.dispatchEvent(event);
          }}
        >
          <Image
            src="/images/silhouette.png"
            alt="커플 실루엣 사진"
            width={531}
            height={720}
            className="w-full h-full object-contain object-bottom"
            priority
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <div 
          className="absolute bottom-0 w-full h-[100px] z-10" 
          style={{ background: '#000' }}
        />
      </div>
    </div>
  );
});

SilhouetteSection.displayName = 'SilhouetteSection';

export default SilhouetteSection;
