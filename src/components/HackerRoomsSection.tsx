'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Sparkles, Terminal, Hash, Volume2, Lock } from 'lucide-react';

export const HackerRoomsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [bootPhase, setBootPhase] = useState(0);
    const [typedLines, setTypedLines] = useState<number[]>([]);
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

    // Boot sequence animation
    useEffect(() => {
        if (!isVisible) return;

        const bootSequence = [
            { phase: 1, delay: 300 },   // Initialize
            { phase: 2, delay: 800 },   // Loading
            { phase: 3, delay: 1400 },  // Connecting
            { phase: 4, delay: 2000 },  // Ready
            { phase: 5, delay: 2500 },  // Show content
        ];

        bootSequence.forEach(({ phase, delay }) => {
            setTimeout(() => setBootPhase(phase), delay);
        });

        // Type out lines one by one
        const lineDelays = [2800, 3200, 3600, 4000];
        lineDelays.forEach((delay, index) => {
            setTimeout(() => {
                setTypedLines(prev => [...prev, index]);
            }, delay);
        });
    }, [isVisible]);

    // Blinking cursor
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    const bootMessages = [
        { text: "Initializing hacker_rooms.exe...", color: "text-zinc-500" },
        { text: "Loading Discord modules...", color: "text-zinc-400" },
        { text: "Connecting to hackathon server...", color: "text-teal-400" },
        { text: "Connection established ✓", color: "text-green-400" },
    ];

    const roomFeatures = [
        {
            icon: Users,
            title: "All participants are",
            highlight: "hackers",
            highlightColor: "text-teal-400",
            desc: "Every registered team member gets the hacker role automatically",
            iconBg: "bg-teal-500/10 border-teal-500/20",
            iconColor: "text-teal-400"
        },
        {
            icon: Terminal,
            title: "Select",
            highlight: "1 Room Master",
            highlightColor: "text-orange-400",
            desc: "The Room Master creates and manages your private hacker room",
            iconBg: "bg-orange-500/10 border-orange-500/20",
            iconColor: "text-orange-400"
        },
        {
            icon: Hash,
            title: "Private",
            highlight: "text + voice",
            highlightColor: "text-purple-400",
            desc: "Coordinate, share screens, and hack together in real-time",
            iconBg: "bg-purple-500/10 border-purple-500/20",
            iconColor: "text-purple-400"
        }
    ];

    return (
        <section 
            id="hacker-rooms" 
            ref={sectionRef} 
            className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-800"
        >
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                }}
            />

            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-1/3 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl transition-opacity duration-1000 ${bootPhase >= 4 ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl transition-opacity duration-1000 ${bootPhase >= 5 ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Header */}
                    <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full font-mono text-sm mb-6">
                            <Lock className="w-4 h-4 text-teal-400" />
                            <span className="text-teal-400">Private Team Spaces</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">
                            Hacker <span className="text-teal-400">Rooms</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Your private team space on Discord. Collaborate, strategize, and hack together.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        
                        {/* Console Terminal - How it works */}
                        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden h-full shadow-2xl shadow-black/50">
                                {/* Terminal header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${bootPhase >= 1 ? 'bg-red-500' : 'bg-red-500/30'}`} />
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${bootPhase >= 2 ? 'bg-yellow-500' : 'bg-yellow-500/30'}`} />
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${bootPhase >= 4 ? 'bg-green-500' : 'bg-green-500/30'}`} />
                                    <span className="text-xs font-mono text-zinc-500 ml-2">hacker_rooms.exe</span>
                                    {bootPhase >= 4 && (
                                        <span className="ml-auto text-xs font-mono text-green-400 animate-pulse">● LIVE</span>
                                    )}
                                </div>

                                <div className="p-6 font-mono text-sm min-h-[400px]">
                                    {/* Boot sequence */}
                                    <div className="space-y-1 mb-6">
                                        {bootMessages.map((msg, index) => (
                                            <div 
                                                key={index}
                                                className={`transition-all duration-300 ${bootPhase > index ? 'opacity-100' : 'opacity-0'}`}
                                                style={{ transitionDelay: `${index * 100}ms` }}
                                            >
                                                <span className="text-green-400 mr-2">{'>'}</span>
                                                <span className={msg.color}>{msg.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Main content after boot */}
                                    {bootPhase >= 5 && (
                                        <>
                                            <div className="border-t border-zinc-800 pt-4 mb-4">
                                                <div className="text-zinc-600 mb-4 flex items-center gap-2">
                                                    <span className="text-teal-400">#</span> 
                                                    <span className="typing-animation">How Hacker Rooms Work</span>
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-5">
                                                {roomFeatures.map((feature, index) => {
                                                    const IconComponent = feature.icon;
                                                    const isTyped = typedLines.includes(index);
                                                    return (
                                                        <div 
                                                            key={index}
                                                            className={`flex items-start gap-4 group transition-all duration-500 ${isTyped ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                                        >
                                                            <div className={`w-10 h-10 rounded-lg ${feature.iconBg} flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-110`}>
                                                                <IconComponent className={`w-5 h-5 ${feature.iconColor}`} />
                                                            </div>
                                                            <div>
                                                                <div className="text-white mb-1 text-base">
                                                                    {feature.title} <span className={`${feature.highlightColor} font-semibold`}>{feature.highlight}</span>
                                                                </div>
                                                                <div className="text-zinc-500 text-sm">{feature.desc}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Command prompt */}
                                            <div className="mt-6 pt-4 border-t border-zinc-800">
                                                <div className="flex items-center gap-2 text-zinc-400">
                                                    <span className="text-green-400">hacker@ship</span>
                                                    <span className="text-zinc-600">:</span>
                                                    <span className="text-blue-400">~</span>
                                                    <span className="text-zinc-600">$</span>
                                                    <span className={`w-2 h-5 bg-teal-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {/* Loading state */}
                                    {bootPhase < 5 && bootPhase > 0 && (
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

                        {/* Secret Codes Card */}
                        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="relative group h-full">
                                {/* Glow effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-orange-500/20 rounded-xl blur transition-opacity duration-1000 ${bootPhase >= 5 ? 'opacity-70 group-hover:opacity-100' : 'opacity-0'}`} />
                                
                                <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/70 border border-orange-500/30 rounded-xl overflow-hidden h-full">
                                    {/* Terminal header */}
                                    <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950/80 border-b border-orange-500/20">
                                        <Sparkles className={`w-4 h-4 text-orange-400 ${bootPhase >= 5 ? 'animate-pulse' : 'opacity-30'}`} />
                                        <span className="text-xs font-mono text-orange-400">SECRET_CODES.env</span>
                                        <span className="ml-auto text-xs font-mono text-zinc-600">// 🤫 shhh...</span>
                                    </div>

                                    <div className="p-6 font-mono text-sm">
                                        {bootPhase >= 5 ? (
                                            <>
                                                {/* Decrypting animation */}
                                                <div className="mb-4 text-zinc-500">
                                                    <span className="text-orange-400">{'>'}</span> Decrypting secrets...
                                                    <span className="text-green-400 ml-2">done</span>
                                                </div>

                                                <div className="mb-4">
                                                    <span className="text-zinc-600"># </span>
                                                    <span className="text-orange-400">Easter eggs await...</span>
                                                </div>
                                                
                                                <p className="text-zinc-400 text-sm mb-6">
                                                    We've hidden some surprises in the Discord bot. Room Masters can try these cheat codes in their hacker rooms:
                                                </p>

                                                <div className="space-y-4">
                                                    <div className={`flex items-center gap-3 p-4 bg-zinc-950/50 rounded-lg border border-zinc-800 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02] group/code ${typedLines.includes(0) ? 'opacity-100' : 'opacity-0'}`}>
                                                        <div className="font-mono">
                                                            <span className="text-green-400">$</span>
                                                            <code className="text-white ml-2 bg-green-500/10 px-3 py-1.5 rounded text-base glitch-text">!hesoyam</code>
                                                        </div>
                                                        <span className="text-zinc-500 text-sm ml-auto">// 💰 ???</span>
                                                    </div>

                                                    <div className={`flex items-center gap-3 p-4 bg-zinc-950/50 rounded-lg border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:scale-[1.02] group/code ${typedLines.includes(1) ? 'opacity-100' : 'opacity-0'}`}>
                                                        <div className="font-mono">
                                                            <span className="text-green-400">$</span>
                                                            <code className="text-white ml-2 bg-pink-500/10 px-3 py-1.5 rounded text-base glitch-text">!rosebud</code>
                                                        </div>
                                                        <span className="text-zinc-500 text-sm ml-auto">// 🌹 ???</span>
                                                    </div>
                                                </div>

                                                <div className={`mt-6 flex items-center gap-2 text-xs font-mono text-zinc-600 border-t border-zinc-800 pt-4 ${typedLines.includes(2) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                                                    <Volume2 className="w-4 h-4" />
                                                    <span>More codes may be revealed during the hackathon...</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex items-center justify-center h-64 text-zinc-600">
                                                <div className="text-center">
                                                    <Lock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                                    <span className="text-sm">Encrypted</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                }
                .typing-animation {
                    overflow: hidden;
                    white-space: nowrap;
                    animation: typing 0.5s steps(25, end);
                }
                .glitch-text:hover {
                    animation: glitch 0.3s ease-in-out;
                }
                @keyframes glitch {
                    0%, 100% { transform: translateX(0); }
                    20% { transform: translateX(-2px); }
                    40% { transform: translateX(2px); }
                    60% { transform: translateX(-1px); }
                    80% { transform: translateX(1px); }
                }
            `}</style>
        </section>
    );
};
