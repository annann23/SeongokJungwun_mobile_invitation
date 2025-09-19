import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '초대합니다',
  description: '성옥❤️정운의 결혼식에 여러분을 초대합니다.',
  openGraph: {
    title: '초대합니다',
    description: '성옥❤️정운의 결혼식에 여러분을 초대합니다.',
    images: [
      {
        url: '/images/wedding_img/img_6.jpg',
        width: 1200,
        height: 630,
        alt: '성옥❤️정운 결혼식 초대장',
      },
    ],
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '초대합니다',
    description: '성옥❤️정운의 결혼식에 여러분을 초대합니다.',
    images: ['/images/wedding_img/img_6.jpg'],
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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200..900&family=Tangerine:wght@400;700&family=Waterfall&display=swap" rel="stylesheet"/>
        <script 
          type="text/javascript" 
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ab79b565d2a567a804647a16d8bdbba2&autoload=false"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 페이지 새로고침 시 스크롤을 맨 위로 이동
              window.addEventListener('beforeunload', function() {
                window.scrollTo(0, 0);
              });
              
              // 페이지 로드 시 스크롤을 맨 위로 이동
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}