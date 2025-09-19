'use client';

import { memo, useEffect, useRef } from 'react';

const MapSection = memo(() => {
  const mapRef = useRef<HTMLDivElement>(null);
  const address = "서울특별시 강남구 테헤란로 406";
  const phoneNumber = "02-501-7000"; 
  
  // 지도 서비스 URL 생성
  const getNaverMapUrl = () => {
    const encodedAddress = encodeURIComponent(address);
    return `https://map.naver.com/v5/search/${encodedAddress}`;
  };

  const getTMapUrl = () => {
    const encodedAddress = encodeURIComponent(address);
    return `https://tmapapi.sktelecom.com/main/web/route?goalName=${encodedAddress}`;
  };

  const getGoogleMapUrl = () => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  const copyAddress = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(address);
      alert('주소가 복사되었습니다!');
    }
  };

  const callPhone = () => {
    if (typeof window !== 'undefined') {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  // Kakao Map 초기화
  useEffect(() => {
 

    const initMap = async () => {
      try {
        if (typeof window !== 'undefined' && window.kakao) {
          window.kakao.maps.load(() => {
        const container = mapRef.current; //지도를 담을 영역의 DOM 레퍼런스
        if (container) {         
          var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(37.50433, 127.04997), //르비르모어 클리타홀 근처
            level: 3 //지도의 레벨(확대, 축소 정도)
          };

          var map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
          
          // 마커 추가
          var markerPosition = new window.kakao.maps.LatLng(37.50433, 127.04997);
          var marker = new window.kakao.maps.Marker({
            position: markerPosition
          });
          marker.setMap(map);
          
          // 인포윈도우 추가
          var infowindow = new window.kakao.maps.InfoWindow({
            content: '<div style="padding:5px; font-size:12px;">르비르모어 클리타홀</div>'
          });
          infowindow.open(map, marker);
        } else {
          console.log('지도 컨테이너를 찾을 수 없음');
        }
          });
        }
      } catch (error) {
        console.error('Kakao API 로드 실패:', error);
      }
    };

    // 컴포넌트가 마운트된 후 지도 초기화
    const timer = setTimeout(initMap, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="text-center p-4 max-w-4xl mx-auto">
        {/* 제목 */}
        <h1 className="text-black text-4xl text-center mb-8 font-noto-serif-kr">LOCATION</h1>
        
        {/* 장소 정보 */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800 mb-2">
                르비르모어 클리타홀
              </div>
              <div className="text-sm text-gray-600">
                서울특별시 강남구 테헤란로 406
              </div>
            </div>
          </div>
          
          {/* 전화번호와 주소 복사 버튼 */}
          <div className="flex justify-center gap-4 mb-6">
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
          </div>
        </div>

        {/* 지도 영역 */}
        <div className="mb-8">
          <div className="relative w-full h-80 bg-gray-100 rounded-2xl overflow-hidden">
            {/* 실제 Kakao Map */}
            <div 
              ref={mapRef} 
              className="w-full h-full rounded-2xl"
              style={{ 
                minHeight: '320px',
                width: '100%',
                height: '100%'
              }}
            />
            
            {/* 로딩 상태 표시 */}
            {typeof window !== 'undefined' && !window.kakao && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <div className="text-sm text-gray-600">지도를 불러오는 중...</div>
                </div>
              </div>
            )}
            
            {/* 카카오맵 열기 버튼 */}
            <div className="absolute top-4 left-4">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.open(`https://map.kakao.com/link/search/${encodeURIComponent(address)}`, '_blank');
                  }
                }}
                className="px-3 py-2 bg-green-500 text-white text-sm font-medium rounded-lg active:bg-green-600 transition-colors"
              >
                카카오맵 열기
              </button>
            </div>
          </div>
        </div>

        {/* 지도 서비스 버튼들 */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {/* 네이버맵 */}
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.open(getNaverMapUrl(), '_blank');
              }
            }}
            className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-xl active:bg-green-100 transition-colors"
          >
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-sm font-medium text-gray-700">네이버</span>
          </button>

          {/* T맵 */}
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.open(getTMapUrl(), '_blank');
              }
            }}
            className="flex flex-col items-center gap-2 p-4 bg-purple-50 rounded-xl active:bg-purple-100 transition-colors"
          >
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-sm font-medium text-gray-700">T MAP</span>
          </button>

          {/* 구글맵 */}
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.open(getGoogleMapUrl(), '_blank');
              }
            }}
            className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-xl active:bg-blue-100 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">구글맵</span>
          </button>
        </div>
      </div>
    </div>
  );
});

MapSection.displayName = 'MapSection';

export default MapSection;
