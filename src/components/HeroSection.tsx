"use client";

import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '50vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Spline
        style={{
          width: '100%',
          height: '50vh',
          pointerEvents: 'auto',
        }}
        scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50vh',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}


function HeroContent() {
  return (
    <div className="text-white px-4 max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start lg:items-center py-16">

      <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-wide">
          Noah Kang
        </h1>
        <div className="text-sm text-gray-300 opacity-90 mt-4">
          Math & Computer Science @ UIUC
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20" style={{ backgroundColor: 'rgba(13, 13, 24, 0.3)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderRadius: '0 0 0.75rem 0.75rem' }}>
      <div className="max-w-screen-xl mx-auto px-4 w-full py-4 flex items-center justify-start">
        <div className="hidden md:flex items-center space-x-6">
          <a href="/bio" className="text-gray-300 hover:text-white text-sm transition duration-150">Bio</a>
          <a href="#experience" className="text-gray-300 hover:text-white text-sm transition duration-150">Work Experience</a>
          <a href="#projects" className="text-gray-300 hover:text-white text-sm transition duration-150">Projects</a>
          <a href="#education" className="text-gray-300 hover:text-white text-sm transition duration-150">Education</a>
          <a href="/contact" className="text-gray-300 hover:text-white text-sm transition duration-150">Contact</a>
        </div>
      </div>
    </nav>
  );
}

const HeroSection = ({ children }: { children: React.ReactNode }) => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <Navbar />

      <div className="relative min-h-[50vh]">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '50vh',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
        }}>
          <HeroContent />
        </div>
      </div>

      <div className="bg-black relative z-10 w-full">
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export { HeroSection }
