'use client';

import { memo } from 'react';

interface DawnOverlayProps {
  opacity: number;
}

const DawnOverlay = memo(({ opacity }: DawnOverlayProps) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 transition-opacity duration-300 ease-in-out"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #000000 20%, #1a0a2e 30%, #3D1C51 50%, #8848b4 80%, #D7798B 100%)',
        opacity,
      }}
    />
  );
});

DawnOverlay.displayName = 'DawnOverlay';

export default DawnOverlay;
