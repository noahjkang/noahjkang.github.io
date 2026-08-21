"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configuration for smooth following (reduced latency)
  const springConfig = { damping: 28, stiffness: 800, mass: 0.25 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [cursorVariant, setCursorVariant] = useState<"default" | "text" | "interactive">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const interactive = target.closest('a, button, input, textarea, select');
      const text = target.closest('p, h1, h2, h3, h4, h5, h6, span, li, label');
      
      if (interactive) {
        setCursorVariant("interactive");
        const rect = interactive.getBoundingClientRect();
        
        if (rect.width < 150 && rect.height < 100) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const distanceX = e.clientX - centerX;
          const distanceY = e.clientY - centerY;
          
          cursorX.set(centerX + distanceX * 0.1);
          cursorY.set(centerY + distanceY * 0.1);
        } else {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
        }
      } else if (text) {
        setCursorVariant("text");
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      } else {
        setCursorVariant("default");
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(style);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius: "9999px",
    },
    text: {
      width: 4,
      height: 28,
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderRadius: "9999px",
    },
    interactive: {
      width: 48,
      height: 48,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1.5px solid rgba(255, 255, 255, 1)",
      borderRadius: "9999px",
    }
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
}
