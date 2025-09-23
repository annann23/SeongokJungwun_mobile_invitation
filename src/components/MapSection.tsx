"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useEffect, useRef } from "react";
import { faBus, faCar, faTrainSubway } from "@fortawesome/free-solid-svg-icons";
import { motion as m } from "motion/react";
import copy from "copy-to-clipboard";

const MapSection = memo(() => {
  const mapRef = useRef<HTMLDivElement>(null);
  const address = "서울특별시 강남구 테헤란로 406 르비르모어";
  const phoneNumber = "02-501-7000";

  // 지도 서비스 URL 생성
  const getNaverMapUrl = () => {
    const encodedAddress = encodeURIComponent(address);
    return `https://map.naver.com/v5/search/${encodedAddress}`;
  };

  const getGoogleMapUrl = () => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  const copyAddress = () => {
    copy(address);
  };

  const callPhone = () => {
    if (typeof window !== "undefined") {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  // Kakao Map 초기화
  useEffect(() => {
    const initMap = async () => {
      try {
        if (typeof window !== "undefined" && window.kakao) {
          window.kakao.maps.load(() => {
            const container = mapRef.current;
            if (container) {
              const options = {
                center: new window.kakao.maps.LatLng(37.50433, 127.04997),
                level: 3,
                draggable: false,
              };

              const map = new window.kakao.maps.Map(container, options);

              const markerPosition = new window.kakao.maps.LatLng(
                37.50433,
                127.04997
              );
              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
              });
              marker.setMap(map);

              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px; color:black; text-align:center; font-size:14px;">르비르모어</div>',
              });
              infowindow.open(map, marker);
            } else {
              console.log("지도 컨테이너를 찾을 수 없음");
            }
          });
        }
      } catch (error) {
        console.error("Kakao API 로드 실패:", error);
      }
    };

    const timer = setTimeout(initMap, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen bg-white py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="text-center p-4 max-w-4xl mx-auto font-gowun-dodum">
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="text-black text-4xl text-center mb-8 font-scope-one"
        >
          Location
        </m.h1>

        {/* 장소 정보 */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="text-center">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                className="text-lg font-bold text-gray-800 mb-2"
              >
                르비르모어 클리타홀
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeIn", delay: 0.4 }}
                className="text-sm text-gray-600"
              >
                서울특별시 강남구 테헤란로 406(대치동 889-5) <br />
                샹제리제센터 A동 1층 TEL(02-501-7000)
                <br />
                선릉역 1번출구 앞
              </m.div>
            </div>
          </div>

          {/* 전화번호와 주소 복사 버튼 */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeIn", delay: 0.6 }}
            className="flex justify-center gap-4 mb-6"
          >
            <button
              onClick={callPhone}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium active:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              전화걸기
            </button>

            <button
              onClick={copyAddress}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium active:bg-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
              </svg>
              주소복사
            </button>
          </m.div>
        </div>

        {/* 지도 영역 */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.8 }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="relative w-full max-w-[500px] h-80 bg-gray-100 rounded-2xl overflow-hidden">
            <div
              ref={mapRef}
              className="w-full h-full rounded-2xl"
              style={{
                minHeight: "320px",
                width: "100%",
                height: "100%",
              }}
            />

            {typeof window !== "undefined" && !window.kakao && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <div className="text-sm text-gray-600">
                    지도를 불러오는 중...
                  </div>
                </div>
              </div>
            )}
          </div>
        </m.div>

        {/* 지도 서비스 버튼들 */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 1 }}
          className="grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(
                  `https://map.kakao.com/link/search/${encodeURIComponent(
                    address
                  )}`,
                  "_blank"
                );
              }
            }}
            className="flex flex-col justify-center items-center gap-2 px-3 py-2 bg-yellow-50 text-white text-sm font-medium rounded-lg"
          >
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-black font-[900] text-sm">K</span>
            </div>
            <span className="text-sm font-medium text-gray-700">카카오</span>
          </button>
          {/* 네이버맵 */}
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(getNaverMapUrl(), "_blank");
              }
            }}
            className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-xl"
          >
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-sm font-medium text-gray-700">네이버</span>
          </button>

          {/* 구글맵 */}
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(getGoogleMapUrl(), "_blank");
              }
            }}
            className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-xl"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">구글맵</span>
          </button>
        </m.div>

        {/*오는 방법 섹션*/}
        <div className="flex flex-col justify-center items-center gap-2 my-6 w-full">
          <div className="max-w-[500px] w-full">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
              className="flex flex-col items-start py-6 border-y-1 border-gray-300 text-start gap-2 text-sm font-medium text-gray-500"
            >
              <div className="flex items-center gap-2 min-w-[100px] text-lg text-black">
                <FontAwesomeIcon icon={faCar} /> 자차{" "}
              </div>
              <b>네비게이션</b>&apos;르비르모어&apos; 혹은
              &apos;샹제리제센터&apos; 검색
              <br />
              <b>주차</b>샹제리제센터 A동 주차장(수용가능 450대)
              <br />
              2시간 무료주차
              <div className="text-sm font-bold text-red">
                *주차장 출입구가 협소하오니
                <br /> 가급적 대중교통 이용 부탁드립니다.
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: 0.3 }}
              className="flex flex-col py-6 border-b-1 border-gray-300 items-start text-start gap-2 text-sm font-medium text-gray-500"
            >
              <div className="flex items-center gap-2 min-w-[100px] text-lg text-black">
                <FontAwesomeIcon icon={faBus} /> 버스{" "}
              </div>
              <b>146, 333, 341, 360, 740, 1700, 2000, 8001, 9414</b>
              <span className="flex items-center gap-2">
                선릉역 하차 - 도보 1분
              </span>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: 0.4 }}
              className="flex flex-col py-6 border-b-1 border-gray-300 items-start text-start gap-2 text-sm font-medium text-gray-500"
            >
              <div className="flex items-center gap-2 min-w-[100px] text-lg text-black">
                <FontAwesomeIcon icon={faTrainSubway} /> 지하철{" "}
              </div>
              2호선, 수인분당선 선릉역 1번 출구와 바로 연결
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
});

MapSection.displayName = "MapSection";

export default MapSection;
