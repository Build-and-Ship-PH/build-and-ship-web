'use client';

import { useEffect, useRef, useState } from 'react';
import { HeartPulse, Truck, Cpu, Bitcoin } from 'lucide-react';

export const AboutSection = () => {
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

    const tracks = [
        {
            icon: HeartPulse,
            file: "healthcare.ts",
            comment: "// Track 1: Healthcare Innovation",
            title: "Healthcare",
            description: "Transform patient care, medical systems, and health tech with cutting-edge solutions."
        },
        {
            icon: Truck,
            file: "logistics.ts",
            comment: "// Track 2: Logistics Optimization",
            title: "Logistics",
            description: "Revolutionize supply chains, delivery networks, and operational efficiency."
        },
        {
            icon: Cpu,
            file: "hardware.ts",
            comment: "// Track 3: Hardware Hacking",
            title: "Hardware",
            description: "Build physical products, IoT devices, and embedded systems that interact with the real world."
        },
        {
            icon: Bitcoin,
            file: "crypto.ts",
            comment: "// Track 4: Crypto & Web3 (for the brave)",
            title: "Crypto",
            description: "Explore blockchain, DeFi, and decentralized apps. Only for the brave of heart.",
            badge: "🔥 High Risk, High Reward"
        }
    ];

    return (
        <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden bg-zinc-950 border-t border-zinc-800">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        {/* Terminal style header */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-t-lg font-mono text-sm mb-0">
                            <span className="text-green-400">➜</span>
                            <span className="text-teal-400">~/hackathon</span>
                            <span className="text-zinc-500">cat</span>
                            <span className="text-white">README.md</span>
                        </div>
                        <div className="bg-zinc-900/50 border border-zinc-800 border-t-0 rounded-b-lg p-6 mb-8">
                            <div className="font-mono text-sm text-zinc-500 mb-4">
                                <span className="text-zinc-600"># </span>
                                <span className="text-white font-bold">Our Mission</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight font-[family-name:var(--font-poppins)]">
                                Building the Future, <span className="text-teal-400">Together</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-3xl">
                                "Ship or be Shipped" started as a hackathon, but it's evolving into something bigger—a
                                community of builders, designers, and innovators solving real-world problems.
                            </p>
                            <p className="text-base text-gray-500 leading-relaxed max-w-3xl mb-6">
                                We're partnering with leading startups to connect talented individuals with meaningful projects.
                                Choose your track and start building.
                            </p>
                            
                            {/* No holds barred note */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg font-mono text-sm">
                                <span className="text-orange-400">⚡</span>
                                <span className="text-orange-400">No holds barred</span>
                                <span className="text-zinc-500">—</span>
                                <span className="text-zinc-400">AI tools, copilots, and assistants are</span>
                                <code className="text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">allowed</code>
                            </div>
                        </div>
                    </div>

                    {/* Tracks Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {tracks.map((track, index) => {
                            const IconComponent = track.icon;
                            return (
                                <div 
                                    key={track.file}
                                    className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                                >
                                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg overflow-hidden hover:border-teal-500/50 transition-all duration-300 h-full">
                                        <div className="flex items-center justify-between px-4 py-2 bg-zinc-950 border-b border-zinc-800">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                <span className="text-xs font-mono text-zinc-500 ml-2">{track.file}</span>
                                            </div>
                                            {track.badge && (
                                                <span className="text-xs font-mono text-orange-400">{track.badge}</span>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <div className="font-mono text-sm text-zinc-600 mb-4">
                                                {track.comment}
                                            </div>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                                                    <IconComponent className="w-5 h-5 text-teal-400" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors font-[family-name:var(--font-poppins)]">
                                                    {track.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-500 leading-relaxed text-sm">
                                                {track.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
