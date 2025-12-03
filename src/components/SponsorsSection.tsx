'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Define organizers with their specific styling
const organizersData = [
    {
        name: 'Inspire',
        logo: '/assets/inspire-logo.svg',
        type: 'logo-only',
        bgClass: 'bg-blue-900',
    },
    {
        name: 'GoRocky',
        logo: '/assets/gorocky-logo.png',
        type: 'logo-only',
        bgClass: 'bg-white',
    },
    {
        name: 'Sagedesk',
        logo: '/assets/sagedesk.jpeg',
        type: 'logo-with-text',
        bgClass: 'bg-slate-700',
        textClass: 'text-white',
    },
    {
        name: 'Ticket Nation',
        logo: '/assets/ticketnation-logo.png',
        type: 'logo-with-text',
        bgClass: 'bg-white',
        textClass: 'text-zinc-800',
    },
];

// Define sponsors with their specific styling
const sponsorsData = [
    {
        name: 'Kaya Founders',
        logo: '/assets/kaya-founders-logo.png',
        bgClass: 'bg-amber-50',
        type: 'logo-only',
    },
    {
        name: 'PayRex',
        logo: '/assets/payrex-logo.png',
        bgClass: 'bg-white',
        type: 'logo-only',
    },
    {
        name: 'NUMMEALS',
        logo: '/assets/nummeals-logo.png',
        bgClass: 'bg-white',
        type: 'logo-only',
    },
    {
        name: 'Founders Launchpad',
        logo: '/assets/founders-launchpad-logo.png',
        bgClass: 'bg-slate-200',
        type: 'logo-only',
    },
];

// Bounty sponsors - separate from main sponsors
const bountySponsorsData = [
    {
        name: 'Ripe',
        logo: '/assets/ripe-logo.png',
        bgClass: 'bg-zinc-950 border border-amber-500/30',
        textClass: 'text-amber-400',
    },
];

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
                                    
                                    {/* Organizer logos */}
                                    <div className="pl-6 flex flex-wrap items-center gap-4 mb-4">
                                        {organizersData.map((org, index) => (
                                            <div key={org.name} className="group flex items-center">
                                                <div className={`${org.bgClass} rounded-lg p-2 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105`}>
                                                    <Image
                                                        src={org.logo}
                                                        alt={org.name}
                                                        width={org.type === 'logo-with-text' ? 28 : 80}
                                                        height={org.type === 'logo-with-text' ? 28 : 32}
                                                        className={`${org.type === 'logo-with-text' ? 'h-7 w-7' : 'h-8 w-auto'} object-contain`}
                                                    />
                                                    {org.type === 'logo-with-text' && (
                                                        <span className={`text-sm font-semibold ${'textClass' in org ? org.textClass : 'text-zinc-800'}`}>
                                                            {org.name}
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-zinc-600 ml-2">
                                                    {index < organizersData.length - 1 ? ',' : ''}
                                                </span>
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
                                    
                                    {/* Sponsor logos */}
                                    <div className="pl-6 flex flex-wrap items-center gap-4 mb-4">
                                        {sponsorsData.map((sponsor, index) => (
                                            <div key={sponsor.name} className="group flex items-center">
                                                <div className={`${sponsor.bgClass} rounded-lg p-3 transition-transform duration-300 group-hover:scale-105`}>
                                                    <Image
                                                        src={sponsor.logo}
                                                        alt={sponsor.name}
                                                        width={100}
                                                        height={40}
                                                        className="h-8 w-auto object-contain"
                                                    />
                                                </div>
                                                <span className="text-zinc-600 ml-2">
                                                    {index < sponsorsData.length - 1 ? ',' : ''}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="text-zinc-500">],</div>
                                </div>

                                {/* Bounty Sponsors Array */}
                                <div className="pl-4 mb-6">
                                    <div className="text-zinc-500 mb-4">
                                        <span className="text-amber-400">bounty_sponsors</span>: [
                                    </div>
                                    
                                    {/* Bounty sponsor logos */}
                                    <div className="pl-6 flex flex-wrap items-center gap-4 mb-4">
                                        {bountySponsorsData.map((sponsor, index) => (
                                            <div key={sponsor.name} className="group flex items-center">
                                                <div className={`${sponsor.bgClass} rounded-lg p-3 flex items-center gap-2 transition-transform duration-300 group-hover:scale-105`}>
                                                    <Image
                                                        src={sponsor.logo}
                                                        alt={sponsor.name}
                                                        width={28}
                                                        height={28}
                                                        className="h-7 w-7 object-contain"
                                                    />
                                                    <span className={`text-sm font-semibold ${sponsor.textClass}`}>
                                                        {sponsor.name}
                                                    </span>
                                                </div>
                                                <span className="text-zinc-600 ml-2">
                                                    {index < bountySponsorsData.length - 1 ? ',' : ''}
                                                </span>
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
