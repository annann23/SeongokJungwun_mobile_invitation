"use client";

import { useEffect } from "react";

export const useDevToolsBlocker = () => {
  useEffect(() => {
    // 개발자도구 감지 및 차단
    const detectDevTools = () => {
      // 콘솔을 통한 감지
      const devtools = {
        open: false,
        orientation: null as string | null,
      };

      const threshold = 160;

      setInterval(() => {
        if (
          window.outerHeight - window.innerHeight > threshold ||
          window.outerWidth - window.innerWidth > threshold
        ) {
          if (!devtools.open) {
            devtools.open = true;
            // 개발자도구가 열렸을 때 경고 페이지로 대체
            showDevToolsWarning();
          }
        } else {
          devtools.open = false;
        }
      }, 500);

      // 콘솔 경고 메시지
      console.clear();
      console.log(
        "%c⚠️ 개발자도구 사용이 감지되었습니다.",
        "color: #ff0000; font-size: 20px; font-weight: bold;"
      );
      console.log(
        "%c이 페이지는 보안을 위해 개발자도구 사용을 제한합니다.",
        "color: #ff0000; font-size: 14px;"
      );

      // 콘솔 메서드 오버라이드
      const noop = () => {};
      console.log = noop;
      console.warn = noop;
      console.error = noop;
      console.info = noop;
      console.debug = noop;
      console.table = noop;
      console.trace = noop;
      console.group = noop;
      console.groupEnd = noop;
      console.time = noop;
      console.timeEnd = noop;
      console.count = noop;
      console.clear = noop;
    };

    // 개발자도구 경고 페이지 표시
    const showDevToolsWarning = () => {
      document.body.innerHTML = `
        <div style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: white;
          text-align: center;
          z-index: 999999;
        ">
          <div style="
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 60px 40px;
            max-width: 500px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          ">
            <div style="
              font-size: 48px;
              margin-bottom: 20px;
              animation: pulse 2s infinite;
            ">⚠️</div>
            
            <h1 style="
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 20px;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            ">개발자도구 사용이 감지되었습니다</h1>
            
            <p style="
              font-size: 16px;
              line-height: 1.6;
              opacity: 0.9;
              margin-bottom: 30px;
            ">이 페이지는 보안을 위해 개발자도구 사용을 제한합니다.<br>
            개발자도구를 닫고 페이지를 새로고침해주세요.</p>
            
            <button onclick="window.location.reload()" style="
              background: rgba(255, 255, 255, 0.2);
              border: 2px solid rgba(255, 255, 255, 0.3);
              color: black;
              padding: 12px 30px;
              border-radius: 25px;
              font-size: 16px;
              cursor: pointer;
              transition: all 0.3s ease;
              backdrop-filter: blur(10px);
            " onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'" 
               onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'">
              페이지 새로고침
            </button>
          </div>
        </div>
        
        <style>
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
        </style>
      `;
    };

    // 우클릭은 차단되지 않지만 복사 기능은 정상 작동

    // 개발자도구 관련 키보드 단축키만 차단
    const blockKeyboardShortcuts = (e: KeyboardEvent) => {
      // F12, 개발자도구 열기 단축키만 차단
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I (개발자도구)
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J (콘솔)
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C (요소 선택)
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U (소스보기)
        (e.metaKey && e.keyCode === 73) || // Cmd+I (Mac 개발자도구)
        (e.metaKey && e.keyCode === 74) || // Cmd+J (Mac 콘솔)
        (e.metaKey && e.keyCode === 85) || // Cmd+U (Mac 소스보기)
        (e.metaKey && e.altKey && e.keyCode === 73) // Cmd+Alt+I (Mac 개발자도구)
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 텍스트 선택은 자유롭게 허용 (개발자도구 차단만 유지)

    // 드래그도 허용 (이미지 드래그로 저장 방지하지 않음)

    // 개발자도구 감지 시작
    detectDevTools();

    // 이벤트 리스너 등록 (개발자도구 관련만)
    document.addEventListener("keydown", blockKeyboardShortcuts);

    // 정리 함수
    return () => {
      document.removeEventListener("keydown", blockKeyboardShortcuts);
    };
  }, []);
};
