"use client";

import { useDevToolsBlocker } from "@/hooks/useDevToolsBlocker";

export default function DevToolsBlocker() {
  useDevToolsBlocker();
  return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다
}
