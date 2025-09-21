'use client';

import { memo } from 'react';

const DawnOverlay = memo(() => {
  return (
    <div
      className="absolute top-[100lvh] left-0 w-full h-[1200px] pointer-events-none z-20 transition-opacity duration-300 ease-in-out"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #1a0a2e 40%, #3D1C51 60%, #8848b4 80%, #D7798B 100%)',
        opacity: 0.8
      }}
    />
  );
});

DawnOverlay.displayName = 'DawnOverlay';

export default DawnOverlay;
