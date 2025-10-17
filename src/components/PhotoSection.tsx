"use client";

import { memo, useState, useEffect } from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import {
  faArrowDown,
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PhotoSection = memo(() => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [showAllImages, setShowAllImages] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isModalImageLoading, setIsModalImageLoading] = useState(false);
  const [loadingTimer, setLoadingTimer] = useState<NodeJS.Timeout | null>(null);

  // 원본 이미지들을 직접 사용 (썸네일과 원본 분리 제거)
  const images = [
    "/images/wedding_img/img_1.jpeg",
    "/images/wedding_img/img_2.jpeg",
    "/images/wedding_img/img_3.jpeg",
    "/images/wedding_img/img_4.jpeg",
    "/images/wedding_img/img_5.jpeg",
    "/images/wedding_img/img_6.jpeg",
    "/images/wedding_img/img_7.jpeg",
    "/images/wedding_img/img_8.jpeg",
    "/images/wedding_img/img_9.jpeg",
    "/images/wedding_img/img_10.jpeg",
    "/images/wedding_img/img_11.jpeg",
    "/images/wedding_img/img_12.jpeg",
    "/images/wedding_img/img_13.jpeg",
    "/images/wedding_img/img_14.jpeg",
    "/images/wedding_img/img_15.jpeg",
    "/images/wedding_img/img_16.jpeg",
  ];

  const displayedImages = showAllImages ? images : images.slice(0, 9);

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (loadingTimer) {
        clearTimeout(loadingTimer);
      }
    };
  }, [loadingTimer]);

  const handleImageClick = (index: number) => {
    setSelectedImage(images[index]);
    setSelectedImageIndex(index);
    startLoading();
    // 모달이 열릴 때 body 스크롤 차단
    blockScroll();
  };

  const blockScroll = () => {
    const main = document.getElementById("main");
    if (main) main.style.overflow = "hidden";
  };

  const resumeScroll = () => {
    const main = document.getElementById("main");
    if (main) main.style.overflow = "auto";
  };

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
    const startX = parseFloat(
      (e.currentTarget as HTMLElement).dataset.startX || "0"
    );
    const startY = parseFloat(
      (e.currentTarget as HTMLElement).dataset.startY || "0"
    );

    // 이동 거리 계산
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);

    // 10px 이내의 움직임이면 탭으로 간주
    if (deltaX < 10 && deltaY < 10) {
      setSelectedImage(images[index]);
      setSelectedImageIndex(index);
      startLoading();
      // 모달이 열릴 때 body 스크롤 차단
      blockScroll();
    }
  };

  const handleCloseModal = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedImage(null);
    finishLoading();
    // 모달이 닫힐 때 body 스크롤 복원
    resumeScroll();
  };

  const handleShowMore = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAllImages(true);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  // 로딩 시작 처리 (0.3초 후 로딩바 표시)
  const startLoading = () => {
    // 기존 타이머가 있다면 클리어
    if (loadingTimer) {
      clearTimeout(loadingTimer);
    }

    // 0.3초 후에 로딩바 표시
    const timer = setTimeout(() => {
      setIsModalImageLoading(true);
    }, 300);

    setLoadingTimer(timer);
  };

  // 로딩 완료 처리 (타이머 클리어 및 로딩바 숨김)
  const finishLoading = () => {
    if (loadingTimer) {
      clearTimeout(loadingTimer);
      setLoadingTimer(null);
    }
    setIsModalImageLoading(false);
  };

  // 이전 이미지로 이동
  const handlePreviousImage = () => {
    const prevIndex =
      selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1;
    setSelectedImage(images[prevIndex]);
    setSelectedImageIndex(prevIndex);
    startLoading();
  };

  // 다음 이미지로 이동
  const handleNextImage = () => {
    const nextIndex =
      selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedImageIndex(nextIndex);
    startLoading();
  };

  // 모달 이미지 로딩 완료 처리
  const handleModalImageLoad = () => {
    finishLoading();
  };

  // 스켈레톤 컴포넌트
  const SkeletonCard = () => (
    <div className="aspect-square rounded-lg overflow-hidden relative bg-gray-200 animate-pulse">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );

  // 모달용 로딩바 컴포넌트
  const ModalLoadingBar = () => (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-40">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4 mx-auto"></div>
        <p className="text-white text-sm">이미지 로딩 중...</p>
      </div>
    </div>
  );

  return (
    <section
      className="relative w-full min-h-screen bg-white py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="text-center p-4 max-w-4xl mx-auto">
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="text-black text-4xl text-center mb-4 font-scope-one"
        >
          Gallery
        </m.h1>
        <m.h5
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
          className="text-black text-sm text-center mb-12 font-noto-serif-kr"
        >
          사진을 터치하시면 전체화면 보기가 가능합니다.
        </m.h5>
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
                ease: "easeIn",
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
                  loadedImages.has(index) ? "opacity-100" : "opacity-0 absolute"
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
          <m.div
            className="mb-8"
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
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 z-1">
          {/* 로딩바 */}
          {isModalImageLoading && <ModalLoadingBar />}
          {/* 닫기 버튼 */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 w-8 h-8 text-white text-xl font-bold z-50"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          {/* 이전 이미지 버튼 */}
          <button
            onClick={handlePreviousImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center z-50 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
          </button>

          {/* 다음 이미지 버튼 */}
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center z-50 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
          </button>

          {/* 이미지 컨테이너 */}
          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
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

          {/* 이미지 카운터 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {selectedImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
});

PhotoSection.displayName = "PhotoSection";

export default PhotoSection;
