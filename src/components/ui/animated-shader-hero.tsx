"use client"

import React, { useState, useEffect } from 'react';

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

// Typewriter effect component with styled segments
const TypewriterHeadline = ({ delay = 0 }: { delay?: number }) => {
  const fullText = "Ship or be Shipped";
  const [displayedLength, setDisplayedLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedLength < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedLength(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [displayedLength, hasStarted]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const displayedText = fullText.slice(0, displayedLength);
  
  // Split into parts for styling: "Ship or be " (white) + "Shipped" (orange)
  const whitePartEnd = 11; // "Ship or be " length
  const whitePart = displayedText.slice(0, Math.min(displayedLength, whitePartEnd));
  const orangePart = displayedLength > whitePartEnd ? displayedText.slice(whitePartEnd) : "";

  return (
    <span>
      <span className="text-white">{whitePart}</span>
      <span className="text-orange-400">{orangePart}</span>
      {!isComplete && (
        <span 
          className={`inline-block w-[4px] h-[0.85em] ml-1 align-middle bg-teal-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} 
          style={{ transition: 'opacity 0.1s' }}
        />
      )}
    </span>
  );
};

// Simple typewriter for subtitle
const TypewriterText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedLength < text.length) {
      const timer = setTimeout(() => {
        setDisplayedLength(prev => prev + 1);
      }, 60);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [displayedLength, text, hasStarted]);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {text.slice(0, displayedLength)}
      {!isComplete && (
        <span 
          className={`inline-block w-[3px] h-[0.85em] ml-1 align-middle bg-teal-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 0.1s' }}
        />
      )}
    </span>
  );
};

// Countdown component
const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 md:gap-6">
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center">
            <div className="relative">
              <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-poppins)] tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent blur-xl -z-10" />
            </div>
            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-2">{unit.label}</span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-2xl md:text-4xl text-zinc-600 font-light self-start mt-2">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({
  headline,
  subtitle,
  buttons,
  className = ""
}) => {
  // December 5, 2025 7:00 PM PHT
  const eventDate = new Date('2025-12-05T19:00:00+08:00');

  return (
    <div className={`relative w-full min-h-screen overflow-hidden bg-black ${className}`}>
      {/* Gradient cloud background */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
        
        {/* Animated gradient clouds */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large soft cloud - top left */}
          <div 
            className="absolute -top-1/4 -left-1/4 w-[900px] h-[900px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(20,184,166,0.5) 0%, rgba(20,184,166,0.2) 40%, transparent 70%)',
              animation: 'float 20s ease-in-out infinite',
              filter: 'blur(40px)',
            }}
          />
          
          {/* Medium cloud - top right */}
          <div 
            className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)',
              animation: 'float 25s ease-in-out infinite reverse',
              animationDelay: '-5s',
              filter: 'blur(40px)',
            }}
          />
          
          {/* Bottom center glow */}
          <div 
            className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(20,184,166,0.45) 0%, rgba(20,184,166,0.15) 40%, transparent 65%)',
              animation: 'pulse 8s ease-in-out infinite',
              filter: 'blur(60px)',
            }}
          />
          
          {/* Mid-left floating cloud */}
          <div 
            className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 60%)',
              animation: 'float 18s ease-in-out infinite',
              animationDelay: '-8s',
              filter: 'blur(50px)',
            }}
          />
          
          {/* Accent coral/orange cloud for depth */}
          <div 
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(251,146,60,0.35) 0%, transparent 60%)',
              animation: 'float 15s ease-in-out infinite',
              animationDelay: '-10s',
              filter: 'blur(50px)',
            }}
          />
          
          {/* Secondary teal cloud - bottom right */}
          <div 
            className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(20,184,166,0.4) 0%, transparent 60%)',
              animation: 'float 22s ease-in-out infinite reverse',
              animationDelay: '-3s',
              filter: 'blur(40px)',
            }}
          />
        </div>

        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 pt-20">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          
          {/* Terminal-style headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-700 rounded-lg mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-zinc-500 font-mono ml-2">hackathon.sh</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-poppins)]">
              <TypewriterHeadline delay={800} />
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-teal-400 font-[family-name:var(--font-poppins)]">
              <TypewriterText text={headline.line2} delay={2500} />
            </h2>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '3.5s' }}>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '3.5s', animationFillMode: 'forwards' }}>
              {subtitle}
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="py-8 opacity-0 animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Event starts in</p>
            <Countdown targetDate={eventDate} />
            <p className="text-sm text-teal-400 mt-6 font-medium">December 5, 2025 • 7:00 PM PHT</p>
          </div>

          {/* CTA Buttons */}
          {buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 opacity-0 animate-fade-in" style={{ animationDelay: '4.5s', animationFillMode: 'forwards' }}>
              {buttons.primary && (
                <button
                  onClick={buttons.primary.onClick}
                  className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
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

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
