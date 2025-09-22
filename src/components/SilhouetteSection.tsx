'use client';

import { memo } from 'react';
import Image from 'next/image';

const SilhouetteSection = memo(() => {
  return (
    <section className="relative w-full h-[1200px] flex items-end justify-center overflow-hidden z-20">
      <div className="relative w-full h-full flex items-end justify-center">
        <div className="relative w-[250px] h-[320px] md:w-[300px] md:h-[400px] mb-[-20px]">
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
      </div>
    </section>
  );
});

SilhouetteSection.displayName = 'SilhouetteSection';

export default SilhouetteSection;
