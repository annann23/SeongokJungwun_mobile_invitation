'use client';

import { memo } from 'react';
import Image from 'next/image';

const SilhouetteSection = memo(() => {
  return (
    <div className="relative w-full h-screen flex items-end justify-center overflow-hidden z-20">
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
            src="/images/silhouette.svg"
            alt="커플 실루엣 사진"
            width={531}
            height={720}
            className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
            priority
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          
          {/* 클릭 힌트 오버레이 */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
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
