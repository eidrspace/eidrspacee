// components/SplineBackground.jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function SplineBackground() {
  const hostRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Load viewer only in the browser (avoids "window is not defined")
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await import("@splinetool/viewer"); // registers <spline-viewer>
        if (!cancelled) setReady(true);
      } catch (e) {
        console.error("Failed to load Spline viewer:", e);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  if (!ready) {
    return (
      <div className="absolute inset-0 -z-10 flex items-center justify-center bg-black">
        <div className="animate-pulse text-white/70 text-sm">Loading 3D…</div>
      </div>
    );
  }

  return (
    <spline-viewer
      ref={hostRef}
      // ✅ local asset in /public — served fast, cached by Vercel CDN
      url="/spline/eidr.scene.splinecode"
      loading-anim
      class="absolute inset-0 -z-10"
      style="width:100%; height:100%; display:block;"
    />
  );
}
