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

    return (
        <section id="sponsors" ref={sectionRef} className="py-32 relative overflow-hidden bg-zinc-950 border-t border-zinc-800">
            <div className="container mx-auto px-6 text-center">

                {/* Organizers */}
                <div className={`mb-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <div className="font-mono text-sm text-zinc-500 mb-6">
                        <span className="text-zinc-600">{'/* '}</span>
                        <span className="text-teal-400">Organized by</span>
                        <span className="text-zinc-600">{' */'}</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 mt-6">
                        {organizers.map((org, index) => (
                            <div
                                key={org.name}
                                className={`group flex flex-col items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            >
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-teal-500 transition-all duration-300 bg-zinc-800 flex items-center justify-center">
                                    {org.logo ? (
                                        <Image
                                            src={org.logo}
                                            alt={org.name}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className={`text-xl font-bold text-white ${org.color} w-full h-full flex items-center justify-center`}>
                                            {org.initials}
                                        </span>
                                    )}
                                </div>
                                <span className="mt-3 text-sm font-medium text-gray-400 group-hover:text-white transition-colors font-mono">
                                    {org.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sponsors */}
                <div className={`${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
                    <div className="font-mono text-sm text-zinc-500 mb-6">
                        <span className="text-zinc-600">{'/* '}</span>
                        <span className="text-teal-400">Sponsored by</span>
                        <span className="text-zinc-600">{' */'}</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mt-6 max-w-4xl mx-auto">
                        {sponsors.map((sponsor, index) => (
                            <div
                                key={sponsor.name}
                                className={`group relative bg-zinc-900/80 border border-zinc-800 rounded-lg p-6 min-w-[200px] hover:border-teal-500/50 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                            >
                                <div className="flex flex-col items-center">
                                    {sponsor.logo ? (
                                        <div className="h-16 flex items-center justify-center mb-4">
                                            <Image
                                                src={sponsor.logo}
                                                alt={sponsor.name}
                                                width={120}
                                                height={60}
                                                className="object-contain max-h-16 opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    ) : (
                                        <span className="font-semibold text-lg text-white mb-2">{sponsor.name}</span>
                                    )}
                                    {sponsor.description && (
                                        <span className="text-xs text-teal-400 font-mono uppercase tracking-wide">
                                            {sponsor.description}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
