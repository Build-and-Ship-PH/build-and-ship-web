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

                    {/* Terminal Window */}
                    <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
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
                            <div className="p-6 md:p-8 font-mono text-sm">
                                {/* Command */}
                                <div className="text-zinc-500 mb-6">
                                    <span className="text-teal-400">$</span> cat partners.ts
                                </div>

                                {/* Export statement */}
                                <div className="text-zinc-600 mb-4">
                                    <span className="text-pink-400">export const</span> <span className="text-cyan-400">partners</span> = {'{'}
                                </div>

                                {/* Organizers Array */}
                                <div className="pl-4 mb-6">
                                    <div className="text-zinc-500 mb-4">
                                        <span className="text-teal-400">organizers</span>: [
                                    </div>
                                    
                                    {/* Logos as array items */}
                                    <div className="pl-6 flex flex-wrap items-center gap-4 mb-4">
                                        {/* Primary organizers with subtle bg */}
                                        {primaryOrganizers.map((org, index) => (
                                            <div key={org.name} className="group flex items-center">
                                                <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
                                                    {org.logo && (
                                                        <Image
                                                            src={org.logo}
                                                            alt={org.name}
                                                            width={80}
                                                            height={32}
                                                            className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100"
                                                        />
                                                    )}
                                                </div>
                                                <span className="text-zinc-600 ml-2">{index < primaryOrganizers.length + secondaryOrganizers.length - 1 ? ',' : ''}</span>
                                            </div>
                                        ))}
                                        
                                        {/* Secondary organizers - just images */}
                                        {secondaryOrganizers.map((org, index) => (
                                            <div key={org.name} className="group flex items-center">
                                                {org.logo && (
                                                    <Image
                                                        src={org.logo}
                                                        alt={org.name}
                                                        width={70}
                                                        height={28}
                                                        className="h-7 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 hover:scale-110 rounded"
                                                    />
                                                )}
                                                <span className="text-zinc-600 ml-2">{index < secondaryOrganizers.length - 1 ? ',' : ''}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="text-zinc-500">],</div>
                                </div>

                                {/* Sponsors Array */}
                                <div className="pl-4 mb-6">
                                    <div className="text-zinc-500 mb-4">
                                        <span className="text-orange-400">sponsors</span>: [
                                    </div>
                                    
                                    {/* Sponsor logos as array items */}
                                    <div className="pl-6 flex flex-wrap items-center gap-6 mb-4">
                                        {sponsors.map((sponsor, index) => (
                                            <div key={sponsor.name} className="group flex items-center">
                                                <Image
                                                    src={sponsor.logo}
                                                    alt={sponsor.name}
                                                    width={100}
                                                    height={40}
                                                    className="h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                                />
                                                <span className="text-zinc-600 ml-2">{index < sponsors.length - 1 ? ',' : ''}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="text-zinc-500">],</div>
                                </div>

                                {/* Status */}
                                <div className="pl-4 text-zinc-400 mb-2">
                                    <span className="text-zinc-500">status:</span> <span className="text-green-400">&quot;shipping_together&quot;</span>,
                                </div>

                                {/* Closing brace */}
                                <div className="text-zinc-600">{'}'}</div>

                                {/* Blinking cursor */}
                                <div className="mt-4 text-zinc-500">
                                    <span className="text-teal-400">$</span> <span className="animate-pulse">▊</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                        <p className="font-mono text-sm text-zinc-500">
                            <span className="text-zinc-600">{'// '}</span>
                            Want to join the array? 
                            <span className="text-orange-400 ml-1 hover:text-orange-300 cursor-pointer transition-colors">partners.push(you)</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
