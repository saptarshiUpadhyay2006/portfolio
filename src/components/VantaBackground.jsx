import { useEffect, useRef } from "react";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min";

export const VantaBackground = ({ opacity = 0.5, className }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect = null;
    const dotsEffect = typeof DOTS === 'function' ? DOTS : (DOTS && DOTS.default ? DOTS.default : null);
    
    if (dotsEffect && vantaRef.current) {
      try {
        effect = dotsEffect({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x20ffe4,
          color2: 0x20e4ff,
          backgroundColor: 0x0f1418,
          backgroundAlpha: 0.0, // Make WebGL canvas transparent to show background image and grid lines
        });
      } catch (err) {
        console.error("Failed to initialize Vanta DOTS effect:", err);
      }
    } else {
      console.error("Vanta DOTS effect module could not be resolved:", DOTS);
    }

    // Standard ResizeObserver to handle dynamic height calculations during React lifecycle mounts
    const resizeObserver = new ResizeObserver(() => {
      if (effect && typeof effect.resize === "function") {
        try {
          effect.resize();
        } catch (e) {
          // Ignore resize draw context errors
        }
      }
    });

    if (vantaRef.current) {
      resizeObserver.observe(vantaRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      if (effect) {
        try {
          effect.destroy();
        } catch (err) {
          console.warn("Cleaned up Vanta background effect wrapper safely:", err.message);
        }
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className={className || "absolute inset-0 w-full h-full pointer-events-none"}
      style={{ opacity }}
    />
  );
};
