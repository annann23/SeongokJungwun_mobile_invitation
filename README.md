# 🌟 모바일 청첩장 - Next.js + TypeScript + Tailwind

아름다운 별빛 테마의 모바일 청첩장을 Next.js, TypeScript, Tailwind CSS로 구현한 프로젝트입니다.

## ✨ 주요 기능

- **별빛 애니메이션**: 100개의 별이 반짝이는 아름다운 배경
- **스크롤 효과**: 스크롤에 따른 여명 오버레이와 실루엣 확대 효과
- **사진 모드**: 특정 지점에서 사진 섹션으로 전환되는 인터랙티브한 경험
- **반응형 디자인**: 모바일과 데스크톱에서 최적화된 화면
- **부드러운 애니메이션**: CSS와 JavaScript를 활용한 자연스러운 전환 효과

## 🚀 기술 스택

- **Next.js 15**: React 기반 풀스택 프레임워크
- **TypeScript**: 타입 안전성을 위한 정적 타입 검사
- **Tailwind CSS**: 유틸리티 퍼스트 CSS 프레임워크
- **React Hooks**: 상태 관리와 사이드 이펙트 처리

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🎨 컴포넌트 구조

```
src/
├── components/
│   ├── Stars.tsx              # 별빛 애니메이션 컴포넌트
│   ├── DawnOverlay.tsx        # 여명 오버레이 컴포넌트
│   ├── SilhouetteSection.tsx  # 실루엣 섹션 컴포넌트
│   └── PhotoSection.tsx       # 사진 섹션 컴포넌트
├── hooks/
│   └── useScrollEffects.ts    # 스크롤 효과 커스텀 훅
└── app/
    ├── page.tsx               # 메인 페이지
    ├── layout.tsx             # 루트 레이아웃
    └── globals.css            # 글로벌 스타일
```

## 🔧 주요 기능 설명

### 1. 별빛 애니메이션
- 100개의 별이 랜덤한 위치에 생성
- 각각 다른 애니메이션 속도와 지연시간
- CSS `twinkle` 애니메이션으로 반짝임 효과

### 2. 스크롤 효과
- 스크롤 진행률에 따른 여명 오버레이 투명도 조절
- 실루엣 이미지의 점진적 확대 효과
- 특정 지점에서 사진 모드로 자동 전환

### 3. 사진 모드
- 마우스 휠로 사진 확대/축소
- 위로 스크롤 시 사진 모드 종료
- 부드러운 전환 애니메이션

### 4. 성능 최적화
- React.memo를 활용한 컴포넌트 메모이제이션
- requestAnimationFrame을 사용한 스크롤 이벤트 최적화
- 이미지 lazy loading 적용

## 📱 반응형 디자인

- **모바일**: 작은 화면에 최적화된 텍스트 크기와 이미지 크기
- **데스크톱**: 더 큰 화면에서 풍부한 시각적 경험
- **Tailwind CSS**: 반응형 유틸리티 클래스 활용

## 🎯 용량 최적화

- **Vanilla HTML/CSS/JS**: ~16KB
- **Next.js + TypeScript + Tailwind**: ~75-80KB
- **Tree Shaking**: 사용하지 않는 코드 자동 제거
- **CSS 최적화**: Tailwind의 PurgeCSS로 사용하지 않는 스타일 제거

## 📄 라이선스

이 프로젝트는 개인적인 용도로 제작되었습니다.

---

💕 **성옥❤️정운**의 특별한 순간을 함께 나누어 주셔서 감사합니다.