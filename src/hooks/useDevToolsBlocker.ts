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
            // 개발자도구가 열렸을 때 페이지 새로고침
            window.location.reload();
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
