'use client';

import { memo } from 'react';

const DawnOverlay = memo(() => {
  return (
    <div
      className="absolute top-[100lvh] left-0 w-full h-[1200px] pointer-events-none z-20 transition-opacity duration-300 ease-in-out"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(26,10,46,0.4) 40%, rgba(61, 28, 81, 0.6) 60%, rgba(136, 72, 180, 0.8) 80%, rgba(215,121,139,1) 100%)',
        opacity: 0.8
      }}
    />
  );
});

DawnOverlay.displayName = 'DawnOverlay';

export default DawnOverlay;
