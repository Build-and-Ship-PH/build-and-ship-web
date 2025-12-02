'use client';

import { useEffect, useRef, useState } from 'react';
import { Trophy, Target, Zap, Gift } from 'lucide-react';

export const BountiesSection = () => {
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

    const bounties = [
        { min: 2500, max: 2500, label: "Starter Bounties", count: "Multiple" },
        { min: 5000, max: 5000, label: "Challenge Bounties", count: "Several" },
        { min: 7500, max: 7500, label: "Grand Bounties", count: "Limited" },
    ];

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-black border-t border-zinc-800">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Header */}
                    <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="font-mono text-sm text-zinc-500 mb-4">
                            <span className="text-yellow-400">interface</span>
                            <span className="text-white"> Rewards </span>
                            <span className="text-zinc-500">{'{'}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">
                            Prizes & Bounties
                        </h2>
                        <p className="text-lg text-gray-400">
                            Hit the mark, bring it home. Multiple ways to win.
                        </p>
                    </div>

                    {/* Grand Prize */}
                    <div className={`mb-12 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                        <div className="bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent border border-teal-500/30 rounded-2xl p-8 relative overflow-hidden">
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            
                            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                                        <Trophy className="w-10 h-10 text-teal-400" />
                                    </div>
                                    <div>
                                        <div className="font-mono text-sm text-teal-400 mb-1">// First Place</div>
                                        <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-poppins)]">Grand Prize Pool</h3>
                                        <p className="text-gray-400 text-sm">Ship the best product. Take it all.</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-mono text-sm text-zinc-500 mb-1">prize_pool =</div>
                                    <div className="text-5xl md:text-6xl font-bold text-white font-[family-name:var(--font-poppins)]">
                                        ₱20,000
                                    </div>
                                    <div className="text-teal-400 font-mono text-sm mt-1">+ bragging rights</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bounties Grid */}
                    <div className={`mb-12 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                        <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden">
                            {/* Editor tab */}
                            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-950 border-b border-zinc-800">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="text-xs font-mono text-zinc-500 ml-2">bounties.json</span>
                            </div>
                            
                            <div className="p-6 font-mono text-sm">
                                <div className="text-zinc-500 mb-4">{'{'}</div>
                                <div className="pl-4 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-teal-400">"description"</span>
                                        <span className="text-zinc-500">:</span>
                                        <span className="text-green-400">"Sponsor challenges with cash rewards"</span>
                                        <span className="text-zinc-500">,</span>
                                    </div>
                                    <div>
                                        <span className="text-teal-400">"bounties"</span>
                                        <span className="text-zinc-500">: [</span>
                                    </div>
                                    
                                    {bounties.map((bounty, index) => (
                                        <div key={bounty.label} className="pl-4 py-3 border-l-2 border-zinc-800 hover:border-teal-500 transition-colors">
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                                <div className="flex items-center gap-2">
                                                    <Target className="w-4 h-4 text-orange-400" />
                                                    <span className="text-white">{bounty.label}</span>
                                                </div>
                                                <span className="text-zinc-500">→</span>
                                                <span className="text-orange-400 font-bold">₱{bounty.min.toLocaleString()}</span>
                                                <span className="text-zinc-600">// {bounty.count} available</span>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    <div className="text-zinc-500 pl-0">]</div>
                                </div>
                                <div className="text-zinc-500 mt-4">{'}'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom note */}
                    <div className={`flex flex-col md:flex-row items-center justify-center gap-6 text-center ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
                        <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <span className="text-sm text-gray-400">Bounties sponsored by our partners</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                            <Gift className="w-5 h-5 text-teal-400" />
                            <span className="text-sm text-gray-400">More prizes to be announced</span>
                        </div>
                    </div>

                    {/* Closing bracket */}
                    <div className={`text-center mt-12 font-mono text-sm text-zinc-500 ${isVisible ? 'animate-fade-in-up delay-700' : 'opacity-0'}`}>
                        <span className="text-zinc-500">{'}'}</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

