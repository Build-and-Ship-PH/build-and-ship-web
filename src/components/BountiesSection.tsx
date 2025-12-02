'use client';

import { useEffect, useRef, useState } from 'react';
import { Trophy, ChevronRight } from 'lucide-react';

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

    return (
        <section id="bounties" ref={sectionRef} className="py-32 relative overflow-hidden bg-black border-t border-zinc-800">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Header */}
                    <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="font-mono text-sm text-zinc-500 mb-4">
                            <span className="text-zinc-600">{'// '}</span>
                            <span className="text-teal-400">rewards</span>
                            <span className="text-zinc-600">.config.ts</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">
                            Prizes & Bounties
                        </h2>
                        <p className="text-lg text-gray-400">
                            Hit the mark, bring it home. Multiple ways to win.
                        </p>
                    </div>

                    {/* Terminal Window */}
                    <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                        <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="text-xs font-mono text-zinc-500 ml-2">prizes — node rewards.js</span>
                            </div>
                            
                            {/* Terminal content */}
                            <div className="p-6 font-mono text-sm space-y-6">
                                
                                {/* Command */}
                                <div className="flex items-center gap-2 text-zinc-400">
                                    <span className="text-green-400">$</span>
                                    <span className="text-white">node rewards.js --list-all</span>
                                </div>

                                {/* Output header */}
                                <div className="text-zinc-500">
                                    <span className="text-teal-400">→</span> Fetching prize pool...
                                </div>

                                {/* Grand Prize */}
                                <div className="border border-teal-500/30 bg-teal-500/5 rounded-lg p-6">
                                    <div className="flex items-center gap-2 text-teal-400 mb-3">
                                        <ChevronRight className="w-4 h-4" />
                                        <span>GRAND_PRIZE</span>
                                    </div>
                                    <div className="pl-6 space-y-2">
                                        <div className="flex items-center gap-3">
                                            <Trophy className="w-6 h-6 text-yellow-400" />
                                            <span className="text-zinc-400">position:</span>
                                            <span className="text-orange-400">"1st Place"</span>
                                        </div>
                                        <div>
                                            <span className="text-zinc-400">amount:</span>
                                            <span className="text-green-400 text-3xl font-bold ml-2">₱20,000</span>
                                        </div>
                                        <div>
                                            <span className="text-zinc-400">bonus:</span>
                                            <span className="text-zinc-300 ml-2">"bragging_rights"</span>
                                            <span className="text-zinc-600 ml-2">// forever</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bounties output */}
                                <div className="text-zinc-500">
                                    <span className="text-teal-400">→</span> Loading bounties from sponsors...
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <ChevronRight className="w-4 h-4 text-teal-400" />
                                        <span>BOUNTIES[]</span>
                                    </div>
                                    
                                    {/* Bounty items */}
                                    <div className="pl-6 space-y-4">
                                        <div className="flex items-start gap-4 py-3 border-l-2 border-zinc-800 pl-4 hover:border-teal-500 transition-colors">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-zinc-600">[0]</span>
                                                    <span className="text-white">Starter Bounties</span>
                                                    <span className="text-zinc-600">×</span>
                                                    <span className="text-zinc-400">multiple</span>
                                                </div>
                                                <div className="mt-1 text-zinc-500 text-xs">// Solve specific challenges from sponsors</div>
                                            </div>
                                            <span className="text-orange-400 font-bold">₱2,500</span>
                                        </div>

                                        <div className="flex items-start gap-4 py-3 border-l-2 border-zinc-800 pl-4 hover:border-teal-500 transition-colors">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-zinc-600">[1]</span>
                                                    <span className="text-white">Challenge Bounties</span>
                                                    <span className="text-zinc-600">×</span>
                                                    <span className="text-zinc-400">several</span>
                                                </div>
                                                <div className="mt-1 text-zinc-500 text-xs">// Harder problems, bigger rewards</div>
                                            </div>
                                            <span className="text-orange-400 font-bold">₱5,000</span>
                                        </div>

                                        <div className="flex items-start gap-4 py-3 border-l-2 border-zinc-800 pl-4 hover:border-orange-500 transition-colors">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-zinc-600">[2]</span>
                                                    <span className="text-white">Grand Bounties</span>
                                                    <span className="text-zinc-600">×</span>
                                                    <span className="text-zinc-400">limited</span>
                                                </div>
                                                <div className="mt-1 text-zinc-500 text-xs">// Premium challenges, premium prizes</div>
                                            </div>
                                            <span className="text-orange-400 font-bold">₱7,500</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Success output */}
                                <div className="pt-4 border-t border-zinc-800">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        <span className="text-green-400">Successfully loaded</span>
                                        <span className="text-white">4</span>
                                        <span className="text-zinc-400">reward tiers</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2 text-zinc-500">
                                        <span className="text-yellow-400">ℹ</span>
                                        <span>More bounties to be announced. Stay tuned.</span>
                                    </div>
                                </div>

                                {/* New prompt */}
                                <div className="flex items-center gap-2 text-zinc-400 pt-2">
                                    <span className="text-green-400">$</span>
                                    <span className="text-zinc-600">_</span>
                                    <span className="w-2 h-5 bg-teal-400 animate-pulse" />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

