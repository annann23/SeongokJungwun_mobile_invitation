import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '성옥♥정운 모바일 청첩장',
  description: '저희의 결혼식에 여러분을 초대합니다.',
  openGraph: {
    title: '성옥♥정운 모바일 청첩장',
    description: '저희의 결혼식에 여러분을 초대합니다.',
    images: [
      {
        url: '/images/wedding_img/img_sm_main.jpg',
        width: 364,
        height: 546,
        alt: '성옥♥정운 모바일 청첩장',
      },
    ],
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '성옥♥정운 모바일 청첩장',
    description: '저희의 결혼식에 여러분을 초대합니다.',
    images: ['/images/wedding_img/img_main.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="color-scheme" content="light"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="supported-color-schemes" content="light"/>
        <meta name="msapplication-navbutton-color" content="#ffffff"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="light-content"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Noto+Serif+KR:wght@200..900&family=Scope+One&family=Waterfall&display=swap" rel="stylesheet"/>
        <script 
          type="text/javascript" 
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ab79b565d2a567a804647a16d8bdbba2&autoload=false"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 다크모드 강제 차단
              function forceLightMode() {
                document.documentElement.style.colorScheme = 'light';
                document.documentElement.setAttribute('data-color-scheme', 'light');
              }
              
              // 즉시 실행
              forceLightMode();
              
              // 페이지 새로고침 시 스크롤을 맨 위로 이동
              window.addEventListener('beforeunload', function() {
                window.scrollTo(0, 0);
              });
              
              // 페이지 로드 시 스크롤을 맨 위로 이동
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
                forceLightMode();
              });
              
              // 다크모드 변경 감지 시 강제로 라이트 모드로 변경
              window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
                forceLightMode();
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}