'use client';

import { useEffect, useRef, useState } from 'react';
import { Trophy, Coins, Zap, Bell, Target } from 'lucide-react';

export const BountiesChannelSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [bootPhase, setBootPhase] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [typedOutput, setTypedOutput] = useState<number[]>([]);
    const [scanningBounties, setScanningBounties] = useState(false);
    const [bountiesFound, setBountiesFound] = useState(0);
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
            { phase: 1, delay: 200 },
            { phase: 2, delay: 600 },
            { phase: 3, delay: 1000 },
            { phase: 4, delay: 1500 },
            { phase: 5, delay: 2000 },
        ];

        bootSequence.forEach(({ phase, delay }) => {
            setTimeout(() => setBootPhase(phase), delay);
        });

        // Start scanning animation
        setTimeout(() => setScanningBounties(true), 2200);

        // Count up bounties found
        const bountyCountStart = 2500;
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => setBountiesFound(i), bountyCountStart + (i * 400));
        }

        // Show output lines
        const outputDelays = [3500, 3900, 4300, 4700];
        outputDelays.forEach((delay, index) => {
            setTimeout(() => {
                setTypedOutput(prev => [...prev, index]);
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
        { text: "node fetch_bounties.js --channel=#bounties", color: "text-white", prefix: "$", prefixColor: "text-green-400" },
        { text: "Initializing bounty scanner...", color: "text-zinc-500", prefix: ">", prefixColor: "text-yellow-400" },
        { text: "Connecting to Discord API...", color: "text-zinc-400", prefix: ">", prefixColor: "text-yellow-400" },
        { text: "Authenticating with hackathon server...", color: "text-zinc-400", prefix: ">", prefixColor: "text-yellow-400" },
        { text: "Connection established!", color: "text-green-400", prefix: "✓", prefixColor: "text-green-400" },
    ];

    const outputMessages = [
        { icon: Target, text: "Bounty pool loaded", detail: "Multiple challenges available", color: "text-teal-400" },
        { icon: Zap, text: "Live updates enabled", detail: "New bounties drop during hackathon", color: "text-yellow-400" },
        { icon: Bell, text: "Notifications active", detail: "Stay tuned for announcements", color: "text-purple-400" },
    ];

    return (
        <section 
            id="bounties-channel" 
            ref={sectionRef} 
            className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-800"
        >
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                }}
            />

            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl transition-opacity duration-1000 ${bootPhase >= 5 ? 'opacity-100' : 'opacity-0'}`} />
                {/* Floating coins animation - only show after boot */}
                {bootPhase >= 5 && (
                    <>
                        <div className="absolute top-20 left-[20%] text-yellow-500/20 animate-float">
                            <Coins className="w-8 h-8" />
                        </div>
                        <div className="absolute top-40 right-[25%] text-yellow-500/15 animate-float" style={{ animationDelay: '1s' }}>
                            <Coins className="w-6 h-6" />
                        </div>
                        <div className="absolute bottom-32 left-[30%] text-yellow-500/10 animate-float" style={{ animationDelay: '2s' }}>
                            <Coins className="w-10 h-10" />
                        </div>
                    </>
                )}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Header */}
                    <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full font-mono text-sm mb-6">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400">cd ~/discord/#bounties</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">
                            Bounties <span className="text-yellow-400">Await</span> 💰
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Head over to the <code className="text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded font-mono">#bounties</code> channel 
                            on Discord for challenges, prizes, and surprise drops throughout the hackathon.
                        </p>
                    </div>

                    {/* Main Terminal Card */}
                    <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-yellow-500/30 rounded-2xl blur-lg transition-opacity duration-500 ${bootPhase >= 5 ? 'opacity-70 group-hover:opacity-100' : 'opacity-30'} animate-gradient`} />
                            
                            <div className="relative bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                                {/* Terminal header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${bootPhase >= 1 ? 'bg-red-500' : 'bg-red-500/30'}`} />
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${bootPhase >= 3 ? 'bg-yellow-500' : 'bg-yellow-500/30'}`} />
                                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${bootPhase >= 5 ? 'bg-green-500' : 'bg-green-500/30'}`} />
                                    <span className="text-xs font-mono text-zinc-500 ml-2">bounties.ts — node fetch_bounties.js</span>
                                    {bootPhase >= 5 && (
                                        <span className="ml-auto text-xs font-mono text-green-400 animate-pulse">● CONNECTED</span>
                                    )}
                                </div>

                                <div className="p-6 md:p-8 font-mono text-sm min-h-[350px]">
                                    {/* Boot sequence */}
                                    <div className="space-y-1 mb-6">
                                        {bootMessages.map((msg, index) => (
                                            <div 
                                                key={index}
                                                className={`transition-all duration-300 ${bootPhase > index ? 'opacity-100' : 'opacity-0'}`}
                                                style={{ transitionDelay: `${index * 50}ms` }}
                                            >
                                                <span className={`${msg.prefixColor} mr-2`}>{msg.prefix}</span>
                                                <span className={msg.color}>{msg.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Scanning animation */}
                                    {scanningBounties && bootPhase >= 5 && (
                                        <div className="mb-6 border-t border-zinc-800 pt-4">
                                            <div className="flex items-center gap-2 text-yellow-400 mb-3">
                                                <span>→</span>
                                                <span>Scanning #bounties channel...</span>
                                                {bountiesFound < 3 && (
                                                    <div className="flex gap-1 ml-2">
                                                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {/* Progress bar */}
                                            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-4">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500"
                                                    style={{ width: `${(bountiesFound / 3) * 100}%` }}
                                                />
                                            </div>

                                            {bountiesFound >= 3 && (
                                                <div className="text-green-400 flex items-center gap-2">
                                                    <span>✓</span>
                                                    <span>Bounty data loaded successfully</span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Output messages */}
                                    {typedOutput.length > 0 && (
                                        <div className="space-y-3 border-t border-zinc-800 pt-4">
                                            {outputMessages.map((msg, index) => {
                                                const IconComponent = msg.icon;
                                                const isVisible = typedOutput.includes(index);
                                                return (
                                                    <div 
                                                        key={index}
                                                        className={`flex items-start gap-3 p-3 bg-zinc-950/50 rounded-lg border border-zinc-800 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                                    >
                                                        <div className={`w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0`}>
                                                            <IconComponent className={`w-4 h-4 ${msg.color}`} />
                                                        </div>
                                                        <div>
                                                            <div className={`${msg.color} font-semibold`}>{msg.text}</div>
                                                            <div className="text-zinc-500 text-xs">{msg.detail}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* Command prompt */}
                                    {typedOutput.length >= 3 && (
                                        <div className="mt-6 pt-4 border-t border-zinc-800">
                                            <div className="flex items-center gap-2 text-zinc-400">
                                                <span className="text-green-400">bounty-hunter@ship</span>
                                                <span className="text-zinc-600">:</span>
                                                <span className="text-yellow-400">~/discord/#bounties</span>
                                                <span className="text-zinc-600">$</span>
                                                <span className={`w-2 h-5 bg-yellow-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Loading state before content */}
                                    {bootPhase > 0 && bootPhase < 5 && (
                                        <div className="flex items-center gap-2 text-zinc-500">
                                            <div className="flex gap-1">
                                                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className={`mt-8 text-center transition-all duration-500 ${typedOutput.length >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-zinc-500 font-mono text-sm">
                            <span className="text-zinc-600">// </span>
                            <span className="text-yellow-400/70">Pro tip:</span>
                            <span className="text-zinc-400"> First come, first served. Be fast, be bold.</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
