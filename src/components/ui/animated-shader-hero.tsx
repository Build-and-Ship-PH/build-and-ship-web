"use client"

import React from 'react';

interface HeroProps {
  headline: {
    line1: string;
    line2: string;
  };
  subtitle: string;
  buttons?: {
    primary?: {
      text: string;
      onClick?: () => void;
    };
    secondary?: {
      text: string;
      onClick?: () => void;
    };
  };
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subtitle,
  buttons,
  className = ""
}) => {
  return (
    <div className={`relative w-full min-h-screen overflow-hidden bg-black ${className}`}>
      {/* Animated gradient background - CSS only, no WebGL */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white animate-fade-in-up font-[family-name:var(--font-poppins)]">
              {headline.line1}
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-teal-400 animate-fade-in-up delay-200 font-[family-name:var(--font-poppins)]">
              {headline.line2}
            </h2>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto animate-fade-in-up delay-400">
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          {buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up delay-600">
              {buttons.primary && (
                <button
                  onClick={buttons.primary.onClick}
                  className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  {buttons.primary.text}
                </button>
              )}
              {buttons.secondary && (
                <button
                  onClick={buttons.secondary.onClick}
                  className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-teal-500 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  {buttons.secondary.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
