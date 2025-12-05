'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Sparkles, Terminal, Hash, Volume2, Lock } from 'lucide-react';

export const HackerRoomsSection = () => {
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
            id="hacker-rooms" 
            ref={sectionRef} 
            className="py-24 relative overflow-hidden bg-zinc-950 border-t border-zinc-800"
        >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Header */}
                    <div className={`mb-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
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
                        
                        {/* How it works */}
                        <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden h-full">
                                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <span className="text-xs font-mono text-zinc-500 ml-2">hacker_rooms.md</span>
                                </div>
                                <div className="p-6 font-mono text-sm">
                                    <div className="text-zinc-600 mb-6"># How Hacker Rooms Work</div>
                                    
                                    <div className="space-y-5">
                                        <div className="flex items-start gap-4 group">
                                            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/20 transition-colors border border-teal-500/20">
                                                <Users className="w-5 h-5 text-teal-400" />
                                            </div>
                                            <div>
                                                <div className="text-white mb-1 text-base">All participants are <span className="text-teal-400 font-semibold">hackers</span></div>
                                                <div className="text-zinc-500 text-sm">Every registered team member gets the hacker role automatically</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors border border-orange-500/20">
                                                <Terminal className="w-5 h-5 text-orange-400" />
                                            </div>
                                            <div>
                                                <div className="text-white mb-1 text-base">Select <span className="text-orange-400 font-semibold">1 Room Master</span> per team</div>
                                                <div className="text-zinc-500 text-sm">The Room Master creates and manages your private hacker room</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                                                <Hash className="w-5 h-5 text-purple-400" />
                                            </div>
                                            <div>
                                                <div className="text-white mb-1 text-base">Private <span className="text-purple-400 font-semibold">text + voice</span> channels</div>
                                                <div className="text-zinc-500 text-sm">Coordinate, share screens, and hack together in real-time</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secret Codes Card */}
                        <div className={`${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                            <div className="relative group h-full">
                                {/* Glow effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-orange-500/20 rounded-xl blur opacity-50 group-hover:opacity-70 transition-opacity" />
                                
                                <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/70 border border-orange-500/30 rounded-xl overflow-hidden h-full">
                                    <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950/80 border-b border-orange-500/20">
                                        <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                                        <span className="text-xs font-mono text-orange-400">SECRET_CODES.env</span>
                                        <span className="ml-auto text-xs font-mono text-zinc-600">// 🤫 shhh...</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="font-mono text-sm mb-4">
                                            <span className="text-zinc-600"># </span>
                                            <span className="text-orange-400">Easter eggs await...</span>
                                        </div>
                                        
                                        <p className="text-zinc-400 text-sm mb-6">
                                            We've hidden some surprises in the Discord bot. Room Masters can try these cheat codes in their hacker rooms:
                                        </p>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 p-4 bg-zinc-950/50 rounded-lg border border-zinc-800 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02] group/code">
                                                <div className="font-mono">
                                                    <span className="text-green-400">$</span>
                                                    <code className="text-white ml-2 bg-green-500/10 px-3 py-1.5 rounded text-base">!hesoyam</code>
                                                </div>
                                                <span className="text-zinc-500 text-sm ml-auto">// 💰 ???</span>
                                            </div>

                                            <div className="flex items-center gap-3 p-4 bg-zinc-950/50 rounded-lg border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:scale-[1.02] group/code">
                                                <div className="font-mono">
                                                    <span className="text-green-400">$</span>
                                                    <code className="text-white ml-2 bg-pink-500/10 px-3 py-1.5 rounded text-base">!rosebud</code>
                                                </div>
                                                <span className="text-zinc-500 text-sm ml-auto">// 🌹 ???</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-600 border-t border-zinc-800 pt-4">
                                            <Volume2 className="w-4 h-4" />
                                            <span>More codes may be revealed during the hackathon...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

