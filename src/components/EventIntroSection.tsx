'use client';

import { useEffect, useRef, useState } from 'react';
import { HelpCircle, Lightbulb, Rocket, Code2 } from 'lucide-react';

export const EventIntroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [bootPhase, setBootPhase] = useState(0);
    const [showQuestion, setShowQuestion] = useState(false);
    const [glitchText, setGlitchText] = useState(false);
    const [showCursor, setShowCursor] = useState(true);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Boot sequence
    useEffect(() => {
        if (!isVisible) return;

        const sequence = [
            { phase: 1, delay: 300 },
            { phase: 2, delay: 800 },
            { phase: 3, delay: 1300 },
            { phase: 4, delay: 1800 },
            { phase: 5, delay: 2300 },
            { phase: 6, delay: 2800 },
        ];

        sequence.forEach(({ phase, delay }) => {
            setTimeout(() => setBootPhase(phase), delay);
        });

        // Show the big question
        setTimeout(() => setShowQuestion(true), 3300);

        // Glitch effect
        setTimeout(() => {
            setGlitchText(true);
            setTimeout(() => setGlitchText(false), 200);
        }, 3500);
    }, [isVisible]);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    const bootLines = [
        { text: "Loading event parameters...", color: "text-zinc-500" },
        { text: "Initializing hackathon.config", color: "text-zinc-400" },
        { text: "Setting year: 2026", color: "text-teal-400" },
        { text: "Compiling future.dev", color: "text-zinc-400" },
        { text: "Injecting chaos...", color: "text-orange-400" },
        { text: "Ready.", color: "text-green-400" },
    ];

    return (
        <section 
            id="event-intro" 
            ref={sectionRef} 
            className="py-32 relative overflow-hidden bg-black border-t border-zinc-800"
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div 
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Glowing orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl transition-opacity duration-1000 ${bootPhase >= 3 ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl transition-opacity duration-1000 ${bootPhase >= 5 ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Terminal window */}
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                                <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${bootPhase >= 1 ? 'bg-red-500' : 'bg-red-500/30'}`} />
                                <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${bootPhase >= 3 ? 'bg-yellow-500' : 'bg-yellow-500/30'}`} />
                                <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${bootPhase >= 6 ? 'bg-green-500' : 'bg-green-500/30'}`} />
                                <span className="text-xs font-mono text-zinc-500 ml-2">event_brief.sh — bash</span>
                                {bootPhase >= 6 && (
                                    <span className="ml-auto text-xs font-mono text-orange-400">⚠ CLASSIFIED</span>
                                )}
                            </div>

                            <div className="p-8 font-mono text-sm min-h-[400px]">
                                {/* Boot sequence */}
                                <div className="space-y-1 mb-8">
                                    {bootLines.map((line, index) => (
                                        <div 
                                            key={index}
                                            className={`transition-all duration-300 ${bootPhase > index ? 'opacity-100' : 'opacity-0'}`}
                                        >
                                            <span className="text-green-400 mr-2">{'>'}</span>
                                            <span className={line.color}>{line.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Main content after boot */}
                                {showQuestion && (
                                    <div className="border-t border-zinc-800 pt-8">
                                        {/* The big question */}
                                        <div className="text-center mb-8">
                                            <div className="text-zinc-600 font-mono text-xs mb-4 tracking-widest">
                                                // EVENT_TOPIC.md
                                            </div>
                                            <h2 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight font-[family-name:var(--font-poppins)] ${glitchText ? 'animate-pulse' : ''}`}>
                                                <span className="text-white">Ship or Be Shipped:</span>
                                                <br />
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400">
                                                    What is Development
                                                </span>
                                                <br />
                                                <span className="text-orange-400">for 2026?</span>
                                            </h2>
                                        </div>

                                        {/* Mystery hints */}
                                        <div className="grid md:grid-cols-3 gap-4 mb-8">
                                            <div className="p-4 bg-zinc-950/50 rounded-lg border border-zinc-800 text-center group hover:border-teal-500/50 transition-all duration-300">
                                                <HelpCircle className="w-8 h-8 text-teal-400/50 mx-auto mb-2 group-hover:text-teal-400 transition-colors" />
                                                <div className="text-zinc-500 text-xs">What will you build?</div>
                                            </div>
                                            <div className="p-4 bg-zinc-950/50 rounded-lg border border-zinc-800 text-center group hover:border-orange-500/50 transition-all duration-300">
                                                <Lightbulb className="w-8 h-8 text-orange-400/50 mx-auto mb-2 group-hover:text-orange-400 transition-colors" />
                                                <div className="text-zinc-500 text-xs">How will you adapt?</div>
                                            </div>
                                            <div className="p-4 bg-zinc-950/50 rounded-lg border border-zinc-800 text-center group hover:border-purple-500/50 transition-all duration-300">
                                                <Rocket className="w-8 h-8 text-purple-400/50 mx-auto mb-2 group-hover:text-purple-400 transition-colors" />
                                                <div className="text-zinc-500 text-xs">Will you ship in time?</div>
                                            </div>
                                        </div>

                                        {/* Cryptic message */}
                                        <div className="text-center p-6 bg-zinc-950/30 rounded-lg border border-dashed border-zinc-700">
                                            <Code2 className="w-6 h-6 text-zinc-600 mx-auto mb-3" />
                                            <p className="text-zinc-400 text-sm italic mb-2">
                                                "The answer is not given. It must be built."
                                            </p>
                                            <p className="text-zinc-600 text-xs font-mono">
                                                // Your interpretation. Your solution. Your future.
                                            </p>
                                        </div>

                                        {/* Command prompt */}
                                        <div className="mt-8 pt-4 border-t border-zinc-800">
                                            <div className="flex items-center gap-2 text-zinc-400">
                                                <span className="text-green-400">hacker@2026</span>
                                                <span className="text-zinc-600">:</span>
                                                <span className="text-teal-400">~/future</span>
                                                <span className="text-zinc-600">$</span>
                                                <span className="text-zinc-500 ml-1">define --future</span>
                                                <span className={`w-2 h-5 bg-teal-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Loading state */}
                                {!showQuestion && bootPhase > 0 && (
                                    <div className="flex items-center gap-2 text-zinc-500">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom hint */}
                    <div className={`mt-8 text-center transition-all duration-500 ${showQuestion ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-zinc-600 font-mono text-xs">
                            <span className="text-zinc-700">{'/*'}</span>
                            <span className="text-zinc-500 mx-2">Prepare to defend your vision</span>
                            <span className="text-zinc-700">{'*/'}</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

