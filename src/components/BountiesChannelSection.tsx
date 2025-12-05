'use client';

import { useEffect, useRef, useState } from 'react';
import { Trophy, Coins } from 'lucide-react';

export const BountiesChannelSection = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    return (
        <section 
            id="bounties-channel" 
            ref={sectionRef} 
            className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-800"
        >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />
                {/* Floating coins animation */}
                <div className="absolute top-20 left-[20%] text-yellow-500/20 animate-float">
                    <Coins className="w-8 h-8" />
                </div>
                <div className="absolute top-40 right-[25%] text-yellow-500/15 animate-float" style={{ animationDelay: '1s' }}>
                    <Coins className="w-6 h-6" />
                </div>
                <div className="absolute bottom-32 left-[30%] text-yellow-500/10 animate-float" style={{ animationDelay: '2s' }}>
                    <Coins className="w-10 h-10" />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Header */}
                    <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
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
                    <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-yellow-500/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity animate-gradient" />
                            
                            <div className="relative bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-hidden">
                                {/* Terminal header */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="text-xs font-mono text-zinc-500 ml-2">bounties.ts — node fetch_bounties.js</span>
                                </div>

                                <div className="p-6 md:p-8">
                                    {/* Command */}
                                    <div className="font-mono text-sm mb-6">
                                        <div className="flex items-center gap-2 text-zinc-400 mb-2">
                                            <span className="text-green-400">$</span>
                                            <span className="text-white">node fetch_bounties.js --channel=#bounties</span>
                                        </div>
                                        <div className="text-zinc-500">
                                            <span className="text-yellow-400">→</span> Connecting to hackathon server...
                                        </div>
                                    </div>

                                    {/* Output */}
                                    <div className="font-mono text-sm border-t border-zinc-800 pt-4">
                                        <div className="flex items-center gap-2 text-green-400 mb-2">
                                            <span>✓</span>
                                            <span>Connected to #bounties channel</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-zinc-400">
                                            <span className="text-yellow-400">⚡</span>
                                            <span className="text-zinc-300">New bounties are announced live during the hackathon</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-zinc-500 mt-2">
                                            <span className="text-zinc-600">ℹ</span>
                                            <span>Stay tuned and keep your notifications on!</span>
                                        </div>
                                    </div>

                                    {/* Cursor */}
                                    <div className="flex items-center gap-2 text-zinc-400 mt-4">
                                        <span className="text-green-400">$</span>
                                        <span className="w-2 h-5 bg-yellow-400 animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className={`mt-8 text-center ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
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

