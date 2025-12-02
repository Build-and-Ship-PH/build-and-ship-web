'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { organizers, sponsors } from '@/config/sponsors';

export const SponsorsSection = () => {
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

    const primaryOrganizers = organizers.filter(o => o.type === 'primary');
    const secondaryOrganizers = organizers.filter(o => o.type === 'secondary');

    return (
        <section id="sponsors" ref={sectionRef} className="py-32 relative overflow-hidden bg-zinc-950 border-t border-zinc-800">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">

                    {/* Terminal Window Header */}
                    <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
                            {/* Terminal Title Bar */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <span className="ml-4 font-mono text-xs text-zinc-500">partners.ts — ~/ship-or-be-shipped</span>
                            </div>
                            
                            {/* Terminal Content */}
                            <div className="p-6 font-mono text-sm">
                                <div className="text-zinc-500 mb-2">
                                    <span className="text-teal-400">$</span> cat partners.ts
                                </div>
                                <div className="text-zinc-600 mb-4">
                                    <span className="text-pink-400">export const</span> <span className="text-cyan-400">partners</span> = {'{'}
                                </div>
                                <div className="pl-4 text-zinc-400">
                                    <span className="text-zinc-500">organizers:</span> <span className="text-orange-400">[&quot;Inspire&quot;, &quot;GoRocky&quot;, &quot;SageDesk&quot;, &quot;TicketNation&quot;]</span>,
                                </div>
                                <div className="pl-4 text-zinc-400">
                                    <span className="text-zinc-500">sponsors:</span> <span className="text-orange-400">[&quot;Kaya Founders&quot;, &quot;PayRex&quot;, &quot;NUMMEALS&quot;, &quot;Founders Launchpad&quot;]</span>,
                                </div>
                                <div className="pl-4 text-zinc-400">
                                    <span className="text-zinc-500">status:</span> <span className="text-green-400">&quot;amazing&quot;</span>
                                </div>
                                <div className="text-zinc-600">{'}'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Section Title */}
                    <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">
                            Our Partners
                        </h2>
                        <p className="text-lg text-zinc-400">
                            Backed by amazing companies who believe in builders.
                        </p>
                    </div>

                    {/* Organizers Section */}
                    <div className={`mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                        <div className="font-mono text-sm text-zinc-500 mb-8 text-center">
                            <span className="text-zinc-600">{'// '}</span>
                            <span className="text-teal-400">Organized by</span>
                        </div>
                        
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                            {/* Primary organizers - Inspire & GoRocky with containers */}
                            {primaryOrganizers.map((org) => (
                                <div
                                    key={org.name}
                                    className="group"
                                >
                                    <div className="bg-zinc-900/80 rounded-2xl p-6 border border-zinc-800 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/10">
                                        {org.logo && (
                                            <Image
                                                src={org.logo}
                                                alt={org.name}
                                                width={120}
                                                height={48}
                                                className="h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Secondary organizers - SageDesk & TicketNation just images */}
                            {secondaryOrganizers.map((org) => (
                                <div
                                    key={org.name}
                                    className="group"
                                >
                                    {org.logo && (
                                        <Image
                                            src={org.logo}
                                            alt={org.name}
                                            width={100}
                                            height={40}
                                            className="h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 hover:scale-110 rounded"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sponsors Section */}
                    <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                        <div className="font-mono text-sm text-zinc-500 mb-8 text-center">
                            <span className="text-zinc-600">{'// '}</span>
                            <span className="text-orange-400">Sponsored by</span>
                        </div>
                        
                        {/* Sponsors - just logos, no containers (vertical logos) */}
                        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
                            {sponsors.map((sponsor) => (
                                <div
                                    key={sponsor.name}
                                    className="group flex flex-col items-center"
                                >
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        width={140}
                                        height={56}
                                        className="h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                    />
                                    {sponsor.description && (
                                        <span className="mt-3 font-mono text-xs text-zinc-600 group-hover:text-orange-400 transition-colors">
                                            {sponsor.description}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className={`mt-20 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                        <div className="inline-block bg-zinc-900/50 border border-zinc-800 rounded-lg px-6 py-3">
                            <p className="font-mono text-sm text-zinc-500">
                                <span className="text-teal-400">$</span> Interested in sponsoring? 
                                <span className="text-orange-400 ml-1 hover:text-orange-300 cursor-pointer transition-colors">./contact --organizers</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
