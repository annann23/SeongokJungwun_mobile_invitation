'use client';

import { memo, useState } from 'react';
import Image from 'next/image';
import { motion as m } from 'framer-motion';

interface PhotoSectionProps {
  onBackToTop: () => void;
}

const PhotoSection = memo(({ onBackToTop }: PhotoSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const images = [
    '/images/wedding_img/img_1.jpg',
    '/images/wedding_img/img_2.jpg',
    '/images/wedding_img/img_3.jpg',
    '/images/wedding_img/img_4.jpg',
    '/images/wedding_img/img_5.jpg',
    '/images/wedding_img/img_6.jpg',
    '/images/wedding_img/img_7.jpg',
    '/images/wedding_img/img_8.jpg',
    '/images/wedding_img/img_9.jpg',
    '/images/wedding_img/img_10.jpg',
    '/images/wedding_img/img_11.jpg',
    '/images/wedding_img/img_12.jpg',
    '/images/wedding_img/img_13.jpg',
    '/images/wedding_img/img_14.jpg',
    '/images/wedding_img/img_15.jpg',
    '/images/wedding_img/img_16.jpg',
    '/images/wedding_img/img_17.jpg',
    '/images/wedding_img/img_18.jpg',
    '/images/wedding_img/img_19.jpg',
    '/images/wedding_img/img_20.jpg',
  ];

  const displayedImages = showAllImages ? images : images.slice(0, 9);

  const handleTouchStart = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleShowMore = () => {
    setShowAllImages(true);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  // 스켈레톤 컴포넌트
  const SkeletonCard = () => (
    <div className="aspect-square rounded-lg overflow-hidden relative bg-gray-200 animate-pulse">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-white py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="text-center p-4 max-w-4xl mx-auto">
        <h1 className='text-black text-4xl text-center mb-8 font-noto-serif-kr'>Gallery</h1>
        <h5 className='text-black text-sm text-center mb-8 font-noto-serif-kr'>사진을 터치하시면 전체화면 보기가 가능합니다.</h5>
        {/* 웨딩 사진 갤러리 - 3줄 그리드 */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {displayedImages.map((imageSrc, index) => (
            <m.div
              key={index}
              className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer active:scale-95 transition-transform duration-200"
              onTouchStart={() => handleTouchStart(imageSrc)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, // 각 이미지마다 0.1초씩 지연
                ease: "easeOut"
              }}
            >
              {/* 스켈레톤 로딩 */}
              {!loadedImages.has(index) && <SkeletonCard />}
              
              {/* 실제 이미지 */}
              <Image
                src={imageSrc}
                alt={`웨딩 사진 ${index + 1}`}
                width={200}
                height={200}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  loadedImages.has(index) ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                onLoad={() => handleImageLoad(index)}
                priority={index < 9} // 첫 9장은 우선 로딩
              />
              
              {/* 터치 오버레이 */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-active:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-white text-xs font-medium">확대보기</span>
              </div>
            </m.div>
          ))}
        </div>

        {/* 더보기 버튼 */}
        {!showAllImages && (
          <div className="mb-8">
            <button
              onTouchStart={handleShowMore}
              className="px-6 py-3 text-black rounded-full font-medium transition-all duration-200"
            >
              더보기
            </button>
          </div>
        )}
      </div>

      {/* 모달 - 선택된 이미지 크게 보기 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onTouchStart={handleCloseModal}
        >
          <div className="relative max-w-full max-h-full">
            <Image
              src={selectedImage}
              alt="확대된 웨딩 사진"
              width={800}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 text-white rounded-full flex items-center justify-center text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

PhotoSection.displayName = 'PhotoSection';

export default PhotoSection;
