'use client';

import { memo, useState } from 'react';
import Image from 'next/image';
import { motion as m } from 'framer-motion';
import { faArrowDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PhotoSection = memo(() => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  // 썸네일용 작은 이미지들 (img_sm_)
  const thumbnailImages = [
    '/images/wedding_img/img_sm_1.jpeg',
    '/images/wedding_img/img_sm_2.jpeg',
    '/images/wedding_img/img_sm_3.jpeg',
    '/images/wedding_img/img_sm_4.jpeg',
    '/images/wedding_img/img_sm_5.jpeg',
    '/images/wedding_img/img_sm_6.jpeg',
    '/images/wedding_img/img_sm_7.jpeg',
    '/images/wedding_img/img_sm_8.jpeg',
    '/images/wedding_img/img_sm_9.jpeg',
    '/images/wedding_img/img_sm_10.jpeg',
    '/images/wedding_img/img_sm_11.jpeg',
    '/images/wedding_img/img_sm_12.jpeg',
    '/images/wedding_img/img_sm_13.jpeg',
    '/images/wedding_img/img_sm_14.jpeg',
    '/images/wedding_img/img_sm_15.jpeg',
    '/images/wedding_img/img_sm_16.jpeg',
  ];

  // 모달용 원본 이미지들 (img_)
  const originalImages = [
    '/images/wedding_img/img_1.jpeg',
    '/images/wedding_img/img_2.jpeg',
    '/images/wedding_img/img_3.jpeg',
    '/images/wedding_img/img_4.jpeg',
    '/images/wedding_img/img_5.jpeg',
    '/images/wedding_img/img_6.jpeg',
    '/images/wedding_img/img_7.jpeg',
    '/images/wedding_img/img_8.jpeg',
    '/images/wedding_img/img_9.jpeg',
    '/images/wedding_img/img_10.jpeg',
    '/images/wedding_img/img_11.jpeg',
    '/images/wedding_img/img_12.jpeg',
    '/images/wedding_img/img_13.jpeg',
    '/images/wedding_img/img_14.jpeg',
    '/images/wedding_img/img_15.jpeg',
    '/images/wedding_img/img_16.jpeg',
  ];

  const displayedImages = showAllImages ? thumbnailImages : thumbnailImages.slice(0, 9);

  const handleImageClick = (index: number) => {
    setSelectedImage(originalImages[index]);
    setModalImageLoaded(false); // 모달 이미지 로드 상태 초기화
    // 모달이 열릴 때 body 스크롤 차단
    blockScroll();
  };

  const blockScroll = () => {
    const main = document.getElementById('main');
    if(main) main.style.overflow = 'hidden';
  }

  const resumeScroll = () => {
    const main = document.getElementById('main');
    if(main) main.style.overflow = 'auto';
  }

  // 터치 시작과 끝 위치를 비교해서 실제 탭인지 확인
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    const startY = touch.clientY;
    
    // 터치 시작 위치를 저장
    (e.currentTarget as HTMLElement).dataset.startX = startX.toString();
    (e.currentTarget as HTMLElement).dataset.startY = startY.toString();
  };

  const handleTouchEnd = (e: React.TouchEvent, index: number) => {
    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;
    
    // 터치 시작 위치 가져오기
    const startX = parseFloat((e.currentTarget as HTMLElement).dataset.startX || '0');
    const startY = parseFloat((e.currentTarget as HTMLElement).dataset.startY || '0');
    
    // 이동 거리 계산
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);
    
    // 10px 이내의 움직임이면 탭으로 간주
    if (deltaX < 10 && deltaY < 10) {
      setSelectedImage(originalImages[index]);
      setModalImageLoaded(false); // 모달 이미지 로드 상태 초기화
      // 모달이 열릴 때 body 스크롤 차단
      blockScroll();
    }
  };

  const handleCloseModal = (e?: React.MouseEvent | React.TouchEvent) => {
    console.log('click close button')
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedImage(null);
    setModalImageLoaded(false);
    // 모달이 닫힐 때 body 스크롤 복원
    resumeScroll();
  };

  // 모달 배경 클릭 시 모달 닫기
  const handleModalBackgroundClick = (e: React.MouseEvent | React.TouchEvent) => {
    if(!modalImageLoaded) return;
    // 모달 배경을 직접 클릭했을 때만 닫기
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleShowMore = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAllImages(true);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  // 모달 이미지 로드 핸들러
  const handleModalImageLoad = () => {
    setModalImageLoaded(true);
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
    <section className="relative w-full min-h-screen bg-white py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="text-center p-4 max-w-4xl mx-auto">
        <m.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className='text-black text-4xl text-center mb-4 font-scope-one'>Gallery</m.h1>
        <m.h5
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
        className='text-black text-sm text-center mb-12 font-noto-serif-kr'>사진을 터치하시면 전체화면 보기가 가능합니다.</m.h5>
        {/* 웨딩 사진 갤러리 - 3줄 그리드 */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {displayedImages.map((imageSrc, index) => (
            <m.div
              key={index}
              className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer active:scale-95 transition-transform duration-200"
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, index)}
              onClick={() => handleImageClick(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, // 각 이미지마다 0.1초씩 지연
                ease: "easeIn"
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
          <m.div className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          >
            <button
              onClick={handleShowMore}
              className="px-6 py-3 text-black rounded-full font-medium transition-all duration-200"
            >
              더보기 <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </m.div>
        )}
      </div>

      {/* 모달 - 선택된 이미지 크게 보기 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 z-1"
          onClick={handleModalBackgroundClick}
          onTouchEnd={handleModalBackgroundClick}
        >
           <button
             onClick={handleCloseModal}
             onTouchEnd={handleCloseModal}
            //  disabled={!modalImageLoaded}
             className={`absolute top-4 right-4 w-8 h-8 text-white text-xl font-bold z-50`}
         >
             <FontAwesomeIcon icon={faXmark} />
           </button>
          <div 
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="확대된 웨딩 사진"
              width={800}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
              onLoad={handleModalImageLoad}
            />
          </div>
        </div>
      )}
    </section>
  );
});

PhotoSection.displayName = 'PhotoSection';

export default PhotoSection;
